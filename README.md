# Node.js Phonebook - Taleb DAHAN

### NODEMON SHOULD BE INSTALLED ON THE SYSTEM AS ITS REQUIRED
### ```npm i -g nodemon```
### ```npm install```
### ```npm start```

``` 
    NODE EXPRESS MONGODB MONGOOSE JWT(TOKEN BASED AUTH)
    THE POSTMAN COLLECTION FOR THIS PROJECT IS ALSO INCLUDED IN THE REPO YOU CAN JUST IMPORT THAT
    COLLECTION INTO THE POSTMAN AND START TESTING THE ROUTES & FOR DEMO PURPOSES ONLINE MONGODB MLABS
    HAS BEEN USED.

    FOLLOWING FEATURES HAS BEEN IMPLEMENTED
    API calls:
    1. Register user
    2. Login user

    CRUD calls for Contact resource
    3. Create contact under loggedIn User
    4. Update contact with ID under loggedIn User
    5. Get all contacts (should support pagination)

    token based authentication mechanism for all the API calls except 'Register' and First Register User also get Token for automatic login procedures that scope has also covered.

    following has been implemented to ensure the application standards:
    1. Input validation
    2. Serializing response
    3. Proper error messages
    4. Pagination
```

<h3>Node.js API Routes</h3>
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
<p>Contacts API Routes for Deleting a specific contact you need to pass the ID of that contact in the URL as a param for that record to be deleted.</p>