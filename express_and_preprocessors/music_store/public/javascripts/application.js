var App = {
  templates: JST,
  $el: $('main'),
  renderIndexView: function() {
    this.indexView = new IndexView();
    this.createCart();
    this.renderAlbums();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    })
  },
  admin: function() {
    this.adminView = new adminView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.indexView, 'admin', this.admin);
    this.on('add_to_cart', this.cart.addItem.bind(this.cart))
  }
};

Handlebars.registerHelper('formatPrice', function(price) {
  return (+price).toFixed(2);
});

