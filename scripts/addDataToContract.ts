import data from "../mocks/jobsFullParsed.json" assert { type: "json" };

const maxAmountPerApplication = 1_000 * 10 ** 6;

const res = await fetch("https://api.github.com/");
console.log(res);

// data.forEach(async (elem) => {
//   const jobId = elem.jobAd.id;

//   const res = await fetch("http://localhost:5001/createnewjob", {
//     method: "POST",
//     body: JSON.stringify({
//       jobId,
//       maxAmountPerApplication,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const json = await res.json();

//   console.log(json);
// });

// data.forEach(async (elem) => {
//   elem.applications.forEach(async (application) => {
//     const jobAdId = elem.jobAd.id;
//     const applicationId = application.id;

//     const res = await fetch("http://localhost:5001/createnewapplication", {
//       method: "POST",
//       body: JSON.stringify({
//         jobAdId,
//         applicationId,
//         maxAmountPerApplication,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const json = await res.json();

//     console.log(json);
//   });
// });
