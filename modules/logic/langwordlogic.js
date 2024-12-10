const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const CrudLogic = require("./crudlogic");

class LangWordLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/langwordmodel");
        return model;
    }

    static getPk(){
        return "id";
    }

    static getWhere(search)
    {
        let where = {
            value : {
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

    static async findAllByLangID(langID)
    {
        if(langID != null)
            return await this.findAll({ langID: langID });
        else 
            return await this.findAll();
    }
}

module.exports = LangWordLogic;