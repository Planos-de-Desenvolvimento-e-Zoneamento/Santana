ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-51.172716, -0.066073, -51.151397, -0.053969]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BensTombados_1 = new ol.format.GeoJSON();
var features_BensTombados_1 = format_BensTombados_1.readFeatures(json_BensTombados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BensTombados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BensTombados_1.addFeatures(features_BensTombados_1);
cluster_BensTombados_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BensTombados_1
});
var lyr_BensTombados_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BensTombados_1, 
                style: style_BensTombados_1,
                popuplayertitle: 'Bens Tombados',
                interactive: true,
                title: '<img src="styles/legend/BensTombados_1.png" /> Bens Tombados'
            });
var format_ComunidadesQuilombolas_2 = new ol.format.GeoJSON();
var features_ComunidadesQuilombolas_2 = format_ComunidadesQuilombolas_2.readFeatures(json_ComunidadesQuilombolas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ComunidadesQuilombolas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesQuilombolas_2.addFeatures(features_ComunidadesQuilombolas_2);
var lyr_ComunidadesQuilombolas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesQuilombolas_2, 
                style: style_ComunidadesQuilombolas_2,
                popuplayertitle: 'Comunidades Quilombolas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesQuilombolas_2.png" /> Comunidades Quilombolas'
            });
var format_UnidadedeConservao_3 = new ol.format.GeoJSON();
var features_UnidadedeConservao_3 = format_UnidadedeConservao_3.readFeatures(json_UnidadedeConservao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadedeConservao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeConservao_3.addFeatures(features_UnidadedeConservao_3);
var lyr_UnidadedeConservao_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeConservao_3, 
                style: style_UnidadedeConservao_3,
                popuplayertitle: 'Unidade de Conservação',
                interactive: true,
                title: '<img src="styles/legend/UnidadedeConservao_3.png" /> Unidade de Conservação'
            });
var format_reasPrioritriasparaConservaoSituaoAtual_4 = new ol.format.GeoJSON();
var features_reasPrioritriasparaConservaoSituaoAtual_4 = format_reasPrioritriasparaConservaoSituaoAtual_4.readFeatures(json_reasPrioritriasparaConservaoSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasPrioritriasparaConservaoSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPrioritriasparaConservaoSituaoAtual_4.addFeatures(features_reasPrioritriasparaConservaoSituaoAtual_4);
var lyr_reasPrioritriasparaConservaoSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPrioritriasparaConservaoSituaoAtual_4, 
                style: style_reasPrioritriasparaConservaoSituaoAtual_4,
                popuplayertitle: 'Áreas Prioritárias para Conservação - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasPrioritriasparaConservaoSituaoAtual_4.png" /> Áreas Prioritárias para Conservação - Situação Atual '
            });
var format_EquipamentosSituaoAtual_5 = new ol.format.GeoJSON();
var features_EquipamentosSituaoAtual_5 = format_EquipamentosSituaoAtual_5.readFeatures(json_EquipamentosSituaoAtual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EquipamentosSituaoAtual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipamentosSituaoAtual_5.addFeatures(features_EquipamentosSituaoAtual_5);
var lyr_EquipamentosSituaoAtual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipamentosSituaoAtual_5, 
                style: style_EquipamentosSituaoAtual_5,
                popuplayertitle: 'Equipamentos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/EquipamentosSituaoAtual_5.png" /> Equipamentos - Situação Atual '
            });
var format_ServiosdeApoioSituaoAtual_6 = new ol.format.GeoJSON();
var features_ServiosdeApoioSituaoAtual_6 = format_ServiosdeApoioSituaoAtual_6.readFeatures(json_ServiosdeApoioSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ServiosdeApoioSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosdeApoioSituaoAtual_6.addFeatures(features_ServiosdeApoioSituaoAtual_6);
var lyr_ServiosdeApoioSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiosdeApoioSituaoAtual_6, 
                style: style_ServiosdeApoioSituaoAtual_6,
                popuplayertitle: 'Serviços de Apoio - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ServiosdeApoioSituaoAtual_6.png" /> Serviços de Apoio - Situação Atual '
            });
var format_FundeadouroLongoPrazo_7 = new ol.format.GeoJSON();
var features_FundeadouroLongoPrazo_7 = format_FundeadouroLongoPrazo_7.readFeatures(json_FundeadouroLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadouroLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadouroLongoPrazo_7.addFeatures(features_FundeadouroLongoPrazo_7);
var lyr_FundeadouroLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadouroLongoPrazo_7, 
                style: style_FundeadouroLongoPrazo_7,
                popuplayertitle: 'Fundeadouro – Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadouroLongoPrazo_7.png" /> Fundeadouro – Longo Prazo '
            });
var format_FundeadouroMdioPrazo_8 = new ol.format.GeoJSON();
var features_FundeadouroMdioPrazo_8 = format_FundeadouroMdioPrazo_8.readFeatures(json_FundeadouroMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadouroMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadouroMdioPrazo_8.addFeatures(features_FundeadouroMdioPrazo_8);
var lyr_FundeadouroMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadouroMdioPrazo_8, 
                style: style_FundeadouroMdioPrazo_8,
                popuplayertitle: 'Fundeadouro – Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadouroMdioPrazo_8.png" /> Fundeadouro – Médio Prazo '
            });
var format_FundeadouroCurtoPrazo_9 = new ol.format.GeoJSON();
var features_FundeadouroCurtoPrazo_9 = format_FundeadouroCurtoPrazo_9.readFeatures(json_FundeadouroCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadouroCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadouroCurtoPrazo_9.addFeatures(features_FundeadouroCurtoPrazo_9);
var lyr_FundeadouroCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadouroCurtoPrazo_9, 
                style: style_FundeadouroCurtoPrazo_9,
                popuplayertitle: 'Fundeadouro – Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadouroCurtoPrazo_9.png" /> Fundeadouro – Curto Prazo '
            });
var format_FundeadouroSituaoAtual_10 = new ol.format.GeoJSON();
var features_FundeadouroSituaoAtual_10 = format_FundeadouroSituaoAtual_10.readFeatures(json_FundeadouroSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadouroSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadouroSituaoAtual_10.addFeatures(features_FundeadouroSituaoAtual_10);
var lyr_FundeadouroSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadouroSituaoAtual_10, 
                style: style_FundeadouroSituaoAtual_10,
                popuplayertitle: 'Fundeadouro - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadouroSituaoAtual_10.png" /> Fundeadouro - Situação Atual '
            });
var format_BaciadeEvoluoLongoPrazo_11 = new ol.format.GeoJSON();
var features_BaciadeEvoluoLongoPrazo_11 = format_BaciadeEvoluoLongoPrazo_11.readFeatures(json_BaciadeEvoluoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluoLongoPrazo_11.addFeatures(features_BaciadeEvoluoLongoPrazo_11);
var lyr_BaciadeEvoluoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluoLongoPrazo_11, 
                style: style_BaciadeEvoluoLongoPrazo_11,
                popuplayertitle: 'Bacia de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluoLongoPrazo_11.png" /> Bacia de Evolução - Longo Prazo '
            });
var format_BaciadeEvoluoMdioPrazo_12 = new ol.format.GeoJSON();
var features_BaciadeEvoluoMdioPrazo_12 = format_BaciadeEvoluoMdioPrazo_12.readFeatures(json_BaciadeEvoluoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluoMdioPrazo_12.addFeatures(features_BaciadeEvoluoMdioPrazo_12);
var lyr_BaciadeEvoluoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluoMdioPrazo_12, 
                style: style_BaciadeEvoluoMdioPrazo_12,
                popuplayertitle: 'Bacia de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluoMdioPrazo_12.png" /> Bacia de Evolução - Médio Prazo '
            });
var format_BaciadeEvoluoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_BaciadeEvoluoCurtoPrazo_13 = format_BaciadeEvoluoCurtoPrazo_13.readFeatures(json_BaciadeEvoluoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluoCurtoPrazo_13.addFeatures(features_BaciadeEvoluoCurtoPrazo_13);
var lyr_BaciadeEvoluoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluoCurtoPrazo_13, 
                style: style_BaciadeEvoluoCurtoPrazo_13,
                popuplayertitle: 'Bacia de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluoCurtoPrazo_13.png" /> Bacia de Evolução - Curto Prazo '
            });
var format_BaciadeEvoluoSituaoAtual_14 = new ol.format.GeoJSON();
var features_BaciadeEvoluoSituaoAtual_14 = format_BaciadeEvoluoSituaoAtual_14.readFeatures(json_BaciadeEvoluoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluoSituaoAtual_14.addFeatures(features_BaciadeEvoluoSituaoAtual_14);
var lyr_BaciadeEvoluoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluoSituaoAtual_14, 
                style: style_BaciadeEvoluoSituaoAtual_14,
                popuplayertitle: 'Bacia de Evolução - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluoSituaoAtual_14.png" /> Bacia de Evolução - Situação Atual'
            });
var format_CanaldeAcessoLongoPrazo_15 = new ol.format.GeoJSON();
var features_CanaldeAcessoLongoPrazo_15 = format_CanaldeAcessoLongoPrazo_15.readFeatures(json_CanaldeAcessoLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcessoLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcessoLongoPrazo_15.addFeatures(features_CanaldeAcessoLongoPrazo_15);
var lyr_CanaldeAcessoLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcessoLongoPrazo_15, 
                style: style_CanaldeAcessoLongoPrazo_15,
                popuplayertitle: 'Canal de Acesso – Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcessoLongoPrazo_15.png" /> Canal de Acesso – Longo Prazo '
            });
var format_CanaldeAcessoMdioPrazo_16 = new ol.format.GeoJSON();
var features_CanaldeAcessoMdioPrazo_16 = format_CanaldeAcessoMdioPrazo_16.readFeatures(json_CanaldeAcessoMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcessoMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcessoMdioPrazo_16.addFeatures(features_CanaldeAcessoMdioPrazo_16);
var lyr_CanaldeAcessoMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcessoMdioPrazo_16, 
                style: style_CanaldeAcessoMdioPrazo_16,
                popuplayertitle: 'Canal de Acesso – Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcessoMdioPrazo_16.png" /> Canal de Acesso – Médio Prazo '
            });
var format_CanaldeAcessoCurtoPrazo_17 = new ol.format.GeoJSON();
var features_CanaldeAcessoCurtoPrazo_17 = format_CanaldeAcessoCurtoPrazo_17.readFeatures(json_CanaldeAcessoCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcessoCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcessoCurtoPrazo_17.addFeatures(features_CanaldeAcessoCurtoPrazo_17);
var lyr_CanaldeAcessoCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcessoCurtoPrazo_17, 
                style: style_CanaldeAcessoCurtoPrazo_17,
                popuplayertitle: 'Canal de Acesso – Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcessoCurtoPrazo_17.png" /> Canal de Acesso – Curto Prazo '
            });
