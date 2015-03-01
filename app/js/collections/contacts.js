define(['underscore','backbone','models/contact'], function (_,Backbone,ContactModel) {

    var Contacts = Backbone.Collection.extend({
        model: ContactModel,

        initialize: function () {
            console.log('Collection');
        }
    });

    return Contacts
});
