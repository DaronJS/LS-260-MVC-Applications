var ItemView = Backbone.View.extend({
  template: JST.menu_item,
  tagName: 'li',
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.$el.attr('data-id', this.model.get('id'));
    this.render();
  }
})