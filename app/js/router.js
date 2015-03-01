define(['underscore', 'backbone'], function (_, Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'contacts': 'showContacts',
            'contacts/new': 'newContact',
            'contacts/edit/:id': 'editContact'
        }
    });
    return Router;
});