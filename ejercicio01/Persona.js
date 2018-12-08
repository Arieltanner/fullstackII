"use strict";
exports.__esModule = true;
var Persona = (function () {
    function Persona() {
    }
    // las funciones | procedimientos o metodos de la clase persona
    Persona.prototype.setNombre = function (nombreParam) {
        this.nombre = nombreParam;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
exports.Persona = Persona;
