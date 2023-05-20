import Message from "../../models/messageModel.js";
import { GraphQLError } from "graphql";
import Register from "../../models/registerModel.js";

export default {
  Query: {
    userMessage: async (_,{filter}) => {


      const allMessage = await Message.find({ $or:[{userId : filter.userId, reciverId : filter.reciverId}, {userId : filter.reciverId, reciverId : filter.userId}]})
        .populate("userId")
        .populate("reciverId");

      return allMessage;
    },

    
  },

  Mutation: {
    createMessage: async (_, { input }, { id }) => {
      // if (!id) {
      //     throw new GraphQLError("Unauthorize...!!", {
      //       extensions: {
      //         code: 401,
      //       },
      //     });
      //   }

      const messagebyUser = await Message.create(input);

      await messagebyUser.populate("userId");

      await messagebyUser.populate("reciverId");


      console.log("🚀 ~ file: messageResolver.js:14 ~ userMessage: ~ allMessage:", messagebyUser)


      return messagebyUser;
    },
  },
};
