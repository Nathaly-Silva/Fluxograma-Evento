console.log ("Faça seu cadastro e particie dos nossos eventos!")

// O objeto Date() com data e horário atual
const dataHoje = new Date();
// data no passado
const data = new Date('2021/09/01') ;

// se a data for maior ou igual a dataHoje
if (data.getTime() >= dataHoje.getTime()) {
	console.log ("Faça seu cadastro");
}
else  {
	console.log ("Data invalida")
}

// Lista de participantes, limite de 100 pessoas
var listaDeParticipantes 
listaDeParticipantes = 80
if(listaDeParticipantes <= 100 ) {
    console.log("Continue seu cadastro!")
} else { 
    console.log("Infelizmente não temos mais vagas para este evento!")
}


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual seu nome? ", function (answer) {
});


var idade;
idade = 25;
if (idade >= 18 ){
    console.log ( "Seja bem vindo") 
} else  {
        console.log ("cadastro não permitido")

    }




    