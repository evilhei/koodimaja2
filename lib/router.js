    I18NConf.configure({

         defaultLanguage: 'et',

         languages: ['et', 'en'],

         autoConfLanguage: false

     });



Router.route('/', {
	name: 'home',
	template: 'mainLayout',
	onAfterAction: function() {
		document.title = peaLehtTitle
	},

	i18n: {
		languages: {
			en: {
				path: '/',
				template: 'mainLayout',
			}
		}
	}
});

Router.route('/kontakt', {
	name: 'kontakt',
	template: 'kontakt',

	i18n: {
		languages: {
			en: {
				path: '/contact',
				template: 'kontakt'
			}
		}
	}
});

Router.route('/meist', {
	name: 'meist',
	template: 'meist',

	i18n: {
		languages: {
			en: {
				path: '/about-us',
				template: 'meist',
			}
		}
	}
});

Router.route('/tehtud', {
	name: 'tehtud',
	template: 'tehtud',

	i18n: {
		languages: {
			en: {
				path: '/showcase',
				template: 'tehtud',
			}
		}
	}
});

