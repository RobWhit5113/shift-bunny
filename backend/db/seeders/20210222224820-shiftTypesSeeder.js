'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shift_types', [
        {type: 'Bartender'},
        {type: 'Waiter/Waitress'},
        {type: "Cleaner"},
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Shift_types', null, {});
    
  }
};
