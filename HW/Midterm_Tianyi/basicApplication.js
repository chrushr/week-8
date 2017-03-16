/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */
var map = L.map('map', {
  center: [ 37.7582, -122.438],
  zoom: 12
});

var Hydda_Full = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// var Supermarket = $.ajax ("https://raw.githubusercontent.com/chrushr/midtermproject/master/Supermarkets.json")



var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.

  "slideData": [    // I edit the JSON data to be an array of three arrays, each containing information about a supermaket chain
                    [
                     {
                       "Name": "Trader Joe's",
                       "Address": "555 9th St",
                       "LAT": 37.77089,
                       "LNG": -122.407624,
                       "POST": 94103,
                       "Neighborhood": "SOMISSPO,South Of Market"
                     },
                     {
                       "Name": "Trader Joe's",
                       "Address": "265 Winston Dr",
                       "LAT": 37.726699,
                       "LNG": -122.476232,
                       "POST": 94132,
                       "Neighborhood": "Lakeside,Stonestown"
                     },
                     {
                       "Name": "Trader Joe's",
                       "Address": "1095 Hyde St",
                       "LAT": 37.790733,
                       "LNG": -122.417725,
                       "POST": 94109,
                       "Neighborhood": "Lower Nob Hill,Nob Hill,Tenderloin"
                     },
                     {
                       "Name": "Trader Joe's",
                       "Address": "3 Masonic Ave",
                       "LAT": 37.783321,
                       "LNG": -122.447708,
                       "POST": 94118,
                       "Neighborhood": "Anza Vista,Laurel Heights"
                     },
                     {
                       "Name": "Trader Joe's",
                       "Address": "401 Bay St",
                       "LAT": 37.805549,
                       "LNG": -122.413859,
                       "POST": 94133,
                       "Neighborhood": "Fisherman's Wharf,North Beach"
                     },
                     {
                       "Name": "Trader Joe's",
                       "Address": "10 4th St",
                       "LAT": 37.78567,
                       "LNG": -122.40571,
                       "POST": 94103,
                       "Neighborhood": "Civic Center,Financial District,NOMA,South Of Market,Union Square"
                     },
                     {
                       "Name": "Whole Foods",
                       "Address": "2001 Market St",
                       "LAT": 37.768878,
                       "LNG": -122.426918,
                       "POST": 94114,
                       "Neighborhood": "Duboce Triangle,Lower Haight,Mission Dolores"
                     },
                     {
                       "Name": "Whole Foods",
                       "Address": "450 Rhode Island St",
                       "LAT": 37.76435,
                       "LNG": -122.402771,
                       "POST": 94107,
                       "Neighborhood": "Potrero District,Potrero Flats"
                     },
                     {
                       "Name": "Whole Foods",
                       "Address": "1150 Ocean Ave",
                       "LAT": 37.723811,
                       "LNG": -122.454773,
                       "POST": 94112,
                       "Neighborhood": "Potrero District,Potrero Flats"
                     },
                     {
                       "Name": "Whole Foods",
                       "Address": "399 4th St",
                       "LAT": 37.781091,
                       "LNG": -122.399748,
                       "POST": 94107,
                       "Neighborhood": "South Beach,South Of Market"
                     },
                     {
                       "Name": "Whole Foods",
                       "Address": "1765 California St",
                       "LAT": 37.790035,
                       "LNG": -122.423347,
                       "POST": 94109,
                       "Neighborhood": "Cathedral Hill,Laguna Heights,Little Osaka,Pacific Heights,Polk Gulch,Van Ness"
                     },
                     {
                       "Name": "Whole Foods",
                       "Address": "3950 24th St",
                       "LAT": 37.751776,
                       "LNG": -122.430862,
                       "POST": 94114,
                       "Neighborhood": "Dolores Heights,Noe Valley"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "5290 Diamond Heights Blvd",
                       "LAT": 37.743695,
                       "LNG": -122.438947,
                       "POST": 94131,
                       "Neighborhood": "Diamond Heights,Vista del Monte"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "4950 Mission St",
                       "LAT": 37.719746,
                       "LNG": -122.439006,
                       "POST": 94112,
                       "Neighborhood": "Crocker-Amazon,Mission Terrace"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "625 Monterey Blvd",
                       "LAT": 37.731293,
                       "LNG": -122.449753,
                       "POST": 94127,
                       "Neighborhood": "Sunnyside,Westwood Highlands"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "1335 Webster St",
                       "LAT": 37.78294,
                       "LNG": -122.431425,
                       "POST": 94115,
                       "Neighborhood": "Thomas Paine Square,Western Addition"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "730 Taraval St",
                       "LAT": 37.743348,
                       "LNG": -122.474029,
                       "POST": 94116,
                       "Neighborhood": "Inner Parkside,West Portal,Westlake"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "350 Bay St",
                       "LAT": 37.805995,
                       "LNG": -122.412878,
                       "POST": 94133,
                       "Neighborhood": "Fisherman's Wharf,North Beach"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "850 La Playa St",
                       "LAT": 37.772419,
                       "LNG": -122.509515,
                       "POST": 94121,
                       "Neighborhood": "Outer Richmond,Sutro Heights"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "298 King St",
                       "LAT": 37.776714,
                       "LNG": -122.394143,
                       "POST": 94107,
                       "Neighborhood": "Mission Bay,South Of Market"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "3350 Mission St",
                       "LAT": 37.743202,
                       "LNG": -122.422149,
                       "POST": 94110,
                       "Neighborhood": "Bernal Heights,Noe Valley,Transmission"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "2300 16th St",
                       "LAT": 37.76663,
                       "LNG": -122.409496,
                       "POST": 94103,
                       "Neighborhood": "Inner Mission,Mission,Potrero Flats,SOMISSPO"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "145 Jackson St",
                       "LAT": 37.796902,
                       "LNG": -122.398822,
                       "POST": 94111,
                       "Neighborhood": "Financial District,North Waterfront"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "735 7th Ave",
                       "LAT": 37.774638,
                       "LNG": -122.465253,
                       "POST": 94118,
                       "Neighborhood": "Inner Richmond,Richmond District"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "15 Marina Blvd",
                       "LAT": 37.804545,
                       "LNG": -122.432908,
                       "POST": 94123,
                       "Neighborhood": "Marina District"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "2350 Noriega St",
                       "LAT": 37.754064,
                       "LNG": -122.488813,
                       "POST": 94122,
                       "Neighborhood": "Central Sunset,Doelger City,Sunset District"
                     },
                     {
                       "Name": "Safeway",
                       "Address": "2020 Market St",
                       "LAT": 37.769053,
                       "LNG": -122.428076,
                       "POST": 94114,
                       "Neighborhood": "Duboce Triangle,Lower Haight,Mission Dolor"
                     }
                ],
                [
                  {
                    "Name": "Trader Joe's",
                    "Address": "555 9th St",
                    "LAT": 37.77089,
                    "LNG": -122.407624,
                    "POST": 94103,
                    "Neighborhood": "SOMISSPO,South Of Market"
                  },
                  {
                    "Name": "Trader Joe's",
                    "Address": "265 Winston Dr",
                    "LAT": 37.726699,
                    "LNG": -122.476232,
                    "POST": 94132,
                    "Neighborhood": "Lakeside,Stonestown"
                  },
                  {
                    "Name": "Trader Joe's",
                    "Address": "1095 Hyde St",
                    "LAT": 37.790733,
                    "LNG": -122.417725,
                    "POST": 94109,
                    "Neighborhood": "Lower Nob Hill,Nob Hill,Tenderloin"
                  },
                  {
                    "Name": "Trader Joe's",
                    "Address": "3 Masonic Ave",
                    "LAT": 37.783321,
                    "LNG": -122.447708,
                    "POST": 94118,
                    "Neighborhood": "Anza Vista,Laurel Heights"
                  },
                  {
                    "Name": "Trader Joe's",
                    "Address": "401 Bay St",
                    "LAT": 37.805549,
                    "LNG": -122.413859,
                    "POST": 94133,
                    "Neighborhood": "Fisherman's Wharf,North Beach"
                  },
                  {
                    "Name": "Trader Joe's",
                    "Address": "10 4th St",
                    "LAT": 37.78567,
                    "LNG": -122.40571,
                    "POST": 94103,
                    "Neighborhood": "Civic Center,Financial District,NOMA,South Of Market,Union Square"
                  }
                 ],

                 [
                  {
                    "Name": "Whole Foods",
                    "Address": "2001 Market St",
                    "LAT": 37.768878,
                    "LNG": -122.426918,
                    "POST": 94114,
                    "Neighborhood": "Duboce Triangle,Lower Haight,Mission Dolores"
                  },
                  {
                    "Name": "Whole Foods",
                    "Address": "450 Rhode Island St",
                    "LAT": 37.76435,
                    "LNG": -122.402771,
                    "POST": 94107,
                    "Neighborhood": "Potrero District,Potrero Flats"
                  },
                  {
                    "Name": "Whole Foods",
                    "Address": "1150 Ocean Ave",
                    "LAT": 37.723811,
                    "LNG": -122.454773,
                    "POST": 94112,
                    "Neighborhood": "Potrero District,Potrero Flats"
                  },
                  {
                    "Name": "Whole Foods",
                    "Address": "399 4th St",
                    "LAT": 37.781091,
                    "LNG": -122.399748,
                    "POST": 94107,
                    "Neighborhood": "South Beach,South Of Market"
                  },
                  {
                    "Name": "Whole Foods",
                    "Address": "1765 California St",
                    "LAT": 37.790035,
                    "LNG": -122.423347,
                    "POST": 94109,
                    "Neighborhood": "Cathedral Hill,Laguna Heights,Little Osaka,Pacific Heights,Polk Gulch,Van Ness"
                  },
                  {
                    "Name": "Whole Foods",
                    "Address": "3950 24th St",
                    "LAT": 37.751776,
                    "LNG": -122.430862,
                    "POST": 94114,
                    "Neighborhood": "Dolores Heights,Noe Valley"
                  }
                 ],

                 [
                  {
                    "Name": "Safeway",
                    "Address": "5290 Diamond Heights Blvd",
                    "LAT": 37.743695,
                    "LNG": -122.438947,
                    "POST": 94131,
                    "Neighborhood": "Diamond Heights,Vista del Monte"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "4950 Mission St",
                    "LAT": 37.719746,
                    "LNG": -122.439006,
                    "POST": 94112,
                    "Neighborhood": "Crocker-Amazon,Mission Terrace"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "625 Monterey Blvd",
                    "LAT": 37.731293,
                    "LNG": -122.449753,
                    "POST": 94127,
                    "Neighborhood": "Sunnyside,Westwood Highlands"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "1335 Webster St",
                    "LAT": 37.78294,
                    "LNG": -122.431425,
                    "POST": 94115,
                    "Neighborhood": "Thomas Paine Square,Western Addition"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "730 Taraval St",
                    "LAT": 37.743348,
                    "LNG": -122.474029,
                    "POST": 94116,
                    "Neighborhood": "Inner Parkside,West Portal,Westlake"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "350 Bay St",
                    "LAT": 37.805995,
                    "LNG": -122.412878,
                    "POST": 94133,
                    "Neighborhood": "Fisherman's Wharf,North Beach"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "850 La Playa St",
                    "LAT": 37.772419,
                    "LNG": -122.509515,
                    "POST": 94121,
                    "Neighborhood": "Outer Richmond,Sutro Heights"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "298 King St",
                    "LAT": 37.776714,
                    "LNG": -122.394143,
                    "POST": 94107,
                    "Neighborhood": "Mission Bay,South Of Market"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "3350 Mission St",
                    "LAT": 37.743202,
                    "LNG": -122.422149,
                    "POST": 94110,
                    "Neighborhood": "Bernal Heights,Noe Valley,Transmission"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "2300 16th St",
                    "LAT": 37.76663,
                    "LNG": -122.409496,
                    "POST": 94103,
                    "Neighborhood": "Inner Mission,Mission,Potrero Flats,SOMISSPO"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "145 Jackson St",
                    "LAT": 37.796902,
                    "LNG": -122.398822,
                    "POST": 94111,
                    "Neighborhood": "Financial District,North Waterfront"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "735 7th Ave",
                    "LAT": 37.774638,
                    "LNG": -122.465253,
                    "POST": 94118,
                    "Neighborhood": "Inner Richmond,Richmond District"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "15 Marina Blvd",
                    "LAT": 37.804545,
                    "LNG": -122.432908,
                    "POST": 94123,
                    "Neighborhood": "Marina District"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "2350 Noriega St",
                    "LAT": 37.754064,
                    "LNG": -122.488813,
                    "POST": 94122,
                    "Neighborhood": "Central Sunset,Doelger City,Sunset District"
                  },
                  {
                    "Name": "Safeway",
                    "Address": "2020 Market St",
                    "LAT": 37.769053,
                    "LNG": -122.428076,
                    "POST": 94114,
                    "Neighborhood": "Duboce Triangle,Lower Haight,Mission Dolor"
                  }
                 ],

                ]
          }

