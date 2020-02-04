const BaseModel = require('./BaseModel');
const mongoose = require('mongoose');

class ContactModel extends BaseModel {
	constructor() {
		super({
			name: 'Contacts',
			schema: new mongoose.Schema({
				phone: { type: Number, required: true, min: 5 },
				country: { type: String, required: true },
				fname: { type: String, required: true, min: 3 },
				lname: String,
				email: { 
					type: String,
					required: true,
					validate: (email) => {
						var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
						return re.test(email)
					}
				},
				updated: { type: Date, default: Date.now },
				users: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'Users'
					}
				]
			})
		})
	}
}

const contactModel = new ContactModel();

module.exports = contactModel