define([
    'router',
    'jquery',
    'backbone',
    'models/contact',
    'collections/contacts',
    'views/contact',
    'views/contacts',
    'views/contactForm'
], function (Router, $, Backbone, ContactModel, ContactsCollection, ContactView, ContactsListView, ContactFormView) {
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
                var newContactForm = new ContactFormView({
                    model: new ContactModel()
                });

                newContactForm.on('form:submitted', function (attrs) {
                    attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
                    contacts.add(attrs);
                    router.navigate('contacts', true);
                });

                $('.main-container').html(newContactForm.render().$el);
            });

            router.on('route:editContact', function (id) {
                var contact = contacts.get(id),
                    editContactForm;

                if (contact) {
                    editContactForm = new ContactFormView({
                        model: contact
                    });

                    $('.main-container').html(editContactForm.render().$el);
                } else {
                    router.navigate('contacts', true);
                }

                editContactForm.on('form:submitted', function(attrs) {
                    contact.set(attrs);
                    router.navigate('contacts', true);
                });
            });

            Backbone.history.start();


        }
    };
    return ContactManager;
});