import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona{
    private _turno : string = "";

    constructor ({nombre,cedula,sexo,fechaNacimiento,turno}:
        {nombre:string, cedula:string, sexo:string, fechaNacimiento:string, turno:string}=
        {nombre: "", cedula:"", sexo:"", fechaNacimiento:"", turno:""}){
        super({nombre, cedula, sexo, fechaNacimiento});
        this.turno = turno;
    }

    set turno(t:string){
        this._turno = t;
    }

    get turno(): string{
        return this._turno;
    }

    costoComida(): number{
        if(this.turno === "Desayuno"){
            return 5;
        } else 
        if(this.turno === "Almuerzo"){
            return 7;
        } else
        if(this.turno === "Ambos"){
            return 10;
        }
        else return 0
    }

    descuento(): number{
        if(this.sexo === "Mujer" && this.calcularEdad() >=50){
            return this.costoComida() * 0.5 
        } else
        if(this.sexo === "Hombre" && this.calcularEdad() >= 60){
            return this.costoComida() * 0.5
        }  else return 0
    }
}