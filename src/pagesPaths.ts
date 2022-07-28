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
  myStakedApplications: {
    route: "/my-stakes",
    resolve: () => "/my-stakes",
  },
  myStakedApplication: {
    route: "/my-stakes/:applicationId",
    resolve: (id: string) => `/my-stakes/${id}`,
  },
  myStakedApplicationJob: {
    route: "/my-stakes/:applicationId/job",
    resolve: (id: string) => `/my-stakes/${id}/job`,
  },
  myStakedApplicationCandidate: {
    route: "/my-stakes/:applicationId/candidate",
    resolve: (id: string) => `/my-stakes/${id}/candidate`,
  },
};
