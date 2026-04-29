import { I_vComensal } from "../interfaces/I_vComensal.js";
 declare var bootstrap: any;

export default class Cl_vComensalBootstrap implements I_vComensal{
   private inNombre: HTMLInputElement;
   private inCedula: HTMLInputElement;
   private inSexo: HTMLSelectElement;
   private inFechaNacimiento: HTMLInputElement;
   private inTurno: HTMLSelectElement;
   private btCancelar: HTMLButtonElement;
   private btAceptar: HTMLButtonElement;
   private modal: any;

   constructor() {
      this.inNombre = document.getElementById("comensal_inNombre") as HTMLInputElement;
      this.inCedula = document.getElementById("comensal_inCedula") as HTMLInputElement;
      this.inSexo = document.getElementById("comensal_inSexo") as HTMLSelectElement;
      this.inFechaNacimiento = document.getElementById("comensal_inFechaNacimiento") as HTMLInputElement;
      this.inTurno = document.getElementById("comensal_inTurno") as HTMLSelectElement;
      this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
      this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
      
       const elementoModal = document.getElementById("comensal") as HTMLElement;
            this.modal = new bootstrap.Modal(elementoModal)

       //validacion
         this.inNombre.addEventListener("input", () => this.validarBoton());
         this.inCedula.addEventListener("input", () => this.validarBoton());
         this.inSexo.addEventListener("change", () => this.validarBoton());
         this.inFechaNacimiento.addEventListener("input", () => this.validarBoton());
         this.inTurno.addEventListener("change", () => this.validarBoton());

      // Estado Inicial
            this.validarBoton();
   }

   private validarBoton(): void {
      // Validamos los Campos que Siempre se muestran

               const soloLetras =/^[a-zA-ZáéíóúñÑÁÉÍÓÚ\s]+$/; // Solo letras Incluyendo Acentos y espacios.
               const nombre = this.inNombre.value.trim(); // trim quita los Espacios al inicio y al final.
               const nombreValido = nombre !== "" && soloLetras.test(nombre); // test es un metodo que dice Si la palabra no tiene Numeros(V/F).

               const cedula = this.inCedula.value.trim();
               const soloNumeros = /^[0-9]+$/;
               const cedulaValido = cedula !== "" && soloNumeros.test(cedula);

               const sexo = this.inSexo.value;
               const sexoValido = sexo === "Mujer" || sexo === "Hombre";

               const fecha = this.inFechaNacimiento.value;
               const fechaValido = fecha !== "";

               const turno = this.inTurno.value;
               const turnoValido = turno === "Desayuno" || turno === "Almuerzo" || turno === "Ambos";

               // Validamos Si 
               const todoValido = nombreValido && cedulaValido && 
                       sexoValido && fechaValido && turnoValido;

                    // Desactivar Boton Si no Cumple algo 
                        this.btAceptar.disabled = !todoValido;

                    if (todoValido) {
                        this.btAceptar.style.opacity = "1";
                        this.btAceptar.style.cursor = "pointer";    }

                    else {
                        this.btAceptar.style.opacity = "0.5";
                        this.btAceptar.style.cursor = "not-allowed"     }
   }

   get nombre(): string {
      return this.inNombre.value; }

   get cedula(): string {
      return this.inCedula.value;  }

   get sexo(): string {
      return this.inSexo.value;  }

   get fechaNacimiento(): string {
      return this.inFechaNacimiento.value; }

   get turno(): string {
      return this.inTurno.value; }

   onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;   }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;  }

   mostrar(): void {
            this.modal.show();
            this.inNombre.value = "";
            this.inCedula.value = "";
            this.inSexo.value = "";
            this.inFechaNacimiento.value = "";
            this.inTurno.value = "";
        }

    ocultar(): void {
        this.modal.hide();
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