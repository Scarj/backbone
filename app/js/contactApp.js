define([
    'jquery',
    'models/contact',
    'collections/contacts',
    'views/contact',
    'views/contacts'
], function ($, ContactModel, ContactsCollection, ContactView, ContactsListView) {
    var ContactManager = {
        Models: {Contact: ContactModel},
        Collections: {Contacts: ContactsCollection},
        Views: {Contact: ContactView, Contacts: ContactsListView},

        start: function (data) {
            var contacts = new ContactsCollection(data.contacts);

            var contactsView = new ContactsListView({
                collection: contacts
            });
            $('.main-container').html(contactsView.render().$el);
        }
    };
    return ContactManager;
});