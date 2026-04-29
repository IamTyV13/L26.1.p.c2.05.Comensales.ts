export default class Cl_mPersona{
    private _nombre : string ="";
    private _cedula : string ="";
    private _sexo : string = "";
    private _fechaNacimiento : Date = new Date(); 

    constructor({nombre,cedula,sexo,fechaNacimiento}:
        {nombre:string, cedula:string, sexo:string, fechaNacimiento:string}=
        {nombre:"", cedula:"", sexo:"", fechaNacimiento:""}){
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
    }

    set nombre(n:string){
        this._nombre = n;
    }

    get nombre(): string{
        return this._nombre;
    }

    set cedula(c:string){
        this._cedula = c;
    }

    get cedula(): string{
        return this._cedula;
    }

    set sexo(s:string){
        this._sexo = s;
    }

    get sexo(): string{
        return this._sexo;
    }

    set fechaNacimiento(f:string){
        this._fechaNacimiento = new Date(f);
    }

    get fechaNacimiento(): Date{
        return this._fechaNacimiento;
    }

    calcularEdad(): number {
    const hoy = new Date();  // fecha actual

    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();

    const mesActual = hoy.getMonth();
    const mesNac = this.fechaNacimiento.getMonth();
    const diaActual = hoy.getDate();
    const diaNac = this.fechaNacimiento.getDate();
    
    // Si aún no ha cumplido años este año, restar 1
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }
    
    return edad;
}

}