var format_CanaldeAcessoSituaoAtual_18 = new ol.format.GeoJSON();
var features_CanaldeAcessoSituaoAtual_18 = format_CanaldeAcessoSituaoAtual_18.readFeatures(json_CanaldeAcessoSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcessoSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcessoSituaoAtual_18.addFeatures(features_CanaldeAcessoSituaoAtual_18);
var lyr_CanaldeAcessoSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcessoSituaoAtual_18, 
                style: style_CanaldeAcessoSituaoAtual_18,
                popuplayertitle: 'Canal de Acesso - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcessoSituaoAtual_18.png" /> Canal de Acesso - Situação Atual'
            });
var format_AcessosHidroviriosLongoPrazo_19 = new ol.format.GeoJSON();
var features_AcessosHidroviriosLongoPrazo_19 = format_AcessosHidroviriosLongoPrazo_19.readFeatures(json_AcessosHidroviriosLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosLongoPrazo_19.addFeatures(features_AcessosHidroviriosLongoPrazo_19);
var lyr_AcessosHidroviriosLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosLongoPrazo_19, 
                style: style_AcessosHidroviriosLongoPrazo_19,
                popuplayertitle: 'Acessos Hidroviários - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosLongoPrazo_19.png" /> Acessos Hidroviários - Longo Prazo '
            });
var format_AcessosHidroviriosMdioPrazo_20 = new ol.format.GeoJSON();
var features_AcessosHidroviriosMdioPrazo_20 = format_AcessosHidroviriosMdioPrazo_20.readFeatures(json_AcessosHidroviriosMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosMdioPrazo_20.addFeatures(features_AcessosHidroviriosMdioPrazo_20);
var lyr_AcessosHidroviriosMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosMdioPrazo_20, 
                style: style_AcessosHidroviriosMdioPrazo_20,
                popuplayertitle: 'Acessos Hidroviários - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosMdioPrazo_20.png" /> Acessos Hidroviários - Médio Prazo '
            });
var format_AcessosHidroviriosCurtoPrazo_21 = new ol.format.GeoJSON();
var features_AcessosHidroviriosCurtoPrazo_21 = format_AcessosHidroviriosCurtoPrazo_21.readFeatures(json_AcessosHidroviriosCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosCurtoPrazo_21.addFeatures(features_AcessosHidroviriosCurtoPrazo_21);
var lyr_AcessosHidroviriosCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosCurtoPrazo_21, 
                style: style_AcessosHidroviriosCurtoPrazo_21,
                popuplayertitle: 'Acessos Hidroviários - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosCurtoPrazo_21.png" /> Acessos Hidroviários - Curto Prazo '
            });
var format_AcessosHidroviriosSituaoAtual_22 = new ol.format.GeoJSON();
var features_AcessosHidroviriosSituaoAtual_22 = format_AcessosHidroviriosSituaoAtual_22.readFeatures(json_AcessosHidroviriosSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosSituaoAtual_22.addFeatures(features_AcessosHidroviriosSituaoAtual_22);
var lyr_AcessosHidroviriosSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosSituaoAtual_22, 
                style: style_AcessosHidroviriosSituaoAtual_22,
                popuplayertitle: 'Acessos Hidroviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosSituaoAtual_22.png" /> Acessos Hidroviários - Situação Atual'
            });
var format_AcessosDutoviriosLongoPrazo_23 = new ol.format.GeoJSON();
var features_AcessosDutoviriosLongoPrazo_23 = format_AcessosDutoviriosLongoPrazo_23.readFeatures(json_AcessosDutoviriosLongoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosLongoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosLongoPrazo_23.addFeatures(features_AcessosDutoviriosLongoPrazo_23);
var lyr_AcessosDutoviriosLongoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosLongoPrazo_23, 
                style: style_AcessosDutoviriosLongoPrazo_23,
                popuplayertitle: 'Acessos Dutoviários - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosLongoPrazo_23.png" /> Acessos Dutoviários - Longo Prazo '
            });
var format_AcessosDutoviriosMdioPrazo_24 = new ol.format.GeoJSON();
var features_AcessosDutoviriosMdioPrazo_24 = format_AcessosDutoviriosMdioPrazo_24.readFeatures(json_AcessosDutoviriosMdioPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosMdioPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosMdioPrazo_24.addFeatures(features_AcessosDutoviriosMdioPrazo_24);
var lyr_AcessosDutoviriosMdioPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosMdioPrazo_24, 
                style: style_AcessosDutoviriosMdioPrazo_24,
                popuplayertitle: 'Acessos Dutoviários - Médio Prazo  ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosMdioPrazo_24.png" /> Acessos Dutoviários - Médio Prazo  '
            });
var format_AcessosDutoviriosCurtoPrazo_25 = new ol.format.GeoJSON();
var features_AcessosDutoviriosCurtoPrazo_25 = format_AcessosDutoviriosCurtoPrazo_25.readFeatures(json_AcessosDutoviriosCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosCurtoPrazo_25.addFeatures(features_AcessosDutoviriosCurtoPrazo_25);
var lyr_AcessosDutoviriosCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosCurtoPrazo_25, 
                style: style_AcessosDutoviriosCurtoPrazo_25,
                popuplayertitle: 'Acessos Dutoviários - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosCurtoPrazo_25.png" /> Acessos Dutoviários - Curto Prazo '
            });
var format_AcessosDutoviriosSituaoAtual_26 = new ol.format.GeoJSON();
var features_AcessosDutoviriosSituaoAtual_26 = format_AcessosDutoviriosSituaoAtual_26.readFeatures(json_AcessosDutoviriosSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosSituaoAtual_26.addFeatures(features_AcessosDutoviriosSituaoAtual_26);
var lyr_AcessosDutoviriosSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosSituaoAtual_26, 
                style: style_AcessosDutoviriosSituaoAtual_26,
                popuplayertitle: 'Acessos Dutoviários - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosSituaoAtual_26.png" /> Acessos Dutoviários - Situação Atual '
            });
var format_AcessosFerroviriosLongoPrazo_27 = new ol.format.GeoJSON();
var features_AcessosFerroviriosLongoPrazo_27 = format_AcessosFerroviriosLongoPrazo_27.readFeatures(json_AcessosFerroviriosLongoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosLongoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosLongoPrazo_27.addFeatures(features_AcessosFerroviriosLongoPrazo_27);
var lyr_AcessosFerroviriosLongoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosLongoPrazo_27, 
                style: style_AcessosFerroviriosLongoPrazo_27,
                popuplayertitle: 'Acessos Ferroviários - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosLongoPrazo_27.png" /> Acessos Ferroviários - Longo Prazo '
            });
var format_AcessosFerroviriosMdioPrazo_28 = new ol.format.GeoJSON();
var features_AcessosFerroviriosMdioPrazo_28 = format_AcessosFerroviriosMdioPrazo_28.readFeatures(json_AcessosFerroviriosMdioPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosMdioPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosMdioPrazo_28.addFeatures(features_AcessosFerroviriosMdioPrazo_28);
var lyr_AcessosFerroviriosMdioPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosMdioPrazo_28, 
                style: style_AcessosFerroviriosMdioPrazo_28,
                popuplayertitle: 'Acessos Ferroviários - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosMdioPrazo_28.png" /> Acessos Ferroviários - Médio Prazo '
            });
var format_AcessosFerroviriosCurtoPrazo_29 = new ol.format.GeoJSON();
var features_AcessosFerroviriosCurtoPrazo_29 = format_AcessosFerroviriosCurtoPrazo_29.readFeatures(json_AcessosFerroviriosCurtoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosCurtoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosCurtoPrazo_29.addFeatures(features_AcessosFerroviriosCurtoPrazo_29);
var lyr_AcessosFerroviriosCurtoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosCurtoPrazo_29, 
                style: style_AcessosFerroviriosCurtoPrazo_29,
                popuplayertitle: 'Acessos Ferroviários - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosCurtoPrazo_29.png" /> Acessos Ferroviários - Curto Prazo '
            });
var format_AcessosFerroviriosSituaoAtual_30 = new ol.format.GeoJSON();
var features_AcessosFerroviriosSituaoAtual_30 = format_AcessosFerroviriosSituaoAtual_30.readFeatures(json_AcessosFerroviriosSituaoAtual_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosSituaoAtual_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosSituaoAtual_30.addFeatures(features_AcessosFerroviriosSituaoAtual_30);
var lyr_AcessosFerroviriosSituaoAtual_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosSituaoAtual_30, 
                style: style_AcessosFerroviriosSituaoAtual_30,
                popuplayertitle: 'Acessos Ferroviários - Situação Atual  ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosSituaoAtual_30.png" /> Acessos Ferroviários - Situação Atual  '
            });
var format_AcessosInternosRodoviriosLongoPrazo_31 = new ol.format.GeoJSON();
var features_AcessosInternosRodoviriosLongoPrazo_31 = format_AcessosInternosRodoviriosLongoPrazo_31.readFeatures(json_AcessosInternosRodoviriosLongoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodoviriosLongoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodoviriosLongoPrazo_31.addFeatures(features_AcessosInternosRodoviriosLongoPrazo_31);
var lyr_AcessosInternosRodoviriosLongoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodoviriosLongoPrazo_31, 
                style: style_AcessosInternosRodoviriosLongoPrazo_31,
                popuplayertitle: 'Acessos Internos Rodoviários - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodoviriosLongoPrazo_31.png" /> Acessos Internos Rodoviários - Longo Prazo '
            });
var format_AcessosInternosRodoviriosMdioPrazo_32 = new ol.format.GeoJSON();
var features_AcessosInternosRodoviriosMdioPrazo_32 = format_AcessosInternosRodoviriosMdioPrazo_32.readFeatures(json_AcessosInternosRodoviriosMdioPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodoviriosMdioPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodoviriosMdioPrazo_32.addFeatures(features_AcessosInternosRodoviriosMdioPrazo_32);
var lyr_AcessosInternosRodoviriosMdioPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodoviriosMdioPrazo_32, 
                style: style_AcessosInternosRodoviriosMdioPrazo_32,
                popuplayertitle: 'Acessos Internos Rodoviários - Médio Prazo  ',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodoviriosMdioPrazo_32.png" /> Acessos Internos Rodoviários - Médio Prazo  '
            });
var format_AcessosInternosRodoviriosCurtoPrazo_33 = new ol.format.GeoJSON();
var features_AcessosInternosRodoviriosCurtoPrazo_33 = format_AcessosInternosRodoviriosCurtoPrazo_33.readFeatures(json_AcessosInternosRodoviriosCurtoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodoviriosCurtoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodoviriosCurtoPrazo_33.addFeatures(features_AcessosInternosRodoviriosCurtoPrazo_33);
var lyr_AcessosInternosRodoviriosCurtoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodoviriosCurtoPrazo_33, 
                style: style_AcessosInternosRodoviriosCurtoPrazo_33,
                popuplayertitle: 'Acessos Internos Rodoviários - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodoviriosCurtoPrazo_33.png" /> Acessos Internos Rodoviários - Curto Prazo '
            });
