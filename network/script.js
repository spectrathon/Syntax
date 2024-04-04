// Initialize the map
var map = L.map('map').setView([47.751076, -120.740132], 7); // Center coordinates and zoom level for Washington State

// Set basemap tiles (replace with your preferred provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// (Optional) Add a marker (replace coordinates with a specific location)
var marker = L.marker([47.606210, -122.332071]).addTo(map);
marker.bindPopup("A place in Washington").openPopup();