const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const CrudLogic = require("./crudlogic");

class ThemeLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/thememodel");
        return model;
    }

    static getPk(){
        return "themeName";
    }

    static getWhere(search)
    {
        let where = {
            title : {
                [Op.like] : "%" + search + "%"
            } 
        }
        return where;
    }

    static getOrder()
    {
        let order = [['createdAt', 'DESC']];
        return order;
    }
}

module.exports = ThemeLogic;