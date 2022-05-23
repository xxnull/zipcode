import { AppDataSource } from "../../datasources/orm/postgressDataSource";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { RegisterInput } from './register/RegisterInput';
import { zipCode } from '../../entities/zipCode';
import { zipCodeResponse } from "../../interfaces/zipCodeResponse";
import { Context } from '../../context';
import { countries } from '../../datasources/countriesList';



@Resolver()
export class RegisterResolver {
    constructor() {
        AppDataSource;
    }
    @Query(() => [zipCode])
    async lastFiveEntries() {
        return await zipCode
            .find({
                order: { created: "DESC" },
                take: 5
            });
    }

    @Mutation(() => zipCode)
    async register(
        @Arg('data') { zip, country }: RegisterInput,
        @Ctx() context: Context
    ) {
        try {

            country = country.toUpperCase();
            if (countries.includes(country)) {

                const created: Date = new Date();
                const response: zipCodeResponse[] = await context.dataSources.zippopotam.getZipCode(country, zip);
                const json: string = JSON.stringify(response);

                const result = await zipCode.create({
                    zip, country, created, json
                }).save();

                return result;

            } else {
                throw new Error("The selected country is not included in the Zippopotam API, Sorry for any inconvenience...");
            }

        } catch (error) {
            return error;
        }
    }

    @Query(() => String)
    async deleteAll(): Promise<any> {
        try {
            await AppDataSource.getRepository(zipCode)
                .clear();
            return "All Data Deleted";

        } catch (error) {
            return error;
        }
    }
}