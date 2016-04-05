define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/templates/about.jst'
], function ($, _, Backbone, AboutTemplate) {
  'use strict';

  var aboutView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      var compiledTemplate = _.template(AboutTemplate);
      this.$el.html(compiledTemplate);
      return this;
    },
    close     : function () {
      _.each(this.childViews, function (view) {
        view.close();
      });
    }
  });

  return aboutView;
});
