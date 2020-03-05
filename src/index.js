import validator from './validator.js';

/* */

const nextPage = document.getElementById("Siguiente1");
nextPage.addEventListener("click", () => {

document.getElementById('login').classList.add("ocultar");
document.getElementById('signup').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Validar y si es true la validacion que vaya a la vista 3 de lo contrario siga en vista 2
// Y que si es una Tarjeta Validada  que me devuelva los numeros de la tarjeta original con # y los 4 ultimos digitos normal

let creditCard = document.getElementById('creditCard');

const check = document.getElementById("ValidarCardNumber");
check.addEventListener( "click" , () => {
  let x = validator.isValid(creditCard.value);
  if (x == true) {
    alert(" Tarjeta Verificada  ✅ ");
    let hiddenCard = validator.maskify(creditCard.value);
    document.getElementById('tarjetaOculta').innerHTML = " Tarjeta N° " + hiddenCard;
    document.getElementById('signup').classList.add("ocultar");
    document.getElementById('vista3').classList.remove("ocultar");
  } else {
    alert(" ❌ Tarjeta NO Verificada ⚠️ ");
  }

});

// Declarando variable para llamar al boton de Regresar de la vista 2 , para que me lleve a la vista 1

const returnPage = document.getElementById("btnRegresar");
returnPage.addEventListener("click", () => {

document.getElementById('signup').classList.add("ocultar");
document.getElementById('login').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Pagar de la vista 3 y capturando el valor de mis otras vistas , para que me lleve a la vista 4 con todos datos capturados y salga mi comprobante de pago

const pagar = document.getElementById("btnPagar");
pagar.addEventListener("click", () => {

let cardValue1 = validator.maskify(creditCard.value);
let titu = document.getElementById('nameTitular').value;
let code = document.getElementById('codigo').value;
let mod = document.getElementById('modalidad');
let mod1 = mod.options[mod.selectedIndex].text;
let cor = document.getElementById('core');
let cor1 = cor.options[cor.selectedIndex].text;
let money = document.getElementById('monto');
let money1 = money.options[money.selectedIndex].text;
let mail = document.getElementById('email').value;


document.getElementById('comprobanteTarjeta').innerHTML = " Tarjeta N° " + cardValue1;
document.getElementById('comprobanteTitular').innerHTML = " Titular  : " + titu;
document.getElementById('comprobanteCodigo').innerHTML = " Código   : " + code;
document.getElementById('comprobanteModalidad').innerHTML = " Modalidad : " + mod1;
document.getElementById('comprobanteCore').innerHTML = " Commo Core   : " + cor1;
document.getElementById('comprobanteMonto').innerHTML = " Monto Pagado : " + money1;
document.getElementById('comprobanteEmail').innerHTML = " Este comprobante será enviado a : " + mail;



document.getElementById('vista3').classList.add("ocultar");
document.getElementById('vista4').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Regresar2  de la vista 3 , para que me lleve a la vista 2

const returnValidatorPage = document.getElementById("btnRegresar2");
returnValidatorPage.addEventListener("click", () => {

document.getElementById('vista3').classList.add("ocultar");
document.getElementById('signup').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Finalizar de la vista 4 , para que me lleve a la vista 1

const finalizarSesion = document.getElementById("btnFinalizar");
finalizarSesion.addEventListener("click",() => {

document.getElementById('vista4').classList.add("ocultar");
document.getElementById('login').classList.remove("ocultar");

});