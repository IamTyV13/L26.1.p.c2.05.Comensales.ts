import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mRestaurante{
    private cntVarios : number;
    private cntDesayuno : number; 
    private cntAlmuerzo : number; 
    private cntAmbos : number; 
    private cntDescuentoMujeres : number;
    private cntDescuentoHombres : number;
    private auxNombreDescuento : string;
    private mayorDescuento : number;
    
    
    constructor() {
        this.cntVarios = 0;
        this.cntDesayuno = 0;
        this.cntAlmuerzo = 0;
        this.cntAmbos = 0;
        this.cntDescuentoMujeres = 0.0;
        this.cntDescuentoHombres = 0.0;
        this.auxNombreDescuento = "";
        this.mayorDescuento = 0.0;

    } 

    procesarComensal(c: Cl_mComensal): void{
        this.cntVarios++

        if(c.turnoComida === "Desayuno"){
            this.cntDesayuno ++ // Como son porcentaje necesitamos la cantidad no la plata.
        }
        
        if(c.turnoComida === "Almuerzo"){
            this.cntAlmuerzo ++
        }
        
        if(c.turnoComida === "Ambos"){
            this.cntAmbos ++
        }
        
        if(c.sexo === "Mujer" && c.descuento()){
            this.cntDescuentoMujeres ++ // aja y el descuento =?
        }
        
        if(c.sexo === "Hombre" && c.descuento()){
            this.cntDescuentoHombres ++ // x2
        }

        if(c.descuento() >= this.mayorDescuento){
            this.mayorDescuento = c.descuento()
            this.auxNombreDescuento = c.nombre;
        }

    }

    porcentDesayuno(): number {
        if (this.cntVarios > 0){
            return (this.cntDesayuno / this.cntVarios) * 100
        } else return 0
    }        

    porcentAlmuerzo(): number {
        if (this.cntVarios > 0){
            return (this.cntAlmuerzo / this.cntVarios) * 100
        } else return 0
    }

    porcentAmbos(): number {
        if (this.cntVarios > 0){
            return (this.cntAmbos / this.cntVarios) * 100
        } else return 0
    }

    porcentDescuentoMujeres(): number {
        if (this.cntVarios > 0){
            return this.cntDescuentoMujeres / this.cntVarios * 100
        } else return 0
    }

    porcentDescuentoHombres(): number {
        if (this.cntVarios > 0){
            return this.cntDescuentoHombres / this.cntVarios * 100
        } else return 0
    }

    contadorVarios(): number {
        return this.cntVarios; }

    nombreDescuento(): string{
        return this.auxNombreDescuento;
    }

    descuentoMayor(): number{
        return this.mayorDescuento;
    }


}