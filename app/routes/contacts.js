/**
 * This class representes Contact Routes
 */
class ContactRoute {
	constructor(){
		this.router     = require('express').Router()
		this.controller = require('../controllers/ContactController')
		this.setRoutes();
	}

	setRoutes(){
		const ContactRoute = this;
		this.router.get('/list/:page', function (req, res) {
			ContactRoute.controller.list(req, res);
		});

		this.router.get('/single/:id', function (req, res){
			ContactRoute.controller.single(req, res);
		});

		this.router.post('/save', function (req, res){
			ContactRoute.controller.save(req, res);
		});

		this.router.get('/delete/:id', function (req, res){
			ContactRoute.controller.delete(req, res);
		});
	}
}

const router = new ContactRoute();

module.exports = router.router;