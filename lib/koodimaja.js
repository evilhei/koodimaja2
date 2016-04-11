if (Meteor.isClient) {

    I18NConf.configure({

         defaultLanguage: 'et',

         languages: ['et', 'en'],

         autoConfLanguage: false

     });


//see laeb alguses Eesti keele ning handlib keele vahetust läbi header.js'st oleva eventi jälgimise
Meteor.startup(function () {

	//async call, et saada kasutaja infot

	$.getJSON('http://ipinfo.io', function(data){
	  defaultLanguage(data)
	})
	//check mis vaatab, et kas kasutaja on eestist või välismaalt ja vastavalt sellele vahetab keelt

	defaultLanguage = function(data) {
		if (data.country === "EE") {
			Session.set('getUserLanguage', 'et')
		} else Session.set('getUserLanguage', 'en')

		//kasutab seda kasutaja keelt ja määrab default keele

	    Session.set("showLoadingIndicator", true);
	    	TAPi18n.setLanguage(Session.get('getUserLanguage'))
	        .done(function () {
	          Session.set("showLoadingIndicator", false);
	        })
	        .fail(function (error_message) {
	          // Handle the situation
	          console.log(error_message);
	        });

		}
	})

}