import {
  useGetActiveApplicationsForStakersQuery,
  useGetApplicationForStakerQuery,
} from "src/generated/graphql";

export const useApplications = () => {
  const { data, loading } = useGetActiveApplicationsForStakersQuery();
  // const applications = data.reduce((acc, elem) => {
  //   return [...acc, ...elem.applications];
  // }, [] as Application[]);

  return data?.getActiveApplicationsForStakers || [];
};

export const useApplication = (id: string) => {
  const { data, loading } = useGetApplicationForStakerQuery({
    variables: {
      applicationId: id,
    },
  });
  return data?.getApplicationForStakers || undefined;
};
