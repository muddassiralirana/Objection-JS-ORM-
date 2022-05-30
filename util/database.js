const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "", 
    database: "testapi" 
  },
});

// Give the Knex instance to Objection.
Model.knex(knex);

module.exports = knex;