
// the root provide a resolver for each api endpoint

exports.portfoliosQuery = {
  portfolio: (root, {id}, ctx) =>{
    return ctx.models.Portfolio.getById(id)
  },
  portfolios: (root, args, ctx) =>{
    return ctx.models.Portfolio.getAll()
  }
}
exports.portfoliosMutations = {

  createPortfolio: async(root,{input}, ctx) =>{
    return await ctx.models.Portfolio.create(input)

  },
  updatePortfolio: async (root, {id, input},ctx) =>{
    const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate({_id: id},input,
      {new: true})
    return updatedPortfolio;
  },
  deletePortfolio: async (root, {id},ctx) =>{
    const deletedId = await ctx.models.Portfolio.findAndDelete({_id: id})

    return deletedId._id
  }
}
exports.userMutations = {
  signUp: async (root, {input}, ctx) =>{
    const registerdUser = await ctx.models.User.signUp(input)
    return registerdUser._id
 },
  signIn: (root, {input}, ctx) =>{
    return ctx.models.User.signIn(input,ctx)

  },

  signOut: (root, args, ctx) =>{
      return ctx.models.User.signOut()
  }
}
