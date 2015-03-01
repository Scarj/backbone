require.config({
    baseUrl: "app/js/",
    paths: {
        'jquery': '/vendor/jquery/dist/jquery.min',
        'underscore': '/vendor/underscore/underscore',
        'backbone': '/vendor/backbone/backbone',
        'text': '/vendor/requirejs-text/text',
        'contactManager': 'app'
    }
});

require(['contactManager'],function(ContactManager){

});