import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso de ${curso}, responsavel ${this.nome}`
    }
}

const novaDocente = new Docente('Ana', 'a@a.com', '2024-01-01');
console.log(novaDocente.aprovaEstudante('Juliana', 'JavaScript'));


