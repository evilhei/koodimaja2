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

Template.header.onRendered(function (){

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72515240-1', 'auto');
    ga('send', 'pageview');


    //see siin muutab logo väikeseks. Tegelt oleks vaja juurde animatsiooni
    
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