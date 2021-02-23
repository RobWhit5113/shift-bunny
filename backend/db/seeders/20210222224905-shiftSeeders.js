'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Shifts', [
        {
        name: 'Bartender for Party',
        user_id: 1,
        worker_id: 1,
        shift_type_id: 1,
        start_date: '2021-02-25', 
        duration: 60,
        description: 'We need someone to serve alcohol',
        completed: false
      },
              {
        name: 'Waiter for Party',
        user_id: 1,
        worker_id: 2,
        shift_type_id: 2,
        start_date: '2021-02-25', 
        duration: 60,
        description: 'We need someone to serve our guests',
        completed: false
      },
              {
        name: 'Cleaner for Party',
        user_id: 1,
        worker_id: 5,
        shift_type_id: 3,
        start_date: '2021-02-25', 
        duration: 60,
        description: 'We need someone to clean our mess',
        completed: false
      },
              {
        name: 'Bartender for New Years',
        user_id: 1,
        worker_id: 4,
        shift_type_id: 1,
        start_date: '2021-01-01', 
        duration: 90,
        description: 'We need someone to serve alcohol',
        completed: true
      },
              {
        name: 'Waiter for New Years',
        user_id: 1,
        worker_id: 3,
        shift_type_id: 2,
        start_date: '2021-02-25', 
        duration: 90,
        description: 'We need someone to serve our guests',
        completed: false
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Shifts', null, {});
    
  }
};
