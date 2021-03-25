var asteroidContainer = document.getElementById("asteroid-info");
var btn = document.getElementById("btn");
var pageCounter = 1;
//var i = 0;
//var htmlString = "";

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-1-1&api_key=DEMO_KEY');
  //https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-01&end_date=2020-01-01&api_key=DEMO_KEY%27
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  
  pageCounter++;
  
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
    var htmlString = "";
    // for (i = 0; i < data.length; i++) {
    //htmlString += "<p>" + "Asteroid name: " + data.near_earth_objects.2020-01-01[i].name + "Absolute magnitude: " + data.near_earth_objects.2020-01-01[i].absolute_magnitude_h + ".</p>";
    // }
 
    //htmlString += "<p>" + data.element_count + ".</p>";
    for (i = 0; i < 5; i++){
        htmlString += '<img src="' + data.photos[i].img_src + '"' + 'style="width:200px;height:200px;"' +  '>' + data.photos[i].id + '</img>' + "<br>";
    }
    

    asteroidContainer.insertAdjacentHTML('beforeend', htmlString);
}