var format_AcessosInternosRodoviriosSituaoAtual_34 = new ol.format.GeoJSON();
var features_AcessosInternosRodoviriosSituaoAtual_34 = format_AcessosInternosRodoviriosSituaoAtual_34.readFeatures(json_AcessosInternosRodoviriosSituaoAtual_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodoviriosSituaoAtual_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodoviriosSituaoAtual_34.addFeatures(features_AcessosInternosRodoviriosSituaoAtual_34);
var lyr_AcessosInternosRodoviriosSituaoAtual_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodoviriosSituaoAtual_34, 
                style: style_AcessosInternosRodoviriosSituaoAtual_34,
                popuplayertitle: 'Acessos Internos Rodoviários - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodoviriosSituaoAtual_34.png" /> Acessos Internos Rodoviários - Situação Atual '
            });
var format_AcessosRodoviriosLongoPrazo_35 = new ol.format.GeoJSON();
var features_AcessosRodoviriosLongoPrazo_35 = format_AcessosRodoviriosLongoPrazo_35.readFeatures(json_AcessosRodoviriosLongoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosLongoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosLongoPrazo_35.addFeatures(features_AcessosRodoviriosLongoPrazo_35);
var lyr_AcessosRodoviriosLongoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosLongoPrazo_35, 
                style: style_AcessosRodoviriosLongoPrazo_35,
                popuplayertitle: 'Acessos Rodoviários - Longo Prazo  ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosLongoPrazo_35.png" /> Acessos Rodoviários - Longo Prazo  '
            });
var format_AcessosRodoviriosMdioPrazo_36 = new ol.format.GeoJSON();
var features_AcessosRodoviriosMdioPrazo_36 = format_AcessosRodoviriosMdioPrazo_36.readFeatures(json_AcessosRodoviriosMdioPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosMdioPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosMdioPrazo_36.addFeatures(features_AcessosRodoviriosMdioPrazo_36);
var lyr_AcessosRodoviriosMdioPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosMdioPrazo_36, 
                style: style_AcessosRodoviriosMdioPrazo_36,
                popuplayertitle: 'Acessos Rodoviários - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosMdioPrazo_36.png" /> Acessos Rodoviários - Médio Prazo'
            });
var format_AcessosRodoviriosCurtoPrazo_37 = new ol.format.GeoJSON();
var features_AcessosRodoviriosCurtoPrazo_37 = format_AcessosRodoviriosCurtoPrazo_37.readFeatures(json_AcessosRodoviriosCurtoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosCurtoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosCurtoPrazo_37.addFeatures(features_AcessosRodoviriosCurtoPrazo_37);
var lyr_AcessosRodoviriosCurtoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosCurtoPrazo_37, 
                style: style_AcessosRodoviriosCurtoPrazo_37,
                popuplayertitle: 'Acessos Rodoviários - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosCurtoPrazo_37.png" /> Acessos Rodoviários - Curto Prazo'
            });
var format_AcessosRodoviriosSituaoAtual_38 = new ol.format.GeoJSON();
var features_AcessosRodoviriosSituaoAtual_38 = format_AcessosRodoviriosSituaoAtual_38.readFeatures(json_AcessosRodoviriosSituaoAtual_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosSituaoAtual_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosSituaoAtual_38.addFeatures(features_AcessosRodoviriosSituaoAtual_38);
var lyr_AcessosRodoviriosSituaoAtual_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosSituaoAtual_38, 
                style: style_AcessosRodoviriosSituaoAtual_38,
                popuplayertitle: 'Acessos Rodoviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosSituaoAtual_38.png" /> Acessos Rodoviários - Situação Atual'
            });
var format_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39 = format_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.readFeatures(json_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.addFeatures(features_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39);
var lyr_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39, 
                style: style_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39,
                popuplayertitle: 'Terminal de Uso Privado (Entorno da Poligonal) - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.png" /> Terminal de Uso Privado (Entorno da Poligonal) - Curto Prazo '
            });
var format_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40 = format_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.readFeatures(json_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.addFeatures(features_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40);
var lyr_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40, 
                style: style_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40,
                popuplayertitle: 'Terminal de Uso Privado (Entorno da Poligonal) - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.png" /> Terminal de Uso Privado (Entorno da Poligonal) - Situação Atual '
            });
var format_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41 = format_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.readFeatures(json_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.addFeatures(features_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41);
var lyr_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41, 
                style: style_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto – Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.png" /> Áreas e Instalações Alfandegadas do Porto – Longo Prazo '
            });
var format_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42 = format_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.readFeatures(json_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.addFeatures(features_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42);
var lyr_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42, 
                style: style_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto – Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.png" /> Áreas e Instalações Alfandegadas do Porto – Médio Prazo '
            });
var format_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43 = format_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.readFeatures(json_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.addFeatures(features_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43);
var lyr_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43, 
                style: style_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto – Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.png" /> Áreas e Instalações Alfandegadas do Porto – Curto Prazo '
            });
var format_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44 = format_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.readFeatures(json_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.addFeatures(features_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44);
var lyr_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44, 
                style: style_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.png" /> Áreas e Instalações Alfandegadas do Porto - Situação Atual '
            });
var format_InstalaesNoOperacionaisLongoPrazo_45 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisLongoPrazo_45 = format_InstalaesNoOperacionaisLongoPrazo_45.readFeatures(json_InstalaesNoOperacionaisLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisLongoPrazo_45.addFeatures(features_InstalaesNoOperacionaisLongoPrazo_45);
var lyr_InstalaesNoOperacionaisLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisLongoPrazo_45, 
                style: style_InstalaesNoOperacionaisLongoPrazo_45,
                popuplayertitle: 'Instalações Não Operacionais - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisLongoPrazo_45.png" /> Instalações Não Operacionais - Longo Prazo'
            });
var format_InstalaesNoOperacionaisMdioPrazo_46 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisMdioPrazo_46 = format_InstalaesNoOperacionaisMdioPrazo_46.readFeatures(json_InstalaesNoOperacionaisMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisMdioPrazo_46.addFeatures(features_InstalaesNoOperacionaisMdioPrazo_46);
var lyr_InstalaesNoOperacionaisMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisMdioPrazo_46, 
                style: style_InstalaesNoOperacionaisMdioPrazo_46,
                popuplayertitle: 'Instalações Não Operacionais - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisMdioPrazo_46.png" /> Instalações Não Operacionais - Médio Prazo '
            });
var format_InstalaesNoOperacionaisCurtoPrazo_47 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisCurtoPrazo_47 = format_InstalaesNoOperacionaisCurtoPrazo_47.readFeatures(json_InstalaesNoOperacionaisCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisCurtoPrazo_47.addFeatures(features_InstalaesNoOperacionaisCurtoPrazo_47);
var lyr_InstalaesNoOperacionaisCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisCurtoPrazo_47, 
                style: style_InstalaesNoOperacionaisCurtoPrazo_47,
                popuplayertitle: 'Instalações Não Operacionais - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisCurtoPrazo_47.png" /> Instalações Não Operacionais - Curto Prazo '
            });
var format_InstalaesNoOperacionaisSituaoAtual_48 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisSituaoAtual_48 = format_InstalaesNoOperacionaisSituaoAtual_48.readFeatures(json_InstalaesNoOperacionaisSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisSituaoAtual_48.addFeatures(features_InstalaesNoOperacionaisSituaoAtual_48);
var lyr_InstalaesNoOperacionaisSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisSituaoAtual_48, 
                style: style_InstalaesNoOperacionaisSituaoAtual_48,
                popuplayertitle: 'Instalações Não Operacionais - Situação Atual  ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisSituaoAtual_48.png" /> Instalações Não Operacionais - Situação Atual  '
            });
var format_AcostagemLongoPrazo_49 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_49 = format_AcostagemLongoPrazo_49.readFeatures(json_AcostagemLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_49.addFeatures(features_AcostagemLongoPrazo_49);
var lyr_AcostagemLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_49, 
                style: style_AcostagemLongoPrazo_49,
                popuplayertitle: 'Acostagem - Longo Prazo  ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_49.png" /> Acostagem - Longo Prazo  '
            });
