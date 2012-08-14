(function ($) {
  var currentIndex = 0;

  function onMobile() {
    return $(window).width() < 768;
  }

  function initializeMarkup($topbar) {
    var $attached = $topbar.find('#mainNav');

    // Pull element out of the DOM for manipulation
    $attached.detach();

    $attached.find('li.has-dropdown>a').each(function () {
      var $link = $(this),
          $dropdown = $link.siblings('ul.dropdown'),
          $titleLi = $('<li class="title show-on-phones js-generated"><h5></h5></li>');
    });

    // Put element back in the DOM
    $attached.appendTo($topbar);
  }

  $('body.ie8 .has-dropdown, body.ie7 .has-dropdown').live({
    mouseenter: function() {
      $(this).children('.dropdown').show();
    },
    mouseleave: function() {
      $(this).children('.dropdown').hide();
    }
  });

  $('.has-dropdown>a').on('click', function (event) {
    if (onMobile()) {
      var $this = $(this),
          $selectedLi = $this.closest('li'),
          $nextLevelUl = $selectedLi.find('>ul'),
          $titleLi = $('<li class="title show-on-phones js-generated"><h5></h5></li>'),
          $attached = $this.closest('#mainNav'),
          $topbar = $this.closest('#mainNav'),
          $largestUl;

      event.preventDefault();

      currentIndex += 1;

      $selectedLi.addClass('active');
      $attached.css({'left': '-' + 100 * currentIndex + '%'});
      $attached.find('>.name').css({'left': 100 * currentIndex + '%'});

      if (currentIndex === 1) {
        $largestUl = $nextLevelUl;
        $nextLevelUl.find('ul.dropdown').each(function () {
          if ($(this).outerHeight() > $largestUl.outerHeight()) {
            $largestUl = $(this);
          }
        });
        $attached.css({'height': $largestUl.outerHeight() + 45 + 'px'});
      }
    }
  });

}(jQuery));