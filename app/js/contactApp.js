define([
    'jquery',
    'backbone',
    'models/contact',
    'collections/contacts',
    'views/contact',
    'views/contacts',
    'router'
], function ($, Backbone, ContactModel, ContactsCollection, ContactView, ContactsListView, Router) {
    var ContactManager = {
        Models: {Contact: ContactModel},
        Collections: {Contacts: ContactsCollection},
        Views: {Contact: ContactView, Contacts: ContactsListView},

        start: function (data) {
            var contacts = new ContactsCollection(data.contacts);
            var router = new Router();

            router.on('route:home', function () {
                router.navigate('contacts', {
                    trigger: true,
                    replace: true
                });
            });

            router.on('route:showContacts', function () {
                var contactsView = new ContactsListView({
                    collection: contacts
                });
                $('.main-container').html(contactsView.render().$el);
            });

            router.on('route:newContact', function () {
                console.log('New contact');
            });

            router.on('route:editContact', function (id) {
                console.log('Edit contact');
            });

            Backbone.history.start();


        }
    };
    return ContactManager;
});