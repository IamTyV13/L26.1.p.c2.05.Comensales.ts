// Cl_vRestaurantePlain.ts

import { I_vRestaurante } from "../interfaces/I_vRestaurante.js";

export default class Cl_vRestaurantePlain implements I_vRestaurante{
   private lblTotalesVarios: HTMLElement;
   private lblPorcentD: HTMLElement;
   private lblPorcentA: HTMLElement;
   private lblPorcentAm: HTMLElement;
   private lblPorcentDesM: HTMLElement;
   private lblPorcentDesH: HTMLElement;
   private btNewComensal: HTMLButtonElement;
   private vista: HTMLElement | null;

   constructor() {
      this.lblTotalesVarios = document.getElementById("body_lblTotalesVarios") as HTMLElement;
      this.lblPorcentD = document.getElementById("body_lblPorcentD") as HTMLElement;
      this.lblPorcentA = document.getElementById("body_lblPorcentA") as HTMLElement;
      this.lblPorcentAm = document.getElementById("body_lblPorcentAm") as HTMLElement;
      this.lblPorcentDesM = document.getElementById("body_lblPorcentDesM") as HTMLElement;
      this.lblPorcentDesH = document.getElementById("body_lblPorcentDesH") as HTMLElement;

      this.btNewComensal = document.getElementById("body_btNewComensal") as HTMLButtonElement;
      this.vista = document.getElementById("body");
   }

   onNewComensal(callback: () => void): void {
        this.btNewComensal.onclick = callback;      }

    reportar({ cntVarios, porcentD, porcentA, porcentAm, porcentDesM, porcentDesH }: { cntVarios: number; porcentD: number; porcentA: number; porcentAm: number; porcentDesM: number; porcentDesH: number; }): void {
        this.lblTotalesVarios.innerHTML = `${cntVarios}`
        this.lblPorcentD.innerHTML = `${porcentD.toFixed(2)}`
        this.lblPorcentA.innerHTML = `${porcentA.toFixed(2)}`
        this.lblPorcentAm.innerHTML = `${porcentAm.toFixed(2)}`
        this.lblPorcentDesM.innerHTML = `${porcentDesM.toFixed(2)}`
        this.lblPorcentDesH.innerHTML = `${porcentDesH.toFixed(2)}`
        
    }

    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;          }

    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;           }
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