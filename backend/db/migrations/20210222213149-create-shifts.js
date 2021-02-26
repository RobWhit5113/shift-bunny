'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      worker_id: {
        type: Sequelize.INTEGER,
        references: {model: "Workers"}
      },
      shift_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Shift_types"}
      },
      shift_type: {
        allowNull: false,
        type: Sequelize.ENUM(['Bartender', 'Server', 'Cleaner'])
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        // get: function() {
        //   return moment(this.getDataValue('start_date')).format('MM-DD-YYYY')
        // }
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shifts');
  }
};