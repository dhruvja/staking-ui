import {
  useGetActiveApplicationsForStakersQuery,
  useGetApplicationForStakerQuery,
  useGetStakedApplicationsQuery,
  useGetStakedDataQuery,
} from "src/generated/graphql";
import { JobApplicationForStaker } from "src/types/models";

export const useApplications = () => {
  const { data, loading } = useGetActiveApplicationsForStakersQuery();
  // const applications = data.reduce((acc, elem) => {
  //   return [...acc, ...elem.applications];
  // }, [] as Application[]);

  return data?.getActiveApplicationsForStakers || [];

  // return [] as JobApplicationForStaker[];
};

export const useApplication = (id: string) => {
  const { data, loading } = useGetApplicationForStakerQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      applicationId: id,
    },
  });
  return data?.getApplicationForStakers || undefined;

  // return undefined as JobApplicationForStaker | undefined;
};

export const useStakedApplications = () => {
  const { data } = useGetStakedApplicationsQuery();
  return data?.stakedApplications || [];

  // return [] as JobApplicationForStaker[];
};

export const useStakedData = (applicationId: string) => {
  const { data } = useGetStakedDataQuery({
    variables: {
      id: applicationId,
    },
  });

  return data?.getStakedData || undefined;
};
