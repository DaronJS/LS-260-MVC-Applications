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
  removeItem: function(item) {
    var cartItem = this.get(item.get('id'));
    var quantity = cartItem.get('quantity');
    if( quantity > 1) { 
      cartItem.set('quantity', quantity - 1);
    }else {
      this.remove(cartItem);
    }
    this.update();
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
  },
  empty: function() { 
    this.reset();
    this.update();
  },
  update: function() {
    this.setQuantity();
    this.setTotal();
    localStorage.setItem('sushiCart', JSON.stringify(this.toJSON()));
    this.trigger('cart_updated');
  },
  initialize: function() {
    var savedCart = JSON.parse(localStorage.getItem('sushiCart'));
    if(savedCart) { this.set(savedCart) };
    this.update();
  },
});