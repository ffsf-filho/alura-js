import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdeVagas){
        return `Curso ${nomeCurso} criado com ${qtdeVagas}`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JavaScript', 20));


