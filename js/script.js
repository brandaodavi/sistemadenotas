const modal = document.querySelector('.modal-container');
const formulario = document.querySelector('.container');
const botaoMedia = document.querySelector('.btnOpenModal');
const formName = document.querySelector('.form-name');
const btnMedia = document.querySelector('.notaCor');
const notasControl = document.querySelector('.notas-control');

const info = document.querySelector('#info');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nome = document.querySelector('#name');
const saudacao = document.querySelector('#saudacao');

const error = document.querySelector('#error');
const errorN1 = document.querySelector('#errorN1');
const errorN2 = document.querySelector('#errorN2');
const errorN3 = document.querySelector('#errorN3');


const btnNota1 = document.querySelector('#btnNota1');
const btnNota2 = document.querySelector('#btnNota2');
const btnNota3 = document.querySelector('#btnNota3');

const botoes = [btnNota1, btnNota2, btnNota3];

function openModal(){
    //quando o botao ver média for clicado, ele vai ativar essa função cujo objetivo é adicionar mais uma classe à div com a classe .modal-container. Assim vai ficar noo final <div class="modal-container active"
    modal.classList.add('active'); 
    desativar(formulario);
    desativar(botaoMedia);
    desativar(formName);
}

function closeModal(){
    modal.classList.remove('active'); //processo contrário do citado acima
    ativar(formulario);
    ativar(botaoMedia);
    ativar(formName);
}

function mudarCor(botao, nota){
    if(nota >= 7){
        botao.classList.add('aprovado');
        botao.classList.remove('provafinal');
        botao.classList.remove('recuperacao');
    }else if(nota >=4){
        botao.classList.add('provafinal');
        botao.classList.remove('aprovado');
        botao.classList.remove('recuperacao');
    }else{
        botao.classList.add('recuperacao');
        botao.classList.remove('aprovado');
        botao.classList.remove('provafinal');
    }
    botao.innerHTML = `${nota.toFixed(1)}`;
}

function removerCor(botao){
    botao.classList.remove('recuperacao');
    botao.classList.remove('provafinal');
    botao.classList.remove('aprovado');
}

function ativar(elemento){
    elemento.classList.remove('desligar');
}

function desativar(elemento){
    elemento.classList.add('desligar');
}

function validarCampo(campo, erro){
    event.preventDefault();
    
    if(!campo.value){
        erro.classList.remove("desligar");
        erro.innerHTML = `<span>Este campo não pode estar vazio</span>`
    }else{
        erro.classList.add("desligar");
    }

    if(campo.value<0 || campo.value>10){
        erro.classList.remove("desligar");
        erro.innerHTML = `<span>Insira valores entre 0 e 10</span>`;
    }

}

botaoMedia.addEventListener('click', function calcularMedia(){
    event.preventDefault();

    let primeiraNota = parseFloat(nota1.value);
    let segundaNota = parseFloat(nota2.value);
    let terceiraNota = parseFloat(nota3.value);

    const media = (primeiraNota + segundaNota + terceiraNota) / 3;
    

    if((primeiraNota>=0 && primeiraNota<=10 && segundaNota>=0 && segundaNota<=10 && terceiraNota>=0 && terceiraNota<=10 && nome.value!='')){
        ativar(notasControl);
        mudarCor(btnMedia, media);
        if(media>=7){
            info.innerHTML = `<span>O(a) aluno(a) ${nome.value} está aprovado(a)!</span>`;
            btnNota1.innerHTML = `${primeiraNota.toFixed(1)}`;
        }else if(media>=4){
            info.innerHTML = `<span>O(a) aluno(a) ${nome.value} está na prova final!</span>`;
            btnNota2.innerHTML = `${segundaNota.toFixed(1)}`;
        }else{
            info.innerHTML = `<span>O aluno ${nome.value} está na recuperação!</span>`;
            btnNota3.innerHTML = `${terceiraNota.toFixed(1)}`;
        }
    }else{
        desativar(notasControl);
        info.innerHTML = `<span>Por favor, preencha os campos corretamente</span>`
        /*btnMedia.innerHTML = `S/N`;
        for(let i = 0; i<botoes.length;i++){
            botoes[i].innerHTML = `S/N`;
        }
        removerCor(botoes);
        removerCor(btnMedia);
        */
    }
    
    //Dando cor de acordo com a nota
    mudarCor(btnNota1, primeiraNota);
    mudarCor(btnNota2, segundaNota);
    mudarCor(btnNota3, terceiraNota);

    //Bom dia, tarde, noite
    const dataAtual = new Date();
    if(dataAtual.getHours()>=0 && dataAtual.getHours()<=6){
        saudacao.innerHTML = `<h2>Boa madrugada!</h2>`;
    }else if(dataAtual.getHours()>6 && dataAtual.getHours()<=12){
        saudacao.innerHTML = `<h2>Bom dia!</h2>`;
    }else if(dataAtual.getHours()>12 && dataAtual.getHours()<=18){
        saudacao.innerHTML = `<h2>Boa tarde!</h2>`;
    }else{
        saudacao.innerHTML = `<h2>Boa noite!</h2>`;
    }

    validarCampo(nome, error);
    validarCampo(nota1, errorN1);
    validarCampo(nota2, errorN2);
    validarCampo(nota3, errorN3);
});
