var ingreso = Ingresos();

let ingresosHTML = "";

for (const [key, value] of Object.entries(ingreso)) {
    ingresosHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
  }

let zonaingresos = document.getElementById("tabla-i");

zonaingresos.innerHTML = ingresosHTML;


let egresos = Egresos();

let egresosHTML = "";

for (const [key, value] of Object.entries(egresos)) {
    egresosHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
  }

let zonaegresos = document.getElementById("tabla-e");

zonaegresos.innerHTML = egresosHTML;