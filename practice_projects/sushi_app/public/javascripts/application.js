var App = {
  templates: JST,
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({collection: this.cart });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('add_to_cart', this.addToCart.bind(this));
    this.on('empty_cart', this.emptyCart.bind(this));
  },
  emptyCart: function() {
    this.cart.empty();
    $('.cart .count').text(this.cart.quantity);
  },
  showDetails: function(item) {
    this.itemDetailsView = new ItemDetailsView({model: item});
  },
  addToCart: function(item) {
    this.cart.addItem(item);
    $('.cart .count').text(this.cart.quantity);
  },
  init: function(data) {
    new IndexView();
    this.menu.view = new MenuView({collection: this.menu});
    this.createCart();
    this.bindEvents();
  },
}

Handlebars.registerHelper('formatPrice', function(price) {
  return price.toFixed(2);
});