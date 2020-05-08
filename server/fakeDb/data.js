const mongoose = require('mongoose')
const user1ID = mongoose.Types.ObjectId()
const user2ID = mongoose.Types.ObjectId()
const data ={
  users:[
    {
      _id:user1ID,
      avatar: 'https://i.picsum.photos/id/37/200/300.jpg',
      email:'tohes1@gmail.com',
      name:'tohes1',
      username: 'kouchen1',
      info:'kouchen tojhes ouech alore',
      password: 'kouchenkoucchen',
      role:'admin'
    },
    {
      _id:user2ID,
      avatar: 'https://i.picsum.photos/id/37/240/300.jpg',
      email:'tohes2@gmail.com',
      name:'tohes2',
      username: 'kouchen2',
      info:'kouchen tojhes ouech alore',
      password: 'kouchenkoucchen',
      role:'admin'
    }
  ],
  portfolios: [
    {
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
      user: user1ID
    },
    {
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
      user: user2ID
    },
    {
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    },

    ]
  }
module.exports = data
