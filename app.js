// =====================
// DATOS MANUALES POR MES
// =====================
const datos = {
  octubre: {
    ingresos: 27830000,
    egresos: 16676000,
    pagado: 16676000,
    pendiente: 0           
  },
  noviembre: {
    ingresos: 27670000,
    egresos: 14266820,
    pagado: 12900000,
    pendiente: 160000     
  },
  diciembre: {
    ingresos: 22363000,
    egresos: 14357500,
    pagado: 6700000,
    pendiente: 13106000      
  }
};

// =====================
// FUNCIONES
// =====================
function resultadoMes(mes) {
  return mes.ingresos - mes.egresos;
}

// =====================
// OCTUBRE
// =====================
document.getElementById('ing_oct').innerText =
  datos.octubre.ingresos.toLocaleString();
document.getElementById('egr_oct').innerText =
  datos.octubre.egresos.toLocaleString();
document.getElementById('res_oct').innerText =
  resultadoMes(datos.octubre).toLocaleString();
document.getElementById('pen_oct').innerText =
  datos.octubre.pendiente.toLocaleString();

// =====================
// NOVIEMBRE
// =====================
document.getElementById('ing_nov').innerText =
  datos.noviembre.ingresos.toLocaleString();
document.getElementById('egr_nov').innerText =
  datos.noviembre.egresos.toLocaleString();
document.getElementById('res_nov').innerText =
  resultadoMes(datos.noviembre).toLocaleString();
document.getElementById('pen_nov').innerText =
  datos.noviembre.pendiente.toLocaleString();

// =====================
// DICIEMBRE
// =====================
document.getElementById('ing_dic').innerText =
  datos.diciembre.ingresos.toLocaleString();
document.getElementById('egr_dic').innerText =
  datos.diciembre.egresos.toLocaleString();
document.getElementById('res_dic').innerText =
  resultadoMes(datos.diciembre).toLocaleString();
document.getElementById('pen_dic').innerText =
  datos.diciembre.pendiente.toLocaleString();

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
        barThickness: 14
      },
      {
        label: 'Egresos',
        data: [
          datos.octubre.egresos,
          datos.noviembre.egresos,
          datos.diciembre.egresos
        ],
        backgroundColor: '#fbc02d',
        barThickness: 14
      },
      {
        label: 'Saldo',
        data: [
          resultadoMes(datos.octubre),
          resultadoMes(datos.noviembre),
          resultadoMes(datos.diciembre)
        ],
        backgroundColor: '#6a1b9a',
        barThickness: 14
      },
      {
        label: 'Pendiente de pago',
        data: [
          datos.octubre.pendiente,
          datos.noviembre.pendiente,
          datos.diciembre.pendiente
        ],
        backgroundColor: '#e53935',
        barThickness: 14
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