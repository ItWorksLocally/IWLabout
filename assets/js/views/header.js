define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/templates/header.jst'
], function ($, _, Backbone, HeaderTemplate) {
  'use strict';

  var headerView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    render: function () {
      var compiledTemplate = _.template(HeaderTemplate);
      this.$el.html(compiledTemplate);
      return this;
    }
  });
  return headerView;
});
