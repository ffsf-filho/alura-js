import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
      if(erro) throw erro
      const resultado = contaPalavras(texto);
      criaESalvaArquivoAsync(resultado, endereco)
      criaESalvaArquivoThen(resultado, endereco)
    }
    catch(erro){
      trataErros(erro);
    }
  })

  async function criaESalvaArquivoAsync(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultato.txt`;
    //const textoPalavras = JSON.stringify(listaPalavras);
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch (error) {
        throw erro;
    }
  }

  function criaESalvaArquivoThen(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultatoThen.txt`;
    //const textoPalavras = JSON.stringify(listaPalavras);
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            //processamento feito com o resultado a promessa
            console.log('arquivo criado');
        })
        .catch((erro) =>{
            throw erro
        })
        .finally(() => {
            console.log('Operação finalizada.');
        });
  }