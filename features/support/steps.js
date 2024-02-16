const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => {
    spec = pactum.spec();
});

Given(/^I make a (.*) request to (.*)$/, (method, endpoint) =>
    spec[method.toLowerCase()](endpoint));

When('I receive a response', async function () {
    await spec.toss();
});


Then(/^I expect response should have a status (.*)$/, (statusCode) =>
    spec.response().should.have.status(Number(statusCode))
);

Then(/^I expect response should have a json at data$/, function (json) {
    spec.response().should.have.json(JSON.parse(json));
});

Then(/^I expect response should have a json like$/, (json) =>
    spec.response().should.have.jsonLike(JSON.parse(json))
);

After(() => {
    spec.end();
});