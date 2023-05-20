export default `#graphql

scalar Number
scalar Date

type User {
    id:ID!
    userName: String!
    phoneno:Number!
    email:String!
}

type UserTotalDetails {
    id:ID!
    userName: String!
    phoneno:Number!
    email:String!
}

type UserMessage {
    createdAt: Date
    userId:User
    reciverId:User
    message:String
}

input filterData {
    userId:ID
    reciverId:ID
}

type Token {
    token: String!
}

# type GroupData {
#     groupName: String
#     creator:User
#     member:[User]
# }

input inputRegister {
    userName: String!
    phoneno:Number!
    email:String!
    password:String!
} 

input message {
    createdAt: Date
    userId:ID
    reciverId:ID
    message:String
}

input inputLogin {
    email:String!
    password:String!
} 

# input Group {
#     groupName: String!
#     creator:ID
#     member:[ID]
# }

type Query {
    user(email:String!): User
    userById(id:ID!): User
    allUser: [User]
   userMessage(filter:filterData): [UserMessage]
#    userGroup()

}

type Mutation {
    registerUser(input: inputRegister!) : User
    loginUser(input: inputLogin!): Token
    createMessage(input:message):UserMessage
    forgetPassword(email:String!):UserTotalDetails
    # createGroupOfUser(input:Group ):GroupData
}
`;
