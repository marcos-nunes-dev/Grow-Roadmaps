const ids = {
  admin: 'cd0a14b0-5c64-489e-b9c0-5add7017dea0',
  userOne: '45ecf361-3786-494a-b299-64f42bf2ee20',
  userTwo: 'ddf42e93-4d5d-4fdf-9d55-8501bfee541f',
};

exports.ids = ids;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: ids.admin,
          name: 'Admin',
          username: 'admin',
          email: 'admin@user.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 1,
        },
        {
          id: ids.userOne,
          name: 'User One',
          username: 'user_one',
          email: 'one@user.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 0,
        },
        {
          id: ids.userTwo,
          name: 'User Two',
          username: 'user_two',
          email: 'two@user.com',
          profilePicture: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg',
          accessLevel: 0,
        },
      ]);
    });
};
