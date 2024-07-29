//const LoggerModel  = require( './modules/models/loggermodel')

const { Sequelize, Model, DataTypes } = require('sequelize');
const process = require('process');
const ThemeModel = require("./modules/models/thememodel")
const UserSettingModel = require("./modules/models/usersettingmodel")


const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: process.env.DBENGINE ,
    logging:false
});


class Initialization {
    static async initializeDatabase(){

        let force = false;
        ThemeModel.initialize(sequelize, force);
        UserSettingModel.initialize(sequelize, force);

        await sequelize.sync();
    }
}

module.exports = Initialization



