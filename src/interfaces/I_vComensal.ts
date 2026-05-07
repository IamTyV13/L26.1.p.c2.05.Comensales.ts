// I_vComensal.ts

export interface I_vComensal {

    // Atributos de la Clase Menor
        get nombre(): string;
        get cedula(): string;
        get sexo(): string;
        get turnoComida(): string;
        get fechaNac(): string;

    // Métodos de la Clase Menor
        mostrar(): void;
        ocultar(): void;

    // Botones de Aceptar y Cancelar
        onAceptar(callback: () => void): void;
        onCancelar(callback: () => void): void;
        
}