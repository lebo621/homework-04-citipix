$(function(){

  // listen for certain keywords typed into the input field
  // if "new york" "new york city" or "nyc" are typed and the submit button is pressed, display nyc.jpg as background
  // if "sydney" or "syd" typed and button pressed, change display to sydney.jpg
  // if "austin" or "atx" typed and button hit, display austin.jpg
  // if "los angeles" or "lax" or "la" typed and button hit, display la.jpg
  // if "san fransisco" or "sf" or "bay area" typed and button hit, display sf.jpg

  //select the form element and run the changeBackground function when an entry is submitted
  $('form').submit(changeBackground);

  function changeBackground(event){
    //prevent the form submission from sending data to a back end server
    event.preventDefault();
    //toUpperCase allows for user to type in any case and have their city image still pop up
    var cityName = $("#city-type").val().toUpperCase();
    //all cityNames must be in uppercase for toUpperCase css styling to work properly
    if (cityName === "NEW YORK" || cityName === "NEW YORK CITY" || cityName === "NYC") {
      $('body').attr('class', 'nyc');
    } else if (cityName === "SYDNEY" || cityName === "SYD") {
      $('body').attr('class', 'sydney');
    } else if (cityName === "AUSTIN" || cityName === "ATX") {
      $('body').attr('class', 'austin');
    } else if (cityName === "LOS ANGELES" || cityName === "LAX" || cityName ==="LA") {
      $('body').attr('class', 'la');
    } else if (cityName === "SAN FRANSISCO" || cityName === "SF" || cityName ==="BAY AREA") {
      $('body').attr('class', 'sf');
    }  
  }




});