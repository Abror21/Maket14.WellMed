const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const nav = document.querySelector('.header__nav');
const menuClose = document.querySelector('.menu-close');
const modalBtn = document.querySelector('.Modal__btn');

const modal = document.querySelector('.Modal')
const orderBtns = document.querySelectorAll('.modal-btn');

Array.from(orderBtns).forEach(orderBtn => {
    orderBtn.addEventListener('click', () => {
        modal.classList.add('active')
        wrapper.classList.add('active')
        body.style.overflow = 'hidden'
    })
})
menu.addEventListener('click', () => {
    wrapper.classList.add('active')
    body.style.overflow = 'hidden'
    nav.classList.add('active')
})
wrapper.addEventListener('click', () => {
    wrapper.classList.remove('active')
    nav.classList.remove('active')
    body.style.overflow = 'visible'
    modal.classList.remove('active')
});
menuClose.addEventListener('click', () => {
    wrapper.classList.remove('active')
    nav.classList.remove('active')
    body.style.overflow = 'visible'
})
modalBtn.addEventListener('click', () => {
    wrapper.classList.remove('active')
    body.style.overflow = 'visible'
    modal.classList.remove('active')
})
// ///////////////////////////////////////////////////
if (document.querySelector('.intro__swiper-container')) {
    var swiper = new Swiper('.intro__swiper-container', {
        slidesPerView: 1,
        centerMode: true,
        loop: true,
        pagination: {
            el: '.intro__swiper-pagination',
        },
    });
}
//////////////////////////////////////////////////////////////////////
// let map;
// function initMap() {
//     if (document.getElementById("map__content")) {
//         map = new google.maps.Map(document.getElementById("map__content"), {
//             center: new google.maps.LatLng(41.3531653, 69.2509896),
//             zoom: 10,
//         });
//         const marker = new google.maps.Marker({
//             position: new google.maps.LatLng(41.3531653, 69.2509896),
//             icon: {
//                 url: 'img/map-img.png',
//                 // scaledSize: new google.maps.Size(362, 160),
//             },
//             map: map,
//         });
//     };
// }
// Определяем переменную map
var map;



// Функция initMap которая отрисует карту на странице
function initMap() {

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+'<img src="img/map-marker-img.jpg"></img>'+'<div id="siteNotice">'+'<div id="bodyContent">'+'<p>117, st. Usta Shirin house, Almazar district, Tashkent Uzbekistan</p>' +
                                '<a href="#!">Get direction</a>'
                                '</div>'
                            '</div>' +
                        '</div>';


    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map__content'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: { lat: 41.353306244197285, lng: 69.253264128906 }, 
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 18,

        // Добавляем свои стили для отображения карты

        // styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: { lat: 41.353306244197285, lng: 69.253264128906 },

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        // title: 'Наш маркер: Большой театр',
        // Укажем свою иконку для маркера
        icon: 'img/logo-dot.png'
    });

    window.onload= function (){
        infowindow.open(map, marker)
    }
    // marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    // });

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });
}


// /////////////////////////////////////////////////////////////////
var swiper = new Swiper('.drug__swiper-container', {
    pagination: {
        el: '.drug__swiper-pagination',
    },
});