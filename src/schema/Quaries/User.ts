import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from '../../Entity/Users'


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    },
};