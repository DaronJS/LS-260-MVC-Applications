function renderProduct(product) {
  $('article').html(templates.product(product.toJSON()));
}

function renderForm(product) {
  $('fieldset').html(templates.form(product.toJSON()));
}

function formatDateTime(date) {
  return new Date(date).toJSON().replace(/(\.[a-z0-9]*)/gi, '');
}

function formatDate(date) {
  var calendar = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 
                  'August', 'September', 'October', 'November', 'December'];

  var alternateSuffixes = ['st,', 'nd,', 'rd,'];

  var date = new Date(date);
  var year = date.getFullYear();
  var month = calendar[date.getMonth()];
  var day = date.getDate();
  var time = date.getHours() + ':' + date.getMinutes();
  var suffix;

  suffix = alternateSuffixes.length >= day ?  alternateSuffixes[day] : 'th,';

  var formattedDate = month + ' ' + day + suffix + ' ' + year + ' ' + time;

  return formattedDate;
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





