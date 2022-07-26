import data from "src/mock/main";
import { Application } from "src/types/models";

const useApplication = (id: string) => {
  const applications = data.reduce((acc, elem) => {
    return [...acc, ...elem.applications];
  }, [] as Application[]);

  const application = applications.find((application) => application.id === id);
  return application;
};
export default useApplication;
