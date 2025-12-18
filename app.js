
fetch('data/diciembre-2025.csv')
  .then(r => r.text())
  .then(t => {
    const lines = t.trim().split(/\r?\n/).slice(1);

    let ingresos = 0;
    let egresos = 0;
    let sapucai = 0;
    let efectivo = 0;
    let transferencia = 0;

    lines.forEach(l => {
      const c = l.split(';');

      const ing = parseFloat(c[2]?.replace(/\./g,'').replace(',','.')) || 0;
      const egr = parseFloat(c[3]?.replace(/\./g,'').replace(',','.')) || 0;
      const sap = parseFloat(c[4]?.replace(/\./g,'').replace(',','.')) || 0;
      const obs = (c[6] || '').toUpperCase();

      ingresos += ing;
      egresos += egr;
      sapucai += sap;

      if (ing > 0) {
        if (obs.includes('EFECTIVO')) efectivo += ing;
        else transferencia += ing;
      }
    });

    document.getElementById('ingresos').innerText = ingresos.toLocaleString();
    document.getElementById('egresos').innerText = egresos.toLocaleString();
    document.getElementById('balance').innerText = (ingresos - egresos).toLocaleString();
    document.getElementById('sapucai').innerText = sapucai.toLocaleString();

    new Chart(document.getElementById('graficoIngresos'), {
      type: 'bar',
      data: {
        labels: ['Ingresos','Egresos'],
        datasets: [{ data:[ingresos, egresos] }]
      }
    });

    new Chart(document.getElementById('graficoMedio'), {
      type: 'pie',
      data: {
        labels: ['Efectivo','Transferencia'],
        datasets: [{ data:[efectivo, transferencia] }]
      }
    });
  });
