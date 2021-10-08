const dotenv = require('dotenv');
dotenv.config({path:__dirname+'\\.env'});
module.exports = {
  secretKey: process.env.JWT_SECRET
};