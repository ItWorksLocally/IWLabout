define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/templates/story.jst'
], function ($, _, Backbone, StoryTemplate) {
  'use strict';

  return Backbone.View.extend({

    initialize: function () {
      this.render();
    },

    render: function () {
      var compiledTemplate = _.template(StoryTemplate);
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
