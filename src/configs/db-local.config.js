require("dotenv").config();

const localDB = {
    port: process.env.PORT || 4002,
    mongodbUrl : process.env.MONGOURL
}

module.exports = localDB