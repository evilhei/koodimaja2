Meteor.methods({
    sendEmail: function (to, from, subject, text, name) {
      check([from, subject, text, name], [String]);
      check([to], [Array]);

      this.unblock();

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: "Tere Koodimaja, kodulehelt saatis päringu " + name + " mille sisuks on: " + text
      });
    },


    saveEmail: function(to, from, subject, text, name, sentAt) {
      check([from, subject, text, name], [String]);
      check([sentAt], [Date]);
      check([to], [Array]);

      this.unblock();

      SavedEmails.insert({
        to: to,
        from: from,
        subject: subject,
        text: text,
        name: name,
        sentAt: new Date()
      });
    }
});