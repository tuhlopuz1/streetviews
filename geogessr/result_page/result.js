var map = L.map('map', {
    attributionControl: false}).setView([0, 0], 1); // Центр карты на [0, 0] с масштабом 2
    worldCopyJump: true // Это позволяет избежать повторения карты
    
    // Добавление слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        minZoom: 1, // Устанавливаем минимальный уровень масштабирования
        maxZoom: 19,
    noWrap: true // Устанавливаем noWrap в true
}).addTo(map);

var southWest = L.latLng(-90, -180);
var northEast = L.latLng(90, 180);
var bounds = L.latLngBounds(southWest, northEast);

// Применяем границы к карте
map.setMaxBounds(bounds);
const guess = localStorage.getItem('coords_guess').split(',');

const ans = localStorage.getItem('coords_ans').split(',');

console.log(guess, ans);
console.log(guess[0], guess[1])

var guess_icon = L.icon({
    iconUrl: '../service_images/geometka.png', // Путь к вашему изображению
    iconSize: [30, 30], // Размер иконки
    iconAnchor: [15, 30], // Точка привязки иконки
    popupAnchor: [-3, -76] // Точка привязки всплывающего окна
});

var ans_icon = L.icon({
    iconUrl: '../service_images/finish.png', // Путь к вашему изображению
    iconSize: [30, 30], // Размер иконки
    iconAnchor: [0, 30], // Точка привязки иконки
    popupAnchor: [-3, -76] // Точка привязки всплывающего окна
});


var marker = L.marker([guess[0], guess[1]], { icon: guess_icon }).addTo(map);

var marker = L.marker([ans[0], ans[1]], { icon: ans_icon }).addTo(map);


var polyline = L.polyline([[guess[0],guess[1]], [ans[0], ans[1]]], {
    color: 'black',          // Цвет линии
    dashArray: '5, 10',     // Параметры для пунктирной линии
    weight: 1
}).addTo(map);