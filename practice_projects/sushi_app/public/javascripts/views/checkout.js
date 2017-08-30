var CheckoutView = Backbone.View.extend({
  template: JST.checkout,
  attributes: {
    id: 'checkout'
  },
  events: {
    'click footer > a': 'cancel',
    'submit'          : 'order',
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
  },
  initialize: function() {
    this.render();
  }
});