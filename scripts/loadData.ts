class StringIdGenerator {
  constructor(chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    this._chars = chars;
    this._nextId = [0];
  }

  next() {
    const r = [];
    for (const char of this._nextId) {
      r.unshift(this._chars[char]);
    }
    this._increment();
    return r.join("");
  }

  _increment() {
    for (let i = 0; i < this._nextId.length; i++) {
      const val = ++this._nextId[i];
      if (val >= this._chars.length) {
        this._nextId[i] = 0;
      } else {
        return;
      }
    }
    this._nextId.push(0);
  }

  *[Symbol.iterator]() {
    while (true) {
      yield this.next();
    }
  }
}

const jobsJson = Deno.readTextFileSync("../mocks/jobs.json");
const jobs = JSON.parse(jobsJson).data;

// const ids = new StringIdGenerator();

// const jobsQueries = jobs.map((job) => {
//   return {
//     [ids.next()]: `jobForCompany(jobAdId: "0d4b5e2c-4712-4866-a4f8-c3dcc7338dc2") {
//             jobAd {
//               id
//               company {
//                 id
//                 name
//                 photoUrl
//                 description
//               }
//               title
//               description
//               responsibilities
//               requirements
//               jobSkills
//               preferred
//               benefits
//               format
//               date
//               location
//               isRemote
//               currency
//               minSalary
//               maxSalary
//               status
//               field
//               experience
//             }
//             applications {
//               id
//               date
//               status
//               notes {
//                 id
//                 date
//               }
//               hire {
//                 id
//               }
//             }
//           }`,
//   };
// });

// console.log(JSON.stringify(jobsQueries, null, 2));

// const query = jobsQueries.reduce((acc, curr) => {
//   return { ...acc, ...curr };
// }, {});

// Deno.writeTextFileSync("../mocks/jobs.graphql", JSON.stringify(query, null, 2));

// const res = await fetch("https://persico-test.fly.dev/graphql", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJAYi5jb20iLCJleHAiOjE3NDUxMTkwMjUsInJvbGVzIjpbImludGVybmFsX3JlY3J1aXRlciIsImNvbXBhbnlfdXNlciIsInN0YWtlciJdLCJ1c2VyX2lkIjoiNDFkNTgyMDYtMmRlMy00OTY0LTg2ZmItNzI0NDY3ZDY3MTljIn0.y14jYZI4uJ595o_oAAU4avjMT3VRfo5x7onDiNbWdPA",
//   },
//   body: JSON.stringify(query),
// });

// const jobsFull = await res.json();

// console.log(JSON.stringify(jobsFull, null, 2));

const jobsFull = jobs.map((job) =>
  fetch("https://persico-test.fly.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: "Bearer ",
    },
    body: JSON.stringify({
      query:
        "query Job($id: ID!) {\n  jobForCompany(jobAdId: $id) {\n    jobAd {\n      id\n      company {\n        id\n        name\n        photoUrl\n        description\n      }\n      title\n      description\n      responsibilities\n      requirements\n      jobSkills\n      preferred\n      benefits\n      format\n      date\n      location\n      isRemote\n      currency\n      minSalary\n      maxSalary\n      status\n      field\n      experience\n    }\n    applications {\n      id\n      date\n      status\n      notes {\n        id\n        date\n      }\n      hire {\n        id\n        starting_date\n        yearly_salary\n      }\n      rejection {\n        note {\n          id\n          date\n          text\n        }\n      }\n      fosterScore\n      candidate {\n        id\n        name\n        role\n        photoUrl\n        linkedin\n        location\n        location\n        field\n        jobTitle\n        companyName\n        walletInfo {\n          id\n          blockchain\n          walletAddress\n        }\n        experience\n        candidateSkills\n        techSkills\n        softSkills\n        about\n        web\n        github\n        available\n      }\n      jobAd {\n        id\n        company {\n          id\n          name\n          photoUrl\n          description\n        }\n        title\n        description\n        responsibilities\n        requirements\n        jobSkills\n        preferred\n        benefits\n        format\n        date\n        location\n        isRemote\n        currency\n        minSalary\n        maxSalary\n        status\n        field\n        experience\n      }\n    }\n  }\n}",
      variables: { id: job.id },
      operationName: "Job",
    }),
  }).then((res) => res.json())
);

const res = await Promise.all(jobsFull);

console.log({ res });

Deno.writeTextFileSync("../mocks/jobsFull.json", JSON.stringify(res, null, 2));
