export const paths = {
  home: {
    route: "/",
    resolve: () => "/",
  },
  connect: {
    route: "/connect",
    resolve: () => "/connect",
  },
  applications: {
    route: "/applications",
    resolve: () => "/applications",
  },
  application: {
    route: "/applications/:applicationId",
    resolve: (id: string) => `/applications/${id}`,
  },
  applicationJob: {
    route: "/applications/:applicationId/job",
    resolve: (id: string) => `/applications/${id}/job`,
  },
  applicationCandidate: {
    route: "/applications/:applicationId/candidate",
    resolve: (id: string) => `/applications/${id}/candidate`,
  },
  applicationStake: {
    route: "/applications/:applicationId/stake",
    resolve: (id: string) => `/applications/${id}/stake`,
  },
};
