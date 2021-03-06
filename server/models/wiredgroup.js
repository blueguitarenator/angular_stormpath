'use strict';

module.exports = function(sequelize, DataTypes) {
    var WiredGroup = sequelize.define('WiredGroup', {
        date: DataTypes.DATE
    },{
        classMethods: {
            associate: function(models) {
                WiredGroup.belongsToMany(models.Consumer, {
                    through: 'WiredGroup_Consumer',
                    foreignKey: 'WiredGroup_rowId'
                }),
                WiredGroup.belongsTo(models.Nut);
            }
        }
    });
    return WiredGroup;
};