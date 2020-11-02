module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "614d98b7b0f20c8a5970d85eb7414a97"),
    },
    url: "/dashboard",
  },
});
