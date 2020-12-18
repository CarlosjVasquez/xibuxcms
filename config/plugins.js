module.exports = () => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey:
        "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",
    },
    settings: {
      defaultFrom: "contact@gmail.com",
      defaultReplyTo: "contact@gmail.com",
    },
  },
});
