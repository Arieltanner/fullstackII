import { Persona } from "./Persona";

class ble {

    saludar() {
        console.log('hola mundo');

        let p: Persona = new Persona();
        p.setNombre('Magui');
        console.log(p.getNombre());
    }
}

let b: ble = new ble();
b.saludar();
