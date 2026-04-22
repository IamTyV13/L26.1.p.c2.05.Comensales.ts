export default class Cl_mPersona{
    private _nombre : string ="";
    private _cedula : number =0;
    private _sexo : string = "";
    private _fecha : Date = new Date(); 

    constructor({n,c,s,f}:{n:string, c:number, s:string, f:string}={n:"", c:0, s:"", f:""}){
        this.nombre = n;
        this.cedula = c;
        this.sexo = s;
        this.fecha = f;
    }

    set nombre(n:string){
        this._nombre = n;
    }

    get nombre(): string{
        return this._nombre;
    }

    set cedula(c:number){
        this._cedula = c;
    }

    get cedula(): number{
        return this._cedula;
    }

    set sexo(s:string){
        this._sexo = s;
    }

    get sexo(): string{
        return this._sexo;
    }

    set fecha(f:string){
        this._fecha = new Date(f);
    }

    get fecha(): Date{
        return this._fecha;
    }

    calcularEdad(): number {
    const hoy = new Date();  // fecha actual

    let edad = hoy.getFullYear() - this.fecha.getFullYear();

    const mesActual = hoy.getMonth();
    const mesNac = this.fecha.getMonth();
    const diaActual = hoy.getDate();
    const diaNac = this.fecha.getDate();
    
    // Si aún no ha cumplido años este año, restar 1
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }
    
    return edad;
}

}



