function tiempo(impresion){
var date = new Date();
var impresion = date + " SV";
return impresion;
}
//Definiendo objeto de usuario
//var Usuario = new Object();
//Usuario.nombre = 'Ash Ketchum';
//Usuario.cuenta = '0987654321';
//Usuario.fondos = '500';
//Usuario.historial = '';
localStorage.setItem("Nombre", 'Ash Ketchum');
localStorage.setItem("Cuenta",'0987654321');
localStorage.setItem("Fondos",'500');
localStorage.setItem("Historial",'');
let NombreST = localStorage.getItem("Nombre");
let CuentaST = localStorage.getItem("Cuenta");

//Informacion en NAV
var afiliado = document.getElementById('afiliado');
afiliado.innerHTML = "Bienvenido "+ NombreST ;
var cuenta = document.getElementById('cuenta');
cuenta.innerHTML = "Poke-Cuenta numero: "+ CuentaST;
    
// Mensaje de Saldo en cuenta
function consulta() {
    
    //$(document).ready( function(){
        //$('#depo').on('click','button.depositar', function(){
            //$.ajax(localStorage.fondo).done;
        //});
    //});
   // swal.fire({
     //       title: '¡Consulta de Saldo!',
    //        text: 'El saldo actual de la cuenta es de $' + localStorage.fondo,
    //        icon: 'question',
    //        confirmButtonText: '¡Poke-Genial!',
      //      backdrop: 'true'
    //    })
    
    $(document).ready(function(){
       $('#btnopc').click(function(){
            var saldo = localStorage.getItem("Fondos")
            var fondohtml = document.getElementById('saldo');
            fondohtml.innerHTML = "$" + saldo;
       }); 
    });
    
    
}

//Funcion para ingreso al sistema
function login() {
    var pin = document.getElementById('PIN');
    pin.type = "text"
    var PIN = pin.value;
    if(PIN == '1234'){
        document.location.href="index.html"
    }
    if(PIN == ''){
        swal.fire({
            title: '¡Atención!',
            text: 'El campo PIN no puede quedar vacio',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
            timer: 5000,
            timerProgressBar: true
        })
       }
    else{
        swal.fire({
            title: 'Error',
            text: 'PIN no valido',
            icon: 'error',
            confirmButtonText: 'Avanzar',
            backdrop: 'true',
            timer: 5000,
            timerProgressBar: true,
        })
    }
}

//Funcion para campturar imagen
var img = new Image();
img.src = 'Assets/IMG/pokebank.jpg';

//Funcion en depositar.html
var cant_depo = document.getElementById('cant_depo');
var cant_ingresar = document.getElementById('cant_ingresar');
function depositar(){
    if(cant_depo.value == ''){
       swal.fire({
            title: '¡Poke-Atención!',
            text: 'Nos has definido la cantidad a depositar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
       })
    }
    else{
        var doc = new jsPDF();
        doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola "+ NombreST,25,25);
        doc.text("Has depositado $"+ cant_depo.value+ " a la Poke-Cuenta numero "+CuentaST,25,50);
        doc.text(tiempo(),25,65);
        doc.save("PokeDeposito.pdf");
        
        cant_depo.value = ""; //Limpia el input
        
        //Aumentando fondos
        var suma = parseFloat(localStorage.fondo) + parseFloat(cant_depo.value);
        localStorage.fondo = suma;
        alert(localStorage.fondo);
    }
       
}

//Funcion en retiro.html
var cant_retiro = document.getElementById('cant_retiro');
function retirar(){
    if(cant_retiro.value == ''){
       swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido la cantidad a retirar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
       })
    }
    else{
        var doc = new jsPDF();
        doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola "+ NombreST,25,25);
        doc.text("Has retirado $"+ cant_retiro.value+ " de la Poke-Cuenta numero "+CuentaST,25,50);
        doc.text(tiempo(),25,65);
        doc.save("PokeRetiro.pdf");
        
        cant_retiro.value = ""; //Limpia el input
    }
}

//Funcion en energia.html
var NIC = document.getElementById('NIC');
var monto_energia = document.getElementById('monto_energia');
function pagar_energia(){
    if(NIC.value == ''){
       swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el Numero de Identificación de Contrato NIC',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
       })
    }
    if(monto_energia.value == ''){
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el monto total a pagar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    }
    else{
        var doc = new jsPDF();
        doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola "+ NombreST,25,25);
        doc.text("Has pagado la energia electrica que te brinda Pickachu,",25,50) 
        doc.text("mediante el NIC "+ NIC.value+ " por un costo de $"+monto_energia.value,25,60);
        doc.text(tiempo(),25,90);
        doc.save("PokePago-Energia.pdf");
        
        //Limpieza de imputs
        NIC.value='';
        monto_energia.value='';
        
    }
}


//Funcion en agua.html
var NPE = document.getElementById("NPE");
var monto_agua = document.getElementById('monto_agua');
function pagar_agua(){
    if(NPE.value == ''){
       swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el NPE de la factura',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
       })
    }
    if(monto_agua.value == ''){
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el monto total a pagar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    }
    else{
        var doc = new jsPDF();
        doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola "+ NombreST,25,25);
        doc.text("Has pagado la el agua que te brinda Squirtle,",25,50) 
        doc.text("mediante el NPE "+ NPE.value+ " por un costo de $"+ monto_agua.value,25,60);
        doc.text(tiempo(),25,90);
        doc.save("PokePago-Agua.pdf");
        
        //Limpiando Inputs
        NPE.value='';
        monto_agua.value='';
    }
}

//Funcion en internet.html
var telefono = document.getElementById('telefono');
var monto_telefono = document.getElementById('monto_telefono');
function pagar_telefonia(){
    if(telefono.value == ''){
       swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el numero de telefono fijo',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
       })
    }
    if(monto_telefono.value == ''){
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el monto total a pagar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    }
    else{
        var doc = new jsPDF();
        doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola "+ NombreST,25,25);
        doc.text("Has pagado el consumo de tu Pokédesk,",25,50) 
        doc.text("mediante el Numero Telefonico "+ telefono.value+ " por un costo de $"+ monto_telefono.value,25,60);
        doc.text(tiempo(),25,90);
        doc.save("PokePago-Telefono.pdf");
        
        //Limpiando Inputs 
        telefono.value='';
        monto_telefono.value='';
    }
}