

const jobsJson = Deno.readTextFileSync("../mocks/jobs.json");
const jobs = JSON.parse(jobsJson).data;

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
