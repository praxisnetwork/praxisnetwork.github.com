$(function () {
    $('<a href="" id="back-to-top">Back to Top</a>')
        .click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1200);
            return false;
        })
        .appendTo($('body'));
});

function animateButton() {
    var button = $('#back-to-top');
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 400) {
        button.fadeIn();
    } else {
        button.fadeOut();
    }
}

$(document).ready(function() {
  $('nav#category-nav a').each(function() {
    var $this = $(this),
        value = $this.attr('href'),
        element = $(value);

    $(this).click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: element.offset().top
      }, 500);
    });
  });
});

$(window).resize(animateButton);
$(window).scroll(animateButton);
$(window).load(animateButton);

