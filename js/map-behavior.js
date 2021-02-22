

var highLightStyle = {
    color: '#2262CC',  
    weight: 3,
    fillOpacity: 0,
    fillColor: '#2262CC'
};
var defaultStyle = {
    color: '#ffffff', 
    weight: 1,
    fillOpacity: 0.75,
    fillColor: '#2262CC'
};
var blackIcon = L.icon({
    iconUrl: 'marker-orange.svg',
    iconSize: [40,40],
    iconAnchor: [20,30],
    popupAnchor: [0,-30]                
});

var mymap = L.map('mapid').setView([-22.911835523932268 ,-43.49377899169921], 11);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    maxZoom: 17,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',                subdomains: 'abcd',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(mymap);

var geojsonLayer = new L.GeoJSON.AJAX("https://gist.githubusercontent.com/esperanc/db213370dd176f8524ae6ba32433f90a/raw/6dff5654e9ff6395f09f18ea2692f40ed2060cb9/Limite_Bairro.geojson", {
    
    style : function(feature){
        return{
            color: '#ffff', 
            weight: 1,
            fillOpacity: 0.75,
            fillColor: '#2262CC'
        }
    },
    onEachFeature: function(feature, layer) {
        /*
            layer.bindPopup(feature.properties.NOME);
            layer.on('mouseover', function(e){
                this.openPopup();
                this.setStyle(highLightStyle);
            });
            layer.on('mouseout', function(e){
                this.closePopup();
                this.setStyle(defaultStyle);
            });
            layer.on('click', function(e){
           //     mymap.fitBounds(this.getBounds());
                console.log(this);
                this.setStyle(highLightStyle);
            });
            */
    }
    
    
}); 

