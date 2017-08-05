jQuery.fx.off = true;

describe('Tracks view', function() {
  var album = albums_scaffold.findWhere({title: "Unbreakable Smile (Bonus Track Version)"});
  var view = new TracksView({ collection: tracks_scaffold, album: album });


  it('has a collection property assigned', function() {
    expect(view.collection).toBeDefined();
    expect(view.collection.length).toBe(tracks_scaffold.length);
  });

  it('has a handlebars template compiled', function() {
    expect(view.template).toBeDefined(); 
  });

  it('has an album property assigned', function() {
    expect(view.album).toBeDefined();
  });

  it('renders a modal to the body when render called', function() {
    view.render();
    expect($('#tracks_modal li').length).toBe(tracks_scaffold.length);
  });

  it('removes the view when fadeout called', function() {
    view.fadeOut();
    expect($('#tracks_modal').length).toBe(0);
  });
})