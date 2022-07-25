import data from "src/mock/main";

type Application = typeof data[number]["applications"][number];

const useApplication = (id: string) => {
  const applications = data.reduce((acc, elem) => {
    return [...acc, ...elem.applications];
  }, [] as Application[]);

  const application = applications.find((application) => application.id === id);
  return application;
};
export default useApplication;
