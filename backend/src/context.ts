import { zippopotam } from "./datasources/rest/zippopotamAPI";

export interface Context {
    dataSources: {
        zippopotam: zippopotam;
    };
}