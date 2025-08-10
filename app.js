// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input_amigo = document.getElementById("amigo");
    const nombreAmigo = input_amigo.value.trim();

    const regexSoloTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regexSoloTexto.test(nombreAmigo)) {
        alert("El nombre solo debe contener letras y caracteres válidos.", "error");
        return;
    }

    if(amigos.includes(nombreAmigo)) {
        alerr("Este nombre ya ha sido agregado.", "error");
        return;
    }
     
    if (nombreAmigo === "") {
        alert("Por favor entre un nombre")
    }
    
    input_amigo.value = "";
    amigos.push(nombreAmigo);
    actualizarListaAmigos(nombreAmigo);

}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;



        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {

}