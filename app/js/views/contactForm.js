define([
    'underscore',
    'backbone',
    'text!templates/tpl-new-contact.html'
], function (_, Backbone, newContactTpl) {
    var ContactForm = Backbone.View.extend({
        template: _.template(newContactTpl),

        events: {
            'submit .contract-form': 'onFormSubmit'
        },

        render: function () {
            var html = this.template(_.extend(this.model.toJSON(), {
                isNew: this.model.isNew()
            }));
            this.$el.append(html);
            return this;
        },

        onFormSubmit: function(e) {
            e.preventDefault();

            this.trigger('form:submitted', {
                name: this.$('.contact-name-input').val(),
                tel: this.$('.contact-tel-input').val(),
                email: this.$('.contact-email-input').val()
            });
        }
    });
    return ContactForm;
});