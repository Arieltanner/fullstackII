export class Persona {
    //atributos de la clase

    // es en el caso de typescript
    // visiblidad ( public [lo accede cualquier objeto o parte del sistema, privada , solo lo accede la misma clase,
    //    protegida solo lo accede la misma clase y su herencia       ])
    // nombre de a variable
    // tiepo de la variable


    // encapsulamiento   --- TODA VARIABLE ES PRIVADA Y SE ACCEDE POR MEDIO DE UN METODO PUBLICO!!! 
    private nombre: String;  // cadena ----> 'palabras' <--- ' comillas simples' 


    constructor() { }

    // las funciones | procedimientos o metodos de la clase persona

    public setNombre(nombreParam: String): void {

        this.nombre = nombreParam;
    }


    public getNombre(): String {
        return this.nombre;
    }
}
