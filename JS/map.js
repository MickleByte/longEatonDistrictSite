function initMap() {
    // Create the map & set zoom and center location
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 52.8837101, lng: -1.2868269},
    });
  
    // Load the JSON with the meeting locations
    map.data.loadGeoJson('JS/stores.json', {idPropertyName: 'storeid'});
  
    const infoWindow = new google.maps.InfoWindow();
  
    // Show the information for a marker when it's clicked.
    map.data.addListener('click', (event) => {
      const groupName = event.feature.getProperty('name');
      const description = event.feature.getProperty('description');
      const hours = event.feature.getProperty('hours');
      const contact = event.feature.getProperty('phone');
      const position = event.feature.getGeometry().get();
      const content = `
        <h2>${groupName}</h2><p>${description}</p>
        <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${contact}</p>
      `;
  
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
      infoWindow.open(map);
    });
  }