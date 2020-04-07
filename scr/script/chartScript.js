var news = getJsonAllNews();
var weeklyNewsSearches = getJsonWeeklySearches();
var regionalSearches = getJsonRegionSearches();
var chart4, chart5;

fillCountryTopNewsChart(news);
fillCountryWeeklySearches(weeklyNewsSearches);
fillCountryRegionalChart(regionalSearches); 
constructStateTopNewsChart();
constructStateSearchesPerDayChart();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function defineState(){

    var stateCode = null;
    await sleep(1);
    stateCode = getAnchor();

    state = getJsonStateWeeklySearches(stateCode);
    fillStateTopNewsChart(state);
    fillStateSearchesPerDayChart(state);
}

function getAnchor() {
    var currentUrl = document.URL,
	urlParts = currentUrl.split('#');
		
    return (urlParts.length > 1) ? urlParts[1] : null;
}


function fillCountryTopNewsChart(news){ var ctx = document.getElementsByClassName("chart1");
    var chartGraph = new Chart(ctx, {
        type: "polarArea",
        borderAlign: "inner",
        data: {
            labels: [news[0]["title"], news[1]["title"], news[2]["title"], news[3]["title"], news[4]["title"]],
            datasets: [{
                data: [news[0]["searched"], news[1]["searched"], news[2]["searched"], news[3]["searched"], news[4]["searched"]],
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: ["rgb(34,139,34)", "rgb(0,255,0)", "rgb(50,205,50)", "rgb(144,238,144)", "rgb(0,255,127)"],
            }]
        },
        options:{
            legend: {
                position: "top",
                align: "start",
                fullWidth: false
            },
            title:{
                display: true,
                position: "top",
                text: "Top 5 notícias pesquisadas em território nacional"
            }
        }
    });
}

function fillCountryWeeklySearches(weeklyNewsSearches){ var ctx = document.getElementsByClassName("chart2");
    var chartGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Domingo(29/03)", "Segunda-feira(30/03)", "Terça-feira(31/03)", "Quarta-feira(01/04)", "Quinta-feira(02/04)", "Sexta-feira(03/04)", "Sábado(04/04)"],
            datasets: [{
                label: "Quantidade de pesquisa nacional ao longo da última semana",
                data: [weeklyNewsSearches[0]["searchesAmount"], weeklyNewsSearches[1]["searchesAmount"], weeklyNewsSearches[2]["searchesAmount"], weeklyNewsSearches[3]["searchesAmount"], weeklyNewsSearches[4]["searchesAmount"], weeklyNewsSearches[5]["searchesAmount"], weeklyNewsSearches[6]["searchesAmount"]],
                borderWidth: 1,
                borderColor: "rgb(34,139,34)",
                order: 1,
                backgroundColor:"transparent"    
            }]
        }
    });
}

function fillCountryRegionalChart(regionalSearches){ var ctx = document.getElementsByClassName("chart3");
    var chartGraph = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: [regionalSearches[0]["region"], regionalSearches[1]["region"], regionalSearches[2]["region"], regionalSearches[3]["region"], regionalSearches[4]["region"]],
            datasets: [{
                data: [regionalSearches[0]["searchesAmount"], regionalSearches[1]["searchesAmount"], regionalSearches[2]["searchesAmount"], regionalSearches[3]["searchesAmount"], regionalSearches[4]["searchesAmount"]],
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: ["rgb(34,139,34)", "rgb(0,255,0)", "rgb(50,205,50)", "rgb(144,238,144)", "rgb(0,255,127)"],
            }]
        },
        options:{
            legend: {
                position: "top",
                align: "start",
                fullWidth: false
            },
            title:{
                display: true,
                position: "top",
                text: "Númedo de buscar por Região em território nacional"
            }
        }
    });
}

