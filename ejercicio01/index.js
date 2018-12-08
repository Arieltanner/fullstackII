"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var ble = (function () {
    function ble() {
    }
    ble.prototype.saludar = function () {
        console.log('hola mundo');
        var p = new Persona_1.Persona();
        p.setNombre('Magui');
        console.log(p.getNombre());
    };
    return ble;
}());
var b = new ble();
b.saludar();
