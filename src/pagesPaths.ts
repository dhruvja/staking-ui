export const paths = {
  home: "/",
  connect: "/connect",
  applications: "/applications",
  application: {
    route: "/applications/:id",
    resolve: (id: string) => `/applications/${id}`,
  },
};
