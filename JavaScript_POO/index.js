import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

function TesteUser(){
    const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
    console.log(novoUser.exibirInfos());
    novoUser.nome = "Márcia";
    console.log(novoUser.nome);
    console.log(''.replace('', '==============================================================\n'));
}

function TesteAdmin(){
    const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
    console.log(novoAdmin.exibirInfos());
    console.log(novoAdmin.nome);
    console.log(''.replace('', '==============================================================\n'));    
}

function TesteDocente(){
    const novoDocente = new Docente("Ana", "a@a.com", "2024-01-01");
    console.log(novoDocente.exibirInfos());
    console.log(novoDocente.nome);
    console.log(''.replace('', '==============================================================\n'));        
}

function TesteFicticio(){
    const dadosFicticios = User.exibirInfosGenericas("Cassio", "c@c.com");
    console.log(dadosFicticios);
    console.log(''.replace('', '==============================================================\n'));        
}

//TesteUser();
//TesteAdmin();
//TesteDocente();
TesteFicticio();