(function ($) {

    $(function(){
    // $(document).foundationAlerts();
    // $(document).foundationButtons();
    // $(document).foundationAccordion();
    // $(document).foundationNavigation();
    // $(document).foundationCustomForms();
    // $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});

    // $(document).tooltips();
    // $('input, textarea').placeholder();

    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});
    });

    // Hide scrollbar on iOS devices
    window.scrollTo(0, 1);

    // Call FitText on stuff
    $(".responsive-text").fitText();

    // Use Smooth Scroll to intercept all a links
    $('a').smoothScroll();
    
    // jMetronome
    $(function() {
      var lineHeight = parseInt($('body').css('line-height'),10);
      function balanceHeight(el) {
          var h = $(el).outerHeight();
          var delta = h % lineHeight;
          if (delta !== 0)
          {
            var paddingDirection = ($(el).is('img') || $(el).is('object')) ?
                                                  'padding-top' : 'padding-bottom';
              var currentPadding = parseInt($(el).css(paddingDirection),10);
              $(el).css(paddingDirection, currentPadding + lineHeight - delta);
          }
      }
      $('img, iframe, object, video').each(function() {
          if ($(this).css('display') === 'inline')
          {
              $(this).css('display', 'block');
          }
          if ($(this).is('iframe','img','video','object'))
          {
              $(this).load(function(){ balanceHeight(this); });
          }
          else
          {
              balanceHeight(this);
          }
      });
    });
})(jQuery);