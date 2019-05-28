//check env
var env = process.env.NODE_ENV || 'development';

//fetch env.config
var config = require('./config.json');
var envConfig = config[env];//either return production or development details from config.json file

//add env. config values from process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);