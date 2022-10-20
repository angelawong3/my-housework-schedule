const { User, Housework, Tools } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { countDocuments } = require("../models/User");

const resolvers = {
  Query: {
    // get one user
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // get housework by user id
    houseworkByUserID: async (parent, args, context) => {
      if (context.user) {
        const houseworkData = await Housework.findOne({
          user: context.user._id,
        });
        console.log(houseworkData);
        return houseworkData;
      }
      throw new AuthenticationError("Not logged in");
    },

    // get tools by user id
    toolsByUserId: async (parent, args, context) => {
      if (context.user) {
        const toolsData = await Tools.findOne({ user: context.user._id });
        console.log(toolsData);
        return toolsData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const token = signToken(user);
      return { token, user };
    },
    // add user
    // del user
    // add housework
    // update housework
    // del housework
    // add tools
    // update tools
    // del tools
    // extra: add YouTube video to user dashboard
    // extra: add tools to housework
  },
};

module.exports = resolvers;
