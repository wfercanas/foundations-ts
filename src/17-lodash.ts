import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'santiago',
    role: 'seller',
  },
  {
    username: 'fernando',
    role: 'customer',
  },
];

const answer = _.groupBy(data, (item) => item.role);
console.log(answer);
