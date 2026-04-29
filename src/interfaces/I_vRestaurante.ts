// I_vRestaurante.ts

export interface I_vRestaurante {

    // Exponemos Una Acción 
        onNewComensal(callback: () => void): void;
        reportar({contadorVarios, porcentDesayuno, porcentAlmuerzo, porcentAmbos, porcentDescuentoMujeres, porcentDescuentoHombres }: 
            {contadorVarios: number; porcentDesayuno: number; porcentAlmuerzo: number; porcentAmbos: number; 
                porcentDescuentoMujeres: number; porcentDescuentoHombres: number;}): void;
}