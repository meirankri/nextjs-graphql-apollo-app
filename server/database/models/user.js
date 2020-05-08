const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema

const userSchema = new Schema({
  avatar: String,
  email:{
    type: String,
    required: 'Email is required',
    lowercase: true,
    index: true,
    unique: true,
    match:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
  },
  name:{
    type: String,
    minlength: [2, 'min name lenght is 2']
  },
  username:{
    type: String,
    required:true,
    minlength: [4,  'min username lenght is 4 ']
  },
  password:{
    type: String,
    minlength: [6,  'min password lenght is 6 '],
    required:true
  },
  role:{
    enum: ['guest', 'admin', 'instructor' ],
    type: String,
    required: true,
    default: 'guest'
  },
  info: String,
  createAt: {
    type:Date, default: Date.now
  }

})

// this function will excuted before the user graphql class is executed
// we can provide password with hash
userSchema.pre('save', function(next){
  const user = this

  bcrypt.genSalt(10, function(err, salt) {
    if(err) {return next(err)}

    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) {return next(err)}
      user.password = hash;
      next()
    });
});
})

module.exports = mongoose.model('User', userSchema);
