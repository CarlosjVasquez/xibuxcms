module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dafs951oi4psf5"),
        username: env("DATABASE_USERNAME", "xvztdvbjpxsimd"),
        password: env(
          "DATABASE_PASSWORD",
          "ab1f2d09830d0a669741d6dd5d2a61c1baced8c4a1e5721e4000d6fafc90f59e"
        ),
      },
      options: {},
    },
  },
});
