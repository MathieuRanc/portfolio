module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac505063d40155eb3a6edd0bbdfee2de'),
  },
});
