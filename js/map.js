var map = L.map('map').setView([51.21331029419274, 4.258141283951909], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 2, // Minimum zoom level (usually 0 or 1)
    maxZoom: 18
    }).addTo(map);
    
    L.marker([51.21331029419274, 4.258141283951909]).addTo(map)
        .bindPopup('Mijn gemeente.')
        .openPopup();