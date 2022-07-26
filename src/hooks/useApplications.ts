import data from "src/mock/main";
import { Application } from "src/types/models";

const useApplications = () => {
  const applications = data.reduce((acc, elem) => {
    return [...acc, ...elem.applications];
  }, [] as Application[]);

  return applications;
};
export default useApplications;
