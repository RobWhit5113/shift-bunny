'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Workers', [
        {
        first_name: 'John',
        last_name: 'Doe',
        shift_type_id: 1
      },
      {
        first_name: 'Jane',
        last_name: 'Row',
        shift_type_id: 2
      },
      {
        first_name: 'Joey',
        last_name: 'Donuts',
        shift_type_id: 2
      },
      {
        first_name: 'Sally',
        last_name: 'SeaShells',
        shift_type_id: 1
      },
      {
        first_name: 'Johnny',
        last_name: 'Appleseed',
        shift_type_id: 3
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Workers', null, {});
    
  }
};
