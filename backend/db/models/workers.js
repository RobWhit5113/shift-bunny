'use strict';
module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define('Worker', {
    first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      shift_type_id: {
        type: DataTypes.INTEGER,
        references: {model: "Shift_types"}
      },
  }, {});
  Worker.associate = function(models) {
    // associations can be defined here
    Worker.hasMany(models.Review, {foreignKey: 'worker_id'})
    Worker.hasMany(models.Shifts, {foreignKey: 'worker_id'})
    Worker.belongsTo(models.Shift_type, {foreignKey: "shift_type_id"})
  };
  return Worker;
};