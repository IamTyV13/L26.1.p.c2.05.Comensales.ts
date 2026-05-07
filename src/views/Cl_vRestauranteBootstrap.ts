// Cl_vRestaurantePlain.ts

import { I_vRestaurante } from "../interfaces/I_vRestaurante.js";

export default class Cl_vRestauranteBootstrap implements I_vRestaurante{
   private lblTotalesVarios: HTMLElement;
   private lblPorcentDesayuno: HTMLElement;
   private lblPorcentAlmuerzo: HTMLElement;
   private lblPorcentAmbos: HTMLElement;
   private lblPorcentDescuentoMujeres: HTMLElement;
   private lblPorcentDescuentoHombres: HTMLElement;
   private lblNombreDescuento: HTMLElement;
   private lblDescuentoMayor: HTMLElement;
   private btNewComensal: HTMLButtonElement;
   private vista: HTMLElement;

   constructor() {
      this.lblTotalesVarios = document.getElementById("body_lblTotalesVarios") as HTMLElement;
      this.lblPorcentDesayuno = document.getElementById("body_lblPorcentDesayuno") as HTMLElement;
      this.lblPorcentAlmuerzo = document.getElementById("body_lblPorcentAlmuerzo") as HTMLElement;
      this.lblPorcentAmbos = document.getElementById("body_lblPorcentAmbos") as HTMLElement;
      this.lblPorcentDescuentoMujeres = document.getElementById("body_lblPorcentDescuentoMujeres") as HTMLElement;
      this.lblPorcentDescuentoHombres = document.getElementById("body_lblPorcentDescuentoHombres") as HTMLElement;
      this.lblNombreDescuento = document.getElementById("body_lblNombreDescuento") as HTMLElement;
      this.lblDescuentoMayor = document.getElementById("body_lblDescuentoMayor") as HTMLElement;


      this.btNewComensal = document.getElementById("body_btNewComensal") as HTMLButtonElement;
      this.vista = document.getElementById("app-bootstrap") as HTMLElement;
   }

   onNewComensal(callback: () => void): void {
        this.btNewComensal.onclick = callback;      }

    reportar({contadorVarios, porcentDesayuno, porcentAlmuerzo, porcentAmbos, porcentDescuentoMujeres, porcentDescuentoHombres, nombreDescuento, descuentoMayor}: 
      { contadorVarios: number; porcentDesayuno: number; porcentAlmuerzo: number; porcentAmbos: number; porcentDescuentoMujeres: number; porcentDescuentoHombres: number; nombreDescuento: string; descuentoMayor: number;}): void {
        this.lblTotalesVarios.innerHTML = `${contadorVarios}`
        this.lblPorcentDesayuno.innerHTML = `${porcentDesayuno.toFixed(2)}`
        this.lblPorcentAlmuerzo.innerHTML = `${porcentAlmuerzo.toFixed(2)}`
        this.lblPorcentAmbos.innerHTML = `${porcentAmbos.toFixed(2)}`
        this.lblPorcentDescuentoMujeres.innerHTML = `${porcentDescuentoMujeres.toFixed(2)}`
        this.lblPorcentDescuentoHombres.innerHTML = `${porcentDescuentoHombres.toFixed(2)}`
        this.lblNombreDescuento.innerHTML = `${nombreDescuento}`
        this.lblDescuentoMayor.innerHTML = `${descuentoMayor.toFixed(2)}`
        
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