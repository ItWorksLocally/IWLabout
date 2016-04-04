define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'wow',
    'views/header',
  ],
function($, _, Backbone, Router, WOW, HeaderView) {
  'use strict';

  var initialize = function(){
    Router.initialize();
    //new WOW().init();

    this.renderLayout();
  };

  var renderLayout = function () {
    this.header = new HeaderView({el: $("#header") });
    return this;
  };

  return {
    initialize: initialize,
    renderLayout: renderLayout,
  };
});
