var ItemDetailsView = Backbone.View.extend({
  template: JST.item_details,
  attributes: {
    id: 'item_details',
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('#content').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});