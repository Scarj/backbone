define(['underscore', 'backbone'], function (_, Backbone) {
    var Contact = Backbone.View.extend({
        render: function () {
            var html = '<h1>' + this.model.get('name') + '</h1>';
            this.$el.html(html);
            return this;
        }
    });
    return Contact;
});
