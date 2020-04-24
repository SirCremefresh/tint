import "reflect-metadata";
import * as express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { createConnection, Connection } from "typeorm";
import { createExpressServer } from "routing-controllers";
import { buildSchema } from "type-graphql";

import { Injector } from "./helper/decorator/injection/injector";
import { GeneralEnv } from "./helper/env/general.env";
import { ConsoleHelper } from "./helper/console/console.helper";
import { Test } from "./test/test";

import { MarkResolver } from "./api/resolver/mark.resolver";

async function main() {
    const connection = await createConnection();
    const schema = await buildSchema({
        resolvers: [
            MarkResolver
        ]
    });
    
    const app = express();
    app.use(express.static("../frontend"));

    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app });

    app.listen({ port: GeneralEnv.port }, () => {
        ConsoleHelper.info(`Frontend: http://localhost:${GeneralEnv.port}`);
        ConsoleHelper.info(`Backend API: http://localhost:${GeneralEnv.port}/api`);
        ConsoleHelper.info(`Backend GraphQL API: http://localhost:${GeneralEnv.port}${server.graphqlPath}`);
    });
}

main().then();
Injector.resolve<Test>(Test).runAllTests();
