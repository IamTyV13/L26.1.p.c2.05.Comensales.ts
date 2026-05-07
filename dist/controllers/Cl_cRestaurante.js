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
import Cl_mComensal from "../models/Cl_mComensal.js";
export default class Cl_cRestaurante {
    mRestaurante = new Cl_mRestaurante();
    vRestaurante;
    cComensal;
    // Datos Constantes para el Restaurante
    datosRestaurante = [
        { nombre: "Juan Sanz", cedula: "111", sexo: "Hombre", fechaNac: "1965, 9, 20", turnoComida: "Ambos" },
        { nombre: "Maria Gomez", cedula: "222", sexo: "Mujer", fechaNac: "1985, 10, 20", turnoComida: "Ambos" },
        { nombre: "Carlos Sanchez", cedula: "333", sexo: "Hombre", fechaNac: "2000, 2, 5", turnoComida: "Desayuno" },
        { nombre: "Ana Rodriguez", cedula: "444", sexo: "Mujer", fechaNac: "1960, 7, 30", turnoComida: "Ambos" },
        { nombre: "Luis Fernandez", cedula: "555", sexo: "Hombre", fechaNac: "1955, 11, 25", turnoComida: "Almuerzo" },
        { nombre: "Sofia Martinez", cedula: "666", sexo: "Mujer", fechaNac: "1992, 3, 10", turnoComida: "Desayuno" },
        { nombre: "Diego Ramirez", cedula: "777", sexo: "Hombre", fechaNac: "1980, 8, 5", turnoComida: "Ambos" },
        { nombre: "Laura Gonzalez", cedula: "888", sexo: "Mujer", fechaNac: "1998, 12, 15", turnoComida: "Almuerzo" },
        { nombre: "Jorge Lopez", cedula: "999", sexo: "Hombre", fechaNac: "1983, 4, 20", turnoComida: "Desayuno" },
        { nombre: "Isabella Torres", cedula: "1010", sexo: "Mujer", fechaNac: "1958, 9, 25", turnoComida: "Ambos" },
        { nombre: "Miguel Flores", cedula: "1011", sexo: "Hombre", fechaNac: "1950, 6, 10", turnoComida: "Almuerzo" },
        { nombre: "Luz Ramirez", cedula: "1012", sexo: "Mujer", fechaNac: "1993, 1, 5", turnoComida: "Desayuno" },
    ];
    constructor(vistaRestaurante, controladorComensal) {
        this.vRestaurante = vistaRestaurante;
        this.cComensal = controladorComensal;
        // Cargar Datos Constantes al Restaurante
        this.cargarDatosConst();
        this.vRestaurante.onNewComensal(() => this.procesar1Comensal());
        // Actualizar Vista Inicial con Datos Constantes
        this.actualizarVista();
    }
    // Nuevo Método para Cargar Datos Constantes al Restaurante
    cargarDatosConst() {
        for (let b of this.datosRestaurante) {
            const comensal = new Cl_mComensal({ nombre: b.nombre, cedula: b.cedula, sexo: b.sexo, fechaNac: b.fechaNac, turnoComida: b.turnoComida });
            this.mRestaurante.procesarComensal(comensal);
        }
    }
    // Nuevo Método para Actualizar la Vista con los Datos del Restaurante
    actualizarVista() {
        this.vRestaurante.reportar({
            contadorVarios: this.mRestaurante.contadorVarios(),
            porcentDesayuno: this.mRestaurante.porcentDesayuno(),
            porcentAlmuerzo: this.mRestaurante.porcentAlmuerzo(),
            porcentAmbos: this.mRestaurante.porcentAmbos(),
            porcentDescuentoMujeres: this.mRestaurante.porcentDescuentoMujeres(),
            porcentDescuentoHombres: this.mRestaurante.porcentDescuentoHombres(),
            nombreDescuento: this.mRestaurante.nombreDescuento(),
            descuentoMayor: this.mRestaurante.descuentoMayor(),
        });
    }
    // Metodo para Procesar un Nuevo Comensal, y Actulizar el Reporte en la Vista
    procesar1Comensal() {
        this.cComensal.solicitarComensal((c) => {
            if (c !== null) {
                this.mRestaurante.procesarComensal(c);
                this.actualizarVista(); // Ahora usa actualizarVista()
            }
        });
    }
}
