'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          user_id: 1,
          worker_id: 1,
          rating: 5,
          comment: 'This person was fantastic'
      },
        {
          user_id: 1,
          worker_id: 2,
          rating: 4,
          comment: 'This person was average'
      },
        {
          user_id: 1,
          worker_id: 3,
          rating: 1,
          comment: 'This person was horrible'
      },
        {
          user_id: 1,
          worker_id: 1,
          rating: 5,
          comment: 'This person was fantastic'
      },
        {
          user_id: 1,
          worker_id: 4,
          rating: 1,
          comment: 'This person was bad news'
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
