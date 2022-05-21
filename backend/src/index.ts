import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from './resolvers/zipcode/Register';
import { zippopotam } from './datasources/rest/zippopotamAPI';

const main = async () => {

    const schema = await buildSchema({
        resolvers: [RegisterResolver],
    });

    const apolloServer = new ApolloServer({
        schema, dataSources: () => ({
            zippopotam: new zippopotam(),
        }),
    });
    const app = Express();

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("Server Started on http://localhost:4000");
    });
};

main();