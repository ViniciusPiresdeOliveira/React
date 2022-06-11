const Grupo7 = {
    pessoa1: {
        nome: "Vinicius",
        idade: 18,
        endereco: {
            cidade: "Petrópolis",
            estado: "Rio de Janeiro"
        }
    },
    pessoa2: {
        nome: "Gabriel",
        idade: 22,
        endereco: {
            cidade: "Petrópolis",
            estado: "Rio de Janeiro"
        }
    },
    pessoa3: {
        nome: "Cauã",
        idade: 18,
        endereco: {
            cidade: "Petrópolis",
            estado: "Rio de Janeiro"
        }
    },
    pessoa4: {
        nome: "Rebeca",
        idade: 23,
        endereco: {
            cidade: "Petrópolis",
            estado: "Rio de Janeiro"
        }
    },
    pessoa5: {
        nome: "Juliana",
        idade: 33,
        endereco: {
            cidade: "Petrópolis",
            estado: "Rio de Janeiro"
        }
    },
}
console.log(Grupo7.pessoa1.nome, Grupo7.pessoa1.idade, Grupo7.pessoa1);
console.log(Grupo7.pessoa2.nome, Grupo7.pessoa2.endereco.cidade);
console.log(Grupo7.pessoa3.nome, Grupo7.pessoa3.endereco.estado);
console.log(Grupo7.pessoa4.nome, Grupo7.pessoa4.idade);
console.log(Grupo7.pessoa5.nome, Grupo7.pessoa5.idade);

var Array = { nome: "Vinicius", idade: 18, endereco: { cidade: "Petrópolis", estado: "Rio de Janeiro" } };

console.log(Array);


// function executando(){
//     console.log("Vinícius")
// }
// setInterval(executando, 1000)

var frase = "Vinícius";
var contador = 0;

while(contador < 30){
    console.log(frase)
    contador++
}

if(contador < 30){
    console.log(frase)
    contador++
}
