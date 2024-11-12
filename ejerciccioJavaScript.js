// 1. Variables con datos personales y mensaje de bienvenida
let nombre = "Tomas";
let edad = 21;
let ciudad = "Córdoba";

// Función para mostrar el primer mensaje de bienvenida
function mostrarBienvenida() {
  alert(`¡Bienvenido/a ${nombre}! Tienes ${edad} años y vives en ${ciudad}`);
}

// 2. Función para que el usuario ingrese sus datos
function ingresarDatos() {
  nombre = prompt("Por favor, ingresa tu nombre:");
  edad = parseInt(prompt("Por favor, ingresa tu edad:"));
  ciudad = prompt("Por favor, ingresa tu ciudad:");

  mostrarBienvenida();
  calcularDiasVividos();
}

// 3. Función para calcular días vividos
function calcularDiasVividos() {
  const diasVividos = edad * 365;
  alert(`¡${nombre}, has vivido aproximadamente ${diasVividos} días!`);
}

// Ejecutar cuando cargue la página
window.onload = function () {
  ingresarDatos();
};
