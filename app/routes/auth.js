/**
 * This class representes User Routes
 */
class AuthRoute {
	constructor() {
		this.router     = require('express').Router()
		this.controller = require('../controllers/AuthController')
		this.setRoutes();
	}

	setRoutes() {
		const AuthRoute = this;

		this.router.get('/list', function (req, res) {
			AuthRoute.controller.list(req, res);
		});

		this.router.post('/signup', function (req, res){
			AuthRoute.controller.signup(req, res);
		});

		this.router.post('/login', function (req, res){
			AuthRoute.controller.login(req, res);
		});
	}
}

const router = new AuthRoute();

module.exports = router.router;