const knex = require("knex");
module.exports = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/db.sqlite",
  },
  useNullAsDefault: true,
});
