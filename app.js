// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const input_amigo = document.getElementById("amigo");
const button = document.getElementById('amigo-button');
input_amigo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if applicable
            agregarAmigo();
    }
});

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

    const length = amigos.length;
    if (length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const amigo_field = document.getElementById("resultado");
    amigo_field.innerHTML = "";

    const index = Math.floor(Math.random()*length);
    const amigo_sorteado = amigos[index];
    
    const li = document.createElement("li");
    li.textContent = amigo_sorteado;
    amigo_field.appendChild(li);

    //desabilito el boton de sortear para evitar que se sortee mas de una vez
	document.querySelector(".button-draw").disabled = true;
	//desabilito el boton de agregar para evitar que se agreguen mas amigos
	document.querySelector(".button-add").disabled = true;


}