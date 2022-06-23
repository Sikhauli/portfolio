function initMap() {
    // The location of Uluru
    const EWC = { lat: -26.0244640651, lng: 28.1855117238 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: EWC,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: EWC,
      map: map,
    });
  }
  
  window.initMap = initMap;