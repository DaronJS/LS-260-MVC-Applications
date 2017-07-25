var item
var Item = Backbone.Model.extend();
var Items = Backbone.Collection.extend({
  model: Item,
  comparator: 'name',
});

templates = {};
$('[type="text/x-handlebars"]').each(function() {
  $templ = $(this);
  templates[$templ.attr('id')] = Handlebars.compile($templ.html());
});

Handlebars.registerPartial('item', '{{templates.item}}');

var item_1 = new

items = new Items();

$('tbody').html(templates.items({items: items.toJSON()}));




