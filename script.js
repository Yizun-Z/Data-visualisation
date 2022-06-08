const dataSource = "./data/solar-pv-prices.csv"
const solarPriceDiv = document.getElementById("solar-price-chart")
const sunshineDiv = document.getElementById("sunshine-chart")
const greenhouseDiv = document.getElementById("greenhouse-gas-chart")
const electricityDiv = document.getElementById("electricity-chart")
const totalDiv = document.getElementById("total-chart")
const investDiv = document.getElementById("invest-chart")

// Plot data for the chart of solar photovoltaic modules price.
function loadData() {
  Plotly.d3.csv(dataSource, function(data){ processData(data) } )
};

function processData(allRows) {
  // console.log(allRows);
  let x = [], y = [];
  for (let i=0; i<allRows.length; i++) {
    let row = allRows[i];
    x.push( row['Year'] );
    y.push( row['Solar PV Module Cost (2019 US$ per W)'] );
  }
  makePlot( x, y );
}

function makePlot( x, y ){
  let traces = [{
    x: x, 
    y: y
  }];

  let layout = {
    title: 'Global average price of solar photovoltaic (PV) modules',
    xaxis: {
      title: 'Years'
    },
    yaxis: {
      title: 'US $/W'
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  }

  const config = {
    displayModeBar: false,
  }

  Plotly.newPlot(solarPriceDiv, traces, layout, config);
};

loadData();

// Plot data for the chart 
// "Days in a year with more than 3 hours of sunshine in Sydney 2011-2020"
function plotSunshineChart() {
  let yValue = [285, 294, 311, 333, 318, 327, 310, 292, 338, 287]
  let plotData = [
    {
      x: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      y: yValue,
      type: 'bar',
      orientation: 'v',
      marker: {
        color: '#fcba8f'
      }
    }
  ]

  let layout = {
    title: 'Days with more than 3 hours of sunshine in Sydney 2011-2020',
    xaxis: {
      title: 'Years'
    },
    yaxis: {
      title: 'Days / year'
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  }
  const config = {
    displayModeBar: false,
  }

  Plotly.newPlot(sunshineDiv, plotData, layout, config)
}

plotSunshineChart()

// Plot data for the chart 
// "Greenhouse Gas Emissions of Energy Production"
function plotGreenhouseChart(){
  let xValue = [5, 4, 34, 78, 490, 720, 820];
  let plotData = [
    {
      x: xValue,
      y: ['Solar', 'Wind', 'Hydropower', 'Biomass', 'Natural Gas', 'Oil', 'Coal'],
      type: 'bar',
      orientation: 'h',
      text: xValue.map(String),
      textposition: 'outside',
      hoverinfo: 'text',
      marker:{
        color: '#fcba8f'
      }
    }
  ]

  let layout = {
    title: 'Greenhouse Gas Emissions of Energy Production',
    xaxis:{
      title: 'Tonnes per gigawatt-hour'
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  }

  const config = {
    displayModeBar: false,
  }
  Plotly.newPlot(greenhouseDiv, plotData, layout, config)
}

plotGreenhouseChart()

// Plot data for the electricity chart 
// "Australia electricity generation in 2021"
function plotElectricityChart(){
  let plotData = [
    {
      values: [59.1, 32.5, 7.7, 0.6, 0.1],
      labels: ['Coal', 'Renewables', 'Gas', 'Non-metered fossil fuels', 'Liquids'],
      type: 'pie',
      // hoverinfo: 'text',
      textinfo: 'label+percent',
      textposition: 'outside',
      marker: {
        colors: '#fff'
      },
    }
  ]

  let layout = {
    title: 'Australia electricity generation in 2021',
    showlegend: false,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  }

  const config = {
    displayModeBar: false,
  }

  Plotly.newPlot(electricityDiv, plotData, layout, config)
}
plotElectricityChart()

// Plot data for the total elec generation chart
//Austrlia percentage contribution to total electricity generation in 2014-2021

function plotTotalChart(){
  let trace1 = {
    x: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    y: [13.5, 14.6, 17.3, 16.9, 21.3, 24, 27.7, 32.5],
    fill: 'tozeroy',
    fillcolor: 'rgb(220,240,200,0.5)',
    line:{
      color: 'rgb(150,235,200,0.5)'
    },
    type: 'scatter',
    name: 'Fossil fuels'
  };
  
  let trace2 = {
    x: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    y: [86.5, 85.4, 82.7, 83.1, 78.7, 76, 72.3, 67.5],
    fill: 'tonexty',
    type: 'scatter',
    name: 'Renewables'
  };

  let layout = {
    title: 'Percentage contribution to total electricity generation',
    xaxis:{
      title: 'Year'
    },
    yaxis:{
      title: 'Percentage'
    },
    legend:{
      orientation: 'h',
      x: 0.5,
      y: 1.1,
      xanchor: 'center'
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  };
  
  let data = [trace1, trace2];
  
  Plotly.newPlot(totalDiv, data, layout);
}

plotTotalChart()


// The future benefit of solar energy investment
function plotInvestChart(){
  let trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    y: [5109, 5339, 5881, 6043, 6337, 6611, 6991, 7108, 7564, 7676, 7871, 7999, 8288, 8499, 8875],
    fill: 'tozeroy',
    fillcolor: 'rgb(250,250,250,0.5)',
    line:{
      color: 'rgb(100,235,200,0.5)'
    },
    type: 'scatter',
    name: 'Solar Energy'
  };
  
  let trace2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    y: [1420, 2992, 5345, 6991, 8432, 9390, 11112, 13653, 16002, 18587, 20491, 22756, 25990, 27779, 30840],
    fill: 'tonexty',
    type: 'scatter',
    name: 'Electricity'
  };

  let layout = {
    xaxis:{
      title: 'Year'
    },
    yaxis:{
      title: 'Cost'
    },
    legend:{
      orientation: 'h',
      x: 0.5,
      y: 1.1,
      xanchor: 'center'
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  };
  
  let data = [trace1, trace2];
  
  const config = {
    displayModeBar: false,
  }
  
  Plotly.newPlot(investDiv, data, layout, config);
}

plotInvestChart()