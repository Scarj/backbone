define(['models/contact','collections/contacts'], function (ContactModel,ContactsCollection) {
    var ContactManager = {
        Models: {Contact: ContactModel},
        Collections: {Contacts: ContactsCollection},
        Views: {}
    };
    return ContactManager;
});