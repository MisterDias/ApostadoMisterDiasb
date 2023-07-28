const number = document.querySelector("#number");
function Aposta() { }
const random = Math.floor(Math.random() * 100) + 1;


function aposta() {

    if (number.value == random) {
        alert("Ganhou meu Chapa!");
    } else {
        alert("Perdeu Paiaço,hihihihihi");
        alert("O número era:" + random);
    }
}