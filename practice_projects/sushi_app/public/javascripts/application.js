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
    this.on('showDetails', this.showDetails.bind(this));
    this.on('detailsViewRemoved', this.showMenu.bind(this));
    this.on('checkout', this.showCheckout.bind(this));
    this.on('order_canceled', this.orderCanceled.bind(this));
  },
  orderCanceled: function() {
    router.navigate('../menu');
    this.showMenu();
  },
  showCheckout: function() {
    this.menuView.trigger('destroy');
    router.navigate('checkout');
    this.checkoutView = new CheckoutView({collection: this.cart});
  },
  emptyCart: function() {
    this.cart.empty();
    $('.cart .count').text(this.cart.quantity + ' ');
  },
  showDetails: function(itemId) {
    var item = this.menu.findWhere({id: +itemId}) || this.menu.get(0);
    this.itemDetailsView = new ItemDetailsView({model: item});
  },
  showMenu: function() {
    this.menuView = new MenuView({collection: this.menu});
  },
  addToCart: function(itemId) {
    var item = this.menu.get(itemId);
    this.cart.addItem(item);
  },
  init: function(data) {
    new IndexView();
    this.menuView = new MenuView({collection: this.menu});
    this.createCart();
    this.bindEvents();
  },
}

Handlebars.registerHelper('formatPrice', function(price) {
  return price.toFixed(2);
});

Handlebars.registerHelper('formatItemsQuantity', function(quantity) {
  var suffix = quantity === 1 ? ' item' : ' items';
  return "<span class='count'>" + quantity + "</span>" + suffix;
});