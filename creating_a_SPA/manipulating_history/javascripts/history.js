$('nav').on('click', 'a', function(e) {
  e.preventDefault();
  var $e = $(e.target);
  var id = $e.attr('href');
  switchPage(id);

  history.pushState({id: id}, $e.text(), location.pathname + id)
})

$(window).on('popstate', function(e) {
  var state = e.originalEvent.state;
  switchPage(!!state ? state.id : '#page_1');
})

if(location.hash) {
  switchPage(location.hash);
}

function switchPage(id) {
  $('.active').removeClass('active');
  $('nav a[href="' + id + '"]').addClass('active');
  $('article').hide().filter(id).show();
}