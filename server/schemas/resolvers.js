const { User } = require('../models');

module.exports = {
    Query: {
        getSingleUser: async (_, args) => { 
            return await User.findById(args.userId); // Tested in GRAPHQL and working
        },
        getAllUsers: async () => {
            return await User.find({}); // Tested in GRAPHQL and working
        },
       
    },
    Mutation: {
        createUser: async (_, args) => {
            return await User.create(args); // Tested in GRAPHQL and working
        }
    }
}