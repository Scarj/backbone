define(['contactManager', 'underscore', 'backbone'], function (contactManager, _, Backbone) {
    var Contact = Backbone.Model.extend({
        defaults: {
            name: null,
            tel: null,
            email: null,
            avatar: null
        },

        initialize: function () {
            this.set('avatar', _.random(1, 15) + '.jpg');
        }
    });
    return Contact;
});