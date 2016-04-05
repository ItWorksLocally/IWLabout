define([
  'jquery',
  'underscore',
  'backbone',
  'views/about',
  'views/story',
  'views/missing',
  'views/about.me'
], function ($, _, Backbone, AboutView, StoryView, MissingView, AboutMeView) {

  var AppRouter = Backbone.Router.extend({
    currentView: null,
    routes:{
      '':'showAbout',
      'story':'showStory',
      'alen':'aboutMe',
      'igor':'aboutMe',
      'lovro':'aboutMe',
      'zoran':'aboutMe',
      '*action':'showStory',
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

    app_router.on('route:aboutMe', function( path ){
      app_router.switchView(new AboutMeView({el: $("#content") }));
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
