define(['underscore', 'backbone', 'text!templates/tpl-contact.html'], function (_, Backbone, contactTpl) {
    var Contact = Backbone.View.extend({
        tagName: 'li',
        className: 'media col-md-6 col-lg-4',
        template: _.template(contactTpl),

        render: function () {
            var html = this.template(this.model.toJSON());
            this.$el.append(html);
            return this;
        }
    });
    return Contact;
});