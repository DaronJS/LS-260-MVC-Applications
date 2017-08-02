
var ItemModel = Backbone.Model.extend({
  idAttribute: 'id',
  initialize: function() {
    this.set('id', this.collection.nextID());
  },
});

var Items = Backbone.Collection.extend({
  model: ItemModel,
  lastID: 0,
  nextID: function() {
    return ++this.lastID;
  },
  sortByProp: function(prop) {
    this.comparator = prop;
    this.sort();
  }
})


var itemsView = Backbone.View.extend({
  el: 'tbody',
  template: Handlebars.compile($('#items').html()),
  events: {
    'click a' : 'remove',
  },

  remove: function(e) {
    e.preventDefault()
    var $e = $(e.target);
    this.collection.remove(+$e.data('id'));
  },

  render: function() {
    var context = {items: this.collection.toJSON()};
    this.$el.html(this.template(context));
  },

  deleteAll: function(e) {
    e.preventDefault();
    this.collection.reset();
  },

  initialize: function() {
    this.listenTo(this.collection, 'remove add reset sort', this.render);
  }
})





var App = {
  init: function() {
    Handlebars.registerPartial('item', $('#item').html());
    this.list = new Items(items_json);
    this.listView = new itemsView({collection: this.list});
    this.listView.render();
  }
}

App.init();


$('form').on('submit', function(e) {
  e.preventDefault();
  var inputs = $('form').serializeArray();
  var attrs = {};
  var item;
  _(inputs).each(function(input) { attrs[input.name] = input.value });
  App.list.add(attrs);
  document.getElementsByTagName('form')[0].reset();
});

$('p').on('click', 'a', function(e) {
  e.preventDefault();
  App.list.reset();
});

$('th').on('click', function(e) {
  var prop = $(e.target).data('prop');
  App.list.sortByProp(prop);
});
