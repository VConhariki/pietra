let mensagens = [
    'Quem é essa gatinha na minha uatizapi? 🥵',
    'Nosso primeiro Rolezinho juntos🏳️',
    'O início de uma grande jornada 😎',
    'Primeira vez dormindo em casa (e com o nilo)😾',
    'Toda naipe de artista 🎨',
    'Pique de jogador 🏌️‍♀️',
    'Elegante na conduta 💃',
    'Muito estilosa 😎',
    'Carinhosa e Amorosa 🥰',
    'Cúmplice 🙌',
    'E parceira 🤝',
    'Gostaria que você soubesse...',
    'Que...',
    'O Xerifinho,',
    'Amadeu,',
    'Sofia, (essa ai já até desmaiou)',
    'Raulzito,',
    'Jon Jonas,',
    'Nilo Amargurado Jr.,',
    'A nova',
    'E velha família',
    'Todos nós te amamos muito e sentimos sua falta',
    'Bjus, volte logo ❤️'
]

let imagem = document.querySelector('#imagem')
let mensagem = document.querySelector('#mensagem')
let botaoNext = document.querySelector('#next')
let count = 0;
imagem.src = `images/${count + 1}.jpg`
mensagem.innerText = mensagens[count];
botaoNext.addEventListener('click', OnPressNext)

function OnPressNext(){
    if(count == 22){
        count = 0;
        imagem.src = `images/${count + 1}.jpg`
        mensagem.innerText = mensagens[count];
        return
    }
    count++
    imagem.src = `images/${count + 1}.jpg`
    mensagem.innerText = mensagens[count];
}
