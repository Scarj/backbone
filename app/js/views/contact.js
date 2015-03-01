define(['underscore', 'backbone', 'text!templates/tpl-contact.html'], function (_, Backbone, contactTpl) {
    var Contact = Backbone.View.extend({
        tagName: 'li',
        className: 'media col-md-6 col-lg-4',
        template: _.template(contactTpl),

        events: {
            'click .delete-contract': 'onClickDelete'
        },

        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },

        render: function () {
            var html = this.template(this.model.toJSON());
            this.$el.append(html);
            return this;
        },

        onClickDelete: function (e) {
            e.preventDefault();
            this.model.collection.remove(this.model);
        }
    });
    return Contact;
});