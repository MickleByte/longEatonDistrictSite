function initMap(sectionName) {
    // Create the map & set zoom and center location
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 52.897022, lng: -1.288115},
    });
  
    // Load the JSON with the meeting locations
    var filename = `JS/mapInfo/${sectionName}.json`;
    map.data.loadGeoJson(filename, {idPropertyName: 'storeid'});
  
    const infoWindow = new google.maps.InfoWindow();
  
    // Show the information for a marker when it's clicked.
    map.data.addListener('click', (event) => {
      const groupName = event.feature.getProperty('name');
      const location = event.feature.getProperty('location');
      const hours = event.feature.getProperty('hours');
      const contact = event.feature.getProperty('phone');
      const position = event.feature.getGeometry().get();
      const content = `
        <h2>${groupName}</h2>
        <p><strong>Location:</strong> ${location}<br/><strong>Meeting Time:</strong> ${hours}<br/><strong>Contact:</strong> ${contact}</p>

        <style>
        strong{
          font-weight: bold;
        }
        </style>
      `;
  
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
      infoWindow.open(map);
    });
  }


  // seperate functions to load in correct JSON to init map for each section
function beaverMap(){
  initMap("beavers");
}

function cubMap(){
  initMap("cubs");
}

function scoutMap(){
  initMap("scouts");
}

function explorerMap(){
  initMap("explorers");
}

function networkMap(){
  initMap("network");
}

function trentLockMap(){
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 52.875234, lng: -1.275203},
  });

  // Load the JSON with the meeting locations
  var filename = `JS/mapInfo/trentLock.json`;
  map.data.loadGeoJson(filename, {idPropertyName: 'storeid'});

  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a marker when it's clicked.
  map.data.addListener('click', (event) => {
    const label = "Trent Lock Scout Activity Center"
    const position = event.feature.getGeometry().get();
    const content = `
      <h2>${label}</h2>

      <style>
      strong{
        font-weight: bold;
      }
      </style>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}