const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const CrudLogic = require("./crudlogic");

class UserSettingLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/usersettingmodel");
        return model;
    }

    static getPk(){
        return "id";
    }

    static getWhere(search)
    {
        let where = {
            firstName : {
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

    static async create(o)
    {

        console.log("object")
        console.log(o)

        let promise =  new Promise(async (resolve, reject)=>{
            try{ 
                let model = this.getModel();
                let userSetting  = await model.findOne({ where: { user: o.user } });
                let response = null;
                if(userSetting == null)
                    response = await super.create(o);
                else
                {
                    try
                    {
                        let res = await model.update(o, { where: { user: o.user} });
                        response = { success: true, payload: res }
                    }
                    catch(E)
                    {
                        response = { success: false, error: E }
                    }

                }
                resolve(response);
            }
            catch(e) {
                reject(e);
            }
        })
        return promise;
    }

    static async get(id)
    {
        try
        {
            let model = this.getModel();
            let userSetting = await model.findOne({ where: { user: id } })
            return { success: true, payload: userSetting  }
        }
        catch(e)
        {
            throw { success: false, payload: userSetting  }
        }

    }
}

module.exports = UserSettingLogic;