/**
 * Setting Configuration Class
 */
class Config {
	constructor(dataBase, port, dist, defaultPath, keys) {
		this.dataBase    = dataBase
		this.port        = port
		this.dist        = dist
		this.defaultPath = defaultPath
		this.keys 		 = keys
	}
}

/**
 * Creating Configuration Attributes
 */
const dataBaseConfig = {
	host: 'ds121982.mlab.com',
	user: 'ahmed',
	pass: 'ahmed--3',
	port: '21982',
	base: 'phonebook'
}

const port        = 3000
const dist        = 'src'
const defaultPath = './'
const keys 		  = {
	supersecret: 'EYRYDFG327GDF724DHJ980JSDUI'
}

/**
 * Setting objetct to return
 */
const config = new Config(dataBaseConfig, port, dist, defaultPath, keys)
/**
 * Exporting Module
 */
module.exports = config