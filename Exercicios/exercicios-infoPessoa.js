// infoPessoa.js
const pessoa = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"]
};

function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
}

// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoa);

//Resolução 2

const pessoa1 = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"],
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade Feliz",
        estado: "Estado Alegre"
    }
};

function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    console.log("Endereço:");
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Cidade: ${pessoa.endereco.cidade}`);
    console.log(`Estado: ${pessoa.endereco.estado}`);
}

// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoa1);

//Resolução 3
// listaPessoas.js
const listaPessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];

function mostrarListaPessoas(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

// Chamada da função mostrarListaPessoas
mostrarListaPessoas(listaPessoas);

// Adição de uma nova pessoa à lista
listaPessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" });

// Chamada da função mostrarListaPessoas após a adição
mostrarListaPessoas(listaPessoas);

// Chamada da função filtrarPorCidade
const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);

//Resolução 4

// funcoesObjeto.js
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Divisão por zero não é permitida.";
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};

// Chamadas das funções
console.log("Soma: " + calculadora.soma(5, 3));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2));
console.log("Divisão: " + calculadora.divisao(10, 2));
console.log("Divisão por zero: " + calculadora.divisao(8, 0));

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));

//Resolução 5

const contaBancaria = {
    titular: "João",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = {
    nome: "Carlos",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);
cliente.conta.sacar(200);

// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)