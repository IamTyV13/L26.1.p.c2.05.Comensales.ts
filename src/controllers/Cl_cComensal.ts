// Cl_cComensal.ts

import Cl_mComensal from "../models/Cl_mComensal.js";
import { I_vComensal } from "../interfaces/I_vComensal.js";

export default class Cl_cComensal {
    private vista: I_vComensal;
    private callback!: (comensal: Cl_mComensal | null ) => void;

    constructor(vista: I_vComensal) {
        // Inicializamos Vista
            this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
            this.vista.onCancelar (() => this.btCancelarOnclick());
            this.vista.onAceptar (() => this.btAceptarOnclick());
    }

    // Metodo para que El Abasto llame a este Controlador
        solicitarComensal(callback: (comensal: Cl_mComensal | null) => void) {
            this.callback = callback;
            this.vista.mostrar();
        }

        private btCancelarOnclick() {
            this.callback(null);
            this.vista.ocultar();
        }

        private btAceptarOnclick() {
            this.callback(new Cl_mComensal({nombre:this.vista.nombre, cedula:this.vista.cedula,
                sexo:this.vista.sexo, fechaNac:this.vista.fechaNac, turnoComida:this.vista.turnoComida}));
            this.vista.ocultar();
        }
}