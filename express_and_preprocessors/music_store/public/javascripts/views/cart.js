var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: document.getElementById('cart'),
  events: {
    'click a': 'destroy',
  },
  destroy: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.collection.trigger('destroy', +$e.data('id'));
    this.render();
    $('#cart input').attr('checked', 'true');
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  },
})