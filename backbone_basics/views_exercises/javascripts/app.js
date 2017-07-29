people = [ 
{
  name: 'Joe',
  colors: ['red', 'blue', 'green'],
},

{
  name: 'Erica',
  colors: ['pink', 'purple', 'yellow'],
},

{
  name: 'Danny',
  colors: ['black', 'white', 'brown'],
},

]



var App = {
  add: function(data) {
    this.list.add(data);
  },
  init: function() {
    this.appView = new AppView();
    this.appView.render();
    this.list = new List(people);
    this.listView = new ListView({collection: this.list});
    this.listView.render();
    this.on('new', this.add.bind(this));
  }
}

_.extend(App, Backbone.Events)
App.init();