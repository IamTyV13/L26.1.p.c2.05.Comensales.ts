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
            {nombre: "Ana Gil", cedula: "8888", sexo: "Mujer", fechaNac: "2001, 6, 15", turnoComida: "Desayuno"},
            {nombre: "Mery Paz", cedula: "6666", sexo: "Mujer", fechaNac: "2009, 7, 25", turnoComida: "Desayuno"},
            {nombre: "Juan Sanz", cedula: "9999", sexo: "Hombre", fechaNac: "1965, 9, 20", turnoComida: "Desayuno"},
            {nombre: "Paty Ortiz", cedula: "3333", sexo: "Mujer", fechaNac: "1975, 5, 14", turnoComida: "Ambos"},
            {nombre: "Liz Ramos", cedula: "2222", sexo: "Mujer", fechaNac: "2005, 1, 3", turnoComida: "Desayuno"},
            {nombre: "Raul Mendez", cedula: "5555", sexo: "Hombre", fechaNac: "1995, 10, 11", turnoComida: "Almuerzo"},
            {nombre: "Tony Flores", cedula: "7777", sexo: "Hombre", fechaNac: "1964, 8, 7", turnoComida: "Ambos"},
            {nombre: "Gaby Lopez", cedula: "1111", sexo: "Mujer", fechaNac: "1966, 7, 19", turnoComida: "Desayuno"}
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
                    const comensal = new Cl_mComensal({nombre: b.nombre, cedula: b.cedula, sexo: b.sexo, fechaNac: b.fechaNac, turnoComida: b.turnoComida});
                    this.mRestaurante.procesarComensal(comensal);
                }
            }

        // Nuevo Método para Actualizar la Vista con los Datos del Restaurante
            private actualizarVista(): void {
                this.vRestaurante.reportar({
                    contadorVarios: this.mRestaurante.contadorVarios(),
                    porcentDesayuno: this.mRestaurante.porcentDesayuno(),
                    porcentAlmuerzo: this.mRestaurante.porcentAlmuerzo(),
                    porcentAmbos: this.mRestaurante.porcentAmbos(),
                    porcentDescuentoMujeres: this.mRestaurante.porcentDescuentoMujeres(),
                    porcentDescuentoHombres: this.mRestaurante.porcentDescuentoHombres(),
                    nombreDescuento: this.mRestaurante.nombreDescuento(),
                    descuentoMayor: this.mRestaurante.descuentoMayor(),
                    acumuladorDescuentos: this.mRestaurante.acumuladorDescuentos()
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