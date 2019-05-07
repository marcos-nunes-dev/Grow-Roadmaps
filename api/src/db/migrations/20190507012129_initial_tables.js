exports.up = async function(knex) {
  // User table
  await knex.schema.createTable('users', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.text('name');
    table.text('username').unique();
    table.text('email').unique();
    table.text('profilePicture');
    table.text('githubUsername');
    table.integer('accessLevel').defaultTo(0); // 0: user 1: admin

    // OAuth methods
    table.text('githubProviderId');

    table.timestamps(true, true);
  });

  // Roadmaps table
  await knex.schema.createTable('roadmaps', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.text('name');
    table.text('type');
    table
      .uuid('userId')
      .references('id')
      .inTable('users');
    table.boolean('active');
  });

  // Modules table
  await knex.schema.createTable('modules', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.text('name');
    table.text('description');
    table
      .uuid('roadmapId')
      .references('id')
      .inTable('roadmaps');
    table.integer('order');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('modules');
  await knex.schema.dropTableIfExists('roadmaps');
  await knex.schema.dropTableIfExists('users');
};
