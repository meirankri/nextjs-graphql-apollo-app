



class User {

  constructor(model){
    this.Model = model
  }

  signUp(signUpData){
    if(signUpData.password !== signUpData.passwordConfirmation){
      throw new Error('Password must be the same')
    }

    return this.Model.create(signUpData)
  }

  signIn(signInData,ctx){
    const isAuthenticated = ctx.authenticate(signInData)
    if(isAuthenticated){
      console.log("user autenticated");

    }
    return(`sign in user ${signInData.email} ${signInData.password}`);

  }



  signOut(){
    return('sign out');

  }
}

module.exports = User
