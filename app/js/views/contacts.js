define([
    'jquery',
    'underscore',
    'backbone',
    'views/contact',
    'text!templates/tpl-contacts.html'
], function ($, _, Backbone, ContactView, contactsTpl) {
    var Contacts = Backbone.View.extend({
        template: _.template(contactsTpl),

        renderOne: function (contact) {
            var itemView = new ContactView({model: contact});
            this.$('.contacts-container').append(itemView.render().$el);
        },

        render: function () {
            var html = this.template();
            this.$el.html(html);

            this.collection.each(this.renderOne, this);

            return this;
        }
    });
    return Contacts;
});