//======================The following functions are not used================================
//  var parseData = function(Supermarket) {
//    var parse= JSON.parse(Supermarket)
//    return (parse)
//    // state.slideData = parse;
//    // console.log(PData);
//    // console.log('inside', state.slideData);
//  };
//
//
//
// var parseData1 = function(Supermarket) {
//   var parse= JSON.parse(Supermarket)
//   var PData = _.filter(parse, function(obj){
//   return obj.Name==="Safeway"
//   });
//   return (PData)
//   // state.slideData = parse;
//   // console.log(PData);
//   // console.log('inside', state.slideData);
// };
//
// var parseData2 = function(Supermarket) {
//   var parse= JSON.parse(Supermarket)
//   var PData = _.filter(parse, function(obj){
//   return obj.Name==="Whole Foods"
//   });
//   return (PData)
//   state.slideData = parse;
//   console.log(PData);
//   console.log('inside', state.slideData);
// };
//
//
// var parseData3 = function(Supermarket) {
//   var parse= JSON.parse(Supermarket)
//   var PData = _.filter(parse, function(obj){
//   return obj.Name==="Trader Joe's"
//   });
//   return (PData)
//   // state.slideData = parse;
//   // console.log(PData);
//   // console.log('inside', state.slideData);
// };
//=========================================================================================



