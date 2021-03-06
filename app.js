"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    let PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    // Cree una interfaz que sirva para validar el siguiente objeto
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => (a + b) * 2;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, arma = 'arco', poder) {
        var mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + arma;
        }
        console.log(mensaje);
    }
    ;
    getAvenger('Popeye', 'sus puños', 'dar asco');
    getAvenger('Popeye');
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        calcularArea() {
            return this.base * this.altura;
        }
    }
    let rect1 = new Rectangulo(3, 6);
    console.log(rect1.calcularArea());
})();
