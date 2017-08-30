var CartItems = Backbone.Collection.extend({
  model: MenuItem,
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(acc, cur) {
      return acc += cur.quantity;
    }, 0)
  },
  setTotal: function() {
    if(this.quantity > 0) {
      var items = this.toJSON();
      var item_quantities = this.pluck('quantity');
      var item_totals = item_quantities.map(function(q, i) { return q * items[i].price });
      this.total = item_totals.reduce(function(a, c) { return a + c });
    }else { 
      this.total = 0 
    }
  },
  addItem: function(item) {
    var existing = this.get(item.get('id'));

    if(existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    }else {
      item.set('quantity', 1);
      this.add(item);
    }
    this.update();
    this.trigger('cart_updated');
  },
  empty: function() { 
    this.reset();
    this.update();
    this.trigger('cart_updated');
  },
  update: function() {
    this.setQuantity();
    this.setTotal();
    localStorage.setItem('sushiCart', JSON.stringify(this.toJSON()));
  },
  initialize: function() {
    var savedCart = JSON.parse(localStorage.getItem('sushiCart'));
    if(savedCart) { this.set(savedCart) };
    this.update();
  },
});