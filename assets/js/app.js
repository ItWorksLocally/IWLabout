define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'views/header',
  ],
function($, _, Backbone, Router, HeaderView) {
  'use strict';

  var initialize = function(){
    Router.initialize();
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
