const teclado = document.querySelectorAll("input[type=button]");
const telaResultado = document.querySelector("#telaResultado");

let primeiroNumero = 0;
let segundoNumero = 0;

for (let i = 0; i < teclado.length; i++) {
  teclado[i].onclick = function () {
    digitar(teclado[i]);
  };
}
function digitar(tecla) {
  if (eNumero(tecla.value)){
    telaResultado.value += tecla.value;
  }else if (eOperacao(tecla.value)){
    telaResultado.value += ` ${tecla.value} `;
  }else if (eClear(tecla.value)){
    limpar();
  }else{
    resultado();
  }
}


function eNumero(valor){
  if (isNaN(valor)){
    return false;
  }else{
    return true;
  }
}

function eOperacao(valor){
  if(valor === "+" || valor === "-" ||  valor === "*" || valor === "/"){
    return true;
  }else{
    return false;
  }
}

function eClear(valor){
  if (valor === "CE"){
    return true;
  }else{
    return false;
  }
}

function resultado(){
  var auxiliar = telaResultado.value;
  primeiroNumero = Number(auxiliar.substring(0,auxiliar.indexOf(" ")));
  segundoNumero = Number(auxiliar.substring(auxiliar.indexOf(" ")+2));
  auxiliar = auxiliar.substring(auxiliar.indexOf(" ")+1,auxiliar.indexOf(" ")+2)
  switch(auxiliar){
    case '+':
      soma(primeiroNumero,segundoNumero);
      break;
    case '-':
      subtracao(primeiroNumero,segundoNumero);
      break;
    case '*':
      multiplicacao(primeiroNumero,segundoNumero);
      break;
    case '/':
      divisao(primeiroNumero,segundoNumero);
      break;
    default:
      //alert("Operação Inválida");
      break;
  }
}

function soma(elemento1, elemento2) {
  telaResultado.value = (Number(elemento1) + Number(elemento2));
}

function subtracao(elemento1, elemento2) {
  telaResultado.value = (Number(elemento1) - Number(elemento2));
}

function multiplicacao(elemento1, elemento2) {
  telaResultado.value = (Number(elemento1 * elemento2));
}

function divisao(elemento1, elemento2) {
  if (elemento2 === 0) {
    return alert("Não é Possivel Dividir por zero!");
  } else {
    telaResultado.value = (Number(elemento1 / elemento2));
  }
}

function limpar(){
  telaResultado.value = "";
  primeiroNumero = 0;
  segundoNumero = 0;
}
