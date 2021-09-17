module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 2000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0a7d82baa0a03289ea6b5c7666db20aa'),
    },
  },
});
