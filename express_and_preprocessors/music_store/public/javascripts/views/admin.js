var adminView = Backbone.View.extend({
  template: App.templates.admin,
  attributes: {
    id: 'admin',
  },
  events: {
    'click .edit': 'edit',
    'click .delete': 'destroy',
    'submit #new_album': 'create',
    'submit #update_album': 'update',
    'click #add_new': 'addNew'
  }, 
  destroy: function(e) {
    e.preventDefault();
    var $li = $(e.target).closest('li');
    var id = $li.data('id');
    $li.remove();

    $.ajax({
      url: '/albums',
      type: 'delete',
      data: {id: id},
      success: function() {
        console.log('deleted!!')
      }
    })
  },
  edit: function(e) {
    e.preventDefault();
    this.$('form').hide();
    var id = this.$(e.target).closest('li').data('id');
    var album = App.albums.findWhere({id: id}).toJSON();
    var $f = this.$('form#update_album');
    $f.find('input[name="title"]').val(album.id);
    $f.find('input[name="title"]').val(album.title);
    $f.find('input[name="artist"]').val(album.artist);
    $f.find('input[name="date"]').val(album.date);
    $f.find('input[name="cover"]').val(album.cover);
    $f.find('input[name="price"]').val(album.price);
    $f.find('input[type="submit"]').val("Update");
    $f.show();
  },
  addNew: function(e) {
    e.preventDefault();
    $('form').hide()
    $('form#new_album').show();
  },
  create: function(e) {
    e.preventDefault();
    var $f = this.$('form');

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.adminView.render();
      }
    });
  },
  update: function(e) {
    e.preventDefault();
    var $f = this.$('#update_album');

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        album = App.albums.findWhere({ id: +json.id });
        album.set(json);
        console.log('success');
        App.adminView.render();
      }
    });
  },
  render: function() {
    this.$el.html(this.template({albums: App.albums.toJSON()}))
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  },
})