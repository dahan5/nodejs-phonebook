const BaseController = require('./BaseController');
const jwt = require('jsonwebtoken');

class AuthController extends BaseController {
	constructor() {
		super()
		this.model = require('../models/UserModel')
	}
	
	signup(req, res) {
		const {
			fname,
			lname,
			email,
			password
		}  = req.body

		console.log(req.body)
		this.model.insert({
			fname,
			lname,
			email,
			password
		}, (err, result) => {
			if(err) {
				return this.onError(err, res)
			}

			let token = jwt.sign({result}, this.config.keys.supersecret, { expiresIn: '1h'});
			res.status(200).json(JSON.stringify({ result, token }))
		})
	}

	login(req, res) {
		const {
			email,
			password
		} = req.body;
		this.model.find({email, password}, (err, user) => {
		  if (err) return this.onError(err)
			console.log(Object.keys(user).length)
		  if(Object.keys(user).length > 0) {
			let token = jwt.sign({user}, this.config.keys.supersecret, { expiresIn: '1h'})
			res.status(200).json(JSON.stringify({ token, user }))
		  } else {
			res.status(200).json(JSON.stringify({ type: 'Err', msg: 'Invalid login credentials. Please Try again.' }))
		  }
		})
	}
}

const authController = new AuthController();

module.exports = authController;