describe('Menu View', function() {
  new MenuView({collection: new Menu(menu_data)});
  it('adds an unordered list of menu items to the DOM', function(){
    var $menu_lis = $('#content ul').children();
    expect($menu_lis.length).toEqual(menu_data.length);
  });
})