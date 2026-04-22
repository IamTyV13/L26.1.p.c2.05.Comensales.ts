// I_vRestaurante.ts

export interface I_vRestaurante {

    // Exponemos Una Acción 
        onNewComensal(callback: () => void): void;
        reportar({cntVarios, porcentD, porcentA, porcentAm, porcentM, porcentH }: 
            {cntVarios: number; porcentD: number; porcentA: number; porcentAm: number; 
                porcentM: number; porcentH: number;}): void;
}