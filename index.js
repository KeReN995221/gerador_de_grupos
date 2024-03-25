/*var nome="Keren";
var nome="Wesley";

console.log(nome);

let sobrenome="Wiliam";

const pessoa={nome:"José", idade:30};
console.log(pessoa);

console.log(typeof nome);

console.log(nome);
var nome="Keren";


for (let x=0, y=9; x<10; x++, y--){
    console.log("x: "+x+" Y: "+y);
}

function somar(val1, val2){
    return val1+val2;
}


const somar2 = (val1, val2)=>val1-val2;

console.log(somar2(10,5));

let frutas= ['maça', 'banana', 'batata'];
console.log(frutas[1]);
frutas.push("Laranja");
frutas.forEach(fruta=>console.log(fruta));
frutas.map((fruta, idx)=>console.log(fruta +" ["+idx+" ]"));



let titulo1 = document.getElementById("h1");
console.log(titulo1);

let meulink = document.getElementById("titulo");
meulink.setAttribute("herf", "https://oul.com.br");
*/
let inputNum1 = document.getElementById("num1");
//inputNum1.addEventListener('mouseover', function(){alert('olá')}); // eventos para mostrar alerta na página

function somar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    debugger;
    let resultado =  parseFloat(num1)+parseFloat(num2);
    document.getElementById("resultado").innerText=resultado;

    navigator.clipboard.writeText(resultado);
}