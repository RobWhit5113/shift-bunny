'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Workers', [
        {
        first_name: 'John',
        last_name: 'Doe',
        shift_type: 'Bartender',
        shift_type_id: 1,
        cost: 50,
      },
      {
        first_name: 'Jane',
        last_name: 'Row',
        shift_type: 'Server',
        shift_type_id: 2,
        cost: 60,
      },
      {
        first_name: 'Joey',
        last_name: 'Donuts',
        shift_type: 'Server',
        shift_type_id: 2,
        cost: 50,
      },
      {
        first_name: 'Sally',
        last_name: 'SeaShells',
        shift_type: 'Bartender',
        shift_type_id: 1,
        cost: 50,
      },
      {
        first_name: 'Johnny',
        last_name: 'Appleseed',
        shift_type: 'Cleaner',
        shift_type_id: 3,
        cost: 20,
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Workers', null, {});
    
  }
};
