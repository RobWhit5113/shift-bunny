'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shift_type = sequelize.define('Shift_type', {
      type: {
      allowNull: false,
      type: DataTypes.ENUM(['Bartender', 'Waiter/Waitress', 'Cleaner'])
    },
  }, {});
  Shift_type.associate = function(models) {
    // associations can be defined here
    Shift_type.hasMany(models.Shift, {foreignKey: 'shift_type_id'})
    Shift_type.hasMany(models.Worker, {foreignKey: 'shift_type_id'})
  };
  return Shift_type;
};