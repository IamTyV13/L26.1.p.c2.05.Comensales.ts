// Cl_cRestaurante.ts

/* import Cl_mRestaurante from "../models/Cl_mRestaurante.js";
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
                this.vRestaurante.reportar({cntVarios: this.mRestaurante.cntVarios(), 
                    porcentD: this.mRestaurante.porcentD(), porcentA: this.mRestaurante.porcentA(), 
                    porcentAm: this.mRestaurante.porcentAm(), porcentDesM: this.mRestaurante.porcentM(), 
                    porcentDesH: this.mRestaurante.porcentH() });
            }
        })
    }
} */

// Cl_cRestaurante.ts

import Cl_mRestaurante from "../models/Cl_mRestaurante.js";
import { I_vRestaurante } from "../interfaces/I_vRestaurante.js";
import Cl_cComensal from "./Cl_cComensal.js";
import Cl_mComensal from "../models/Cl_mComensal.js";

export default class Cl_cRestaurante {
    private mRestaurante: Cl_mRestaurante = new Cl_mRestaurante();
    private vRestaurante: I_vRestaurante;
    private cComensal: Cl_cComensal;

    // Datos Constantes para el Restaurante
        private readonly datosRestaurante = [
            {n: "Juan Perez", c: 1234567890, s: "Mujer", f: "1990, 5, 15", t: "Almuerzo"},
            {n: "Maria Gomez", c: 987654321, s: "Mujer", f: "1985, 10, 20", t: "Ambos"},
            {n: "Carlos Sanchez", c: 1122334455, s: "Hombre", f: "2000, 2, 5", t: "Desayuno"},
            {n: "Ana Rodriguez", c: 5566778899, s: "Mujer", f: "1995, 7, 30", t: "Ambos"},
            {n: "Luis Fernandez", c: 6677889900, s: "Hombre", f: "1988, 11, 25", t: "Almuerzo"},
            {n: "Sofia Martinez", c: 9988776655, s: "Mujer", f: "1992, 3, 10", t: "Desayuno"},
            {n: "Diego Ramirez", c: 4433221100, s: "Hombre", f: "1980, 8, 5", t: "Ambos"},
            {n: "Laura Gonzalez", c: 7766554433, s: "Mujer", f: "1998, 12, 15", t: "Almuerzo"},
            {n: "Jorge Lopez", c: 3344556677, s: "Hombre", f: "1983, 4, 20", t: "Desayuno"},
            {n: "Isabella Torres", c: 8899001122, s: "Mujer", f: "1991, 9, 25", t: "Ambos"},
            {n: "Miguel Hernandez", c: 2233445566, s: "Hombre", f: "1987, 6, 10", t: "Almuerzo"},
            {n: "Valentina Ramirez", c: 6655443322, s: "Mujer", f: "1993, 1, 5", t: "Desayuno"},
         ];
         
        constructor(vistaRestaurante: I_vRestaurante, controladorComensal: Cl_cComensal) {
            this.vRestaurante = vistaRestaurante;
            this.cComensal = controladorComensal; 
            
            // Cargar Datos Constantes al Restaurante
            this.cargarDatosConst();

            this.vRestaurante.onNewComensal(() => this.procesar1Comensal())
            
            // Actualizar Vista Inicial con Datos Constantes
            this.actualizarVista();
        }

        // Nuevo Método para Cargar Datos Constantes al Restaurante
            private cargarDatosConst(): void {
                for (let b of this.datosRestaurante) {
                    const comensal = new Cl_mComensal({n: b.n, c: b.c, s: b.s, f: b.f, t: b.t});
                    this.mRestaurante.procesarComensal(comensal);
                }
            }

        // Nuevo Método para Actualizar la Vista con los Datos del Restaurante
            private actualizarVista(): void {
                this.vRestaurante.reportar({
                    cntVarios: this.mRestaurante.cntVarios(),
                    porcentD: this.mRestaurante.porcentD(),
                    porcentA: this.mRestaurante.porcentA(),
                    porcentAm: this.mRestaurante.porcentAm(),
                    porcentDesM: this.mRestaurante.porcentM(),
                    porcentDesH: this.mRestaurante.porcentH()
                });
            }

        // Metodo para Procesar un Nuevo Comensal, y Actulizar el Reporte en la Vista
            private procesar1Comensal(): void {
                this.cComensal.solicitarComensal((c) => {
                    if(c!== null) {
                        this.mRestaurante.procesarComensal(c);
                        this.actualizarVista(); // Ahora usa actualizarVista()
                    }
                });
            }

}