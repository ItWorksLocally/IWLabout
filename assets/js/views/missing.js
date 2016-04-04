define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/templates/missing.jst'
], function ($, _, Backbone, MissingTemplate) {
  'use strict';

  return Backbone.View.extend({

    initialize: function () {
      this.render();
    },

    render: function () {
      var data = {
        data: 'test'
      };
      var compiledTemplate = _.template(MissingTemplate)(data);
      this.$el.html(compiledTemplate);
      return this;
    },
    close     : function () {
      _.each(this.childViews, function (view) {
        view.close();
      });
    }
  });
});
