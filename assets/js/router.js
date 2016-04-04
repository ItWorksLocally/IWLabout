define([
  'jquery',
  'underscore',
  'backbone',
  'views/about',
  'views/story',
  'views/missing'
], function ($, _, Backbone, AboutView, StoryView, MissingView) {

  var AppRouter = Backbone.Router.extend({
    routes:{
      '':'showAbout',
      '/story':'showStory',
      '*action':'showStory'
    },

    switchView : function (view) {
      if (this.currentView) {
        this.currentView.close();
      }
      this.currentView = view;
      this.activeView = view;
    }
  });

  var setHrefEvents = function () {
    $(document).on('click', 'a:not([data-bypass])', function (evt) {
      var href = { prop: $(this).prop('href'), attr: $(this).attr('href') };
      if (href.attr !== '' && href.attr !== '#' && href.attr !== undefined) {
        evt.preventDefault();
        Backbone.history.navigate(href.attr, true);
      }
    });
  };

  var initialize = function(){
    var app_router = new AppRouter();

    app_router.on('route:showAbout', function( path ){
      app_router.switchView(new AboutView({el: $("#content") }));
    });

    app_router.on('route:showStory', function( path ){
      app_router.switchView(new StoryView({el: $("#content") }));
    });

    this.setHrefEvents();
    Backbone.history.start({pushState: true, root: ''});
    return this;
  };

  return {
    initialize   : initialize,
    setHrefEvents: setHrefEvents
  };
});
