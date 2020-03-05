import validator from './validator.js';

/* */

const nextPage = document.getElementById('Siguiente1');
nextPage.addEventListener('click', () => {

document.getElementById('login').classList.add('ocultar');
document.getElementById('signup').classList.remove('ocultar');

});

/* obteniendo el credit card */

let creditCard = document.getElementById('creditCard');

const check = document.getElementById('ValidarCardNumber');
check.addEventListener( "click" , () => {
  let x = validator.isValid(creditCard.value);
  if (x == true) {
    alert(" Tarjeta Verificada ");
    let hiddenCard = validator.maskify(creditCard.value);
    document.getElementById('tarjetaOculta').innerHTML = " Tarjeta N° " + hiddenCard;
    document.getElementById('signup').classList.add("ocultar");
    document.getElementById('vista3').classList.remove("ocultar");
  } else {
    alert("Tarjeta NO Verificada");
  }

});

// Declarando variable para llamar al boton de Regresar de la vista 2 , para que me lleve a la vista 1

const retornoPagina = document.getElementById("Regresar1");
retornoPagina.addEventListener("click", () => {

document.getElementById('signup').classList.add("ocultar");
document.getElementById('login').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Regresar2  de la vista 3 , para que me lleve a la vista 2

const returnValidatorPage = document.getElementById("Regresar2");
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