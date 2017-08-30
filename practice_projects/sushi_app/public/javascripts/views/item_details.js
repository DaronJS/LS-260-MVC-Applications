var ItemDetailsView = Backbone.View.extend({
  template: JST.item_details,
  attributes: {
    id: 'item_details',
  },
  events: {
    'click a.add_cart' : "addToCart",
    'click a.close'    : 'removeDetailsView',
    'click .nav'  : 'changeDetailsItem',
  },
  changeDetailsItem: function(e) {
    e.stopPropagation();
    this.remove();
    var changeBy = $(e.target).closest('div').hasClass('prev') ? -1 : 1;
    var newModelId = this.model.get('id') + changeBy;
    App.trigger('showDetails', newModelId);
  },
  removeDetailsView: function(e) {
    e.preventDefault();
    this.remove();
    App.trigger('detailsViewRemoved');
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('#content').append(this.$el);
  },
  initialize: function() {
    this.render();
    this.model.bind('change', this.render, this);
  }
});