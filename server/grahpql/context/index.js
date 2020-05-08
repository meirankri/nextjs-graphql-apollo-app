
const authenticateUser = ({email,password}) =>{
  console.log(`autenticating ${email}`);
  return true
}


exports.buildAuthContext= () =>{
  const auth = {
    authenticate: (option) =>authenticateUser(option) ,

  }
  return auth;
}
