import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entity/Users";

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "graphql_crud",
        username: "root",
        password: "root",
        logging: true,
        synchronize: false,
        entities: [Users],
    });


    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(
        "/graphql",
        graphqlHTTP({
            schema,
            graphiql: true
        })
    );

    app.listen(8080, () => {
        console.log("Server started on localhost:8080");
    })
};

main().catch((err) => {
    console.log(err);
});