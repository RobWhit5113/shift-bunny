'use strict';
module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define('Worker', {
    first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      shift_type: {
        allowNull: false,
        type: DataTypes.ENUM(['Bartender', 'Server', 'Cleaner'])
      },
      shift_type_id: {
        type: DataTypes.INTEGER,
        references: {model: "Shift_types"}
      },
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
  }, {});
  Worker.associate = function(models) {
    // associations can be defined here
    Worker.hasMany(models.Review, {foreignKey: 'worker_id'})
    Worker.hasMany(models.Shift, {foreignKey: 'worker_id'})
    Worker.belongsTo(models.Shift_type, {foreignKey: "shift_type_id"})
  };
  return Worker;
};