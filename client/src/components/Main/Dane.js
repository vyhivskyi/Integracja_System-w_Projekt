import React from 'react';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { parseString } from 'xml2js';

class Dane extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartRef.current.getContext('2d');

    //Przetwarzanie danych na temat cen mieszkań
    const daneFromLocalStorage = localStorage.getItem('dane');
    const dane = JSON.parse(daneFromLocalStorage).cenaMieszkan;
    const titleFromLocalStorage = localStorage.getItem('title');

    let labels, values;

    const selectedData = dane.find(item => item.Wojewodztwo === titleFromLocalStorage.replaceAll('"', ''));
    console.log(selectedData)
    if (selectedData) {
      labels = Object.keys(selectedData).filter(key => key !== 'Miasto' && key !== 'Wojewodztwo');
      values = Object.values(selectedData).filter(value => typeof value === 'number');

      console.log(labels);
      console.log(values);
    } else {
      console.log('Brak danych dla wybranego województwa.');
    }

    // Przetwarzanie danych na temat migracji ludności 
    const migracjeFromLocalStorag = JSON.parse(daneFromLocalStorage).migracja;
    const jsonString = JSON.stringify(migracjeFromLocalStorag).trim();
    const migracjeFromLocalStorage = jsonString.replaceAll('&lt;', '<').replaceAll('&gt;', '>').trim();

    let urbanBalance = [];
    // Znajdź wybrany region na podstawie nazwy (titleFromLocalStorage)
    const migracjeObject = JSON.parse(migracjeFromLocalStorage);
    const regionData = migracjeObject.migracja.region;
    const selectedRegion = regionData.find(region => region.$.name === titleFromLocalStorage.replaceAll('"', ''));
    
    if (selectedRegion && selectedRegion.year) {
      const yearData = selectedRegion.year;

      // Przetwarzanie danych dla każdego roku
      yearData.forEach(year => {
        const yearValue = year.value[0];
        const migrationData = year.migration[0];
        if (migrationData && Object.keys(migrationData).length > 0) {
          const balance = parseInt(migrationData.urban_balance[0].replace(' ', ''), 10);

      // Dodaj wartość balance do tablicy urbanBalance
      if(yearValue < 2014) urbanBalance.push({ x:"I "+ yearValue, y: balance });
      if(yearValue >= 2014 && yearValue < 2016) urbanBalance.push({ x:"II "+ yearValue, y: balance });
      if(yearValue >= 2016 && yearValue < 2018) urbanBalance.push({ x:"III "+ yearValue, y: balance });
      if(yearValue >= 2018) urbanBalance.push({ x:"IV "+ yearValue, y: balance });


      console.log(`Rok: ${yearValue}`);
      console.log(`Saldo miejskie: ${balance}`);
      console.log('---');
        }
      });
    } else {
      console.log('Brak danych dla wybranego województwa w pliku XML.');
    }

    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Cena za 1 metr kwadratowy mieszkania",
            data: values,
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
          },
          {
            label: "Saldo migracji miejskich",
            data: urbanBalance,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
            },
            ticks: {
              source: 'auto',
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Wykres danych województwa {localStorage.getItem('title').replaceAll('"', '')}</h1>
        <canvas ref={this.chartRef} id="wykres"></canvas>
      </div>
    );
  }
}

export default Dane;
