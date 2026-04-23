import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona{
    private _turno : string = "";

    constructor ({n,c,s,f,t}:{n:string, c:number,s:string,f:string,t:string}={n: "", c:0, s:"", f:"", t:""}){
        super({n,c,s,f});
        this.turno = t;
    }

    set turno(t:string){
        this._turno = t;
    }

    get turno(): string{
        return this._turno;
    }

    costoC(): number{
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
            return this.costoC() * 0.5 
        } else
        if(this.sexo === "Hombre" && this.calcularEdad() >= 60){
            return this.costoC() * 0.5
        }  else return 0
    }
}