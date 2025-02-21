import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

function TesteUser(){
    const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
    console.log(novoUser.exibirInfos());
    novoUser.nome = "Márcia";
    console.log(novoUser.nome);
}

function TesteAdmin(){
    const novoAdmin = new Admin("Rodrigo", "r@r.com", "224-01-010");
    console.log(novoAdmin.exibirInfos());
    console.log(novoAdmin.nome);
}

TesteUser();
//TesteAdmin();
