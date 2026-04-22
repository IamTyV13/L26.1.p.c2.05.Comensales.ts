// Cl_cRestaurante.ts

import Cl_mRestaurante from "../models/Cl_mRestaurante.js";
import { I_vRestaurante } from "../interfaces/I_vRestaurante.js";
import Cl_cComensal from "./Cl_cComensal.js";

export default class Cl_cRestaurante {
    private mRestaurante: Cl_mRestaurante = new Cl_mRestaurante();
    private vRestaurante: I_vRestaurante;
    private cComensal: Cl_cComensal;

    // Recibe la vista de la Restaurante y el controlador de Comensal ya Armado
        constructor(vistaRestaurante: I_vRestaurante, controladorComensal: Cl_cComensal) {
            this.vRestaurante = vistaRestaurante;
            this.cComensal = controladorComensal; 
            
            this.vRestaurante.onNewComensal(() => this.procesar1Comensal())
    }

    private procesar1Comensal(): void {
        this.cComensal.solicitarComensal((c) => {
            if(c!== null) {
                this.mRestaurante.procesarComensal(c);
                this.vRestaurante.reportar({ 




                    nombre: p.nombre, bono: p.bono, sueldo: p.sueldoT(), horas: p.horasT(), ingresoTotal: p.ingresoTotal()});
            }
        })
    }
}