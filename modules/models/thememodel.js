const { Model, DataTypes } = require('sequelize');

class ThemeModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            themeName: DataTypes.STRING,
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            icon: DataTypes.TEXT,
            cssFiles: DataTypes.TEXT
        }, 
        { sequelize, modelName: 'theme', tableName: 'theme', force: force });
    }
}

module.exports = ThemeModel;