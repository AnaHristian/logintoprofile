$(function () {

  "use strict";

  var wheight = $(window).height(); //get the height of the window
  var wwidth = $(window).width(); //get the height of the window

  $('.fullheight').css('height', wheight); //set to window tallness  

  //add fullheight to login page on mobile
  if (wwidth <= 767) {
    $('.login-container').css('height', wheight);
  } else {
    $('.login-container').removeAttr('style');
  }

  //adjust height of .fullheight elements on window resize
  $(window).resize(function () {
    wheight = $(window).height(); //get the height of the window
    wwidth = $(window).width(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  

    //add fullheight to login page on mobile resize
    if (wwidth <= 767) {
      $('.login-container').css('height', wheight);
    } else {
      $('.login-container').removeAttr('style');
    }
  });
  
  // form
  $('input').blur(function () {
    var $this = $(this);
    if ($this.val())
      $this.addClass('filled');
    else
      $this.removeClass('filled');
  });
  
  // popover functionality
  $('[data-toggle="popover"]').popover();

  $('[data-toggle="popover"]').on('shown.bs.popover', function(){
    $("#cancel").click(function(){
      $('[data-toggle="popover"]').popover('hide');
    });
    $('#save').click(function(){
      var newInput = $(this).parents('.form-horizontal').find('input.form-control').val();
      if (newInput) {
        $(this).parents('.profile-element').find('span').text(newInput);
      }
      $('[data-toggle="popover"]').popover('hide');     
    });
  });

  //edit profile info on mobile view 
  $('.edit-info').click(function(){
      $('.profile-element').find('span').attr('contenteditable', 'true');
    });

});