// Make markers
var makeMarkers = function(parsed) {
  var markers= [];
  _.each(parsed, function(obj){
    markers.push(L.marker([obj.LAT,obj.LNG]));
  })
  return markers;

};


// Plot markers on the map
var plotMarkers = function(marker) {
 return  _.map(marker, function(num){
    return num.addTo(map).bindPopup("<li> Location </li>"+num['_latlng']).openPopup();// Add pop-ups to markers to display its location coordinates
 });
};


// Remover current layer on the map
var removeMarkers = function(marker) {
  _.each(marker,function(obj){
    map.removeLayer(obj);
  });
};

var ctx = document.getElementById("myChart");
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
    labels: [
        "Trader Joe's",
        "Whole Foods",
        "Safeway"
    ],
    datasets: [
        {
            data: [6, 6, 13],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
},
    options: {
       title:{
            display: true,
            text: 'Supermarket Chains Pie Chart'
          },
        animation:{
            animateScale:true
        }
    }
});


// create a global variable called 'layer' to store the current layer on the map
var layer = [];

// create a global variable called 'text' to store the texts to be shown on each slide
var text = ["All Three Chains","Trader Joe's",'Whole Foods','Safeway']


// create a global variable called 'text2' to store the texts to be shown on each slide
var text2 = ["There are a total of 27 stores for the 3 supermarket chains. Safeway has stores that are more than the sum of those of Trader Joe's and Whole Food's","There are 6 Trader Joe's supermarkets in San Francisco. Click on the markers on the map to see there locations(coordinates). Click 'Next' to see other supermarket chains!",
"There are 6 Wholefoods supermarkets in San Francisco. Click on the markers on the map to see there locations(coordinates). Click 'Next' to see other supermarket chains!",
"There are 15 Safeway supermarkets in San Francisco. Click on the markers on the map to see there locations(coordinates). Click 'Next' to see other supermarket chains!"]

