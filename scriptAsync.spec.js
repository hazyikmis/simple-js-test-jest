//const fetch = require("node-fetch");
const swapi = require("./scriptAsync");

//testing async functions: METHOD 1 (using "done")
it("calls swapi to get people - async method 1", (done) => {
  expect.assertions(1);
  //swapi.getPeople(fetch).then(data => {  //if we want to inject dependency
  swapi.getPeople().then(data => {
    expect(data.count).toEqual(87);
    done(); //do not pass this test until it is done!!!
  })
})

//testing async functions: METHOD 2 (by returning promise)
it("calls swapi to get people - async method 2", () => {
  expect.assertions(1);
  //return swapi.getPeople(fetch).then(data => {  //if we want to inject dependency
  return swapi.getPeople().then(data => {
    expect(data.count).toEqual(87);
  })
})

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  //return swapi.getPeoplePromise(fetch).then(data => { //if we want to inject dependency
  return swapi.getPeoplePromise().then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  })
})