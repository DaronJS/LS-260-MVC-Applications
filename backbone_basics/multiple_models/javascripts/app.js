
var ItemModel = Backbone.Model.extend({
  attributeId: 'id'
});
var Items = {
  collection: [],
  $tbody: $('tbody'),
  render: function() {
    this.$tbody.html(template({
      items: this.collection,
    }));
  },
  create: function(item_data) {
    item_data.id = this.collection.length + 1;
    var item = new ItemModel(item_data);
    this.collection.push(item);
    return item;
  },
  bind: function() {
    this.$tbody.on('click', 'a', this.remove.bind(this));
  },
  remove: function(e) {
    e.preventDefault()
    var $e = $(e.target);
    var model = _(this.collection).findWhere({id: +$e.data('id')})
    this.collection = _(this.collection).without(model);
    this.render();
  },
  sortBy: function(prop) {
    this.collection = _(this.collection).sortBy(function(m) {
     return m.attributes[prop];
    });

    this.render();
  },
  seedCollection: function() {
    items_json.forEach(this.create.bind(this));
  },
  empty: function() {
    this.collection = [];
    this.render();
  },
  init: function() {
    this.seedCollection();
    this.render();
    this.bind();
    
  }
}

var template = Handlebars.compile($('#items').html());

Handlebars.registerPartial('item', $('#item').html());

Items.init();

$('form').on('submit', function(e) {
  e.preventDefault();
  var inputs = $('form').serializeArray();
  var attrs = {};
  var item;
  _(inputs).each(function(input) { attrs[input.name] = input.value });
  item = Items.create(attrs);
  Items.$tbody.append(Handlebars.partials.item(item.toJSON()));
  this.reset();
});

$('th').on('click', function() {
  var prop = $(this).data('prop');
  Items.sortBy(prop);
});

$('p a').on('click', function(e) {
  e.preventDefault();
  Items.empty();
})




