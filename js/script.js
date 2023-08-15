const modal = document.querySelector('.modal-container');
const formulario = document.querySelector('.container');
const info = document.querySelector('#info');
const botaoMedia = document.querySelector('.btnOpenModal');
const formName = document.querySelector('.form-name');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nome = document.querySelector('#name');
const notasControl = document.querySelector('.notas-control');
const btnMedia = document.querySelector('.notaCor');
const btnNota1 = document.querySelector('#btnNota1');
const btnNota2 = document.querySelector('#btnNota2');
const btnNota3 = document.querySelector('#btnNota3');

const botoes = [btnNota1, btnNota2, btnNota3];

function openModal(){
    //quando o botao ver média for clicado, ele vai ativar essa função cujo objetivo é adicionar mais uma classe à div com a classe .modal-container. Assim vai ficar noo final <div class="modal-container active"
    modal.classList.add('active'); 
    formulario.classList.add('desligar');
    botaoMedia.classList.add('desligar');
    formName.classList.add('desligar');
}

function closeModal(){
    modal.classList.remove('active'); //processo contrário do citado acima
    formulario.classList.remove('desligar');
    botaoMedia.classList.remove('desligar');
    formName.classList.remove('desligar');
}


botaoMedia.addEventListener('click', calcularMedia);

function calcularMedia(){
    event.preventDefault();

    let primeiraNota = parseFloat(nota1.value);
    let segundaNota = parseFloat(nota2.value);
    let terceiraNota = parseFloat(nota3.value);

    const media = (primeiraNota + segundaNota + terceiraNota) / 3;
    

    if(primeiraNota>=0 && segundaNota>=0 && terceiraNota>=0 && nome.value!==''){
        ativar(notasControl);
        mudarCor(btnMedia, media);
        if(media>=7){
            info.innerHTML = `<span>O(a) aluno(a) ${nome.value} está aprovado(a)!</span>`;
            btnNota1.innerHTML = `${primeiraNota.toFixed(1)}`;
        }else if(media>=4){
            info.innerHTML = `<span>O(a) aluno(a) ${nome.value} está na prova final!</span>`;
            btnNota1.innerHTML = `${segundaNota.toFixed(1)}`;
        }else{
            info.innerHTML = `<span>O aluno ${nome.value} está na recuperação!</span>`;
            btnNota1.innerHTML = `${terceiraNota.toFixed(1)}`;
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

function ativar(div){
    div.classList.remove('desligar');
}

function desativar(div){
    div.classList.add('desligar');
}
