var MenuView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    id: 'items'
  },
  events: {
    'click a.add_cart': 'addToCart',
    'click article header': 'showDetails',
  },
  showDetails: function(e) {
    e.preventDefault();
    this.remove();
    var itemId = $(e.target).closest('li').attr('data-id');
    App.trigger('showDetails', itemId);
  },
  addToCart: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var itemId = $(e.target).closest('li').attr('data-id');
    App.trigger('add_to_cart', itemId);
  },
  render: function() {
    this.collection.each(this.renderItem.bind(this))
    $('#content').append(this.el);
  },
  renderItem: function(item) {
    var itemView = new ItemView({model: item});
    this.$el.append(itemView.el);
  },
  initialize: function() {
    this.on('destroy', this.remove.bind(this));
    this.render();
  }
})