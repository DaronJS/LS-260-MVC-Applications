function renderProduct(product) {
  $('article').html(templates.product(product.toJSON()));
}

function renderForm(product) {
  $('fieldset').html(templates.form(product.toJSON()));
}

function formatDateTime(date) {
  return moment(date).format();
}

function formatDate(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}



var ProductModel = Backbone.Model.extend({
  setDateTime: function() {
    this.set('datetime', formatDateTime(this.get('date')));
  },
  setFormattedDate: function() {
    this.set('date_formatted', formatDate(this.get('date')));
  },
  initialize: function() {
    this.setDateTime();
    this.setFormattedDate();
  },
});

templates = {};
$('[type="text/x-handlebars"]').each(function() {
  $tmpl = $(this);
  templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
});


var product = new ProductModel(product_json);
renderProduct(product);
renderForm(product);

$('form').on('submit', function(e) {
  e.preventDefault();
  e.stopPropagation();
  var newValues = $(this).serializeArray();
  var date = Date.now();
  var datetime = formatDateTime(date);
  var formattedDate = formatDate(date);

  product.set({
    date: date,
    datetime: datetime,
    date_formatted: formattedDate, 
    name: newValues[0].value,
    description: newValues[1].value,
  });

  renderProduct(product);
  renderForm(product);
})





