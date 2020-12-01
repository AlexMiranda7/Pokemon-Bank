function tiempo(impresion) {
    var date = new Date();
    var impresion = date + " SV";
    return impresion;
}

if (localStorage.length == 0 && localStorage.name == undefined) {
    localStorage.setItem("transacciones", '{\"ingresos\":{\"Apertura de cuenta\":\"500\"},\"egresos\":{}}');
    localStorage.setItem("Nombre", "Ash Ketchum");
    localStorage.setItem("Cuenta", "0987654321");
    localStorage.setItem("Fondos", "500.00");
}

//DECLARACION DE VARIABLES
var cant_depo = document.getElementById('cant_depo');
var cant_retiro = document.getElementById('cant_retiro');
var NIC = document.getElementById('NIC');
var monto_energia = document.getElementById('monto_energia');
var NPE = document.getElementById("NPE");
var monto_agua = document.getElementById('monto_agua');
var telefono = document.getElementById('telefono');
var monto_telefono = document.getElementById('monto_telefono');

//INSCRIPCIONES EN NAV
var nombreNAV = document.getElementById('afiliado');
nombreNAV.innerHTML = "Bienvenido " + localStorage.Nombre;

var cuentaNAV = document.getElementById('cuenta');
cuentaNAV.innerHTML = "Poke-Cuenta número: " + localStorage.Cuenta;

var saldoNAV = document.getElementById('saldo');
saldoNAV.innerHTML = "Saldo: $" + localStorage.Fondos;

//CONSULTA DE SALDO
var consultaSaldo = document.getElementById('consultaSaldo');
consultaSaldo.innerHTML = "$ " + localStorage.Fondos;

//Funcion para campturar imagen
var img = new Image();
img.src = 'Assets/IMG/pokebank.jpg';


function trans() {
    let parseTrans = JSON.parse(localStorage.transacciones);
    return parseTrans
}

function Ingresos() {
    let parseTrans = trans();
    return parseTrans.ingresos;
}

function Egresos() {
    let parseTrans = trans();
    return parseTrans.egresos;
}

function trans_individual(monto, descripcion, tipo) {
    parseTrans = trans();
    let saldoActual = Number(localStorage.Fondos);
    if (tipo == "ingreso") {
        parseTrans.ingresos[descripcion] = monto;
        localStorage.setItem("transacciones", JSON.stringify(parseTrans));
        saldoActual += Number(monto);
        localStorage.setItem("Fondos", saldoActual.toString());
    } else if (tipo == "egreso") {
        parseTrans.egresos[descripcion] = monto;
        localStorage.setItem("transacciones", JSON.stringify(parseTrans));
        saldoActual -= Number(monto);
        localStorage.setItem("Fondos", saldoActual.toString());
    } else {
        console.log("trasacción no válida");
    }
}
//FUNCION DEPOSITAR
function depositar() {
    if (cant_depo.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'Nos has definido la cantidad a depositar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    } else {
        var doc = new jsPDF();
        //doc.addImage(img1, 'JPG', 150, 10);
        doc.text("Hola " + localStorage.Nombre, 25, 25);
        doc.text("Has depositado $" + cant_depo.value + " a la Poke-Cuenta numero " + localStorage.Cuenta, 25, 50);
        doc.text(tiempo(), 25, 65);
        doc.save("PokeDeposito.pdf");

        trans_individual(cant_depo.value, "Deposito", "ingreso");
    }
}

//FUNCION RETIRAR
function retirar() {
    if (cant_retiro.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido la cantidad a retirar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    } else {
        var doc = new jsPDF();
        //doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola " + localStorage.Nombre, 25, 25);
        doc.text("Has retirado $" + cant_retiro.value + " de la Poke-Cuenta numero " + localStorage.Cuenta, 25, 50);
        doc.text(tiempo(), 25, 65);
        doc.save("PokeRetiro.pdf");

        trans_individual(cant_retiro.value, "Retiro de Efectivo", "egreso");
    }
}

