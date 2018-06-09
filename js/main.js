$(document).ready( function() {

  var iconMenu = $('.icon-menu--content')
  var overlay = $('.overlay-menu')
  var width = window.innerWidth

  var windowsWidth = $(window).width()

  $(iconMenu).on('click', function(e){
    e.preventDefault()
    var el = $(this)
    if( width < 1024 ){
      if( $(overlay).is(':hidden') ){
        el.addClass('icon-menu--active')
        $(overlay).addClass('active-overlay')
        $('body').css('overflow-y','hidden')
      }else{
        el.removeClass('icon-menu--active')
        $(overlay).removeClass('active-overlay')
        $('body').css('overflow-y','visible')
      }
    }
  })

  // Evento que cierra el menu principal al seleccionar una opción
  $('.item-menu').on('click', function(){
    if ( $('.icon-menu--content').is('hidden')){
    }else{
      if ( $(iconMenu).hasClass('icon-menu--active') ){
        $(iconMenu).removeClass('icon-menu--active')
        $(overlay).removeClass('active-overlay')
        $('body').css('overflow-y','visible')
      }
    }
  })

  // Evento para el item del menu que cuenta con sub menu --> Servicios
  $('.item-special').on('click', function(){
    if( width < 1024 ){
      if($('.overlay-submenu').is(':hidden')){
        $('.overlay-submenu').fadeIn('slow')
        $('.menu-options').css({'filter':'blur(4px)','-webkit-filter':'blur(4px)'})
      }
    }else{

    }
  })
  
  // Evento del botón atras del submenu
  $('.back').on('click', function(){
    var el = $(this)
    el.parent().parent().fadeOut()
    $('.menu-options').css('filter','blur(0px)')
  })

  // Evento de los item del submenu
  $('.item-submenu').on('click', function(){
    if ( $('.icon-menu--content').is('hidden')){
    }else{
      if ( $(iconMenu).hasClass('icon-menu--active') ){
        $(iconMenu).removeClass('icon-menu--active')
        $(overlay).removeClass('active-overlay')
        $('body').css('overflow-y','visible')
        $('.overlay-submenu').fadeOut()
        $('.menu-options').css('filter','blur(0px)')
      }
    }
  })

  // Evento para desplegar el submenu de servicios del footer
  $('.item-footer').on('click', function(){
    if( $('.footer-submenu').is(':hidden') ){
      $('.footer-submenu').fadeIn('slow')
    }else{
      $('.footer-submenu').fadeOut('slow')
    }
  })

  // Evento que cierra el submenu del footer al clickear en una opción
  $('.footer-submenu ul li a').on('click', function(){
    $('.footer-submenu').fadeOut('slow')
  })

  // Slider principal
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: 'false',
  })

  // Eventos de la cabecera de sección de "Nosotros (we)"
  $('.we-header--box').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    var attribute = el.attr('id')
    var attributeContent = '#we-'+attribute
    $(attributeContent).addClass('we-text--active animated fadeIn')
    $(attributeContent).siblings('div').removeClass('we-text--active')
    if( !el.hasClass('we-header--active') ){
      el.addClass('we-header--active')
      el.siblings('div').removeClass('we-header--active')
    }
  })

  // Slider de clientes
  $('.slider-clients').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: 'false',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ], 
    customPaging : function(slider, i){
      var thumb = $(slider.$slides[i]).data()
      return '<div class="slider-thumb"><a></a></div>'
    },
      
  })

  // Efecto scroll en el body
  $(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500)
  })
  
  // Botón de scroll 
  $('#btnScroll').on('click', function(e){
    e.preventDefault()
    var el = $(this)

    if( el.hasClass('button-bottom') ){
      $('.btnUp').remove()
      el.html('<a href="#home" class="btnDown""><ion-icon name="arrow-round-up"></ion-icon></a>')
      el.removeClass('button-bottom').addClass('button-top')
    }else{
      $('.btnDown').remove()
      el.html('<a href="#we" class="btnUp"><ion-icon name="arrow-round-down"></ion-icon></a>')
      el.removeClass('button-top').addClass('button-bottom')
    }

  })

  

  // Capturando el evento de scrolling en el body
  $(window).scroll(function(){
    var el = $('#btnScroll')
    if( windowsWidth < 1024 ){
      if( $(this).scrollTop() > 200 ){
        $('.btnUp').remove()
        el.html('<a href="#home" class="btnDown""><ion-icon name="arrow-round-up"></ion-icon></a>')
        el.removeClass('button-bottom').addClass('button-top')
      }else{
        $('.btnDown').remove()
        el.html('<a href="#we" class="btnUp"><ion-icon name="arrow-round-down"></ion-icon></a>')
        el.removeClass('button-top').addClass('button-bottom')
      }
    }else{
      if( $(this).scrollTop() > 100 ){
        $('.btnUp').remove()
        el.html('<a href="#home" class="btnDown""><ion-icon name="arrow-round-up"></ion-icon></a>')
        el.removeClass('button-bottom').addClass('button-top')
      }else{
        $('.btnDown').remove()
        el.html('<a href="#we" class="btnUp"><ion-icon name="arrow-round-down"></ion-icon></a>')
        el.removeClass('button-top').addClass('button-bottom')
      }
    }
  })

  $('.quality-tabs .tab').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    var elAtributte = "#quality-"+el.attr('id')
    $(elAtributte).addClass('def-active animated fadeIn')
    $(elAtributte).siblings('div').removeClass('def-active')
    if( !el.hasClass('tab-active') ){
      el.addClass('tab-active')
      el.siblings('div').removeClass('tab-active')
    }
  })

  // Evento que muestra el modal de Calidad
  $('.button-quality').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    $('.overlay-quality').fadeIn('slow')
    $('body').css('overflow-y','hidden')
  })

  // Evento que cierra el modal de Calidad
  $('.button-close').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    $('body').css('overflow-y','visible')
    $('.overlay-quality').fadeOut('slow')
  })

});