const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
    request.setBaseUrl('https://swapi.dev/');
    settings.setReporterAutoRun(false);
})
