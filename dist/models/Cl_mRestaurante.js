export default class Cl_mRestaurante {
    cntVarios;
    cntDesayuno;
    cntAlmuerzo;
    cntAmbos;
    cntDescuentoMujeres;
    cntDescuentoHombres;
    auxNombreDescuento;
    mayorDescuento;
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
    procesarComensal(c) {
        this.cntVarios++;
        if (c.turnoComida === "Desayuno") {
            this.cntDesayuno++; // Como son porcentaje necesitamos la cantidad no la plata.
        }
        if (c.turnoComida === "Almuerzo") {
            this.cntAlmuerzo++;
        }
        if (c.turnoComida === "Ambos") {
            this.cntAmbos++;
        }
        if (c.sexo === "Mujer" && c.descuento()) {
            this.cntDescuentoMujeres++; // aja y el descuento =?
        }
        if (c.sexo === "Hombre" && c.descuento()) {
            this.cntDescuentoHombres++; // x2
        }
        if (c.descuento() >= this.mayorDescuento) {
            this.mayorDescuento = c.descuento();
            this.auxNombreDescuento = c.nombre;
        }
    }
    porcentDesayuno() {
        if (this.cntVarios > 0) {
            return (this.cntDesayuno / this.cntVarios) * 100;
        }
        else
            return 0;
    }
    porcentAlmuerzo() {
        if (this.cntVarios > 0) {
            return (this.cntAlmuerzo / this.cntVarios) * 100;
        }
        else
            return 0;
    }
    porcentAmbos() {
        if (this.cntVarios > 0) {
            return (this.cntAmbos / this.cntVarios) * 100;
        }
        else
            return 0;
    }
    porcentDescuentoMujeres() {
        if (this.cntVarios > 0) {
            return this.cntDescuentoMujeres / this.cntVarios * 100;
        }
        else
            return 0;
    }
    porcentDescuentoHombres() {
        if (this.cntVarios > 0) {
            return this.cntDescuentoHombres / this.cntVarios * 100;
        }
        else
            return 0;
    }
    contadorVarios() {
        return this.cntVarios;
    }
    nombreDescuento() {
        return this.auxNombreDescuento;
    }
    descuentoMayor() {
        return this.mayorDescuento;
    }
}
