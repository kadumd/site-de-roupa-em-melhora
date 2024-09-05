const senhaCorreta = "batata"
const usuarioCorreto = "cenoura"

const butaoDoFormulario = document.querySelector("#botao");

function verificarLogin() {
    const nomeDoUsuario = document.querySelector("#nome-do-usuario").value
    const senhaDoUsuario = document.querySelector("#senha-do-usuario").value
    if (nomeDoUsuario == "cenoura" && senhaDoUsuario == "batata") {
        window.location.assign("./admin/admin.html")
    } else { 
        window.location.assign("./pasta-do-site/inicio/inicio.html")
    }
}
butaoDoFormulario.addEventListener("click", verificarLogin)