const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const CrudLogic = require("./crudlogic");

class LanguageLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/languagemodel");
        return model;
    }

    static getPk(){
        return "langID";
    }

    static getWhere(search)
    {
        let where = {
            language : {
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

module.exports = LanguageLogic;