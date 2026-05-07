import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona{
    private _turnoComida : string = "";

    constructor ({nombre,cedula,sexo,fechaNac,turnoComida}:
        {nombre:string, cedula:string, sexo:string, fechaNac:string, turnoComida:string}=
        {nombre: "", cedula:"", sexo:"", fechaNac:"", turnoComida:""}){
        super({nombre, cedula, sexo, fechaNac});
        this.turnoComida = turnoComida;
    }

    set turnoComida(t:string){
        this._turnoComida = t;
    }

    get turnoComida(): string{
        return this._turnoComida;
    }

    costoComida(): number{
        if(this.turnoComida === "Desayuno"){
            return 5;
        } else 
        if(this.turnoComida === "Almuerzo"){
            return 7;
        } else
        if(this.turnoComida === "Ambos"){
            return 10;
        }
        else return 0
    }

    descuento(): number{
        if(this.sexo === "Mujer" && this.edad() >50){
            return this.costoComida() * 0.5 
        } else
        if(this.sexo === "Hombre" && this.edad() > 60){
            return this.costoComida() * 0.5
        }  else return 0
    }
}