import data from "src/mock/main";

type Application = typeof data[number]["applications"][number];

const useApplications = () => {
  const applications = data.reduce((acc, elem) => {
    return [...acc, ...elem.applications];
  }, [] as Application[]);

  return applications;
};
export default useApplications;
