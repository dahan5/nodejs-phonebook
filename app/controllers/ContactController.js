const BaseController = require('./BaseController');

class ContactController extends BaseController {
	constructor() {
		super()
		this.model = require('../models/ContactModel')
	}
	list(req, res) {
		const resPerPage = 9; // results per page
		const page 		 = req.params.page || 1; // Page
		const uID 		 = req.userInfo.user._id
		this.model.findAll({}, {
			skip: (resPerPage * page) - resPerPage,
			limit: resPerPage
		}, 'users', (err, data) => {
			this.onError(err)
			let contacts = []
			data.filter((contact) => {
				contact.users.filter(user => {
					if(user._id == uID)
						contacts.push(contact)
				})
			})
			let numOfContacts = contacts.length
			res.status(200).send(
				JSON.stringify({
					contacts,
					currentPage: page, 
					pages: Math.ceil(numOfContacts / resPerPage),
					numOfContacts
				})
			)
		});
	}
	single(req, res) {
		var id = req.params.id
		this.model.findOne(id, 'users', (err, contact) => {
		  this.onError(err)
		  res.status(200).send(JSON.stringify(contact))
		})
	}
	save(req, res) {
		const {
			cId,
			phone,
			country,
			fname,
			lname,
			email
		} = req.body
		let userID = req.userInfo.user._id;
		if (cId) {
			this.model.updateOne(cId, {
				phone,
				country,
				fname,
				lname,
				email,
				user: [userID]
			}, (err, contact) => {
				this.onError(err)
				res.status(200).json(JSON.stringify(contact))
			})
		} else {
			this.model.insert({
				phone,
				country,
				fname,
				lname,
				email,
				users: [userID]
			}, (err, contact) => {
				this.onError(err)
				res.status(200).json(JSON.stringify(contact))
			})
		}
	}
	delete(req, res) {
		var id = req.params.id
		this.model.deleteOne(id, (err, contact) => {
			this.onError(err)
			res.status(200).json(JSON.stringify(contact))
		});
	}
}

const contactController = new ContactController();

module.exports = contactController;
