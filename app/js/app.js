define([
    'models/contact',
    'collections/contacts',
    'views/contact'
], function (ContactModel, ContactsCollection, ContactView) {
    var ContactManager = {
        Models: {Contact: ContactModel},
        Collections: {Contacts: ContactsCollection},
        Views: {Contact: ContactView}
    };
    return ContactManager;
});