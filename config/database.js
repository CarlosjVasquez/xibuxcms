module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dacmqi118b066q"),
        username: env("DATABASE_USERNAME", "fgijfjgygqdnvn"),
        password: env(
          "DATABASE_PASSWORD",
          "ff7c18943008d18fae3c6045532b0d6961ef3d7f1dd2bd0b07fbadba6d203dd4"
        ),
      },
      options: {},
    },
  },
});
