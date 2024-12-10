const { Model, DataTypes } = require('sequelize');

class LangWordModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            langID: DataTypes.STRING,
            key: DataTypes.STRING,
            value: DataTypes.TEXT,
            isActive: DataTypes.BOOLEAN
        }, 
        { sequelize, modelName: 'langword', tableName: 'langword', force: force });
    }
}

module.exports = LangWordModel;