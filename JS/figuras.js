// Codigo para el navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link")

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// -----------------------------------------------------------------------

// ----------------------------------------------------------------------- Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// ----------------------------------------------------------------------- Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    var n1 = parseInt(lado1)
    var n2 = parseInt(lado2)
    var n3 = parseInt(base)
    return n1 + n2 + n3;
}

function areaTriangulo(base, altura) {
return (base * altura) / 2;
}

console.groupEnd();

// ----------------------------------------------------------------------- Código del círculo
console.group("Círculos");


// Diámetro
function diametroCirculo(radio) {
return radio * 2;
}

// PI
const Pi = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
const diametro = diametroCirculo(radio);
return diametro * Math.PI;
}

// Área
function areaCirculo(radio) {
return (radio * radio) * Math.PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

// interaccion para el cuadrado
function calcularPerimetroCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);
}

// interaccion para el triangulo
function calcularPerimetroTriangulo() {
    const inputBasePerTriangulo = document.getElementById("InputBaseTrianguloPer");
    const value1 = inputBasePerTriangulo.value;

    const inputLadosPerTriangulo = document.getElementById("InputLadoTrianguloPer");
    const value2 = inputLadosPerTriangulo.value;

    const perimetro = perimetroTriangulo(value2, value2, value1);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBaseAreaTriangulo = document.getElementById("InputBaseTrianguloArea");
    const value1 = inputBaseAreaTriangulo.value;

    const inputAlturaAreaTriangulo = document.getElementById("InputAlturaTrianguloArea");
    const value2 = inputAlturaAreaTriangulo.value;

    const area = areaTriangulo(value1, value2);
    alert(area);
}

// interaccion para el circulo
function calcularDiametroCirculo() {
    const inputRadioCirculo = document.getElementById("InputRadioCirculo");
    const value1 = inputRadioCirculo.value;

    const result = diametroCirculo(value1)
    alert(result);
}

function calcularPerimetroCirculo() {
    const inputRadioCirculo = document.getElementById("InputRadioCirculo");
    const value1 = inputRadioCirculo.value;

    const result = perimetroCirculo(value1)
    alert(result);
}

function calcularAreaCirculo() {
    const inputRadioCirculo = document.getElementById("InputRadioCirculo");
    const value1 = inputRadioCirculo.value;

    const result = areaCirculo(value1)
    alert(result);
}