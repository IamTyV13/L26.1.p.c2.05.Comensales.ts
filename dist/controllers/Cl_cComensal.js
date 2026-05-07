// Cl_cComensal.ts
import Cl_mComensal from "../models/Cl_mComensal.js";
export default class Cl_cComensal {
    vista;
    callback;
    constructor(vista) {
        // Inicializamos Vista
        this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
        this.vista.onCancelar(() => this.btCancelarOnclick());
        this.vista.onAceptar(() => this.btAceptarOnclick());
    }
    // Metodo para que El Abasto llame a este Controlador
    solicitarComensal(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnclick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnclick() {
        this.callback(new Cl_mComensal({ nombre: this.vista.nombre, cedula: this.vista.cedula,
            sexo: this.vista.sexo, fechaNac: this.vista.fechaNac, turnoComida: this.vista.turnoComida }));
        this.vista.ocultar();
    }
}
