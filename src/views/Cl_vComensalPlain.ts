// Cl_vComensalPlain

import { I_vComensal } from "../interfaces/I_vComensal.js";

export default class Cl_vComensalPlain implements I_vComensal{
   private inNombre: HTMLInputElement;
   private inCedula: HTMLInputElement;
   private inSexo: HTMLSelectElement;
   private inFecha: HTMLInputElement;
   private inTurno: HTMLSelectElement;
   private btCancelar: HTMLButtonElement;
   private btAceptar: HTMLButtonElement;
   private vista: HTMLElement;

   constructor() {
      this.inNombre = document.getElementById("comensal_inNombre") as HTMLInputElement;
      this.inCedula = document.getElementById("comensal_inCedula") as HTMLInputElement;
      this.inSexo = document.getElementById("comensal_inSexo") as HTMLSelectElement;
      this.inFecha = document.getElementById("comensal_inFecha") as HTMLInputElement;
      this.inTurno = document.getElementById("comensal_inTurno") as HTMLSelectElement;
      this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
      this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
      this.vista = document.getElementById("comensal") as HTMLElement;
   }

   get nombre(): string {
      return this.inNombre.value; }

   get cedula(): number {
      return +this.inCedula.value;  }

   get sexo(): string {
      return this.inSexo.value;  }

   get fecha(): string {
      return this.inFecha.value; }

   get turno(): string {
      return this.inTurno.value; }

   onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;   }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;  }

   mostrar(): void {
        if (this.vista === null ) return;
            this.vista.hidden = false;
            this.inNombre.value = "";
            this.inCedula.value = "";
            this.inSexo.value = "";
            this.inFecha.value = "";
            this.inTurno.value = "";
        }

    ocultar(): void {
        if (this.vista === null) return;
            this.vista.hidden = true;
    }
}


/* Planteamiento de Proyectos 2do corte (8 Ptos)

- Objetivos que se persiguen:
   + Aplicar intensivamente herencia y polimorfismo
   + Diseño al detalle con UML (diagrams.com)
   + Correspondencia 1-1/UML-TS (clases, componentes, identificadores, etc)
   + Cada equipo desarrolla modelo único y 2 vistas (HTML-plain y Bootstrap)
   + Plantear al menos 10 registros demostrativos, con todos los resultados dominados
   + Estos registros se cargan al arrancar el proyecto
   + Ambos proyectos se despliegan con VERCEL

- Se tiene la clase base Persona, con los siguientes datos:
   -> Nombre
   -> Apellido
   -> Cédula
   -> Sexo (M-F)
   -> Fecha de nacimiento (aaaa-mm-dd)

-COMENSALES: Gestión de comensales
   -> Se registran los datos del comensal
   -> Se conoce además de cada uno:
       + Turno de comida: 1-Desayuno, 2-Almuerzo, 3-Ambos
	   + Costos: $5, $7, $10
	   + Personas de 3ra edad (> 50 mujeres / >60 hombres) pagan solo 50%
   -> Reportar totales varios
   -> Repotar porcentajes por turno
   -> Repotar porcentajes por descuento */