var format_AcostagemMdioPrazo_50 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_50 = format_AcostagemMdioPrazo_50.readFeatures(json_AcostagemMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_50.addFeatures(features_AcostagemMdioPrazo_50);
var lyr_AcostagemMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_50, 
                style: style_AcostagemMdioPrazo_50,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_50.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_51 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_51 = format_AcostagemCurtoPrazo_51.readFeatures(json_AcostagemCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_51.addFeatures(features_AcostagemCurtoPrazo_51);
var lyr_AcostagemCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_51, 
                style: style_AcostagemCurtoPrazo_51,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_51.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_52 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_52 = format_AcostagemSituaoAtual_52.readFeatures(json_AcostagemSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_52.addFeatures(features_AcostagemSituaoAtual_52);
var lyr_AcostagemSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_52, 
                style: style_AcostagemSituaoAtual_52,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_52.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_53 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_53 = format_ArmazenagemLongoPrazo_53.readFeatures(json_ArmazenagemLongoPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_53.addFeatures(features_ArmazenagemLongoPrazo_53);
var lyr_ArmazenagemLongoPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_53, 
                style: style_ArmazenagemLongoPrazo_53,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_53.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_54 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_54 = format_ArmazenagemMdioPrazo_54.readFeatures(json_ArmazenagemMdioPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_54.addFeatures(features_ArmazenagemMdioPrazo_54);
var lyr_ArmazenagemMdioPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_54, 
                style: style_ArmazenagemMdioPrazo_54,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_54.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_55 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_55 = format_ArmazenagemCurtoPrazo_55.readFeatures(json_ArmazenagemCurtoPrazo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_55.addFeatures(features_ArmazenagemCurtoPrazo_55);
var lyr_ArmazenagemCurtoPrazo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_55, 
                style: style_ArmazenagemCurtoPrazo_55,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_55.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_56 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_56 = format_ArmazenagemSituaoAtual_56.readFeatures(json_ArmazenagemSituaoAtual_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_56.addFeatures(features_ArmazenagemSituaoAtual_56);
var lyr_ArmazenagemSituaoAtual_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_56, 
                style: style_ArmazenagemSituaoAtual_56,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_56.png" /> Armazenagem - Situação Atual '
            });
var format_reasArrendveisLongoPrazo_57 = new ol.format.GeoJSON();
var features_reasArrendveisLongoPrazo_57 = format_reasArrendveisLongoPrazo_57.readFeatures(json_reasArrendveisLongoPrazo_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisLongoPrazo_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisLongoPrazo_57.addFeatures(features_reasArrendveisLongoPrazo_57);
var lyr_reasArrendveisLongoPrazo_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisLongoPrazo_57, 
                style: style_reasArrendveisLongoPrazo_57,
                popuplayertitle: 'Áreas Arrendáveis - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisLongoPrazo_57.png" /> Áreas Arrendáveis - Longo Prazo'
            });
var format_reasArrendveisMdioPrazo_58 = new ol.format.GeoJSON();
var features_reasArrendveisMdioPrazo_58 = format_reasArrendveisMdioPrazo_58.readFeatures(json_reasArrendveisMdioPrazo_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisMdioPrazo_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisMdioPrazo_58.addFeatures(features_reasArrendveisMdioPrazo_58);
var lyr_reasArrendveisMdioPrazo_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisMdioPrazo_58, 
                style: style_reasArrendveisMdioPrazo_58,
                popuplayertitle: 'Áreas Arrendáveis - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisMdioPrazo_58.png" /> Áreas Arrendáveis - Médio Prazo'
            });
var format_reasArrendveisCurtoPrazo_59 = new ol.format.GeoJSON();
var features_reasArrendveisCurtoPrazo_59 = format_reasArrendveisCurtoPrazo_59.readFeatures(json_reasArrendveisCurtoPrazo_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisCurtoPrazo_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisCurtoPrazo_59.addFeatures(features_reasArrendveisCurtoPrazo_59);
var lyr_reasArrendveisCurtoPrazo_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisCurtoPrazo_59, 
                style: style_reasArrendveisCurtoPrazo_59,
                popuplayertitle: 'Áreas Arrendáveis - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisCurtoPrazo_59.png" /> Áreas Arrendáveis - Curto Prazo'
            });
var format_reasArrendveisSituaoAtual_60 = new ol.format.GeoJSON();
var features_reasArrendveisSituaoAtual_60 = format_reasArrendveisSituaoAtual_60.readFeatures(json_reasArrendveisSituaoAtual_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisSituaoAtual_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisSituaoAtual_60.addFeatures(features_reasArrendveisSituaoAtual_60);
var lyr_reasArrendveisSituaoAtual_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisSituaoAtual_60, 
                style: style_reasArrendveisSituaoAtual_60,
                popuplayertitle: 'Áreas Arrendáveis - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisSituaoAtual_60.png" /> Áreas Arrendáveis - Situação Atual'
            });
var format_reasArrendadasLongoPrazo_61 = new ol.format.GeoJSON();
var features_reasArrendadasLongoPrazo_61 = format_reasArrendadasLongoPrazo_61.readFeatures(json_reasArrendadasLongoPrazo_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadasLongoPrazo_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadasLongoPrazo_61.addFeatures(features_reasArrendadasLongoPrazo_61);
var lyr_reasArrendadasLongoPrazo_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadasLongoPrazo_61, 
                style: style_reasArrendadasLongoPrazo_61,
                popuplayertitle: 'Áreas Arrendadas – Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadasLongoPrazo_61.png" /> Áreas Arrendadas – Longo Prazo'
            });
var format_reasArrendadasMdioPrazo_62 = new ol.format.GeoJSON();
var features_reasArrendadasMdioPrazo_62 = format_reasArrendadasMdioPrazo_62.readFeatures(json_reasArrendadasMdioPrazo_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadasMdioPrazo_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadasMdioPrazo_62.addFeatures(features_reasArrendadasMdioPrazo_62);
var lyr_reasArrendadasMdioPrazo_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadasMdioPrazo_62, 
                style: style_reasArrendadasMdioPrazo_62,
                popuplayertitle: 'Áreas Arrendadas – Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadasMdioPrazo_62.png" /> Áreas Arrendadas – Médio Prazo'
            });
var format_reasArrendadasCurtoPrazo_63 = new ol.format.GeoJSON();
var features_reasArrendadasCurtoPrazo_63 = format_reasArrendadasCurtoPrazo_63.readFeatures(json_reasArrendadasCurtoPrazo_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadasCurtoPrazo_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadasCurtoPrazo_63.addFeatures(features_reasArrendadasCurtoPrazo_63);
var lyr_reasArrendadasCurtoPrazo_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadasCurtoPrazo_63, 
                style: style_reasArrendadasCurtoPrazo_63,
                popuplayertitle: 'Áreas Arrendadas – Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadasCurtoPrazo_63.png" /> Áreas Arrendadas – Curto Prazo'
            });
var format_reasArrendadasSituaoAtual_64 = new ol.format.GeoJSON();
var features_reasArrendadasSituaoAtual_64 = format_reasArrendadasSituaoAtual_64.readFeatures(json_reasArrendadasSituaoAtual_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadasSituaoAtual_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadasSituaoAtual_64.addFeatures(features_reasArrendadasSituaoAtual_64);
var lyr_reasArrendadasSituaoAtual_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadasSituaoAtual_64, 
                style: style_reasArrendadasSituaoAtual_64,
                popuplayertitle: 'Áreas Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadasSituaoAtual_64.png" /> Áreas Arrendadas - Situação Atual'
            });
var format_ZoneamentoLongoPrazo_65 = new ol.format.GeoJSON();
var features_ZoneamentoLongoPrazo_65 = format_ZoneamentoLongoPrazo_65.readFeatures(json_ZoneamentoLongoPrazo_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoLongoPrazo_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLongoPrazo_65.addFeatures(features_ZoneamentoLongoPrazo_65);
var lyr_ZoneamentoLongoPrazo_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLongoPrazo_65, 
                style: style_ZoneamentoLongoPrazo_65,
                popuplayertitle: 'Zoneamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoLongoPrazo_65.png" /> Zoneamento - Longo Prazo'
            });
var format_ZoneamentoMdioPrazo_66 = new ol.format.GeoJSON();
var features_ZoneamentoMdioPrazo_66 = format_ZoneamentoMdioPrazo_66.readFeatures(json_ZoneamentoMdioPrazo_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoMdioPrazo_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoMdioPrazo_66.addFeatures(features_ZoneamentoMdioPrazo_66);
var lyr_ZoneamentoMdioPrazo_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoMdioPrazo_66, 
                style: style_ZoneamentoMdioPrazo_66,
                popuplayertitle: 'Zoneamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoMdioPrazo_66.png" /> Zoneamento - Médio Prazo '
            });
var format_ZoneamentoCurtoPrazo_67 = new ol.format.GeoJSON();
var features_ZoneamentoCurtoPrazo_67 = format_ZoneamentoCurtoPrazo_67.readFeatures(json_ZoneamentoCurtoPrazo_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoCurtoPrazo_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoCurtoPrazo_67.addFeatures(features_ZoneamentoCurtoPrazo_67);
var lyr_ZoneamentoCurtoPrazo_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoCurtoPrazo_67, 
                style: style_ZoneamentoCurtoPrazo_67,
                popuplayertitle: 'Zoneamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoCurtoPrazo_67.png" /> Zoneamento - Curto Prazo '
            });
var format_ZoneamentoSituaoAtual_68 = new ol.format.GeoJSON();
var features_ZoneamentoSituaoAtual_68 = format_ZoneamentoSituaoAtual_68.readFeatures(json_ZoneamentoSituaoAtual_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoSituaoAtual_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoSituaoAtual_68.addFeatures(features_ZoneamentoSituaoAtual_68);
var lyr_ZoneamentoSituaoAtual_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoSituaoAtual_68, 
                style: style_ZoneamentoSituaoAtual_68,
                popuplayertitle: 'Zoneamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoSituaoAtual_68.png" /> Zoneamento - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeSantana_69 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeSantana_69 = format_PoligonaldareadoPortoOrganizadodeSantana_69.readFeatures(json_PoligonaldareadoPortoOrganizadodeSantana_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeSantana_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeSantana_69.addFeatures(features_PoligonaldareadoPortoOrganizadodeSantana_69);
var lyr_PoligonaldareadoPortoOrganizadodeSantana_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeSantana_69, 
                style: style_PoligonaldareadoPortoOrganizadodeSantana_69,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Santana',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeSantana_69.png" /> Poligonal da Área do Porto Organizado de Santana'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeSantana_69,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZoneamentoLongoPrazo_65,lyr_ZoneamentoMdioPrazo_66,lyr_ZoneamentoCurtoPrazo_67,lyr_ZoneamentoSituaoAtual_68,],
                                fold: 'open',
                                title: 'Zoneamento '});
var group_reasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasArrendadasLongoPrazo_61,lyr_reasArrendadasMdioPrazo_62,lyr_reasArrendadasCurtoPrazo_63,lyr_reasArrendadasSituaoAtual_64,],
                                fold: 'open',
                                title: 'Áreas Arrendadas '});
var group_reasArrendveis = new ol.layer.Group({
                                layers: [lyr_reasArrendveisLongoPrazo_57,lyr_reasArrendveisMdioPrazo_58,lyr_reasArrendveisCurtoPrazo_59,lyr_reasArrendveisSituaoAtual_60,],
                                fold: 'open',
                                title: 'Áreas Arrendáveis '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_53,lyr_ArmazenagemMdioPrazo_54,lyr_ArmazenagemCurtoPrazo_55,lyr_ArmazenagemSituaoAtual_56,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_49,lyr_AcostagemMdioPrazo_50,lyr_AcostagemCurtoPrazo_51,lyr_AcostagemSituaoAtual_52,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_InstalaesNoOperacionais = new ol.layer.Group({
                                layers: [lyr_InstalaesNoOperacionaisLongoPrazo_45,lyr_InstalaesNoOperacionaisMdioPrazo_46,lyr_InstalaesNoOperacionaisCurtoPrazo_47,lyr_InstalaesNoOperacionaisSituaoAtual_48,],
                                fold: 'open',
                                title: 'Instalações Não Operacionais '});
var group_reaseInstalaesAlfandegadasdoPorto = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41,lyr_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42,lyr_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43,lyr_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas do Porto '});
var group_TerminaldeUsoPrivadoEntornodaPoligonal = new ol.layer.Group({
                                layers: [lyr_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39,lyr_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40,],
                                fold: 'open',
                                title: 'Terminal de Uso Privado (Entorno da Poligonal) '});
var group_AcessosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosLongoPrazo_35,lyr_AcessosRodoviriosMdioPrazo_36,lyr_AcessosRodoviriosCurtoPrazo_37,lyr_AcessosRodoviriosSituaoAtual_38,],
                                fold: 'open',
                                title: 'Acessos Rodoviários'});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosInternosRodoviriosLongoPrazo_31,lyr_AcessosInternosRodoviriosMdioPrazo_32,lyr_AcessosInternosRodoviriosCurtoPrazo_33,lyr_AcessosInternosRodoviriosSituaoAtual_34,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerrovirios = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosLongoPrazo_27,lyr_AcessosFerroviriosMdioPrazo_28,lyr_AcessosFerroviriosCurtoPrazo_29,lyr_AcessosFerroviriosSituaoAtual_30,],
                                fold: 'open',
                                title: 'Acessos Ferroviários'});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosLongoPrazo_23,lyr_AcessosDutoviriosMdioPrazo_24,lyr_AcessosDutoviriosCurtoPrazo_25,lyr_AcessosDutoviriosSituaoAtual_26,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_AcessosHidrovirios = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosLongoPrazo_19,lyr_AcessosHidroviriosMdioPrazo_20,lyr_AcessosHidroviriosCurtoPrazo_21,lyr_AcessosHidroviriosSituaoAtual_22,],
                                fold: 'open',
                                title: 'Acessos Hidroviários'});
