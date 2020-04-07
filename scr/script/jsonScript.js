function getJsonAllNews() {
    var news = [
        {
            "id": 1,
            "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
            "searched": 125
        },
        {
            "id": 2,
            "title": "Álcool em gel é a mesma coisa que nada",
            "searched": 112
        },
        {
            "id": 3,
            "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
            "searched": 93
        },
        {
            "id": 4,
            "title": "Beber muita água e fazer gargarejo com água morna, sal e vinagre previne coronavírus",
            "searched": 90
        },
        {
            "id": 5,
            "title": "Chá de erva doce e coronavírus",
            "searched": 81
        },
        {
            "id": 6,
            "title": "Governo do Brasil anuncia vacina do coronavírus",
            "searched": 81
        },
        {
            "id": 7,
            "title": "Médicos tailandeses curam coronavírus em 48h",
            "searched": 75
        },
        {
            "id": 8,
            "title": "Receita de coco que cura coronavírus",
            "searched": 50
        },
        {
            "id": 9,
            "title": "Tribunal chinês para matar 20 mil pacientes com coronavírus",
            "searched": 42
        },
        {
            "id": 10,
            "title": "Álcool em gel é a mesma coisa que nada",
            "searched": 30
        }
    ];

    return news;
  }

function getJsonWeeklySearches(){
    var weeklySearch = [
        {
            "date": "Domingo",
            "searchesAmount": 165
        },
        {
            "date": "Segunda",
            "searchesAmount": 81
        },
        {
            "date": "Terca",
            "searchesAmount": 45
        },
        {
            "date": "Quarta",
            "searchesAmount": 32
        },
        {
            "date": "Quinta",
            "searchesAmount": 85
        },
        {
            "date": "Sexta",
            "searchesAmount": 192
        },
        {
            "date": "Sabado",
            "searchesAmount": 173
        }
    ];

    return weeklySearch;
}

function getJsonRegionSearches(){
    var regionalSearches = [
        {
            "region":"Norte",
            "searchesAmount": 57
        },
        {
            "region":"Nordeste",
            "searchesAmount": 122
        },
        {
            "region":"Centro-Oeste",
            "searchesAmount": 135
        },
        {
            "region":"Sudeste",
            "searchesAmount": 256
        },
        {
            "region":"Sul",
            "searchesAmount": 124
        },
    ];

    return regionalSearches;
}

function getJsonStateWeeklySearches(stateCode){
    var stateObj;
    var weeklySearches = [
        {
            "id": 1,
            "code":"saopaulo",
            "name":"São Paulo",
            "dayOfWeek": [{
                "date": "Domingo",
                "news": [{
                        "id": 1,
                        "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                        "searched": 13
                    },
                    {
                        "id": 2,
                        "title": "Álcool em gel é a mesma coisa que nada",
                        "searched": 7
                    },
                    {
                        "id": 3,
                        "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                        "searched": 5
                    }],
                    "totalSearches": 25
            },
            {
                "date": "Segunda",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 12
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 6
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 4
                }],
                "totalSearches": 22
            },
            {
                "date": "Terca",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 11
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 2
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 3
                }],
                "totalSearches": 16
            },
            {
                "date": "Quarta",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 10
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 3
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 2
                }],
                "totalSearches": 15
            },
            {
                "date": "Quinta",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 11
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 4
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 2
                }],
                "totalSearches": 17
            },
            {
                "date": "Sexta",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 13
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 5
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 4
                }],
                "totalSearches": 22
            },
            {
                "date": "Sabado",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 14
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 7
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 5
                }],
                "totalSearches": 26
            }]
        },
        {
            "id": 1,
            "code":"riodejaneiro",
            "name":"Rio de Janeiro",
            "dayOfWeek": [{
                "date": "Domingo",
                "news": [{
                        "id": 1,
                        "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                        "searched": 12
                    },
                    {
                        "id": 2,
                        "title": "Álcool em gel é a mesma coisa que nada",
                        "searched": 8
                    },
                    {
                        "id": 3,
                        "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                        "searched": 4
                    }],
                    "totalSearches": 24
            },
            {
                "date": "Segunda",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 11
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 5
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 5
                }],
                "totalSearches": 21
            },
            {
                "date": "Terca",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 10
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 1
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 2
                }],
                "totalSearches": 13
            },
            {
                "date": "Quarta",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 5
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 5
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 6
                }],
                "totalSearches": 16
            },
            {
                "date": "Quinta",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 11
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 7
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 9
                }],
                "totalSearches": 27
            },
            {
                "date": "Sexta",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 13
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 5
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 4
                }],
                "totalSearches": 22
            },
            {
                "date": "Sabado",
                "news": [{
                    "id": 1,
                    "title": "Utilizar álcool em gel nas mãos para prevenir coronavírus altera bafômetro nas blitz",
                    "searched": 2
                },
                {
                    "id": 2,
                    "title": "Álcool em gel é a mesma coisa que nada",
                    "searched": 7
                },
                {
                    "id": 3,
                    "title": "Aplicativo Coronavírus-SUS, do Governo do Brasil, é inseguro",
                    "searched": 5
                }],
                "totalSearches": 14
            }]
        }
    ];

    //for(var cont = 0;cont < Object.keys(weeklySearches).length; cont++ ){
    for(var state in weeklySearches){
        if (stateCode == Object(weeklySearches[state]).code){
            stateObj = Object(weeklySearches[state]);
        }
    }
    return stateObj; 
}