var Edad = 23;
var PesoKG = 70;
var Genero = "";
var Valor = 1.85;
var Resultado;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("PrintPeso").innerHTML = PesoKG;
    document.getElementById("PrintEdad").innerHTML = Edad;
    document.getElementById('Altura').innerHTML = Valor;
});

function Femenino() {
    Genero = "Femenino";
    var Female = document.getElementById('Femenino');
    Female.style.backgroundColor = "rgb(108,54,177)";
    var Male = document.getElementById('Masculino');
    Male.style.backgroundColor = "rgba(108,54,177,0.4)";
}

function Masculino() {
    Genero = "Masculino";
    var Male = document.getElementById('Masculino');
    Male.style.backgroundColor = "rgb(108,54,177)";
    var Female = document.getElementById('Femenino');
    Female.style.backgroundColor = "rgba(108,54,177,0.4)";
}

function Altura() {
    var Height = document.getElementById('Range');
    Valor = (Height.value) / 100;
    document.getElementById('Altura').innerHTML = Valor;
}

function MasPeso() {
    PesoKG += 1;
    document.getElementById("PrintPeso").innerHTML = PesoKG;
}

function MenosPeso() {
    PesoKG -= 1;
    document.getElementById("PrintPeso").innerHTML = PesoKG;
}

function MasEdad() {
    Edad += 1;
    document.getElementById("PrintEdad").innerHTML = Edad;
}

function MenosEdad() {
    Edad -= 1;
    document.getElementById("PrintEdad").innerHTML = Edad;
}

function Calcular() {
    var IMC = PesoKG / (Valor * Valor);
    localStorage.setItem('IMC', IMC.toFixed(2));
    var Condicion = "";
    var Recomendacion = "";
    if (IMC < 18.5) {
        Condicion = "Bajo peso";
        Recomendacion = "Se recomienda aumentar la ingesta de alimentos saludables y hacer ejercicio para ganar peso de forma gradual.";
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        Condicion = "Peso Saludable"
        var Recomendacion = "Mantener una alimentación equilibrada y hacer ejercicio con regularidad para mantener el peso estable y prevenir problemas de salud.";
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        Condicion = "Sobrepeso"
        var Recomendacion = "Se recomienda reducir la ingesta de alimentos ricos en grasas y azúcares y aumentar la actividad física para perder peso de forma gradual y saludable.";
    }
    else if (IMC >= 30 && IMC <= 34.9) {
        Condicion = "Obesidad grado I"
        var Recomendacion = "Es necesario tomar medidas para reducir el peso, como seguir una dieta equilibrada y hacer ejercicio con regularidad. En algunos casos, puede ser necesario recibir asesoramiento médico para controlar el peso.";
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        Condicion = "Obesidad grado II"
        var Recomendacion = "En estos casos, es importante buscar asesoramiento médico para establecer un plan de pérdida de peso seguro y efectivo, que puede incluir cambios en la alimentación, ejercicio y en algunos casos, medicamentos o cirugía. También es importante mantener una buena salud mental y emocional para abordar cualquier problema de autoestima o ansiedad relacionado con el peso.";
    }
    else if (IMC >= 40) {
        Condicion = "Obesidad grado III"
        var Recomendacion = "En estos casos, es importante buscar asesoramiento médico para establecer un plan de pérdida de peso seguro y efectivo, que puede incluir cambios en la alimentación, ejercicio y en algunos casos, medicamentos o cirugía. También es importante mantener una buena salud mental y emocional para abordar cualquier problema de autoestima o ansiedad relacionado con el peso.";
    }
    localStorage.setItem('Resultado', Condicion); // Guardar "Condicion" en localStorage
    localStorage.setItem('Resultado2', Recomendacion); // Guardar "Recomendacion" en localStorage
    
    window.location.href = "result.html"; // Redirigir a la página "resultado.html"
}

function ReDirect() {
    window.location.href = "index.html"
}