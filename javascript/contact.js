document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
  new WOW().init();






  
  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
        (function($) {
            var s,
            spanizeLetters = {
              settings: {
                letters: $('.js-spanize'),
              },
              init: function() {
                s = this.settings;
                this.bindEvents();
              },
              bindEvents: function(){
                s.letters.html(function (i, el) {
                  //spanizeLetters.joinChars();
                  var spanizer = $.trim(el).split("");
                  return '<span>' + spanizer.join('</span><span>') + '</span>';
                });
              },
            };
            spanizeLetters.init();
          })(jQuery);


          