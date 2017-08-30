var CartView = Backbone.View.extend({
  template: JST.cart,
  attributes: {
    id: 'cart',
  },
  events: {
    'click a.empty_cart': 'emptyCart',
    'click .checkout'   : 'checkout',
  },
  checkout: function(e) {
    e.preventDefault();
    App.trigger('checkout');
  },
  emptyCart: function(e) {
    e.preventDefault();
    App.trigger('empty_cart');
  },
  render: function() {
    this.$el.html(this.template(this.collection));
    this.collection.forEach(this.renderCartItem.bind(this));
    $('#cart').replaceWith(this.$el);
    $('.cart .count').text(App.cart.quantity);
  },
  renderCartItem: function(item) {
    var cartItemView = new CartItemView({model: item});
    this.$('ul').append(cartItemView.el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  },
});