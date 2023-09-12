import knex from '../db/db.js'
knex.schema
  // .dropTableIfExists('users').createTable('users', (table) => {
  //   table.increments('id').primary();
  //   table.string('name');
  //   table.integer('telegram_id').unique();
  //   table.timestamps(false, true);
  //   table.integer('status').defaultTo(1);
  //   table.boolean('is_admin').defaultTo(false);
  // })
  // .dropTableIfExists('channels')
  // .createTable('channels', (table) => {
  //   table.increments('id').primary();
  //   table.integer('chat_id');
  //   table.timestamps(false, true);
  // })
  // .dropTableIfExists('questions')
  // .createTable('questions', (table) => {
  //   table.increments('id').primary();
  //   table.string('question');
  //   table.string('answer');
  //   table.timestamps(false, true);
  // })
  .dropTableIfExists('subscriptions')
  .createTable('subscriptions', (table) => {
    table.increments('id').primary();
    table.integer('user').references('id').inTable('users');
    table.integer('signal').references('id').inTable('signals');
    table.boolean('is_active').defaultTo(false);
    table.date('activated_at').defaultTo(null);
    table.timestamps(false, true);
  })
  // .dropTableIfExists('signals')
  // .createTable('signals', (table) => {
  //   table.increments('id').primary();
  //   table.string('name');
  //   table.integer('price');
  //   table.integer('duration')
  //   table.timestamps(false, true);
  // })
  .then(() => {
    console.log('Tables created successfully');
    knex.destroy();
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
    knex.destroy();
  });