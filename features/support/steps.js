const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => {
    spec = pactum.spec();
});


Given(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
    spec[method.toLowerCase()](endpoint);
});

When('I receive a response', async function () {
    await spec.toss();
});

Then(/^I expect response should have a json like$/, function (json) {
    spec.response().should.have.jsonLike(JSON.parse(json));
});

After(() => {
    spec.end();
});