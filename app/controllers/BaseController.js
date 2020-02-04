/**
 * This class will be extended by all other controllers
 */
class BaseController {
	constructor() {
		this.config = require('./../config/Config')
	}
	onError(err, res){
		if (err){ 
			console.log(err)
			if (err.name == 'ValidationError') {
				let errors = [];
				for (let field in err.errors) {
					errors.push(err.errors[field].message); 
				}
				res.status(500).send(
					JSON.stringify({
						type: 'ERR',
						msg: `We've Encounter Errors`,
						errors
					})
				)
			} else {
				res.status(500).send(
					JSON.stringify({
						type: 'ERR',
						msg: `We've Encounter an Err => ${err}`
					})
				)
			}
		}
	}
}

module.exports = BaseController