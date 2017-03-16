/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//**********MY FUNCTIONS*************
var makeMarkers = function(parsed) {
  var markers= [];
  _.each(parsed, function(obj){
    markers.push(L.marker([obj.LAT,obj.LNG]));
  })
  return markers;

};



var plotMarkers = function(marker) {
 return  _.map(marker, function(num){
    return num.addTo(map).bindPopup("<li> Location </li>"+num['_latlng']).openPopup();
  });
};


var removeMarkers = function(marker) {
   _.each(marker,function(obj){
  map.removeLayer(obj);
  });
};

var layer = [];

var text = ["Trader Joe's",'Wholefoods','Safeway']

var text2 = ["There are 6 Trader Joe's supermarkets in San Francisco. Click on the markers on the map to see there locations(coordinates). Click 'Next' to see other supermarket chains!",
"There are 6 Wholefoods supermarkets in San Francisco. Click on the markers on the map to see there locations(coordinates). Click 'Next' to see other supermarket chains!",
"There are 15 Safeway supermarkets in San Francisco. Click on the markers on the map to see there locations(coordinates). Click 'Next' to see other supermarket chains!"]

var clickNextButton = function() {
  if (state.slideNumber+1 > state.slideData.length ||state.slideNumber+1>2 ){
    state.slideNumber = 0
  }
  else {
    state.slideNumber = state.slideNumber+1
  }
  var store= state.slideData[state.slideNumber]

  $('.main').text(text[state.slideNumber])
    $('#note').text(text2[state.slideNumber])

    var markers = makeMarkers(store);
    if(layer.length){
      removeMarkers(layer);
      layer=[];
    }
    layer = plotMarkers(markers);
  }

var clickPreviousButton = function() {

  if (state.slideNumber-1 < 0){
    state.slideNumber = state.slideData.length-1
  }
  else{
    state.slideNumber = state.slideNumber-1
  }
  var store= state.slideData[state.slideNumber];

  $('.main').text(text[state.slideNumber])
    $('#note').text(text2[state.slideNumber])

  var markers = makeMarkers(store);

  if(layer.length){
    removeMarkers(layer);
    layer=[];
  }
  layer = plotMarkers(markers);

  }
