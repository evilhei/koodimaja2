Blog.config({
  blogIndexTemplate: 'myBlogIndexTemplate',
  blogShowTemplate: 'myShowBlogTemplate',
  rss: {
  	title: 'Koodimaja blogi',
  	description: 'Rätseptarkvaraarendus ja muidu tehnoloogia'
  }
});


if(Meteor.isClient) {
Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});
}