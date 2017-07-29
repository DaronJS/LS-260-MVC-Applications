var template = Handlebars.compile($('#users').html());

function renderCollection() {
  document.body.innerHTML = template({users: this.toJSON()});
}

var User = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
});

var Users = Backbone.Collection.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
  model: User,
  parse: function(response, options) {
    response.forEach(function(user) {
      var company = user.company;
      user.company_name = company.name;
      user.catchPhrase = company.catchPhrase;
      user.company_bs = company.bs;
      delete user.company;
    });

    return response;
  },
  render: function() {
    $('body').html(template({users: this.toJSON()}));
  },
  initialize: function() {
    this.on('sync sort', renderCollection);
  },
});

var writers = new Users();
writers.fetch({
  success: function() {
    writers.create({name: 'Daron', email: 'dspaulding25@gmal.com'}, {
      success: function() {
        console.log(writers.toJSON());
      }
    });
  },
});
