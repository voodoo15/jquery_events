/*
  Exercise:  Sign-in J-Query Events Exercise
  Name:  Arnold Redoblado
  Date:  2016-04-25
  Purpose:  Add various jquery animations to sign-in page
*/

$(document).on('ready', function() {

  //At sign-in click fade in modal
  $( ".signin" ).click( function() {
    $( ".modal" ).fadeIn( "fast", function() {
      // Animation complete
    });
  });

  //Close modal when click on close
  $( ".close" ).click( function() {
    $( ".modal" ).fadeOut( "fast", function() {
      // Animation complete
    });
  });

  //Add .error class to text fields when submit clicked
  $( '.submit' ).click( function() {
    $( "[name = 'pass']" ).addClass( 'error' );
    $( "[name = 'user']" ).addClass( 'error' );
  });

  //Remove .error class when password field clicked
  $("[name = 'pass']").on('focus', function() {
    $("[name = 'pass']").removeClass("error");
  });

  //Remove .error class when user field clicked
  $("[name = 'user']").on('focus', function() {
    $("[name = 'user']").removeClass("error");
  });

  //Bonus, try to close modal when clicked, I'll try and get back to this
  //after I finish the assignment
  // $('.modal').click( function() {
  //   $('.modal').fadeOut();
  // });
  ﻿
});
