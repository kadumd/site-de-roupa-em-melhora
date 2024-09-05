const adicionarImgs = document.querySelector("#adicionar-imgs")
const sairDoAdicionarImgs = document.querySelector("#sair-do-menu-de-adicionar-imgs")
const div = document.querySelector(".pra-organizar")
const preview = document.querySelector("#preview")
const cancelarBotao = document.querySelector("#cancelar")
const prontoBotao = document.querySelector ("#pronto")

function detectar () {
    div.style.display = "flex"
}

function sair () {
    div.style.display = "none"
}

function pronto () {
    window.confirm("deseja salvar as edições")
    div.style.display = "none"
}

function cancela () {
    //window.confirm("tem certeja que deseja sair sem salvar")
    div.style.display = "none"
}

adicionarImgs.addEventListener("click", detectar)
sairDoAdicionarImgs.addEventListener("click", sair)
prontoBotao.addEventListener("click", pronto)
cancelarBotao.addEventListener("click", cancela)



const input = document.querySelector("input");
const img = document.querySelector("img")

function inputEventHandler() {
    img.file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        img.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    preview.appendChild(img)
    img.style.height = 298 + "px"
    img.style.width = 248 + "px"
}

//caso aja uma mudança no arquivo do imput
input.addEventListener("change", inputEventHandler)