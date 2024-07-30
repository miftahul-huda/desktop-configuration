const { Model, DataTypes } = require('sequelize');

class UserSettingModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            theme: DataTypes.STRING,
            useThemeBackgroundWallpaper: DataTypes.INTEGER,
            backgroundWallpaper: DataTypes.STRING,
            user: DataTypes.STRING
        }, 
        { sequelize, modelName: 'usersetting', tableName: 'usersetting', force: force });
    }
}

module.exports = UserSettingModel;