var group_CanaldeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaldeAcessoLongoPrazo_15,lyr_CanaldeAcessoMdioPrazo_16,lyr_CanaldeAcessoCurtoPrazo_17,lyr_CanaldeAcessoSituaoAtual_18,],
                                fold: 'open',
                                title: 'Canal de Acesso '});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciadeEvoluoLongoPrazo_11,lyr_BaciadeEvoluoMdioPrazo_12,lyr_BaciadeEvoluoCurtoPrazo_13,lyr_BaciadeEvoluoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Bacia de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadouroLongoPrazo_7,lyr_FundeadouroMdioPrazo_8,lyr_FundeadouroCurtoPrazo_9,lyr_FundeadouroSituaoAtual_10,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_ServiosdeApoio = new ol.layer.Group({
                                layers: [lyr_ServiosdeApoioSituaoAtual_6,],
                                fold: 'open',
                                title: 'Serviços de Apoio '});
var group_Equipamento = new ol.layer.Group({
                                layers: [lyr_EquipamentosSituaoAtual_5,],
                                fold: 'open',
                                title: 'Equipamento '});
var group_reasPrioritriasparaConservao = new ol.layer.Group({
                                layers: [lyr_reasPrioritriasparaConservaoSituaoAtual_4,],
                                fold: 'open',
                                title: 'Áreas Prioritárias para Conservação '});
var group_UnidadedeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadedeConservao_3,],
                                fold: 'open',
                                title: 'Unidade de Conservação '});
var group_ComunidadesQuilombolas = new ol.layer.Group({
                                layers: [lyr_ComunidadesQuilombolas_2,],
                                fold: 'open',
                                title: 'Comunidades Quilombolas '});
var group_BensTombados = new ol.layer.Group({
                                layers: [lyr_BensTombados_1,],
                                fold: 'open',
                                title: 'Bens Tombados '});

