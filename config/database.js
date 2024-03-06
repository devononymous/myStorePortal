const path = require('path');


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 6090),
      database: env('DATABASE_NAME', 'strapistore'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Devlc2009'),
    },
    debug: false,
  },
});