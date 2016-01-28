Template.contactForm.events({
  'submit form': function(e) {
    event.preventDefault();
    var emails = ["villem.heinsalu@gmail.com", "info@koodimaja.ee", "villem@koodimaja.ee"];
    var to = emails;
    var from = event.target.email.value;
    var subject = event.target.pealkiri.value;
    var text = event.target.textarea.value;
    var name = event.target.name.value;
    var sentAt = new Date();

    console.log(to, from, subject, text);
    console.log(name);

    Meteor.call('sendEmail', to, from, subject, text, name);
    Meteor.call('saveEmail', to, from, subject, text, name, sentAt);

    event.target.email.value = "";
    event.target.pealkiri.value = "";
    event.target.textarea.value = "";
    event.target.name.value = "";
  }
});