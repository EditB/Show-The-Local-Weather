$(document).ready(function(){
  
  if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(function(position){
      

   	var weatherURL = "https://fcc-weather-api.glitch.me/api/current?";

   	//alert("lat: " + position.coords.latitude);
   	weatherURL += "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;  
      	//alert("weatherURL: " + weatherURL); 
               
  	console.log("weatherURL: " + weatherURL);
  
  	$.getJSON(weatherURL, function(json) {
  		console.log(json);    
 
    		var weatherDesc = json.weather[0].description;
   
    		var iconURL = json.weather[0].icon;

    		var tempAvg = json.main.temp;
    		var tempType = "Celsius"
        var placeName = json.name;
    
		$("#iconDiv").html("<img src='" + iconURL + "' alt='weather icon'>");    
    		$("#weatherDescription").html(weatherDesc);   
      $("#location").html("<h3 class='text-primary'>"+ placeName + "</h3>");

      
      
		$("#temp").html("Temperature: " + tempAvg + " degrees " + tempType);
  
		$("#toggleTemp").on("click", function() {    
 			if (tempType == "Celsius") {
   				//change it to Farenheit
   				tempType = "Farenheit";
   				tempAvg = (tempAvg * 1.8) + 32;
          
 			}  
 			else {
   				//Change it to Celisus:
   				tempType = "Celsius";
   				tempAvg = (tempAvg - 32) / 1.8;
 			} 
  			$("#temp").html("Temperature: " + tempAvg.toFixed(2) + " degrees " + tempType);
		});  
	
    });
             
 
 });
  
}
                                                       
  else {
    console.log("there was an issue with getting the coords");
  }
  

});