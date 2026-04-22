import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mRestaurante{
    private contaVarios : number;
    private acumD : number; 
    private acumA : number; 
    private acumAm : number; 
    private acumDesM : number;
    private acumDesH : number;
    
    
    constructor() {
        this.contaVarios = 0;
        this.acumD = 0.0;
        this.acumA = 0.0;
        this.acumAm = 0.0;
        this.acumDesM = 0.0;
        this.acumDesH = 0.0;
    } 

    procesarComensal(c: Cl_mComensal): void{
        this.contaVarios++

        if(c.turno === "Desayuno"){
            this.acumD += c.costoC()
        }
        
        if(c.turno === "Almuerzo"){
            this.acumA += c.costoC()
        }
        
        if(c.turno === "Ambos"){
            this.acumAm += c.costoC()
        }
        
        if(c.sexo === "Mujer"){
            this.acumDesM += c.descuento()
        }
        
        if(c.sexo === "Hombre"){
            this.acumDesH += c.descuento()
        }

    }

    porcerntD(): number {
        if (this.contaVarios > 0){
            return this.acumD / this.contaVarios * 100
        } else return 0
    }        

    porcerntA(): number {
        if (this.contaVarios > 0){
            return this.acumA / this.contaVarios * 100
        } else return 0
    }

    porcerntAm(): number {
        if (this.contaVarios > 0){
            return this.acumAm / this.contaVarios * 100
        } else return 0
    }

    porcerntM(): number {
        if (this.contaVarios > 0){
            return this.acumDesM / this.contaVarios * 100
        } else return 0
    }

    porcerntH(): number {
        if (this.contaVarios > 0){
            return this.acumDesH / this.contaVarios * 100
        } else return 0
    }
    
}