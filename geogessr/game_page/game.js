var def_panos = [
'360_0120 панорама.jpg',
'360_0121 панорама.jpg',
'360_0125 панорама.jpg',
'360_0127 панорама.jpg',
'360_0131 панорама.jpg',
'360_0132 панорама.jpg',
'360_0133 панорама.jpg',
'360_0134 панорама.jpg',
'360_0136 панорама.jpg',
'360_0137 панорама.jpg',
'360_0138 панорама.jpg',
'360_0139 панорама.jpg',
'360_0140 панорама.jpg',
'360_0141 панорама.jpg',
'360_0142 панорама.jpg',
'360_0158 панорама.jpg',
'360_0160 панорама.jpg',
'360_0161 панорама.jpg',
'360_0163 панорама.jpg',
'360_0164 панорама.jpg',
'360_0165 панорама.jpg',
'360_0166 панорама.jpg',
'360_0181 панорама.jpg',
'360_0182 панорама.jpg',
'360_0184 панорама.jpg',
'360_0185 панорама.jpg',
'360_0186 панорама.jpg',
'360_0187 панорама.jpg',
'360_0188 панорама.jpg',
'360_0189 панорама.jpg',
'360_0190 панорама.jpg',
'360_0191 панорама.jpg',
'360_0192 панорама.jpg',
'360_0193 панорама.jpg',
'360_0195 панорама.jpg',
'360_0196 панорама.jpg',
'360_0198 панорама.jpg',
'360_0224 панорама.jpg',
'360_0225 панорама.jpg',
'360_0226 панорама.jpg',
'360_0228 панорама.jpg',
'360_0229 панорама.jpg',
'360_0231 панорама.jpg',
'360_0233 панорама.jpg',
'360_0234 панорама.jpg',
'360_0235 панорама.jpg',
'360_0238 панорама.jpg'
]


window.onload = function() {
   
    
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": '../58panos/'+def_panos[Math.floor(Math.random() * def_panos.length)],
        "autoLoad": true
    }); 
};
const ans = [50,50]
localStorage.setItem('coords_ans', ans);

var has_guessed = false

var guess = document.getElementById("guess");

// Инициализация карты с координатами мира
var map = L.map('map', {
    attributionControl: false}).setView([0, 0], 1); // Центр карты на [0, 0] с масштабом 2

// Добавление слоя карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19,
    noWrap: true // Устанавливаем noWrap в true
}).addTo(map);


var southWest = L.latLng(-90, -180);
var northEast = L.latLng(90, 180);
var bounds = L.latLngBounds(southWest, northEast);

// Применяем границы к карте
map.setMaxBounds(bounds);


var guess_icon = L.icon({
    iconUrl: '../service_images/geometka.png', // Путь к вашему изображению
    iconSize: [16, 16], // Размер иконки
    iconAnchor: [8, 16], // Точка привязки иконки
    popupAnchor: [-3, -76] // Точка привязки всплывающего окна
});

var ans_icon = L.icon({
    iconUrl: '../service_images/finish.png', // Путь к вашему изображению
    iconSize: [16, 16], // Размер иконки
    iconAnchor: [0, 16], // Точка привязки иконки
    popupAnchor: [-3, -76] // Точка привязки всплывающего окна
});

var currentMarker; // Переменная для хранения текущей метки

var last_x = 0;
var last_y= 0;

// Добавление метки по клику
map.on('click', function(e) {
    // Удаление предыдущей метки, если она существует
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }
    last_x = e.latlng.lat;
    last_y = e.latlng.lng;
    localStorage.setItem('coords_guess', [last_x, last_y]);
    guess.style.opacity = 1; // 50% прозрачности
    has_guessed = true;
    // Создание новой метки
    console.log(e.latlng)
    currentMarker = L.marker(e.latlng, { icon: guess_icon }).addTo(map);
    console.log("coordinates: " + last_x + ", " + last_y);
    // Убираем всплывающее окно
    // currentMarker.bindPopup('Метка добавлена!').openPopup(); // Эта строка убрана
});


function do_guess(){
    if (has_guessed){

        window.location.href = "../result_page/result.html";
    }
}
// -2.029804, 30.575426
var map_obj = document.getElementById("map");   

var guess_btn = document.getElementById("guess"); 
map_obj.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
    guess_btn.style.width = "52%";
    console.log(123)
  });
  
map_obj.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
    guess_btn.style.width = "26%";

});