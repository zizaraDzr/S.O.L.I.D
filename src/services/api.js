import { BaseApi } from './BaseApi';
// буква L
import { AxiosApi } from './AxiosApi';


export class Api {
    constructor() {
        this.apiProvaider = new AxiosApi()
    }

    async fetch (url) {
        return await this.apiProvaider.fetch(url)
    }
}