Router.route('/', {
	name: 'home',
	template: 'mainLayout',
	onAfterAction: function() {
		document.title = "Koodimaja"
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
	onAfterAction: function() {
		document.title = "Koodimaja"
	},

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
	onAfterAction: function() {
		document.title = "Koodimaja"
	},

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
	onAfterAction: function() {
		document.title = "Koodimaja"
	},

	i18n: {
		languages: {
			en: {
				path: '/showcase',
				template: 'tehtud',
			}
		}
	}
});

