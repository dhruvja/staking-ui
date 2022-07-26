export const paths = {
  home: "/",
  connect: "/connect",
  applications: "/applications",
  application: {
    route: "/applications/:applicationId",
    resolve: (id: string) => `/applications/${id}`,
  },
};
