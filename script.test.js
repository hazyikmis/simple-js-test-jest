const googleSearch = require("./script");

dbMock = [
  "dog.com",
  "cat.com",
  "cheesepuff.com",
  "disney.com",
  "dogpictures.com",
  "usa.com",
  "catsanddogs.com",
  "paris.org",
  "cutedogs.com",
  "dogs.com",
];

it("is a silly test", () => {
  expect("hello").toBe("hello");
});

describe("googleSearch", () => {
  it("is a google search test", () => {
    expect(googleSearch("xxx", dbMock)).toEqual([]);
    expect(googleSearch("cat", dbMock)).toEqual(["cat.com", "catsanddogs.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
    expect(googleSearch("", dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch("dog", dbMock)).toEqual([
      "dog.com",
      "dogpictures.com",
      "catsanddogs.com",
    ]);
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
