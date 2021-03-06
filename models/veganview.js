'use strict';
module.exports = (sequelize, DataTypes) => {
  const veganView = sequelize.define('veganView', {
    foodName: DataTypes.STRING,
    isVegan: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  veganView.associate = function (models) {
    // associations can be defined here
  };
  return veganView;
};