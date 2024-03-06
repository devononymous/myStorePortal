const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'bank'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', '0000'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//       },
//     },
//     debug: false,
//   },
// });
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 6090),
//         database: env('DATABASE_NAME', 'codewithSushil'),
//         user: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'Devlc2009'),
//         ssl: {
//           rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//         },
//       },
//       options: {},
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 6090),
//         database: env('DATABASE_NAME', 'codewithSushil'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'Devlc2009'),
//         ssl: {
//           rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//         },
//       },
//       options: {},
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 6090),
//         database: env('DATABASE_NAME', 'codewithSushil'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'Devlc2009'),
//         ssl: {
//           rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//         },
//       },
//       options: {},
//     },
//   },
// });


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