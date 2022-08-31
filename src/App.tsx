import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import AppRoutes from "src/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "@solana/wallet-adapter-react-ui/styles.css";
import AuthProvider from "src/components/Auth";
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createUploadLink } from "apollo-upload-client";
import { createClient } from "graphql-ws";
import { ErrorMsg } from "src/generated/graphql";
import { TOKEN_KEY } from "src/app-constants";
import generatedIntrospection from "src/fragmentTypes.json";

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_GRAPHQL_URI_WS || "ws://localhost:8080/graphql",
    connectionParams: {
      authToken: localStorage.getItem(TOKEN_KEY),
    },
  })
);

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_GRAPHQL_URI || "http://localhost:8080/graphql",
});

const authLink = setContext((_: any, { headers }) => {
  const token = localStorage.getItem(TOKEN_KEY);
  console.log(token)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
    graphQLErrors.forEach(({ message }) => {
      // TODO: handle
      if (message === ErrorMsg.Unauthorized) {
        console.log("unauthenticated");
      }
    });
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  // @ts-ignore
  uploadLink
);

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(splitLink)]),
  cache: new InMemoryCache({
    typePolicies: {
      Application: {
        fields: {
          status: {
            merge: true,
          },
        },
      },
      Query: {
        fields: {
          conversations: {
            merge: (existing, incoming) => {
              return incoming;
            },
          },
        },
      },
    },
    possibleTypes: generatedIntrospection.possibleTypes,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

function App() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <AuthProvider>
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    window.location.assign("/");
                  }}
                >
                  <AppRoutes />
                </ErrorBoundary>
              </AuthProvider>
            </BrowserRouter>
          </ApolloProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Go Home</button>
    </div>
  );
}
