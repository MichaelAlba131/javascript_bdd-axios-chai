const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

Given('the base URL is {string}', function (url) {
    this.baseUrl = url;
});

Given('I set the request headers:', function (dataTable) {
    this.headers = this.headers || {};
    dataTable.rows().forEach(([key, value]) => {
        this.headers[key] = value;
    });
});

Given('I set the request query parameters:', function (dataTable) {
    this.queryParams = this.queryParams || {};
    dataTable.rows().forEach(([key, value]) => {
        this.queryParams[key] = value;
    });
});

Given('I set the request body with fields:', function (dataTable) {
    this.body = {};
    dataTable.rows().forEach(([key, value]) => {
        this.body[key] = value;
    });
});

When('I send a {string} request to {string}', { timeout: 20000 }, async function (method, endpoint) {
    const config = {
        method: method.toLowerCase(),
        url: `${this.baseUrl}${endpoint}`,
        headers: this.headers,
        params: this.queryParams,
        data: this.body,
    };

    console.log('\nREQUEST:');
    console.log(JSON.stringify(config, null, 2)); // Pretty print da requisição

    try {
        this.response = await axios(config);

        console.log('\nRESPONSE:');
        console.log(JSON.stringify({
            status: this.response.status,
            statusText: this.response.statusText,
            data: this.response.data
        }, null, 2));

    } catch (err) {
        this.response = err.response || {};
        console.error('\nAPI call failed:', err.message);

        if (this.response) {
            console.log('\nRESPONSE (erro):');
            console.log(JSON.stringify({
                status: this.response.status,
                statusText: this.response.statusText,
                data: this.response.data
            }, null, 2));
        }
    }
});

Then('the response status code should be {int}', function (statusCode) {
    expect(this.response.status).to.equal(statusCode);
});

Then(
    'the item with {string} equal to {string} should have the field {string} with value {string}',
    function (key, value, field, expected) {
        const found = this.response.data.find((item) => item[key].toString() === value);
        expect(found).to.not.be.undefined;
        expect(found[field]?.toString()).to.equal(expected);
    }
);