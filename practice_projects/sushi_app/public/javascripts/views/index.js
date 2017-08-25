var IndexView = Backbone.View.extend({
  template: JST.index,
  initialize: function() {
    this.$el = $('body');
    this.render();
  },
  render: function() {
    this.$el.html(this.template)
  }
});