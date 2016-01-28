if (Meteor.isClient) {

	Template.registerHelper("getCurrentLanguage", function() {
    return Session.get('getUserLanguage');
  });

    I18NConf.configure({

         defaultLanguage: 'et',

         languages: ['et', 'en'],

         autoConfLanguage: false

     });


//see laeb alguses Eesti keele ning handlib keele vahetust läbi header.js'st oleva eventi jälgimise

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