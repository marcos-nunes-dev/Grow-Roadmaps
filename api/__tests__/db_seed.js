export default function seed(models) {
  return (
    models.User.bulkCreate(
      [
        {
          id: '54378ee4-51a9-4208-b3c5-dcca2f3a01e2',
          name: 'Grow Test Seed',
          pictureUrl: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg'
          email: 'grow@gmail.com',
          points: '0',
          acessLevel: 0
          /* password: testpassword */
          password:
            '$2a$04$uNkOURiwAks/KOKm4nRzueco7UQ1drDHqYA9eIKn5KEMxs8KkCxOS',
        },
        {
          id: '54378ee4-51a9-4208-b3c5-dcca29dr3kk5',
          name: 'Marcos Nunes',
          pictureUrl: 'https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg'
          email: 'corecodde@hotmail.com',
          points: '0',
          acessLevel: 1
          /* password: testpassword */
          password:
            '$2a$04$uNkOURiwAks/KOKm4nRzueco7UQ1drDHqYA9eIKn5KEMxs8KkCxOS',
        },
      ],
      { logging: false }
    )
      .then(() => {
        // TODO: we should create this on server install
        return models.CategoryDefault.create();
      })
      // Suppress errors
      .catch(e => {})
  );
}
