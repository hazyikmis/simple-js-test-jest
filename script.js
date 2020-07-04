const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
];

const googleSearch = (searchInput, db) => {
  if (searchInput === "") return [];
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 0 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch('cat'));

module.exports = googleSearch;