lyr_GoogleSatellite_0.setVisible(true);lyr_BensTombados_1.setVisible(false);lyr_ComunidadesQuilombolas_2.setVisible(false);lyr_UnidadedeConservao_3.setVisible(false);lyr_reasPrioritriasparaConservaoSituaoAtual_4.setVisible(false);lyr_EquipamentosSituaoAtual_5.setVisible(false);lyr_ServiosdeApoioSituaoAtual_6.setVisible(false);lyr_FundeadouroLongoPrazo_7.setVisible(false);lyr_FundeadouroMdioPrazo_8.setVisible(false);lyr_FundeadouroCurtoPrazo_9.setVisible(false);lyr_FundeadouroSituaoAtual_10.setVisible(false);lyr_BaciadeEvoluoLongoPrazo_11.setVisible(false);lyr_BaciadeEvoluoMdioPrazo_12.setVisible(false);lyr_BaciadeEvoluoCurtoPrazo_13.setVisible(false);lyr_BaciadeEvoluoSituaoAtual_14.setVisible(false);lyr_CanaldeAcessoLongoPrazo_15.setVisible(false);lyr_CanaldeAcessoMdioPrazo_16.setVisible(false);lyr_CanaldeAcessoCurtoPrazo_17.setVisible(false);lyr_CanaldeAcessoSituaoAtual_18.setVisible(false);lyr_AcessosHidroviriosLongoPrazo_19.setVisible(false);lyr_AcessosHidroviriosMdioPrazo_20.setVisible(false);lyr_AcessosHidroviriosCurtoPrazo_21.setVisible(false);lyr_AcessosHidroviriosSituaoAtual_22.setVisible(false);lyr_AcessosDutoviriosLongoPrazo_23.setVisible(false);lyr_AcessosDutoviriosMdioPrazo_24.setVisible(false);lyr_AcessosDutoviriosCurtoPrazo_25.setVisible(false);lyr_AcessosDutoviriosSituaoAtual_26.setVisible(false);lyr_AcessosFerroviriosLongoPrazo_27.setVisible(false);lyr_AcessosFerroviriosMdioPrazo_28.setVisible(false);lyr_AcessosFerroviriosCurtoPrazo_29.setVisible(false);lyr_AcessosFerroviriosSituaoAtual_30.setVisible(false);lyr_AcessosInternosRodoviriosLongoPrazo_31.setVisible(false);lyr_AcessosInternosRodoviriosMdioPrazo_32.setVisible(false);lyr_AcessosInternosRodoviriosCurtoPrazo_33.setVisible(false);lyr_AcessosInternosRodoviriosSituaoAtual_34.setVisible(false);lyr_AcessosRodoviriosLongoPrazo_35.setVisible(false);lyr_AcessosRodoviriosMdioPrazo_36.setVisible(false);lyr_AcessosRodoviriosCurtoPrazo_37.setVisible(false);lyr_AcessosRodoviriosSituaoAtual_38.setVisible(false);lyr_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.setVisible(false);lyr_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.setVisible(false);lyr_InstalaesNoOperacionaisLongoPrazo_45.setVisible(false);lyr_InstalaesNoOperacionaisMdioPrazo_46.setVisible(false);lyr_InstalaesNoOperacionaisCurtoPrazo_47.setVisible(false);lyr_InstalaesNoOperacionaisSituaoAtual_48.setVisible(false);lyr_AcostagemLongoPrazo_49.setVisible(false);lyr_AcostagemMdioPrazo_50.setVisible(false);lyr_AcostagemCurtoPrazo_51.setVisible(false);lyr_AcostagemSituaoAtual_52.setVisible(false);lyr_ArmazenagemLongoPrazo_53.setVisible(false);lyr_ArmazenagemMdioPrazo_54.setVisible(false);lyr_ArmazenagemCurtoPrazo_55.setVisible(false);lyr_ArmazenagemSituaoAtual_56.setVisible(false);lyr_reasArrendveisLongoPrazo_57.setVisible(false);lyr_reasArrendveisMdioPrazo_58.setVisible(false);lyr_reasArrendveisCurtoPrazo_59.setVisible(false);lyr_reasArrendveisSituaoAtual_60.setVisible(false);lyr_reasArrendadasLongoPrazo_61.setVisible(false);lyr_reasArrendadasMdioPrazo_62.setVisible(false);lyr_reasArrendadasCurtoPrazo_63.setVisible(false);lyr_reasArrendadasSituaoAtual_64.setVisible(false);lyr_ZoneamentoLongoPrazo_65.setVisible(false);lyr_ZoneamentoMdioPrazo_66.setVisible(false);lyr_ZoneamentoCurtoPrazo_67.setVisible(false);lyr_ZoneamentoSituaoAtual_68.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeSantana_69.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_BensTombados,group_ComunidadesQuilombolas,group_UnidadedeConservao,group_reasPrioritriasparaConservao,group_Equipamento,group_ServiosdeApoio,group_Fundeadouros,group_BaciadeEvoluo,group_CanaldeAcesso,group_AcessosHidrovirios,group_AcessosDutoviriosExternos,group_AcessosFerrovirios,group_AcessosRodoviriosInternos,group_AcessosRodovirios,group_TerminaldeUsoPrivadoEntornodaPoligonal,group_reaseInstalaesAlfandegadasdoPorto,group_InstalaesNoOperacionais,group_Acostagem,group_Armazenagem,group_reasArrendveis,group_reasArrendadas,group_Zoneamento,group_PoligonaldareadoPortoOrganizado];
lyr_BensTombados_1.set('fieldAliases', {'Nome': 'Nome', 'Codigo': 'Código ', 'Municipio': 'Município ', 'Estado': 'Estado', 'Fonte': 'Fonte', 'AnoDisp': 'Ano de Disponibilização ', });
lyr_ComunidadesQuilombolas_2.set('fieldAliases', {'Nome': 'Nome', 'NumFamilia': 'Número de Família ', 'Estado': 'Estado', 'Municipio': 'Município ', 'Fonte': 'Fonte', 'AnoDisponi': 'Ano de Disponibilização ', });
lyr_UnidadedeConservao_3.set('fieldAliases', {'Nome': 'Nome', 'Decreto': 'Decreto', 'AnoDisp': 'Ano de Disponibilização ', 'PlanManejo': 'Plano de Manejo ', 'Jurisdicao': 'Jurisdição ', 'Categoria': 'Categoria', 'Fonte': 'Fonte', 'Estado': 'Estado', 'Município': 'Município', 'AtoLegal': 'Ato Legal ', 'Uso': 'Uso', });
lyr_reasPrioritriasparaConservaoSituaoAtual_4.set('fieldAliases', {'Nome': 'Nome', 'Tipo': 'Tipo', 'Importanc': 'Importância ', 'Prioridade': 'Prioridade', 'Caracteris': 'Características ', 'Ameacas': 'Ameaças ', 'Oportunid': 'Oportunidades ', 'AcaoPrior': 'Ação Prioritária ', 'Fonte': 'Fonte', 'AnoDisp': 'Ano de Disponibilização ', 'CriaUC': 'Cria Unidade de Conservação ', });
lyr_EquipamentosSituaoAtual_5.set('fieldAliases', {'TipoEquip': 'Tipo de Equipamento ', 'FinalEquip': 'Finalidade do Equipamento ', 'OperEquip': 'Operador do Equipamento ', 'CapEquip_t': 'Capacidade do Equipamento (t) ', 'DataFabri': 'Data de Fabricação ', 'TempUsoAno': 'Tempo de Uso (anos) ', });
lyr_ServiosdeApoioSituaoAtual_6.set('fieldAliases', {'ServOferec': 'Serviço Oferecido ', 'EmpresForn': 'Empresa Fornecedora ', 'Capacidade': 'Capacidade', });
lyr_FundeadouroLongoPrazo_7.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Fonte': 'Fonte', });
lyr_FundeadouroMdioPrazo_8.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Fonte': 'Fonte', });
lyr_FundeadouroCurtoPrazo_9.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Fonte': 'Fonte', });
lyr_FundeadouroSituaoAtual_10.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m)', 'Diametro_m': 'Diâmetro (m) ', 'Fonte': 'Fonte', });
lyr_BaciadeEvoluoLongoPrazo_11.set('fieldAliases', {'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Nome': 'Nome', 'Fonte': 'Fonte', });
lyr_BaciadeEvoluoMdioPrazo_12.set('fieldAliases', {'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Nome': 'Nome', 'Fonte': 'Fonte', });
lyr_BaciadeEvoluoCurtoPrazo_13.set('fieldAliases', {'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Nome': 'Nome', 'Fonte': 'Fonte', });
lyr_BaciadeEvoluoSituaoAtual_14.set('fieldAliases', {'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'Nome': 'Nome', 'Fonte': 'Fonte', });
lyr_CanaldeAcessoLongoPrazo_15.set('fieldAliases', {'Trecho': 'Trecho', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametr_m': 'Diâmetro (m) ', 'Obs': 'Observação ', });
lyr_CanaldeAcessoMdioPrazo_16.set('fieldAliases', {'Trecho': 'Trecho', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametr_m': 'Diâmetro (m) ', 'Obs': 'Observação ', });
lyr_CanaldeAcessoCurtoPrazo_17.set('fieldAliases', {'Trecho': 'Trecho', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametr_m': 'Diâmetro (m) ', 'Obs': 'Observação ', });
lyr_CanaldeAcessoSituaoAtual_18.set('fieldAliases', {'Trecho': 'Trecho', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametr_m': 'Diâmetro (m) ', 'Obs': 'Observação', });
lyr_AcessosHidroviriosLongoPrazo_19.set('fieldAliases', {'Nome': 'Nome', 'TipoNavega': 'Tipo de Navegação ', 'Extens_km': 'Extensão (Km) ', 'Profun_min': 'Profundidade Mínima (m) ', 'Profun_max': 'Profundidade Máxima (m) ', 'Atualiza': 'Atualização ', });
lyr_AcessosHidroviriosMdioPrazo_20.set('fieldAliases', {'Nome': 'Nome', 'TipoNavega': 'Tipo de Navegação ', 'Extens_km': 'Extensão (Km) ', 'Profun_min': 'Profundidade Mínima (m) ', 'Profun_max': 'Profundidade Máxima (m) ', 'Atualiza': 'Atualização ', });
lyr_AcessosHidroviriosCurtoPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'TipoNavega': 'Tipo de Navegação ', 'Extens_km': 'Extensão (Km) ', 'Profun_min': 'Profundidade Mínima (m) ', 'Profun_max': 'Profundidade Máxima (m) ', 'Atualiza': 'Atualização ', });
lyr_AcessosHidroviriosSituaoAtual_22.set('fieldAliases', {'Nome': 'Nome', 'TipoNavega': 'Tipo de Navegação ', 'Extens_km': 'Extensão (Km) ', 'Profun_min': 'Profundidade Mínima (m) ', 'Profun_max': 'Profundidade Máxima (m) ', 'Atualiza': 'Atualização ', });
lyr_AcessosDutoviriosLongoPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'Material': 'Material', 'Posicao': 'Posição', 'Operacao': 'Operação ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto ', 'Municip': 'Município ', 'UF': 'Unidade de Federação ', 'Atualiza': 'Atualização ', });
lyr_AcessosDutoviriosMdioPrazo_24.set('fieldAliases', {'Nome': 'Nome', 'Material': 'Material', 'Posicao': 'Posição ', 'Operacao': 'Operação ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto ', 'Municip': 'Município ', 'UF': 'Unidade de Federação ', 'Atualiza': 'Atualização ', });
lyr_AcessosDutoviriosCurtoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'Material': 'Material', 'Posicao': 'Posição ', 'Operacao': 'Operação ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto ', 'Municip': 'Município ', 'UF': 'Unidade de Federação ', 'Atualiza': 'Atualização ', });
lyr_AcessosDutoviriosSituaoAtual_26.set('fieldAliases', {'Nome': 'Nome', 'Material': 'Material', 'Posicao': 'Posição ', 'Operacao': 'Operação ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto ', 'Municip': 'Município ', 'UF': 'Unidade de Federação ', 'Atualiza': 'Atualização ', });
lyr_AcessosFerroviriosLongoPrazo_27.set('fieldAliases', {'Linha': 'Linha', 'Extensa_km': 'Extensão (Km) ', 'Bitola': 'Bitola', 'Concessao': 'Concessão ', 'Descricao': 'Descrição ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualizaca': 'Atualização ', });
lyr_AcessosFerroviriosMdioPrazo_28.set('fieldAliases', {'Linha': 'Linha', 'Extensa_km': 'Extensão (Km) ', 'Bitola': 'Bitola', 'Concessao': 'Concessão ', 'Descricao': 'Descrição ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualizaca': 'Atualização ', });
lyr_AcessosFerroviriosCurtoPrazo_29.set('fieldAliases', {'Linha': 'Linha', 'Extensa_km': 'Extensão (Km) ', 'Bitola': 'Bitola', 'Concessao': 'Concessão ', 'Descricao': 'Descrição ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualizaca': 'Atualização ', });
lyr_AcessosFerroviriosSituaoAtual_30.set('fieldAliases', {'Linha': 'Linha', 'Extensa_km': 'Extensão (Km) ', 'Bitola': 'Bitola', 'Concessao': 'Concessão ', 'Descricao': 'Descrição ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualizaca': 'Atualização ', });
lyr_AcessosInternosRodoviriosLongoPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosInternosRodoviriosMdioPrazo_32.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km)', });
lyr_AcessosInternosRodoviriosCurtoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosInternosRodoviriosSituaoAtual_34.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosRodoviriosLongoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV_SNV': 'PNV (plano nacional da viação) ', 'Extensa_km': 'Extensão (Km) ', 'Jurisdicao': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessao': 'Concessão ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'VMD_Diario': 'VMD Diário ', });
lyr_AcessosRodoviriosMdioPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV_SNV': 'PNV (plano nacional da viação) ', 'Extensa_km': 'Extensão (Km) ', 'Jurisdicao': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessao': 'Concessão ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'VMD_Diario': 'VMD Diário ', });
lyr_AcessosRodoviriosCurtoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV_SNV': 'PNV (plano nacional da viação) ', 'Extensa_km': 'Extensão (Km) ', 'Jurisdicao': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessao': 'Concessão ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'VMD_Diario': 'VMD Diário ', });
lyr_AcessosRodoviriosSituaoAtual_38.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV_SNV': 'PNV (plano nacional da viação) ', 'Extensa_km': 'Extensão (Km) ', 'Jurisdicao': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessao': 'Concessão ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'VMD_Diario': 'VMD Diário ', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.set('fieldAliases', {'Nome': 'Nome', 'CodigoTUP': 'Código TUP ', 'Situacao': 'Situação ', 'Gestao': 'Gestão ', 'TipoProdut': 'Tipo de Produto ', 'Modalidade': 'Modalidade', 'Companhia': 'Companhia', 'CNPJ': 'CNPJ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²) ', 'Profund_m': 'Profundidade (m) ', 'Endereco': 'Endereço ', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.set('fieldAliases', {'Nome': 'Nome', 'CodigoTUP': 'Código TUP ', 'Situacao': 'Situação ', 'Gestao': 'Gestão ', 'TipoProdut': 'Tipo de Produto ', 'Modalidade': 'Modalidade', 'Companhia': 'Companhia', 'CNPJ': 'CNPJ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²) ', 'Profund_m': 'Profundidade (m) ', 'Endereco': 'Endereço ', });
lyr_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.set('fieldAliases', {'Nome': 'Nome', 'Companhia': 'Companhia', 'TipoProdut': 'Tipo de Produto ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²)', 'Obs': 'Observação', });
lyr_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.set('fieldAliases', {'Nome': 'Nome', 'Companhia': 'Companhia', 'TipoProdut': 'Tipo de Produto ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²)', 'Obs': 'Observação', });
lyr_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'Companhia': 'Companhia', 'TipoProdut': 'Tipo de Produto ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²) ', 'Obs': 'Observação', });
lyr_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.set('fieldAliases', {'Nome': 'Nome', 'Companhia': 'Companhia', 'TipoProdut': 'Tipo de Produto ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²) ', 'Obs': 'Observação', });
lyr_InstalaesNoOperacionaisLongoPrazo_45.set('fieldAliases', {'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesNoOperacionaisMdioPrazo_46.set('fieldAliases', {'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesNoOperacionaisCurtoPrazo_47.set('fieldAliases', {'TipoInstal': 'Tipo de Instalação', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesNoOperacionaisSituaoAtual_48.set('fieldAliases', {'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_AcostagemLongoPrazo_49.set('fieldAliases', {'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação ', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m) ', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos ', });
lyr_AcostagemMdioPrazo_50.set('fieldAliases', {'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m)', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos ', });
lyr_AcostagemCurtoPrazo_51.set('fieldAliases', {'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação ', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m) ', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos ', });
lyr_AcostagemSituaoAtual_52.set('fieldAliases', {'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação ', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m) ', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos ', });
lyr_ArmazenagemLongoPrazo_53.set('fieldAliases', {'TipoInstal': 'Tipo da Instalação ', 'Capacid_t': 'Capacidade (t) ', 'Area_m²': 'Área (m²) ', 'Volume_m³': 'Volume (m³) ', 'RegimeExpl': 'Regime de Exploração ', });
lyr_ArmazenagemMdioPrazo_54.set('fieldAliases', {'TipoInstal': 'Tipo da Instalação ', 'Capacid_t': 'Capacidade (t) ', 'Area_m²': 'Área (m²) ', 'Volume_m³': 'Volume (m³) ', 'RegimeExpl': 'Regime de Exploração ', });
lyr_ArmazenagemCurtoPrazo_55.set('fieldAliases', {'TipoInstal': 'Tipo da Instalação ', 'Capacid_t': 'Capacidade (t) ', 'Area_m²': 'Área (m²) ', 'Volume_m³': 'Volume (m³) ', 'RegimeExpl': 'Regime de Exploração ', });
lyr_ArmazenagemSituaoAtual_56.set('fieldAliases', {'TipoInstal': 'Tipo da Instalação ', 'Capacid_t': 'Capacidade (t) ', 'Area_m²': 'Área (m²) ', 'Volume_m³': 'Volume (m³) ', 'RegimeExpl': 'Regime de Exploração ', });
lyr_reasArrendveisLongoPrazo_57.set('fieldAliases', {'Nome': 'Nome da Área ', 'Area_m²': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisMdioPrazo_58.set('fieldAliases', {'Nome': 'Nome da Área ', 'Area_m²': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisCurtoPrazo_59.set('fieldAliases', {'Nome': 'Nome da Área ', 'Area_m²': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisSituaoAtual_60.set('fieldAliases', {'Nome': 'Nome da Área ', 'Area_m²': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendadasLongoPrazo_61.set('fieldAliases', {'Grupo': 'Grupo', 'AutPortuar': 'Autoridade Portuária ', 'NumContra': 'Número do Contrato ', 'ArrenAtual': 'Arrendatário Atual ', 'TipoInstr': 'Tipo Especificado no Instrumento ', 'Finalidade': 'Finalidade', 'DataInicio': 'Data de Início do Arrendamento ', 'DataTermin': 'Data de Término do Arrendamento ', 'Area_m²': 'Área (m²) ', 'Observacoe': 'Observações ', });
lyr_reasArrendadasMdioPrazo_62.set('fieldAliases', {'Grupo': 'Grupo', 'AutPortuar': 'Autoridade Portuária ', 'NumContra': 'Número do Contrato ', 'ArrenAtual': 'Arrendatário Atual ', 'TipoInstr': 'Tipo Especificado no Instrumento ', 'Finalidade': 'Finalidade', 'DataInicio': 'Data de Início do Arrendamento ', 'DataTermin': 'Data de Término do Arrendamento ', 'Area_m²': 'Área (m²) ', 'Observacoe': 'Observações ', });
lyr_reasArrendadasCurtoPrazo_63.set('fieldAliases', {'Grupo': 'Grupo', 'AutPortuar': 'Autoridade Portuária ', 'NumContra': 'Número do Contrato ', 'ArrenAtual': 'Arrendatário Atual ', 'TipoInstr': 'Tipo Especificado no Instrumento', 'Finalidade': 'Finalidade', 'DataInicio': 'Data de Início do Arrendamento', 'DataTermin': 'Data de Término do Arrendamento ', 'Area_m²': 'Área (m²) ', 'Observacoe': 'Observações ', });
lyr_reasArrendadasSituaoAtual_64.set('fieldAliases', {'Grupo': 'Grupo', 'AutPortuar': 'Autoridade Portuária ', 'NumContra': 'Número do Contrato ', 'ArrenAtual': 'Arrendatário Atual ', 'TipoInstr': 'Tipo Especificado no Instrumento ', 'Finalidade': 'Finalidade ', 'DataInicio': 'Data de Início do Arrendamento ', 'DataTermin': 'Data de Término do Arrendamento ', 'Area_m²': 'Área (m²) ', 'Observacoe': 'Observações ', });
lyr_ZoneamentoLongoPrazo_65.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²) ', 'Operador': 'Operador', });
lyr_ZoneamentoMdioPrazo_66.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²) ', 'Operador': 'Operador', });
lyr_ZoneamentoCurtoPrazo_67.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²) ', 'Operador': 'Operador', });
lyr_ZoneamentoSituaoAtual_68.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²) ', 'Operador': 'Operador', });
lyr_PoligonaldareadoPortoOrganizadodeSantana_69.set('fieldAliases', {'Name': 'Anexo', 'Ins.': 'Instrumento Legal ', });
lyr_BensTombados_1.set('fieldImages', {'Nome': 'TextEdit', 'Codigo': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Fonte': 'TextEdit', 'AnoDisp': 'Range', });
lyr_ComunidadesQuilombolas_2.set('fieldImages', {'Nome': 'TextEdit', 'NumFamilia': 'TextEdit', 'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Fonte': 'TextEdit', 'AnoDisponi': 'TextEdit', });
lyr_UnidadedeConservao_3.set('fieldImages', {'Nome': 'TextEdit', 'Decreto': 'TextEdit', 'AnoDisp': 'Range', 'PlanManejo': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Categoria': 'TextEdit', 'Fonte': 'TextEdit', 'Estado': 'TextEdit', 'Município': 'TextEdit', 'AtoLegal': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasPrioritriasparaConservaoSituaoAtual_4.set('fieldImages', {'Nome': 'TextEdit', 'Tipo': 'TextEdit', 'Importanc': 'TextEdit', 'Prioridade': 'TextEdit', 'Caracteris': 'TextEdit', 'Ameacas': 'TextEdit', 'Oportunid': 'TextEdit', 'AcaoPrior': 'TextEdit', 'Fonte': 'TextEdit', 'AnoDisp': 'Range', 'CriaUC': 'TextEdit', });
lyr_EquipamentosSituaoAtual_5.set('fieldImages', {'TipoEquip': 'TextEdit', 'FinalEquip': 'TextEdit', 'OperEquip': 'TextEdit', 'CapEquip_t': 'TextEdit', 'DataFabri': 'TextEdit', 'TempUsoAno': 'Range', });
lyr_ServiosdeApoioSituaoAtual_6.set('fieldImages', {'ServOferec': 'TextEdit', 'EmpresForn': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_FundeadouroLongoPrazo_7.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_FundeadouroMdioPrazo_8.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_FundeadouroCurtoPrazo_9.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_FundeadouroSituaoAtual_10.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_BaciadeEvoluoLongoPrazo_11.set('fieldImages', {'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Nome': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_BaciadeEvoluoMdioPrazo_12.set('fieldImages', {'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Nome': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_BaciadeEvoluoCurtoPrazo_13.set('fieldImages', {'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Nome': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_BaciadeEvoluoSituaoAtual_14.set('fieldImages', {'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'Nome': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_CanaldeAcessoLongoPrazo_15.set('fieldImages', {'Trecho': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametr_m': 'TextEdit', 'Obs': 'TextEdit', });
lyr_CanaldeAcessoMdioPrazo_16.set('fieldImages', {'Trecho': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametr_m': 'TextEdit', 'Obs': 'TextEdit', });
lyr_CanaldeAcessoCurtoPrazo_17.set('fieldImages', {'Trecho': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametr_m': 'TextEdit', 'Obs': 'TextEdit', });
lyr_CanaldeAcessoSituaoAtual_18.set('fieldImages', {'Trecho': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametr_m': 'TextEdit', 'Obs': 'TextEdit', });
lyr_AcessosHidroviriosLongoPrazo_19.set('fieldImages', {'Nome': 'TextEdit', 'TipoNavega': 'TextEdit', 'Extens_km': 'TextEdit', 'Profun_min': 'TextEdit', 'Profun_max': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosHidroviriosMdioPrazo_20.set('fieldImages', {'Nome': 'TextEdit', 'TipoNavega': 'TextEdit', 'Extens_km': 'TextEdit', 'Profun_min': 'TextEdit', 'Profun_max': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosHidroviriosCurtoPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'TipoNavega': 'TextEdit', 'Extens_km': 'TextEdit', 'Profun_min': 'TextEdit', 'Profun_max': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosHidroviriosSituaoAtual_22.set('fieldImages', {'Nome': 'TextEdit', 'TipoNavega': 'TextEdit', 'Extens_km': 'TextEdit', 'Profun_min': 'TextEdit', 'Profun_max': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosDutoviriosLongoPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'Material': 'TextEdit', 'Posicao': 'TextEdit', 'Operacao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Municip': 'TextEdit', 'UF': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosDutoviriosMdioPrazo_24.set('fieldImages', {'Nome': 'TextEdit', 'Material': 'TextEdit', 'Posicao': 'TextEdit', 'Operacao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Municip': 'TextEdit', 'UF': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosDutoviriosCurtoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'Material': 'TextEdit', 'Posicao': 'TextEdit', 'Operacao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Municip': 'TextEdit', 'UF': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosDutoviriosSituaoAtual_26.set('fieldImages', {'Nome': 'TextEdit', 'Material': 'TextEdit', 'Posicao': 'TextEdit', 'Operacao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Municip': 'TextEdit', 'UF': 'TextEdit', 'Atualiza': 'TextEdit', });
lyr_AcessosFerroviriosLongoPrazo_27.set('fieldImages', {'Linha': 'TextEdit', 'Extensa_km': 'TextEdit', 'Bitola': 'TextEdit', 'Concessao': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualizaca': 'TextEdit', });
lyr_AcessosFerroviriosMdioPrazo_28.set('fieldImages', {'Linha': 'TextEdit', 'Extensa_km': 'TextEdit', 'Bitola': 'TextEdit', 'Concessao': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualizaca': 'TextEdit', });
lyr_AcessosFerroviriosCurtoPrazo_29.set('fieldImages', {'Linha': 'TextEdit', 'Extensa_km': 'TextEdit', 'Bitola': 'TextEdit', 'Concessao': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualizaca': 'TextEdit', });
lyr_AcessosFerroviriosSituaoAtual_30.set('fieldImages', {'Linha': 'TextEdit', 'Extensa_km': 'TextEdit', 'Bitola': 'TextEdit', 'Concessao': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualizaca': 'TextEdit', });
lyr_AcessosInternosRodoviriosLongoPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosInternosRodoviriosMdioPrazo_32.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosInternosRodoviriosCurtoPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosInternosRodoviriosSituaoAtual_34.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosRodoviriosLongoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV_SNV': 'TextEdit', 'Extensa_km': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Classifica': 'TextEdit', 'Concessao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'VMD_Diario': 'Range', });
lyr_AcessosRodoviriosMdioPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV_SNV': 'TextEdit', 'Extensa_km': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Classifica': 'TextEdit', 'Concessao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'VMD_Diario': 'Range', });
lyr_AcessosRodoviriosCurtoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV_SNV': 'TextEdit', 'Extensa_km': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Classifica': 'TextEdit', 'Concessao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'VMD_Diario': 'Range', });
lyr_AcessosRodoviriosSituaoAtual_38.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV_SNV': 'TextEdit', 'Extensa_km': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Classifica': 'TextEdit', 'Concessao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'VMD_Diario': 'Range', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.set('fieldImages', {'Nome': 'TextEdit', 'CodigoTUP': 'TextEdit', 'Situacao': 'TextEdit', 'Gestao': 'TextEdit', 'TipoProdut': 'TextEdit', 'Modalidade': 'TextEdit', 'Companhia': 'TextEdit', 'CNPJ': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Profund_m': 'TextEdit', 'Endereco': 'TextEdit', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.set('fieldImages', {'Nome': 'TextEdit', 'CodigoTUP': 'TextEdit', 'Situacao': 'TextEdit', 'Gestao': 'TextEdit', 'TipoProdut': 'TextEdit', 'Modalidade': 'TextEdit', 'Companhia': 'TextEdit', 'CNPJ': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Profund_m': 'TextEdit', 'Endereco': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.set('fieldImages', {'Nome': 'TextEdit', 'Companhia': 'TextEdit', 'TipoProdut': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.set('fieldImages', {'Nome': 'TextEdit', 'Companhia': 'TextEdit', 'TipoProdut': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'Companhia': 'TextEdit', 'TipoProdut': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Obs': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.set('fieldImages', {'Nome': 'TextEdit', 'Companhia': 'TextEdit', 'TipoProdut': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Obs': 'TextEdit', });
lyr_InstalaesNoOperacionaisLongoPrazo_45.set('fieldImages', {'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesNoOperacionaisMdioPrazo_46.set('fieldImages', {'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesNoOperacionaisCurtoPrazo_47.set('fieldImages', {'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesNoOperacionaisSituaoAtual_48.set('fieldImages', {'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_AcostagemLongoPrazo_49.set('fieldImages', {'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', });
lyr_AcostagemMdioPrazo_50.set('fieldImages', {'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', });
lyr_AcostagemCurtoPrazo_51.set('fieldImages', {'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', });
lyr_AcostagemSituaoAtual_52.set('fieldImages', {'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_53.set('fieldImages', {'TipoInstal': 'TextEdit', 'Capacid_t': 'TextEdit', 'Area_m²': 'TextEdit', 'Volume_m³': 'TextEdit', 'RegimeExpl': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_54.set('fieldImages', {'TipoInstal': 'TextEdit', 'Capacid_t': 'TextEdit', 'Area_m²': 'TextEdit', 'Volume_m³': 'TextEdit', 'RegimeExpl': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_55.set('fieldImages', {'TipoInstal': 'TextEdit', 'Capacid_t': 'TextEdit', 'Area_m²': 'TextEdit', 'Volume_m³': 'TextEdit', 'RegimeExpl': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_56.set('fieldImages', {'TipoInstal': 'TextEdit', 'Capacid_t': 'TextEdit', 'Area_m²': 'TextEdit', 'Volume_m³': 'TextEdit', 'RegimeExpl': 'TextEdit', });
lyr_reasArrendveisLongoPrazo_57.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisMdioPrazo_58.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisCurtoPrazo_59.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisSituaoAtual_60.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendadasLongoPrazo_61.set('fieldImages', {'Grupo': 'TextEdit', 'AutPortuar': 'TextEdit', 'NumContra': 'TextEdit', 'ArrenAtual': 'TextEdit', 'TipoInstr': 'TextEdit', 'Finalidade': 'TextEdit', 'DataInicio': 'TextEdit', 'DataTermin': 'TextEdit', 'Area_m²': 'TextEdit', 'Observacoe': 'TextEdit', });
lyr_reasArrendadasMdioPrazo_62.set('fieldImages', {'Grupo': 'TextEdit', 'AutPortuar': 'TextEdit', 'NumContra': 'TextEdit', 'ArrenAtual': 'TextEdit', 'TipoInstr': 'TextEdit', 'Finalidade': 'TextEdit', 'DataInicio': 'TextEdit', 'DataTermin': 'TextEdit', 'Area_m²': 'TextEdit', 'Observacoe': 'TextEdit', });
lyr_reasArrendadasCurtoPrazo_63.set('fieldImages', {'Grupo': 'TextEdit', 'AutPortuar': 'TextEdit', 'NumContra': 'TextEdit', 'ArrenAtual': 'TextEdit', 'TipoInstr': 'TextEdit', 'Finalidade': 'TextEdit', 'DataInicio': 'TextEdit', 'DataTermin': 'TextEdit', 'Area_m²': 'TextEdit', 'Observacoe': 'TextEdit', });
lyr_reasArrendadasSituaoAtual_64.set('fieldImages', {'Grupo': 'TextEdit', 'AutPortuar': 'TextEdit', 'NumContra': 'TextEdit', 'ArrenAtual': 'TextEdit', 'TipoInstr': 'TextEdit', 'Finalidade': 'TextEdit', 'DataInicio': 'TextEdit', 'DataTermin': 'TextEdit', 'Area_m²': 'TextEdit', 'Observacoe': 'TextEdit', });
lyr_ZoneamentoLongoPrazo_65.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_ZoneamentoMdioPrazo_66.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_ZoneamentoCurtoPrazo_67.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_ZoneamentoSituaoAtual_68.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeSantana_69.set('fieldImages', {'Name': 'TextEdit', 'Ins.': 'TextEdit', });
lyr_BensTombados_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Codigo': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'AnoDisp': 'inline label - visible with data', });
lyr_ComunidadesQuilombolas_2.set('fieldLabels', {'Nome': 'inline label - visible with data', 'NumFamilia': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'AnoDisponi': 'inline label - visible with data', });
lyr_UnidadedeConservao_3.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Decreto': 'inline label - visible with data', 'AnoDisp': 'inline label - visible with data', 'PlanManejo': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'AtoLegal': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasPrioritriasparaConservaoSituaoAtual_4.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Importanc': 'inline label - visible with data', 'Prioridade': 'inline label - visible with data', 'Caracteris': 'inline label - visible with data', 'Ameacas': 'inline label - visible with data', 'Oportunid': 'inline label - visible with data', 'AcaoPrior': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'AnoDisp': 'inline label - visible with data', 'CriaUC': 'inline label - visible with data', });
lyr_EquipamentosSituaoAtual_5.set('fieldLabels', {'TipoEquip': 'inline label - visible with data', 'FinalEquip': 'inline label - visible with data', 'OperEquip': 'inline label - visible with data', 'CapEquip_t': 'inline label - visible with data', 'DataFabri': 'inline label - visible with data', 'TempUsoAno': 'inline label - visible with data', });
lyr_ServiosdeApoioSituaoAtual_6.set('fieldLabels', {'ServOferec': 'inline label - visible with data', 'EmpresForn': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_FundeadouroLongoPrazo_7.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_FundeadouroMdioPrazo_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_FundeadouroCurtoPrazo_9.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_FundeadouroSituaoAtual_10.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_BaciadeEvoluoLongoPrazo_11.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_BaciadeEvoluoMdioPrazo_12.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_BaciadeEvoluoCurtoPrazo_13.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_BaciadeEvoluoSituaoAtual_14.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_CanaldeAcessoLongoPrazo_15.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametr_m': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_CanaldeAcessoMdioPrazo_16.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametr_m': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_CanaldeAcessoCurtoPrazo_17.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametr_m': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_CanaldeAcessoSituaoAtual_18.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametr_m': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_AcessosHidroviriosLongoPrazo_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'TipoNavega': 'inline label - visible with data', 'Extens_km': 'inline label - visible with data', 'Profun_min': 'inline label - visible with data', 'Profun_max': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosHidroviriosMdioPrazo_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'TipoNavega': 'inline label - visible with data', 'Extens_km': 'inline label - visible with data', 'Profun_min': 'inline label - visible with data', 'Profun_max': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosHidroviriosCurtoPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'TipoNavega': 'inline label - visible with data', 'Extens_km': 'inline label - visible with data', 'Profun_min': 'inline label - visible with data', 'Profun_max': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosHidroviriosSituaoAtual_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'TipoNavega': 'inline label - visible with data', 'Extens_km': 'inline label - visible with data', 'Profun_min': 'inline label - visible with data', 'Profun_max': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosDutoviriosLongoPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operacao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Municip': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosDutoviriosMdioPrazo_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operacao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Municip': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosDutoviriosCurtoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operacao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Municip': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosDutoviriosSituaoAtual_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operacao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Municip': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', });
lyr_AcessosFerroviriosLongoPrazo_27.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Bitola': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosFerroviriosMdioPrazo_28.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Bitola': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosFerroviriosCurtoPrazo_29.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Bitola': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosFerroviriosSituaoAtual_30.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Bitola': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosInternosRodoviriosLongoPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosInternosRodoviriosMdioPrazo_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosInternosRodoviriosCurtoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosInternosRodoviriosSituaoAtual_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosRodoviriosLongoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV_SNV': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMD_Diario': 'inline label - visible with data', });
lyr_AcessosRodoviriosMdioPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV_SNV': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMD_Diario': 'inline label - visible with data', });
lyr_AcessosRodoviriosCurtoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV_SNV': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMD_Diario': 'inline label - visible with data', });
lyr_AcessosRodoviriosSituaoAtual_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV_SNV': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMD_Diario': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonalCurtoPrazo_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'CodigoTUP': 'inline label - visible with data', 'Situacao': 'inline label - visible with data', 'Gestao': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'Modalidade': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'CNPJ': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Endereco': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonalSituaoAtual_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'CodigoTUP': 'inline label - visible with data', 'Situacao': 'inline label - visible with data', 'Gestao': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'Modalidade': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'CNPJ': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Endereco': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPortoLongoPrazo_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPortoMdioPrazo_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPortoCurtoPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPortoSituaoAtual_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisLongoPrazo_45.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisMdioPrazo_46.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisCurtoPrazo_47.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisSituaoAtual_48.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_49.set('fieldLabels', {'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_50.set('fieldLabels', {'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_51.set('fieldLabels', {'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_52.set('fieldLabels', {'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_53.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'Capacid_t': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Volume_m³': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_54.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'Capacid_t': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Volume_m³': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_55.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'Capacid_t': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Volume_m³': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_56.set('fieldLabels', {'TipoInstal': 'inline label - visible with data', 'Capacid_t': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Volume_m³': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', });
lyr_reasArrendveisLongoPrazo_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisMdioPrazo_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisCurtoPrazo_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisSituaoAtual_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendadasLongoPrazo_61.set('fieldLabels', {'Grupo': 'inline label - visible with data', 'AutPortuar': 'inline label - visible with data', 'NumContra': 'inline label - visible with data', 'ArrenAtual': 'inline label - visible with data', 'TipoInstr': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'DataInicio': 'inline label - visible with data', 'DataTermin': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Observacoe': 'inline label - visible with data', });
lyr_reasArrendadasMdioPrazo_62.set('fieldLabels', {'Grupo': 'inline label - visible with data', 'AutPortuar': 'inline label - visible with data', 'NumContra': 'inline label - visible with data', 'ArrenAtual': 'inline label - visible with data', 'TipoInstr': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'DataInicio': 'inline label - visible with data', 'DataTermin': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Observacoe': 'inline label - visible with data', });
lyr_reasArrendadasCurtoPrazo_63.set('fieldLabels', {'Grupo': 'inline label - visible with data', 'AutPortuar': 'inline label - visible with data', 'NumContra': 'inline label - visible with data', 'ArrenAtual': 'inline label - visible with data', 'TipoInstr': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'DataInicio': 'inline label - visible with data', 'DataTermin': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Observacoe': 'inline label - visible with data', });
lyr_reasArrendadasSituaoAtual_64.set('fieldLabels', {'Grupo': 'inline label - visible with data', 'AutPortuar': 'inline label - visible with data', 'NumContra': 'inline label - visible with data', 'ArrenAtual': 'inline label - visible with data', 'TipoInstr': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'DataInicio': 'inline label - visible with data', 'DataTermin': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Observacoe': 'inline label - visible with data', });
lyr_ZoneamentoLongoPrazo_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_ZoneamentoMdioPrazo_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_ZoneamentoCurtoPrazo_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_ZoneamentoSituaoAtual_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeSantana_69.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins.': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeSantana_69.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});