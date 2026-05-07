export default class Cl_mPersona{
    private _nombre : string ="";
    private _cedula : string ="";
    private _sexo : string = "";
    private _fechaNac : Date = new Date(); 

    constructor({nombre,cedula,sexo,fechaNac}:
        {nombre:string, cedula:string, sexo:string, fechaNac:string}=
        {nombre:"", cedula:"", sexo:"", fechaNac:""}){
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = fechaNac;
    }

    set nombre(n:string){

        if(typeof n !== "string"){
        {throw new Error("El nombre debe ser una cadena de texto"); }} 
        this._nombre = n;
    }

    get nombre(): string{
        return this._nombre;
    }

    set cedula(c:string){
        const soloNumeros = /^[0-9]+$/;
        if(!soloNumeros.test(c)){
            throw new Error("La cedula solo debe contener numeros");}
        this._cedula = c;
    }

    get cedula(): string{
        return this._cedula;
    }

    set sexo(s:string){
        if( s !== "Mujer" && s !== "Hombre"){
            throw new Error ("Solo puede ser Hombre o Mujer");}
            this._sexo = s;
    }

    get sexo(): string{
        return this._sexo;
    }

    set fechaNac(f:string){
        this._fechaNac = new Date(f);
    }

    get fechaNac(): Date{
        return this._fechaNac;
    }

    edad(): number {
    const hoy = new Date();  // fecha actual

    let edad = hoy.getFullYear() - this.fechaNac.getFullYear();

    const mesActual = hoy.getMonth();
    const mesNac = this.fechaNac.getMonth();
    const diaActual = hoy.getDate();
    const diaNac = this.fechaNac.getDate();
    
    // Si aún no ha cumplido años este año, restar 1
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }
    
    return edad;
}

}



