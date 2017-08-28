describe('Cart Collection', function() {
  beforeEach(function() {
    this.menu = new Menu(menu_data);
    this.cart = new CartItems();
  });

  it('adds an item to the cart', function() {
    this.cart.addItem(this.menu.get(1));
    var length = this.cart.length;
    expect(length).toBe(1);
  });

  it('updates total price', function() {
    this.cart.addItem(this.menu.get(1));
    expect(this.cart.total).toEqual(12);
    this.cart.addItem(this.menu.get(2));
    expect(this.cart.total).toEqual(33);
  });

  it('removes all items from cart', function() {
    var total;
    var length;
    this.cart.addItem(this.menu.get(1));
    this.cart.addItem(this.menu.get(2));
    this.cart.empty();
    length = this.cart.length;
    total = this.cart.total;
    expect(length).toBe(0);
    expect(total).toBe(0);
  })
})
