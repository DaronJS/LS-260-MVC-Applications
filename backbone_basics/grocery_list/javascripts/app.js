var template = Handlebars.compile($('#items').html());
Handlebars.registerPartial('item', $('#item').html());

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
  sortBy: function(e) {
    var prop = $(e.target).data('prop');
    this.models = _(this.models).sortBy(function(model) {
      return model.attributes[prop];
    })
    App.render();
  },  
  initialize: function() {
    this.on('change remove add reset sort', App.render.bind(App));
  },
})

var App = {
  $tbody: $('tbody'),
  render: function() {
    var context = {items: list.models};
    this.$tbody.html(template(context));
  },
  create: function(e) {
    e.preventDefault();
    var inputs = $('form').serializeArray();
    var attrs = {};
    var item;
    _(inputs).each(function(input) { attrs[input.name] = input.value });
    list.add(attrs);
    document.getElementsByTagName('form')[0].reset();
  },
  bind: function() {
    this.$tbody.on('click', 'a', this.remove.bind(this));
    $('form').on('submit', this.create.bind(this));
    $('p a').on('click', this.deleteAll.bind(this));
    $('th').on('click', list.sortBy.bind(list));
  },
  deleteAll: function(e) {
    e.preventDefault();
    this.collection.reset();
  },
  remove: function(e) {
    e.preventDefault()
    var $e = $(e.target);
    list.remove(+$e.data('id'));
  },
  init: function() {
    this.render();
    this.bind();
  }
}

var list = new Items(items_json);
App.init();
