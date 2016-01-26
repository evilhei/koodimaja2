/*

todo

1. emaili formi valideerimine, kui üks asi on puudu, siis ei tohiks kõiki ära resettida, vaid hoiataks, milline puudu on
2. publish, subscribe, allow, deny
3. popup vms teade, et email on õnnelikult välja saadetud
4. taga taust lehele headerisse
*/



if (Meteor.isClient) {

  Template.registerHelper("getCurrentLanguage", function() {
    return Session.get('getUserLanguage');
  });

  Template.header.events({
    'click li .langET': function(event) {
      Session.set('getUserLanguage', 'et');
      console.log(Session.get('getUserLanguage'))
      TAPi18n.setLanguage(Session.get('getUserLanguage'))
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
    },
    'click li .langEN': function(event) {
      Session.set('getUserLanguage', 'en');
      console.log(Session.get('getUserLanguage'))
      TAPi18n.setLanguage(Session.get('getUserLanguage'))
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
         
    }
  });


  
    Meteor.startup(function () {
      Session.set('getUserLanguage', 'et'); 
      Session.set("showLoadingIndicator", true);
      TAPi18n.setLanguage(Session.get('getUserLanguage'))
        .done(function () {
          Session.set("showLoadingIndicator", false);
        })
        .fail(function (error_message) {
          // Handle the situation
          console.log(error_message);
        });
 
  });
}


if (Meteor.isServer) {

  Meteor.startup(function() {

    process.env.MAIL_URL = 'smtp://postmaster@sandbox9cf98f95256f45b7b4fda250bbb78ff0.mailgun.org:7eec89255d51fa8f83d2c2d2c59704e7@smtp.mailgun.org:587/'
  });

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
}

if (Meteor.isClient) {
  Meteor.startup(function() {
     Template.showCaseDetails.onRendered(function() {
      this.$('.materialboxed').materialbox();


      $('.fancybox').fancybox();


  })
}
)};

if (Meteor.isClient) {


 

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
  })

  Template.header.onRendered(function (){

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-72515240-1', 'auto');
      ga('send', 'pageview');



      document.addEventListener("scroll", function() {
      scrollHeight = window.pageYOffset;
      document.getElementsByClassName("brand-logo")[0].style.height = scrollHeight >= 300 ? "65px" : "";
      }, false);

      $('.button-collapse').sideNav({
        menuWidth: 150, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
      $('.parallax').parallax();
  });
}

