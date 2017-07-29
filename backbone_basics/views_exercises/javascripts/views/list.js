var ListView = Backbone.View.extend({
  el: '#favorites',
  render: function() {
    this.collection.each(this.renderSingle.bind(this));
  },
  renderSingle: function(model) {
    var newView = new ItemView({model: model});
    this.$el.append(newView.render());
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderSingle);
  },
})