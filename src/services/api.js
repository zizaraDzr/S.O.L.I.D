import { BaseApi } from './BaseApi';
import { AxiosApi } from './AxiosApi';


export class Api {
    constructor() 
    {
        // буква L
        this.apiProvaider = new AxiosApi()
        // this.apiProvaider = new BaseApi()
    }

    async fetch (url) {
        return await this.apiProvaider.fetch(url)
    }
}