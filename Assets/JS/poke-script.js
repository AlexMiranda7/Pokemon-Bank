var pin = document.getElementById('PIN')

function login(){
    if(pin.value == '1234'){
        document.location.href="index.html"
    }
    if(pin.value == ''){
        swal.fire({
            title: '¡Atención!',
            text: 'El campo PIN no puede quedar vacio',
            icon: 'warning',
            confirmButtonText: 'Intentar',
            backdrop: 'true',
            timer: 5000,
            timerProgressBar: true,
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
    else{//Aqui ira la impresión*
        
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
    else{//Aqui ira la impresión*
        
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
}


//Funcion en agua.html
var NPE = document.getElementById('NPE');
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
}