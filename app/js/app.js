define(['models/contact'], function (ContactModel) {
    var ContactManager = {
        Models: {Contact: ContactModel},
        Collections: {},
        Views: {}
    };
    return ContactManager;
});