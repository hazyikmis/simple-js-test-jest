This example shows how to make simple test using JEST lib.

> npm run test

To be tested files:
- script.js
- scriptAsync.js

Test files:
- script.test.js
- scriptAsync.spec.js

Please notice that, file names includes ".test." or ".spec." automatically being tested.


>TDD: Test Driven Development (First write tests, then write codes and then refactor codes. NOT universally accepted but very common)
->Unit Tests (Testing individual functions or classes, cheapest&easiest to implement)
->Integration Tests (Testing how different pieces of your code work together)
->Automation Tests (UI Tests, real life scenarios, human & robots do these tests)

>BDD: Behavior Driven Development
->Integration Tests
->Acceptance Tests
->Stress Tests

*** Testing Libraries: (all libs listed below are BDD type)
For SCAFFOLDING: Jasmine / Jest / Mocha
For ASSERTIONS: Jasmine / Jest / Chai
For TEST RUNNERS: Jasmine / Jest / Mocha / Karma
For SPIES & STUBS & MOCKS: Jasmine / Jest / Sinon.js
For CODE COVERAGE: istanbul / Jest
Some Other Testing Libraries: AVA (for parallelism), Tape
For React Components: Enzyme (snapshotting react components, developed by AirBnb - unique to REACT)

NOTE: Karma allows us to run tests in the browser / (Puppeter [headless browser] / jsdom)
NOTE: istanbul: test with "--coverage" flag and receive report about what percentage of your code in your files tested (greens, reds etc...)

Jasmine is very popular. But its popularity overtaken by 2 things: 
1.Jest (supports all stages of testing - everything in one place, developed by Facebook, used by react apps by default) 
2.Mocha+Chai+Sinon (probably the most common setup now!)

Deterministic: same input -> same outputs (no side effects)
(Most react components have inputs (props) and an output (returned view) -> deterministic)
In unit tests - DO NOT TEST CONTRACTS - connection between things

Integration tests (many definitions, everybody defines according to their beliefs) are all about cross communication between different units of code comparing to unit tests. You could probably use something like spies from a mocking library to ensure expected side effects instead of just asserting an output or you might use stubs to mock and modify parts of a process that are not inside of the specific test such as mocking a database call. (Mock a database call and return a fake user etc.). Expensive, time consuming if we compare with unit tests. Possibilities and testing scenarios are endless. So we should be in a balance with unit tests & integration tests.

Automation test: UI tests. Always run in browser or browser-like environments. End-to-end tests. Simulate user behavior. Clicking, typing, scrolling, etc. Hardest to set-up. Requires too much resources, time, money, budget, person,.. (testing on different environments, devices, browsers, versions, etc.) It's generally seems to be carried on by big big companies. Some apps: NIGHTMARE, TestCafe, cypress, webdriver i/o... Many companies hire people to do automation tests rather than writing test codes.

node-fetch npm lib: if you want to test a fetch api call, you need to use a npm lib that simulates that this fetch being done from browser! (A light-weight module that brings window.fetch to Node.js) https://www.npmjs.com/package/node-fetch

JEST TEST CHEAT SHEET: https://github.com/sapegin/jest-cheat-sheet
