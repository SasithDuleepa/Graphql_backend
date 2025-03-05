import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from './Quaries/User'
import { CREATE_USERS } from './Mutations/User'

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: GET_ALL_USERS,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUsers: CREATE_USERS,
    }
})


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
}
)