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

//mocking the fetch
it("getPeople returns count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [0, 1, 2, 3, 4, 5]
    })
  }))
  //instead of calling expensive fetch call, we can mock it like above and use in our tests
  //assuming that API works

  expect.assertions(4);
  //dependency injection
  return swapi.getPeoplePromise2(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people");
    //expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/planets");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  })
})