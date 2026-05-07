import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mComensal extends Cl_mPersona {
    _turnoComida = "";
    constructor({ nombre, cedula, sexo, fechaNac, turnoComida } = { nombre: "", cedula: "", sexo: "", fechaNac: "", turnoComida: "" }) {
        super({ nombre, cedula, sexo, fechaNac });
        this.turnoComida = turnoComida;
    }
    set turnoComida(t) {
        this._turnoComida = t;
    }
    get turnoComida() {
        return this._turnoComida;
    }
    costoComida() {
        if (this.turnoComida === "Desayuno") {
            return 5;
        }
        else if (this.turnoComida === "Almuerzo") {
            return 7;
        }
        else if (this.turnoComida === "Ambos") {
            return 10;
        }
        else
            return 0;
    }
    descuento() {
        if (this.sexo === "Mujer" && this.edad() > 50) {
            return this.costoComida() * 0.5;
        }
        else if (this.sexo === "Hombre" && this.edad() > 60) {
            return this.costoComida() * 0.5;
        }
        else
            return 0;
    }
}
