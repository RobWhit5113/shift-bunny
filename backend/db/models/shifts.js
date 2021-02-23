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
        type: DataTypes.DATE
      },
      duration: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      completed: {
        type: DataTypes.BOOLEAN
      },
  }, {});
  Shift.associate = function(models) {
    // associations can be defined here
    Shift.belongsTo(models.User, {foreignKey: "user_id"})
    Shift.belongsTo(models.Worker, {foreignKey: "worker_id"})
    Shift.belongsTo(models.Shift_type, {foreignKey: 'shift_type_id'})
  };
  return Shift;
};