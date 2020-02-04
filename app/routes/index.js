/**
 * This class represents Index Main Page API Routes
 */
class IndexRoute {
	constructor() {
		this.router = require('express').Router()
		this.setRoutes();
	}
	setRoutes() {
		this.router.get('/', function (req, res, next) {
			res.send(
				`
				<h1>Welcome to Node.js API Index Page</h1>
				<p><b>localhost:3000/</b></p>
				<p>API Index Page</p>
				<p><b>localhost:3000/users/signup</b></p>
				<p>Route for New User Signup</p>
				<p><b>localhost:3000/users/login</b></p>
				<p>API Route for logging in user who has already registered.</p>
				<p><b>localhost:3000/api/contacts/save</b></p>
				<p>API Routes for Saving or Updating a new Contact for Updating the existing contact just pass the cId variable as ID of that contact to be updated.</p>
				<p><b>localhost:3000/api/contacts/single/:ID</b></p>
				<p>Contacts API Route for fetching single contact data you need to pass the ID as a param in the route</p>
				<p><b>localhost:3000/api/contacts/list/<pageNo></b></p>
				<p>Contacts API Route for Listing All the Logged in User Contacts along with pagination you need to pass the page no in the params like 1 for 1st page records per page its showing 9 records.</p>
				<p><b>localhost:3000/api/contacts/delete/:ID</b></p>
				<p>Contacts API Routes for Deleting a specfic contact you need to pass the ID of that contact in the URL as a param for that record to be deleted.</p>
				`
			)
		});
	}
}

const router = new IndexRoute();

module.exports = router.router;