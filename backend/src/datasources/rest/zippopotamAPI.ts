import { RESTDataSource } from 'apollo-datasource-rest';
import { zipCodeResponse } from "../../interfaces/zipCodeResponse";

export class zippopotam extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://api.zippopotam.us";
    }

    async getZipCode(countryCode: string, zip: string): Promise<zipCodeResponse[]> {
        try {
            const response = this.get(`/${countryCode}/${zip}`);
            console.log(response);
            return response;

        } catch (error) {
            console.log(error);

            return error;
        }
    }
}