//you can execute the functions by executing the command below, 
//but its meaningful to un-comment console.logs before

//node .\scriptAsync.js

const fetch = require("node-fetch");

//dependency injection
/*
const getPeople = fetch => {
  return fetch("https://swapi.py4e.com/api/people")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return {
      count: data.count,
      results: data.results
    }
  })
}

getPeople(fetch);

*/

/*
const getPeople = () =>  {
  return fetch("https://swapi.py4e.com/api/people")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return {
      count: data.count,
      results: data.results
    }
  })
}

getPeople();
*/

const getPeoplePromise = () => {
  return fetch("https://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeoplePromise2 = (fetch) => {
  return fetch("https://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

//const getPeople = async (fetch) => {  //dependency infection
const getPeople = async () => {
  const getRequest = await fetch("https://swapi.py4e.com/api/people");
  const data = await getRequest.json();
  //console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

//getPeople(fetch);  //dependency injection
getPeople();

module.exports = {
  getPeoplePromise,
  getPeoplePromise2,
  getPeople
}

/*
//named exports
module.exports = {
  fetchPeoplePromise: getPeoplePromise,
  fetchPeople: getPeople
}
*/