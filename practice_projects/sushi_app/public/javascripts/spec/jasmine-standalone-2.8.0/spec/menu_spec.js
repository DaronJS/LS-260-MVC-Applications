describe("Menu collection", function() {
  beforeEach(function() {
    this.menu = new Menu(menu_data);
  });

  it("should have MenuItem as it's model", function() {
    expect(this.menu.model).toEqual(MenuItem);
  });

  it('returns the a menu item', function() {
    var itemName = this.menu.get(1).toJSON().name;
    expect(itemName).toBe('Sashimi salad');
  });
});