function constructStateTopNewsChart(){ var ctx = document.getElementsByClassName("chart4");
        chart4 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Domingo(29/03)", "Segunda-feira(30/03)", "Terça-feira(31/03)", "Quarta-feira(01/04)", "Quinta-feira(02/04)", "Sexta-feira(03/04)", "Sábado(04/04)"],
            datasets: [
                {   label: "",
                    borderWidth: 1,
                    borderColor: "rgb(255,69,0)",
                    order: 1,
                    backgroundColor:"rgba(255,69,0,0.2)"    
                },
                {
                    label: "",
                    borderWidth: 1,
                    borderColor: "rgb(255,140,0)",
                    order: 1,
                    backgroundColor:"rgba(255,140,0,0.2)"    
                },
                {
                    label: "",
                    borderWidth: 1,
                    borderColor: "rgb(255,215,0)",
                    order: 1,
                    backgroundColor:"rgba(255,215,0,0.2)"    
                }
            ]
        },
        options:{
            legend: {
                display: false,
                position: "top",
                align: "start"
            },
            title:{
                display: true,
                position: "top",
                text: "Top 3 notícias pesquisadas por estado"
            }
        } 
    });
}

function fillStateTopNewsChart(state){
    var data1 = [state.dayOfWeek[0].news[0].searched, state.dayOfWeek[1].news[0].searched, state.dayOfWeek[2].news[0].searched, state.dayOfWeek[3].news[0].searched, state.dayOfWeek[4].news[0].searched, state.dayOfWeek[5].news[0].searched, state.dayOfWeek[6].news[0].searched];
    var data2 = [state.dayOfWeek[0].news[1].searched, state.dayOfWeek[1].news[1].searched, state.dayOfWeek[2].news[1].searched, state.dayOfWeek[3].news[1].searched, state.dayOfWeek[4].news[1].searched, state.dayOfWeek[5].news[1].searched, state.dayOfWeek[6].news[1].searched];
    var data3 = [state.dayOfWeek[0].news[2].searched, state.dayOfWeek[1].news[2].searched, state.dayOfWeek[2].news[2].searched, state.dayOfWeek[3].news[2].searched, state.dayOfWeek[4].news[2].searched, state.dayOfWeek[5].news[2].searched, state.dayOfWeek[6].news[2].searched];
    var label1 = state.dayOfWeek[0].news[0].title;
    var label2 = state.dayOfWeek[0].news[1].title;
    var label3 = state.dayOfWeek[0].news[2].title;
    
    chart4.data.datasets[0].data = data1;
    chart4.data.datasets[1].data = data2;
    chart4.data.datasets[2].data = data3;
    chart4.options.title.text = "Top 3 notícias estaduais - "+state.name;
    chart4.options.legend.display = true;
    chart4.data.datasets[0].label = label1;
    chart4.data.datasets[1].label = label2;
    chart4.data.datasets[2].label = label3;

    chart4.update();
}

function constructStateSearchesPerDayChart(){ var ctx = document.getElementsByClassName("chart5");
    chart5 = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["Domingo(29/03)", "Segunda-feira(30/03)", "Terça-feira(31/03)", "Quarta-feira(01/04)", "Quinta-feira(02/04)", "Sexta-feira(03/04)", "Sábado(04/04)"],
            datasets: [
                {
                    borderWidth: 1,
                    borderColor: "rgb(255,69,0)",
                    order: 1,
                    backgroundColor:"rgba(255,69,0,0.2)"    
                }
            ]
        },
        options:{
            legend: {
                position: "top",
                align: "start",
                display: false
            },
            title:{
                display: true,
                position: "top",
                text: "Volume de buscas estaduais por semana"
            }
        } 
    });
}

function fillStateSearchesPerDayChart(state){
    var data = [state.dayOfWeek[0].totalSearches, state.dayOfWeek[1].totalSearches, state.dayOfWeek[2].totalSearches, state.dayOfWeek[3].totalSearches, state.dayOfWeek[4].totalSearches, state.dayOfWeek[5].totalSearches, state.dayOfWeek[6].totalSearches];
     
    chart5.data.datasets[0].data = data;
    chart5.options.title.text = "Volume de buscas estaduais por semana - "+state.name;
    chart5.update();
}