//FUNCION PAGO_ENERGIA
function pago_energia() {
    if (NIC.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el Numero de Identificación de Contrato NIC',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    }
    if (monto_energia.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el monto total a pagar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    } else {
        var doc = new jsPDF();
        //doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola " + localStorage.Nombre, 25, 25);
        doc.text("Has pagado la energia electrica que te brinda Pickachu,", 25, 50)
        doc.text("mediante el NIC " + NIC.value + " por un costo de $" + monto_energia.value, 25, 60);
        doc.text(tiempo(), 25, 90);
        doc.save("PokePago-Energia.pdf");

        //Disminuyendo fondos
        trans_individual(monto_energia.value, "Pago de Energia", "egreso")

        //Limpieza de imputs
        NIC.value = '';
        monto_energia.value = '';

    }
}

//FUNCION PAGO_AGUA
function pago_agua() {
    if (NPE.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el NPE de la factura',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    }
    if (monto_agua.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el monto total a pagar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    } else {
        var doc = new jsPDF();
        //doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola " + localStorage.Nombre, 25, 25);
        doc.text("Has pagado la el agua que te brinda Squirtle,", 25, 50)
        doc.text("mediante el NPE " + NPE.value + " por un costo de $" + monto_agua.value, 25, 60);
        doc.text(tiempo(), 25, 90);
        doc.save("PokePago-Agua.pdf");

        //Disminuyendo fondos
        trans_individual(monto_agua.value, "Pago de Agua", "egreso")
        //Limpieza de imputs
        NPE.value = '';
        monto_agua.value = '';


    }
}

function pago_telefonia() {
    if (telefono.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el numero de telefono fijo',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    }
    if (monto_telefono.value == '') {
        swal.fire({
            title: '¡Poke-Atención!',
            text: 'No has definido el monto total a pagar',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
        })
    } else {
        var doc = new jsPDF();
        //doc.addImage(img, 'JPG', 150, 10);
        doc.text("Hola " + localStorage.Nombre, 25, 25);
        doc.text("Has pagado el consumo de tu Pokédesk,", 25, 50)
        doc.text("mediante el Numero Telefonico " + telefono.value + " por un costo de $" + monto_telefono.value, 25, 60);
        doc.text(tiempo(), 25, 90);
        doc.save("PokePago-Telefono.pdf");

        //Disminuyendo fondos
        trans_individual(monto_telefono.value, "Pago de Internet y Telefonia", "egreso")

        //Limpiando Inputs 
        telefono.value = '';
        monto_telefono.value = '';
    }
}


/* AQUI EMPIEZA LA IMPLEMENTACIÓN QUE SE HIZO CON ANGULAR JS
(function(){
    var app = angular.module('pokeBank',[ ]);    
    app.controller('pokeController',function(){
        this.persona = usuario;
        this.cant_depo = document.getElementById('cant_depo');
        this.cant_retiro = document.getElementById('cant_retiro');
        this.NIC = document.getElementById('NIC');
        this.monto_energia = document.getElementById('monto_energia');
        this.NPE = document.getElementById("NPE");
        this.monto_agua = document.getElementById('monto_agua');
        this.telefono = document.getElementById('telefono');
        this.monto_telefono = document.getElementById('monto_telefono');
        
        //FUNCION DEPOSITAR
        this.depositar = function(){
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
                doc.text("Hola " + usuario.name,25,25);
                doc.text("Has depositado $"+ cant_depo.value+ " a la Poke-Cuenta numero "+ usuario.cuenta,25,50);
                doc.text(tiempo(),25,65);
                doc.save("PokeDeposito.pdf");
        
       
        
            //Aumentando fondos
            usuario.fondos = parseFloat(usuario.fondos) + parseFloat(cant_depo.value);
            alert(usuario.fondos);
            cant_depo.value = ""; //Limpia el input
            //document.location.href="index.html";
            }
        }
        
        //FUNCION RETIRAR
        this.retirar = function(){
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
                doc.text("Hola "+ usuario.name,25,25);
                doc.text("Has retirado $"+ cant_retiro.value+ " de la Poke-Cuenta numero "+usuario.cuenta,25,50);
                doc.text(tiempo(),25,65);
                doc.save("PokeRetiro.pdf");
                
                //Disminuyendo fondos
                usuario.fondos = parseFloat(usuario.fondos) - parseFloat(cant_retiro.value);
                alert(usuario.fondos);
                cant_retiro.value = ""; //Limpia el input
    }
        }
        
        //FUNCION PAGO_ENERGIA
        this.pagar_energia = function(){
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
                doc.text("Hola "+ usuario.name,25,25);
                doc.text("Has pagado la energia electrica que te brinda Pickachu,",25,50) 
                doc.text("mediante el NIC "+ NIC.value+ " por un costo de $"+monto_energia.value,25,60);
                doc.text(tiempo(),25,90);
                doc.save("PokePago-Energia.pdf");
        
            //Disminuyendo fondos
            usuario.fondos = parseFloat(usuario.fondos) - parseFloat(monto_energia.value);
            alert(usuario.fondos);
            //Limpieza de imputs
            NIC.value='';
            monto_energia.value='';
        
    }
        }
        
        //FUNCION PAGAR_AGUA
        this.pagar_agua = function(){
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
                doc.text("Hola "+ usuario.name,25,25);
                doc.text("Has pagado la el agua que te brinda Squirtle,",25,50) 
                doc.text("mediante el NPE "+ NPE.value+ " por un costo de $"+ monto_agua.value,25,60);
                doc.text(tiempo(),25,90);
                doc.save("PokePago-Agua.pdf");
                
                //Disminuyendo fondos
                usuario.fondos = parseFloat(usuario.fondos) - parseFloat(monto_agua.value);
                alert(usuario.fondos);
                //Limpieza de imputs
                NPE.value='';
                monto_agua.value='';
        
                
    }
        }
        
        //FUNCION PAGAR_TELEFONIA
        this.pagar_telefonia = function(){
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
                doc.text("Hola "+ usuario.name,25,25);
                doc.text("Has pagado el consumo de tu Pokédesk,",25,50) 
                doc.text("mediante el Numero Telefonico "+ telefono.value+ " por un costo de $"+ monto_telefono.value,25,60);
                doc.text(tiempo(),25,90);
                doc.save("PokePago-Telefono.pdf");
        
                //Disminuyendo fondos
                usuario.fondos = parseFloat(usuario.fondos) - parseFloat(monto_telefono.value);
                alert(usuario.fondos);
        
                //Limpiando Inputs 
                telefono.value='';
                monto_telefono.value='';
    }
        }
        
    });
    var usuario = {
                   name: 'Ash Ketchum',
                   cuenta: '0987654321',
                   fondos: '500',
                   historial:'...',
                   }
    
    
})(); */


//Funcion para ingreso al sistema
function login() {
    var pin = document.getElementById('PIN');
    pin.type = "text"
    var PIN = pin.value;
    if (PIN == '1234') {
        document.location.href = "index.html"
    }
    if (PIN == '') {
        swal.fire({
            title: '¡Atención!',
            text: 'El campo PIN no puede quedar vacio',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
            timer: 5000,
            timerProgressBar: true
        })
    } else {
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
