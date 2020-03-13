const mongoose = require('mongoose');
const UserSchema = require('./models/user');


//replace the test part with userdb
mongoose.connect('mongodb+srv://HeavenWithAB:6909271Ab@gangodb-ljujb.mongodb.net/userdb?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const user = new  UserSchema({
    name: 'sam',
    email: 'sammy@gmail.com',
    password: 'password1235677',
});
user.save() // saved the above to the database 
UserSchema.find({}, (err, docs)=>{ // this shows what has been saved onto the database 
    console.log(docs)
})