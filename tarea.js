// Variables (5) usando let

let edad = 25;
let nombre = "Juan";
let ciudad = "Madrid";
let altura = 1.75;
let casado = false;

// Variables (5) usando const

const pi = 3.1416;
const pais = "España";
const gravedad = 9.8;
const diasSemana = 7;
const iva = 0.21;

// Funciones tipo flecha (Función 1)

const saludar = () => "Oe, profe Nelson";

// Funciones tipo flecha (Función 2)

const saludarSegVersion = () => {
    const hora = new Date().getHours();
    if (hora < 12) {
        return "Está temprano";
    } else if (hora < 18) {
        return "Está atardeciendo";
    } else {
        return "Se anocheció";
    }
};

// Funciones tipo flecha (Función 3)

const cuadrado = (n) => n * n;

// Funciones tipo flecha (Función 4)

const cuadradoSegVersion = (n) => {
    if (typeof n !== "número") {
        return "El parámetro debe ser un número.";
    }
    if (n < 0) {
        return "El número debe ser positivo.";
    }
    return n * n;
};

// Funciones tipo flecha (Función 5)

const sumar = (a, b) => a + b;

// Funciones tipo flecha (Función 6)

const calcular = (a, b, operacion) => {
    switch (operacion) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return b !== 0 ? a / b : "No se puede dividir por cero.";
        default:
            return "Operación no válida.";
    }
};