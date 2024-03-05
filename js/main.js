/*let ingreso = parseInt(prompt("Ingresa la cantidad de remeras que deseas comprar")) ;

for (let i = 15; i <= 15; i++){
let resultado = ingreso * i



console.log("el precio que debes pagar es $" + resultado);

alert("el precio que debes pagar es $" + resultado)




}


let ingresatalle = prompt("Ingresa el talle que quieres llevar")
let talles ="S s M m L l XL xl XXL xxl"

if( ingresotalle = talles){
    alert("estamos preparando tu pedido");
}
else{
    alert("talle no encontrado")
}


*/
// Valores predefinidos para el usuario y la contraseña
var usuarioCorrecto = "Tomas";
var contraseñaCorrecta = "Garcia";

function iniciarSesion() {
    var usuario = prompt("Introduce tu usuario:");
    var contraseña = prompt("Introduce tu contraseña:");

    // Verifica si el usuario y la contraseña son correctos
    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario + "!");
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}


