/**
 * DataBase Configuration Class
 */
class DataBase{
	/**
	 * Constructor
	 */
	constructor(){
		this.config   = require('../config/config')
		this.objectId = require("mongodb").ObjectId
		this.client   = require("mongodb").MongoClient
		this.mongoose = require("mongoose")

		//Get the default connection
		this.db = this.mongoose.connection;
		this.connect()
	}
	/**
	 * Return Connection String
	 */
	getConnString(config){
		return `mongodb://${config.dataBase.user}:${config.dataBase.pass}@${config.dataBase.host}:${config.dataBase.port}/${config.dataBase.base}`;
	}
	/**
	 * Connect to DataBase
	 */
	connect() {
		this.mongoose.connect(this.getConnString(this.config), { useNewUrlParser: true });
		
		//Bind connection to error event (to get notification of connection errors)
		this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	}
}

const dataBase = new DataBase()

module.exports = dataBase