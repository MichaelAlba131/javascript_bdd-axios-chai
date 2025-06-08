const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.baseUrl = '';
        this.headers = {};
        this.queryParams = {};
        this.body = null;
        this.response = null;
    }
}

setWorldConstructor(CustomWorld);