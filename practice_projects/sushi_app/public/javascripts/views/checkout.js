var CheckoutView = Backbone.View.extend({
  template: JST.checkout,
  attributes: {
    id: 'checkout'
  },
  events: {
    'click footer > a': 'cancel',
    'submit'          : 'order',
    'click .fa-minus'   : 'removeOne',
    'click .fa-plus'    : 'addOne'
  },
  addOne: function(e) {
    var itemId = $(e.target).closest('tr').data('id');
    App.trigger('add_to_cart', +itemId);
    this.render();
  },
  removeOne: function(e) {
    var itemId = $(e.target).closest('tr').data('id');
    App.trigger('remove_from_cart', +itemId);
    this.render();
  },
  order: function(e) {
    e.preventDefault();
  },
  cancel: function(e) {
    e.preventDefault();
    this.remove();
    App.trigger('order_canceled');
  },
  render: function() {
    this.$el.html(this.template({items: this.collection.toJSON(), total: this.collection.total}));
    $('#content').html(this.$el);
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});