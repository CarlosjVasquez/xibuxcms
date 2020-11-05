module.exports = {
  send: async (ctx) => {
    var data = ctx.request.body;
    await strapi.plugins["email"].services.email.send({
      to: data.to,
      from: data.from,
      replyTo: data.replyTo,
      subject: data.subject,
      text: data.text,
      html: data.html,
    });
    ctx.send("Done");
  },
};
