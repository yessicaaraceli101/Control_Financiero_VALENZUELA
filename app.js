const datos = {
  octubre: {
    ingresos: 27830000,
    egresos: 12376000,
    sapucai: 6150000
  },
  noviembre: {
    ingresos: 33406000,
    egresos: 7016820,
    sapucai: 12900000
  },
  diciembre: {
    ingresos: 20503000,
    egresos: 8455000,
    sapucai: 6700000
  }
};

// =====================
// MOSTRAR TARJETAS
// =====================

// OCTUBRE
document.getElementById('ing_oct').innerText =
  datos.octubre.ingresos.toLocaleString();
document.getElementById('egr_oct').innerText =
  datos.octubre.egresos.toLocaleString();
document.getElementById('sap_oct').innerText =
  datos.octubre.sapucai.toLocaleString();

// NOVIEMBRE
document.getElementById('ing_nov').innerText =
  datos.noviembre.ingresos.toLocaleString();
document.getElementById('egr_nov').innerText =
  datos.noviembre.egresos.toLocaleString();
document.getElementById('sap_nov').innerText =
  datos.noviembre.sapucai.toLocaleString();

// DICIEMBRE
document.getElementById('ing_dic').innerText =
  datos.diciembre.ingresos.toLocaleString();
document.getElementById('egr_dic').innerText =
  datos.diciembre.egresos.toLocaleString();
document.getElementById('sap_dic').innerText =
  datos.diciembre.sapucai.toLocaleString();

// =====================
// GRÁFICO COMPARATIVO
// =====================
new Chart(document.getElementById('graficoResumenManual'), {
  type: 'bar',
  data: {
    labels: ['Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Ingresos',
        data: [
          datos.octubre.ingresos,
          datos.noviembre.ingresos,
          datos.diciembre.ingresos
        ],
        backgroundColor: '#1e88e5',
        barThickness: 18
      },
      {
        label: 'Egresos',
        data: [
          datos.octubre.egresos,
          datos.noviembre.egresos,
          datos.diciembre.egresos
        ],
        backgroundColor: '#fbc02d',
        barThickness: 18
      },
      {
        label: 'Sapucai',
        data: [
          datos.octubre.sapucai,
          datos.noviembre.sapucai,
          datos.diciembre.sapucai
        ],
        backgroundColor: '#43a047',
        barThickness: 18
      }
    ]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        ticks: {
          callback: value => value.toLocaleString()
        }
      }
    }
  }
});