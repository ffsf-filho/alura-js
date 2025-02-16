export default function trataErros(erro){
    if(erro.code === 'ENOENT'){
        throw new Error('Arquivo não encontrato');
    } else {
        return 'erro na aplicação';
    }
}