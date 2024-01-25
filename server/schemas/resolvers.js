const { User } = require('../models');

module.exports = {
    Query: {
        getSingleUser: async (_, args) => {
            return await User.findById(args.userId);
        }
    },
    // Mutation: {}
}