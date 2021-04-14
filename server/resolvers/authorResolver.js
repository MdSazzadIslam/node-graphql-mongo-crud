const AuthorModel = require("../models/authorModel");

const authorResolver = {
  getAll: async () => {
    return await AuthorModel.find({});
  },

  getById: async (args) => {
    return await AuthorModel.findById(args.id);
  },

  createAuthor: async (args) => {
    let author = new AuthorModel(args.authorInput);
    return await author.save();
  },

  deleteAuthor: async (args) => {
    return await AuthorModel.findByIdAndRemove(args.id);
  },

  updateAuthor: async (args) => {
    return await Author.findByIdAndUpdate(args.id, args.authorInput, {
      new: true,
    });
  },
};

module.exports = authorResolver;
