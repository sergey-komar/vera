$(function(){

    $('.photography__tabs-item').on('click', function(e){
        e.preventDefault();

        $('.photography__tabs-item').removeClass('photography__tabs-item--active');
        $('.photography__content-item').removeClass('photography__content-item--active');

        $(this).addClass('photography__tabs-item--active');
        $($(this).attr('href')).addClass('photography__content-item--active');
    });

    $('.mobile__button').on('click', function(){
         $('.menu__list').slideToggle();
         $('.modal-dialog__close').removeClass('.menu__list');
        
    });


});