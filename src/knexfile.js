// Update with your config settings.
const {password} = require('./.anv')
module.exports = {

    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'root',
      password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
};
