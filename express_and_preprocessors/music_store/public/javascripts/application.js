var App = {
  templates: JST,
  $el: $('main'),
  renderIndexView: function() {
    this.indexView = new IndexView();
    this.renderAlbums();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    })
  },
  newAlbum: function() {
    new newAlbumView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.indexView, 'add_album', this.newAlbum);
  }
};

Handlebars.registerHelper('formatPrice', function(price) {
  return (+price).toFixed(2);
})