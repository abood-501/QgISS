ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([3839911.423700, 1814998.785400, 6196706.517000, 3783330.798400]);
var wms_layers = [];

var format_Renamed_0 = new ol.format.GeoJSON();
var features_Renamed_0 = format_Renamed_0.readFeatures(json_Renamed_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renamed_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renamed_0.addFeatures(features_Renamed_0);
var lyr_Renamed_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renamed_0, 
                style: style_Renamed_0,
                popuplayertitle: "Renamed",
                interactive: true,
    title: 'Renamed<br />\
    <img src="styles/legend/Renamed_0_0.png" /> ١٩.٩٠ - ٢٩.٨٨<br />\
    <img src="styles/legend/Renamed_0_1.png" /> ٢٩.٨٨ - ٣٠.٣٦<br />\
    <img src="styles/legend/Renamed_0_2.png" /> ٣٠.٣٦ - ٣٤.١٤<br />\
    <img src="styles/legend/Renamed_0_3.png" /> ٣٤.١٤ - ٣٤.٨٢<br />\
    <img src="styles/legend/Renamed_0_4.png" /> ٣٤.٨٢ - ٣٥.٤٠<br />'
        });

lyr_Renamed_0.setVisible(true);
var layersList = [lyr_Renamed_0];
lyr_Renamed_0.set('fieldAliases', {'fid': 'fid', 'المنطقة': 'المنطقة', 'متوسط الحراره الكبرى ': 'متوسط الحراره الكبرى ', 'متوسط كميات الحراره ': 'متوسط كميات الحراره ', 'متوسط الحراره الصغرى ': 'متوسط الحراره الصغرى ', });
lyr_Renamed_0.set('fieldImages', {'fid': 'TextEdit', 'المنطقة': 'TextEdit', 'متوسط الحراره الكبرى ': 'TextEdit', 'متوسط كميات الحراره ': 'TextEdit', 'متوسط الحراره الصغرى ': 'TextEdit', });
lyr_Renamed_0.set('fieldLabels', {'fid': 'no label', 'المنطقة': 'inline label - visible with data', 'متوسط الحراره الكبرى ': 'inline label - visible with data', 'متوسط كميات الحراره ': 'inline label - visible with data', 'متوسط الحراره الصغرى ': 'inline label - visible with data', });
lyr_Renamed_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});