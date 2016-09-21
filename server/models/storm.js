'use strict';

module.exports = function(sequelize, DataTypes) {
    var Storm = sequelize.define('Storm', {
        email: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Storm.hasMany(models.Provider, {as: 'UserProvider'})
            }
        }
    });
    return Storm;
};