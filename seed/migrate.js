const knex = require("../db/db");
knex.schema
  .dropTableIfExists("doctors")
  .createTable("doctors", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("middle_name").notNullable();
    table.float("longitude").notNullable();
    table.float("latitude").notNullable();
    table.float("start_time").notNullable();
    table.float("end_time").notNullable();
    table.integer("age").notNullable();
    table.string("gender").notNullable();
    table.string("position").notNullable();
    table.string("image").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
  .then(() => {
    console.log("Tables created successfully");
    knex.destroy();
  })
  .catch((error) => {
    console.error("Error creating tables:", error);
    knex.destroy();
  });
