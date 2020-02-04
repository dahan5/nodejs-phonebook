/**
 * This class will be extended by all Models
 */
class BaseModel {
	constructor(model) {
		this.db        = require('../database/database')
		this.mongoose  = require('mongoose')
		this.model 	   = this.mongoose.model(model.name, model.schema)
	}
	find(obj, callBack) {
		this.model.init().then(() => {
			this.model.findOne(obj, callBack)
		})
	}
	findOne(id, popObj, callBack){
		this.model.init().then(() => {
			this.model.findOne({
				_id: this.mongoose.Types.ObjectId(id)
			})
			.populate(popObj)
			.exec(callBack)
		})
	}
	findAll(id, paginate, popObj, callBack){
		this.model.find(id)
		.skip(paginate.skip)
		.limit(paginate.limit)
		.populate(popObj)
		.exec(callBack)
	}
	insert(itemInsert, callBack){
		this.model.init().then(() => {
			const item = this.model(itemInsert)
			item.save(callBack)
		})
	}
	deleteOne(id, callBack){
		this.model.deleteOne({
			_id: new this.db.objectId(id)
		}, callBack)
	}
	updateOne(id, itemUpdate, callBack){
		this.model.updateOne({
				_id: new this.db.objectId(id)
			}, {
				$set: itemUpdate
			},
			callBack
		)
	}
}

module.exports = BaseModel