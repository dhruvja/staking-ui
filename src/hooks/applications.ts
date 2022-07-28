import data from "src/mock/main";
import { Application } from "src/types/models";

export const useApplications = () => {
  const applications = data.reduce((acc, elem) => {
    return [...acc, ...elem.applications];
  }, [] as Application[]);

  return applications;
};

export const useApplication = (id: string) => {
  const applications = data.reduce((acc, elem) => {
    return [...acc, ...elem.applications];
  }, [] as Application[]);

  const application = applications.find((application) => application.id === id);
  return application;
};
