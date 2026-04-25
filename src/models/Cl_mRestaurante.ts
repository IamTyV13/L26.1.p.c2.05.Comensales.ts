import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mRestaurante{
    private contaVarios : number;
    private cntD : number; 
    private cntA : number; 
    private cntAm : number; 
    private cntDesM : number;
    private cntDesH : number;
    
    
    constructor() {
        this.contaVarios = 0;
        this.cntD = 0;
        this.cntA = 0;
        this.cntAm = 0;
        this.cntDesM = 0.0;
        this.cntDesH = 0.0;
    } 

    procesarComensal(c: Cl_mComensal): void{
        this.contaVarios++

        if(c.turno === "Desayuno"){
            this.cntD ++ // Como son porcentaje necesitamos la cantidad no la plata.
        }
        
        if(c.turno === "Almuerzo"){
            this.cntA ++
        }
        
        if(c.turno === "Ambos"){
            this.cntAm ++
        }
        
        if(c.sexo === "Mujer"){
            this.cntDesM ++ // aja y el descuento =?
        }
        
        if(c.sexo === "Hombre"){
            this.cntDesH ++ // x2
        }

    }

    porcentD(): number {
        if (this.contaVarios > 0){
            return (this.cntD / this.contaVarios) * 100
        } else return 0
    }        

    porcentA(): number {
        if (this.contaVarios > 0){
            return (this.cntA / this.contaVarios) * 100
        } else return 0
    }

    porcentAm(): number {
        if (this.contaVarios > 0){
            return (this.cntAm / this.contaVarios) * 100
        } else return 0
    }

    porcentM(): number {
        if (this.contaVarios > 0){
            return this.cntDesM / this.contaVarios * 100
        } else return 0
    }

    porcentH(): number {
        if (this.contaVarios > 0){
            return this.cntDesH / this.contaVarios * 100
        } else return 0
    }

    cntVarios(): number {
        return this.contaVarios; }

}