document.getElementById("previous").style.visibility="hidden"

// This function allows changing slides by clikcing the 'next' button. The changes include texts on the sidebar and markers on the map
var clickNextButton = function() {
  map.setZoom(13)

  if (state.slideNumber+1 > state.slideData.length ||state.slideNumber+1>3 ){
    state.slideNumber = 0
    document.getElementById("next").style.visibility="hidden"
  }
  else {
    state.slideNumber = state.slideNumber+1
  }
  var store= state.slideData[state.slideNumber]; //select store groups (0,1,2) based on slide number


  document.getElementById("previous").style.visibility="visible"
  $('.main').text(text[state.slideNumber]); // change the text in the first paragraph on the sider when click
  $('#note').text(text2[state.slideNumber]);// change the text in the second paragraph on the sider when click
  var markers = makeMarkers(store); //call function to make markers
  if(layer.length){
      removeMarkers(layer); // if there are stuff showing on the current layer, remove the current layer
      layer=[];
  }
  layer = plotMarkers(markers); // plot the selected markers (supermarket groups)
}




var clickPreviousButton = function() {
  document.getElementById("next").style.visibility="visible"
  if (state.slideNumber-1 < 0){
    state.slideNumber = state.slideData.length-1
  }
  else{
    state.slideNumber = state.slideNumber-1
  }
  var store= state.slideData[state.slideNumber]; //select store groups (0,1,2) based on slide number

  $('.main').text(text[state.slideNumber]) // change the text in the first paragraph on the sider when click
  $('#note').text(text2[state.slideNumber])// change the text in the second paragraph on the sider when click

  var markers = makeMarkers(store); //call function to make markers

  if(layer.length){
    removeMarkers(layer);// if there are stuff showing on the current layer, remove the current layer
    layer=[];
  }

  layer = plotMarkers(markers);// plot the selected markers (supermarket groups)
}







// call function to execute the processes above when the 'next' button is clicked
$( '#next' ).click(
  function() {
  clickNextButton();
  }
)





// call function to execute the processes above when the 'previous' button is clicked
$( '#previous' ).click(
  function() {
  clickPreviousButton();
  }
)
