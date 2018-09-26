export default class Map {

  constructor(config) {
    this._mapHTML = config.map.get(0);
    this._center = {
      lat: +config.map.data('center-lat'),
      lng: +config.map.data('center-lng')
    };
    this._marker = {
      lat: +config.map.data('marker-lat'),
      lng: +config.map.data('marker-lng')
    };
    this._markerText = {
      lat: +config.map.data('marker-text-lat'),
      lng: +config.map.data('marker-text-lng')
    };

   
    this._init();
  }
   
  _init() {
    this._createMap();
  }
   
  _createMap() {
    this._map = new google.maps.Map(this._mapHTML, {
      center: this._center,
      zoom: 14
    });
    new google.maps.Marker({
      position: this._marker,
      map: this._map,
      title: 'Пресненская набережная, дом 8, стр. 1'
    });
    new google.maps.Marker({
      position: this._markerText,
      map: this._map,
      icon: {
        url: '/img/bamboo.png',
        scaledSize: new google.maps.Size(86, 16)
      }
    });
  }
   
};

let map = $('.js-map');

if (map.length) {
  map.each(function() {
    new Map({
      map: $(this)
    });
  });
};
