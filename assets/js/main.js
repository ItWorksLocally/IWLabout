require.config({
  paths: {
    jquery          : '../../vendor/jquery/dist/jquery.min',
    underscore      : '../../vendor/underscore/underscore',
    backbone        : '../../vendor/backbone/backbone',
    text            : '../../vendor/requirejs-text/text',
    require         : '../../vendor/requirejs/require',
    wow             : './libs/wow'
  },
  shim: {
    backbone: {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    }
  }
});

require(['app'], function (App) {
  App.initialize();
});
