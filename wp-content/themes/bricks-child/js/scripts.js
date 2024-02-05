jQuery(document).ready(function ($) {
    $(document).on('bricks/form/custom_action', function (event, data) {
        console.log("Evento bricks/form/custom_action disparado", data);

        if (data.type === 'success') {
            $(event.target).slideUp();
        }
    });
    $('.desplega-form').click(function (e) {
        e.preventDefault();
        e.stopPropagation(); // Añade esta línea para detener la propagación del evento
        $(this).next().slideDown();
        $(this).remove();
    });


    $('.box-grey, .box-link').click(function (e) {
        e.preventDefault();
        e.stopPropagation(); // Evitar que el evento se propague hacia arriba
        var targetId = $(this).data('id');
        $('.slide-right').addClass('show');
        $('.div-right').removeClass('show');
        $('#div-' + targetId).addClass('show');
        $('body').addClass('show-layer');
    });

    $('.content-testimonial').click(function(){
        $('.testimonial-active').removeClass('testimonial-active');
        $(this).addClass('testimonial-active');
        var targetId = $(this).data('id');
        $('.text-active').removeClass('text-active');
        $('#div-' + targetId).addClass('text-active');
    });

    $(document).click(function (event) {
        // Verifica si hay algún elemento con la clase 'show' en el documento
        if ($('.show').length) {
            // Si el elemento clickeado no tiene la clase 'show' y no es descendiente de un elemento con la clase 'show'
            if (!$(event.target).hasClass('show') && $(event.target).closest('.show').length === 0) {
                $('.show').removeClass('show');
                $('body').removeClass('show-layer');
            }
        }
    });

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $(this).fadeOut('slow', function () {
            $('#sendOk').fadeIn('slow');
        });
    });

    $(window).on('scroll', function () {
        var windowScrollTop = $(this).scrollTop();
        var elementOffsetTop = $('.section-video').offset().top - 400;
        if (windowScrollTop > elementOffsetTop && windowScrollTop < elementOffsetTop + 400) {
            $('.section-video').addClass('video-fixed');
            $('.section-video').removeClass('video-scrolled');
        } else if (windowScrollTop > elementOffsetTop + 400) {
            $('.section-video').removeClass('video-fixed');
            $('.section-video').addClass('video-scrolled');
        } else {
            $('.section-video').removeClass('video-fixed');
            $('.section-video').removeClass('video-scrolled');
        }
    });
});
