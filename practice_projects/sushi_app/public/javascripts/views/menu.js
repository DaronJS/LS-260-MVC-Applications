var MenuView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    id: 'items'
  },
  events: {
    'click a.add_cart': 'addToCart'
  },
  addToCart: function(e) {
    e.preventDefault();
    var itemId = $(e.target).closest('li').attr('data-id');
    var item = this.collection.findWhere({id: +itemId});
    App.trigger('add_to_cart', item);
  },
  render: function() {
    this.collection.each(this.renderItem.bind(this))
    $('#content').html(this.el);
  },
  renderItem: function(item) {
    var itemView = new ItemView({model: item});
    this.$el.append(itemView.el);
  },
  initialize: function() {
    this.render()
  }
})