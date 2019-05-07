exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '54378ee4-51a9-4208-b3c5-dcca2f3a01e2',
          name: 'Grow',
          username: 'grow',
          email: 'grow@gmail.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 0,
        },
        {
          id: '54378ee4-51a9-4208-b3c5-dcca29dr3kk5',
          name: 'Marcos Nunes',
          username: 'marcos',
          email: 'corecodde@hotmail.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 1,
        },
      ]);
    });
};
