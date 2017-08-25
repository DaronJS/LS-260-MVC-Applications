var CartItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST.cart_item,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.$el.attr('data-id', this.model.get('id'));
    this.render();
  },
})