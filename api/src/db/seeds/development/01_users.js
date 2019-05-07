exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '6cc32fb4-bde4-4e0f-a2b7-6980a2c48ef1',
          name: 'Grow',
          username: 'grow',
          email: 'grow@gmail.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 0,
        },
        {
          id: 'f038358f-ce84-47d7-aa9f-837514207e6d',
          name: 'Marcos Nunes',
          username: 'marcos',
          email: 'corecodde@hotmail.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 1,
        },
      ]);
    });
};
