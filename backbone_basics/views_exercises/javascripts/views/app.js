var AppView = Backbone.View.extend({
  el: 'body',
  template: Handlebars.templates.app,
  newPersonTemplate: Handlebars.templates.modal,
  events: {
    'click #add-person' : 'renderNewPersonForm',
    'click .btn-add' : 'addPerson',
    'click .btn-cancel' : 'cancel',
  },
  addPerson: function(e) {
    e.preventDefault();

    var data = {
      name: $('#name').val(),
      colors: [$('#color1').val(), $('#color2').val(), $('#color3').val()],
    }

    this.removeModal();
    App.trigger('new', data);
  },
  cancel: function(e) {
    e.preventDefault();
    this.removeModal();
  },
  removeModal: function() {
    $('#new-person-modal').remove();
  },
  renderNewPersonForm: function(e) {
    e.preventDefault();
    this.$el.append(this.newPersonTemplate());
  },
  render: function() {
    this.$el.html(this.template({}));
  },
})