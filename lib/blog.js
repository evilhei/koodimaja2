Blog.config({
  blogIndexTemplate: 'myBlogIndexTemplate',
  blogShowTemplate: 'myShowBlogTemplate'
});


if(Meteor.isClient) {
Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});
}