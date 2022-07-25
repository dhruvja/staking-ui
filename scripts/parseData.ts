const dataJson = Deno.readTextFileSync("../mocks/jobsFull.json");
const data = JSON.parse(dataJson);

const parsed = data.map((elem) => {
  return elem.data.jobForCompany;
});

// console.log(parsed);
Deno.writeTextFileSync(
  "../mocks/jobsFullParsed.json",
  JSON.stringify(parsed, null, 2)
);
