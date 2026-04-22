// Cl_cUniversidad.ts

import Cl_mUniversidad from "../models/Cl_mUniversidad.js";
import { I_vUniversidad } from "../interfaces/I_vUniversidad.js";
import Cl_cProfesor from "./Cl_cProfesor.js";

export default class Cl_cUniversidad {
    private mUniversidad: Cl_mUniversidad = new Cl_mUniversidad();
    private vUniversidad: I_vUniversidad;
    private cProfesor: Cl_cProfesor;

    // Recibe la vista de la Universidad y el controlador de Profesor ya Armado
        constructor(vistaUniversidad: I_vUniversidad, controladorProfessor: Cl_cProfesor) {
            this.vUniversidad = vistaUniversidad;
            this.cProfesor = controladorProfessor; 
            
            this.vUniversidad.onNewProfessor(() => this.procesar1Professor())
    }

    private procesar1Professor(): void {
        this.cProfesor.solicitarProfessor((p) => {
            if(p!== null) {
                this.mUniversidad.procesarProfesor(p);
                this.vUniversidad.reportar({ nombre: p.nombre, bono: p.bono, sueldo: p.sueldoT(), horas: p.horasT(), ingresoTotal: p.ingresoTotal()});
            }
        })
    }
}