const data = [
  {
    jobId: "16d3aca3-f068-4c98-8007-968c8776903f",
    applicationId: "b38bd964-d239-4bdb-87bb-46b1afd804e4",
  },
  {
    jobId: "b18afd8e-ac63-480c-8edf-d766b04651f3",
    applicationId: "dd68df4e-390e-4c9b-85bd-3195aefa886f",
  },
  {
    jobId: "81b854f4-de50-4b0a-b8ab-45e9523c54f4",
    applicationId: "444bf0df-a4b5-4de7-be20-716776b1fa0e",
  },
  {
    jobId: "6acfcd0f-f01a-4822-97fc-f47fd7231df7",
    applicationId: "316e2048-c9aa-477a-9de9-379ae6a26308",
  },
];

const maxAmountPerApplication = 1_000 * 10 ** 6;

// const setOfIds = new Set(data.map((e) => e.jobId));

// setOfIds.forEach(async (elem) => {
//   //   const jobId = elem.jobAd.id;

//   const res = await fetch("http://localhost:5001/createnewjob", {
//     method: "POST",
//     body: JSON.stringify({
//       jobId: elem,
//       maxAmountPerApplication,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const json = await res.json();

//   console.log(json);
// });

data.forEach(async (elem) => {
  const jobAdId = elem.jobId;
  const applicationId = elem.applicationId;

  const res = await fetch("http://localhost:5001/createnewapplication", {
    method: "POST",
    body: JSON.stringify({
      jobAdId,
      applicationId,
      maxAmountPerApplication,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  console.log(json);
});
