const { Model, DataTypes } = require('sequelize');

class LanguageModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            langID: DataTypes.STRING,
            language: DataTypes.STRING,
            icon: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN
        }, 
        { sequelize, modelName: 'language', tableName: 'language', force: force });
    }
}

module.exports = LanguageModel;