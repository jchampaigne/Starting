var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ActiveSBAAMembers_1 = new ol.format.GeoJSON();
var features_ActiveSBAAMembers_1 = format_ActiveSBAAMembers_1.readFeatures(json_ActiveSBAAMembers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveSBAAMembers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveSBAAMembers_1.addFeatures(features_ActiveSBAAMembers_1);
cluster_ActiveSBAAMembers_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ActiveSBAAMembers_1
});
var lyr_ActiveSBAAMembers_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ActiveSBAAMembers_1, 
                style: style_ActiveSBAAMembers_1,
                popuplayertitle: 'Active SBAA Members',
                interactive: true,
                title: '<img src="styles/legend/ActiveSBAAMembers_1.png" /> Active SBAA Members'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_ActiveSBAAMembers_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ActiveSBAAMembers_1];
lyr_ActiveSBAAMembers_1.set('fieldAliases', {'field_1': 'field_1', 'Location': 'Location', 'Active Members': 'Active Members', 'lat': 'lat', 'lng': 'lng', });
lyr_ActiveSBAAMembers_1.set('fieldImages', {'field_1': 'Range', 'Location': 'TextEdit', 'Active Members': 'Range', 'lat': 'TextEdit', 'lng': 'TextEdit', });
lyr_ActiveSBAAMembers_1.set('fieldLabels', {'field_1': 'hidden field', 'Location': 'header label - visible with data', 'Active Members': 'header label - visible with data', 'lat': 'hidden field', 'lng': 'hidden field', });
lyr_ActiveSBAAMembers_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});