var locations = [
    {lat:-22.971945347197924, lng:-43.580358788354424, district:'Guaratiba',address:'R. Ibema, 100',date:"12/03/2021", hour:"20h", img:"privadinha.png"},
    {lat:-22.989463107108623, lng:-43.59702385787735, district:'Guaratiba',address:'R. Francisco Furtado, 433',date:"12/03/2021", hour:"21h", img:"convoca.png"},
    {lat:-22.887006302036205, lng:-43.49128733527789, district:'Senador Camará',address:'Sem endereço exato',date:"19/02/2021", hour:"00h", img:"primeiro-role.png"},
    {lat:-22.877631845098733, lng:-43.58014263089042, district:'Inhoaíba, Campo Grande',address:'R. Projetada Três',date:"21/02/2021", hour:"15h", img:"tardezinha.png"},
    {lat:-22.914209583368933, lng:-43.58983131739516, district:'Inhoaíba, Campo Grande',address:'Espaço mansão - Vilar Carioca<br>(sem endereço exato)',date:"14/03/2021", hour:"10h", img:"30-anos.png"},
    {lat:-22.916519095024633, lng:-43.601543931081224, district:'Campo Grande',address:'R. Florestal, 2 - Vilar Carioca',date:"27/03/2021", hour:"22h", img:"vilar-show.png"},
    {lat:-22.827476568763657, lng:-43.30390324438575, district:'Cordovil',address:'R. Tenente Palestrina, 715',date:"14/03/2021", hour:"14h", img:"sistema-nervoso.png"},
    {lat:-22.909076238025637, lng:-43.29675403088973, district:'Engenho de Dentro',address:'R. Camarista Méier',date:"20/02/2021", hour:"(sem horário)", img:"micareta-maridao.png"},
    {lat:-22.900909788880494, lng:-43.26762867321953, district:'Céu Azul, Engenho Novo',address:'R. Souza Barros, 395',date:"20/02/2021", hour:"19h", img:"classicos.png"},
    {lat:-22.89866711827307, lng:-43.263402229043926, district:'Engenho Novo',address:'R. Dois de Maio, 246',date:"21/02/2021", hour:"14h", img:"kadinho.png"},
    {lat:-22.82777150727137, lng:-43.31905871739654, district:'Vista Alegre',address:'Estrada da Água Grande, 782',date:"19/02/2021", hour:"22h", img:"love-rio-bbb.png"},
    {lat:-22.878800254342156, lng:-43.24539383511024, district:'Manguinhos',address:'Bar do Barro',date:"19/02/2021", hour:"21h", img:"carnaval-do-barro.png"},
    {lat:-22.838482316761855, lng:-43.35954574623134, district:'Coelho Neto',address:'R. Gustavo Viana Filho',date:"Todos os dias", hour:"(sem horário)", img:"festival-dos-cria.png"},
    {lat:-22.849008311296473, lng:-43.357176130890856, district:'Honório Gurgel',address:'R. das Safiras, 242',date:"09/04/2021", hour:"21h", img:"baile-de-maldivas.png"},
    {lat:-22.88579202086949, lng:-43.25515820390117, district:'Jacaré',address:'Praça da concordia(sem endereço exato)',date:"Toda sexta", hour:"(sem horário)", img:"baile-do-jaca.png"},
    {lat:-22.891852755458753, lng:-43.25714042589415, district:'Jacaré',address:'"Função"',date:"18/02/2021", hour:"21h", img:"pago-funk.png"},
    {lat:-22.93529661035586, lng:-43.21267189040586, district:'Rio Comprido',address:'R. Paula Ramos, 426',date:"05/03/2021", hour:"22h", img:"demo-baile.png"},
    {lat:-22.889378487752907, lng:-43.49317561026568, district:'Senador Camará',address:'"Favela chique"(sem endereço exato)',date:"12/03/2021", hour:"21h", img:"favela-chique.png"},
    {lat:-22.8530527052938, lng:-43.343017002055774, district:'Rocha Miranda',address:'R. Paulo Viana, 149',date:"28/02/2021", hour:"15h", img:"taka-raba.png"},
    {lat:-22.88288164185477, lng:-43.31043388845239, district:'Piedade',address:'R. Antonio Vargas, 48',date:"19/02/2021", hour:"19h", img:"seduction-fest.png"},
    {lat:-22.858896100554066, lng:-43.340344735688355, district:'Turiaçu',address:'R. Monsenhor Inácio da Silva, 355',date:"06/03/2021", hour:"14h", img:"tardezinha-do-alan.png"},
    {lat:-22.84570632839793, lng:-43.3790191596171, district:'Irajá',address:'Quadra do amarelinho (passarela 27)',date:"19/02/2021", hour:"22h", img:"caju-para-baixo.png"},
    {lat:-22.872920510384102, lng:-43.23859781543601, district:'Vila do João, Maré',address:'R. Um, prox. 162',date:"21/02/2021", hour:"14h", img:"feijoada-do-bloco.png"},
    {lat:-22.875458389363256, lng:-43.33621831543604, district:'Madureira',address:'Papa G - Tv. Almerinda Freitas, 42',date:"19/02/2021", hour:"22h", img:"gloss.png"},
    {lat:-22.91969763185647, lng:-43.170151624859955, district:'Glória',address:'Marina da Glória',date:"28/02/2021", hour:"14h (embarque)", img:"jump.png"},
    {lat:-22.959454623593253, lng:-43.68553927310715, district:'Sepetiba',address:'R. 51, praça das ilhas cayman',date:"15/02/2021", hour:"19h", img:"baile-de-carnaval.png"},
    {lat:-22.988008266231503, lng:-43.32301960009007, district:'Muzema',address:'Estrada de Jacarepaguá, 520',date:"19/02/2021", hour:"21h", img:"enfim-sexta.png"},
    {lat:-22.880511661145565, lng:-43.27045126146922, district:'Del Castilho',address:'Comunidade da Bandeira 2',date:"19/02/2021", hour:"23h", img:"pagofunk-da-b2.png"},
    {lat:-22.88576731016234, lng:-43.25553371297878, district:'Jacaré',address:'Praça de Concórdia',date:"15/02/2021", hour:"22h", img:"carnaval-do-jaca.png"},
    {lat:-22.857334526774935, lng:-43.241105339586746, district:'Campo da Maré',address:'Laje Paradinha',date:"05/03/2021", hour:"23h", img:"do-martins.png"},
    {lat:-22.883803465458236, lng:-43.32168121543592, district:'Cascadura',address:'Rua Moisés Lienbaum, 121',date:"15/02/2021", hour:"21h", img:"bloco-dos-canalhas.png"},
    {lat:-22.864006952716814, lng:-43.336973086600324, district:'Madureira',address:'Comunidade Cajueiro',date:"15/02/2021", hour:"18h", img:"cajueiro-folia.png"},
    {lat:-22.908641403568744, lng:-43.296582369402415, district:'Engenho de Dentro',address:'Camarista Méier - Âncora',date:"15/02/2021", hour:"22h", img:"pagofunk-camarista.png"},
    {lat:-22.860092915806774, lng:-43.23855367548396, district:'Nova Holanda',address:'Campo da Rubens Vaz',date:"20/02/2021", hour:"23h", img:"baile-da-nova-holanda.png"},
    {lat:-22.98326585595873, lng:-43.2009018327347, district:'Ipanema',address:'R. Farme de Amoedo, 95',date:"13,14,15,16/02/2021", hour:"?", img:"point-meninos.png"},
    {lat:-22.964298849636258, lng:-43.17403215787776, district:'Copacabana',address:'Av. Princesa Isabel, 21',date:"15/02/2021", hour:"23h", img:"black-cat.png"},
    {lat:-22.965948767492176, lng:-43.17644721554819, district:'Copacabana',address:'Av. Atlântica, 1424',date:"15/02/2021", hour:"23h", img:"bloquinho-da-dolce.png"},
    {lat:-22.936907988112917, lng:-43.179253573219064, district:'Flamengo',address:'R. Bibiano Pereira da Rocha',date:"15/02/2021", hour:"22h", img:"black-cat.png"},
    {lat:-22.93420229470518, lng:-43.211852813614264, district:'Rio Comprido',address:'R. Paula Ramos, 402',date:"15/02/2021", hour:"?", img:"mirante-do-caribe.png"},
]
/*var markers = [
    [-22.971945347197924, -43.580358788354424],
    [-22.989463107108623, -43.59702385787735],
    [-22.887006302036205, -43.49128733527789],
    [-22.877631845098733, -43.58014263089042],
    [-22.914209583368933, -43.58983131739516],
    [-22.916519095024633, -43.601543931081224],
    [-22.827476568763657, -43.30390324438575],
    [-22.909076238025637, -43.29675403088973],
    [-22.900909788880494, -43.26762867321953],
    [-22.89866711827307, -43.263402229043926],
    [-22.82777150727137, -43.31905871739654],
    [-22.878800254342156, -43.24539383511024],
    [-22.838482316761855, -43.35954574623134],
    [-22.849008311296473, -43.357176130890856],
    [-22.88579202086949, -43.25515820390117],
    [-22.891852755458753, -43.25714042589415],
    [-22.93529661035586, -43.21267189040586],
    [-22.889378487752907, -43.49317561026568],
    [-22.8530527052938, -43.343017002055774],
    [-22.88288164185477, -43.31043388845239],
    [-22.858896100554066, -43.340344735688355],
    [-22.84570632839793, -43.3790191596171],
    [-22.872920510384102, -43.23859781543601],
    [-22.875458389363256, -43.33621831543604],
    [-22.91969763185647, -43.170151624859955]
]*/

//var markers = L.markerClusterGroup();

for(let i = 0 ; i < locations.length ; i++){
    marker = new L.marker([locations[i].lat, locations[i].lng], {
        icon: blackIcon
    })
    .bindPopup(locations[i].district + "<br>" + locations[i].address + "<br>" + locations[i].date + ' às ' + locations[i].hour)
    .on('mouseover', function(){
        this.openPopup();
        document.getElementById("flyerImage").src = "img/"+locations[i].img;  
    })
    .on('mouseout', function(){
        this.closePopup();
        document.getElementById("flyerImage").src = "";  
    }).addTo(mymap)
}

document.getElementById("totalDeEventos").innerHTML = "Total de " + locations.length + " eventos localizados";

//var markers2 = L.markerClusterGroup();
//markers2.addLayer(L.marker(markers));

geojsonLayer.addTo(mymap); 