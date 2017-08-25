var IndexView = Backbone.View.extend({
  template: App.templates.index,
  attributes: {
    id: 'index',
  },
  events: {
    'click footer a': 'admin' 
  },
  admin: function(e) {
    e.preventDefault();
    this.trigger('admin');
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})