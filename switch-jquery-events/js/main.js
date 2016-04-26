/*
  Exercise:  Switch J-Query Events Exercise
  Name:  Arnold Redoblado
  Date:  2016-04-25
  Purpose:  Add event to turn/off light (change css class on/off),
            change text based on switch status
 */

 $(document).on('ready', function() {

   $(".switch").click( function() {
        //Turn the lights off
        $( this ).toggleClass( "off" );
        //Turn the background dark
        $("body").toggleClass("dark")

  //Change text depending on switch status
  if ( $(".status").text() === "It's so bright in here!" ) {
      $(".status").text( "One, two, Freddy's coming for you..." )

  } else {
      $(".status").text( "It's so bright in here!" )
  };

  // Realized toggle is now an animation method
  // $( ".status" ).toggle(
  //   function() {
  //     $( this ).text("Hey, who turned off the lights?");
  //   }, function() {
  //         $( this ).text("It's so bright in here!");
  //      })

  });

 });
