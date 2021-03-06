'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shift = sequelize.define('Shift', {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {model: "Users"}
      },
      worker_id: {
        type: DataTypes.INTEGER,
        references: {model: "Workers"}
      },
      shift_type_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {model: "Shift_types"}
      },
      start_date: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      start_time:{
        allowNull: false,
        type: DataTypes.TIME,
      },
      duration: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
  },
   {});
   Shift.findAllShiftsForUser = 
  Shift.associate = function(models) {
    // associations can be defined here
    Shift.belongsTo(models.User, {foreignKey: "user_id"})
    Shift.belongsTo(models.Worker, {foreignKey: "worker_id"})
    Shift.belongsTo(models.Shift_type, {foreignKey: 'shift_type_id'})
  };
  return Shift;
};