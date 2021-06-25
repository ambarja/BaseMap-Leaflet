var map = L.map('mapid').setView([-11.84, -77.10], 12);
var basemap = {
 OpenStreetMap: L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   {attribution: "&copy;<a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> contibutors"}
   ),
 Satelital: L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'}
  ),
 Ligthdark: L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  {attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
  ),
 StamenToner: L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',
  {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   ext: 'png'
  }
 ),
 TonerBackground: L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}',
  {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   ext: 'png'
  }
  ),
 CartoDBPositron: L.tileLayer(
   'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
   }
   ),
 CartoDBDark: L.tileLayer(
   'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
   })
};

L.control.layers(basemap).addTo(map);
basemap.OpenStreetMap.addTo(map);


var popup = L.responsivePopup()
  .setContent(
   '<h2>Ge🌎grapher Freelance</h2>\
    <p>Hi everyone! My name is Antony 🤓 , pleased to meet you </p>'
   );

L.marker([-11.83,-77.08]).addTo(map).bindPopup(popup).openPopup();
