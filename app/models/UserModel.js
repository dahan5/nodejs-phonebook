const BaseModel = require('./BaseModel');
const mongoose = require('mongoose');

class UserModel extends BaseModel {
	constructor() {
		super({
			name: 'Users',
			schema: new mongoose.Schema({
				fname: { type: String, required: true, min: 3 },
				lname: String,
				email: { 
					type: String,
					required: [true, 'Email address is required'],
					unique: true,
					dropDups: true,
					validate: (email) => {
						var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
						console.log(re.test(email))
						return re.test(email)
					}
				},
				password: {
					type: String,
					required: [true, 'Password is required.'],
					minlength: [6, 'Minimum length of Password is 6 Characters.'],
					max: 9
				},
				updated: { type: Date, default: Date.now },
				contacts: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'Contacts'
					}
				]
			})
		})
		console.log('I am inside User')
	}
}

const userModel = new UserModel();

module.exports = userModel