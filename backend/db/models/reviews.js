'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "Users"}
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "Workers"}
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      comment: {
        allowNull: false,
        type: DataTypes.TEXT
      },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "user_id" });
    Review.belongsTo(models.Worker, { foreignKey: "worker_id"})

  };
  return Review;
};