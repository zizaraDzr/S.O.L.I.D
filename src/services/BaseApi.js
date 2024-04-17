export class BaseApi {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    async fetch(url) {
        throw new Error('No specific implementation method');
    }
}