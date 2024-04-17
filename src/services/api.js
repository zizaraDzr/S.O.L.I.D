import { FetchApi } from './FetchApi';
import { AxiosApi } from './AxiosApi';


export class Api {
    constructor() 
    {
        // буква L
        // this.apiProvaider = new AxiosApi()
        this.apiProvaider = new FetchApi()
    }

    async fetch (url) {
        return await this.apiProvaider.fetch(url)
    }
}