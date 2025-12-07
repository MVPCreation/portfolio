let map = L.map('gemeenteMap').setView([51.169211, 4.393968], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let bounds = [
    [51.1695, 4.393768],
    [51.1692, 4.3945]
];

L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

let marker = L.marker([51.1693, 4.39415]).addTo(map);
marker.bindPopup("<strong>Gemeentehuis Wilrijk</strong><br>1 Bist, 2610 Antwerpen").openPopup();