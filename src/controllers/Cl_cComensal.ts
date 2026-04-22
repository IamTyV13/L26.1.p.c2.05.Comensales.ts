// Cl_cComensal.ts

import Cl_mComensal from "../models/Cl_mComensal.js";
import { I_vComensal } from "../interfaces/I_vComensal.js";

export default class Cl_cComensal {
    private vista: I_vComensal;
    private callback!: (Comensal: Cl_mComensal | null ) => void;

    constructor(vista: I_vComensal) {
        // Inicializamos Vista
            this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
            this.vista.onCancelar (() => this.btCancelarOnclick());
            this.vista.onAceptar (() => this.btAceptarOnclick());
    }

    // Metodo para que El Abasto llame a este Controlador
        solicitarComensal(callback: (Comensal: Cl_mComensal | null) => void) {
            this.callback = callback;
            this.vista.mostrar();
        }

        private btCancelarOnclick() {
            this.callback(null);
            this.vista.ocultar();
        }

        private btAceptarOnclick() {

            console.log("=== VALORES LEÍDOS ===");
            console.log("tipo:", this.vista.tipo);
            console.log("nombre:", this.vista.nombre);
            console.log("costo:", this.vista.bono);

            // Leer Selector
            const tipo = this.vista.tipo

            const nombre = this.vista.nombre;
            const bono = this.vista.bono;
            const sueldo = this.vista.sueldo;
            const horas = this.vista.horas;

            let newComensal: Cl_mComensal;

                if (tipo === "fijo") {
                    newComensal = new Cl_mFijo({ nombre, bono, sueldo });
                } else {
                    newComensal = new Cl_mContratado({ nombre, bono, horas });
                }
            this.callback(newComensal);
            this.vista.ocultar();

        }
}