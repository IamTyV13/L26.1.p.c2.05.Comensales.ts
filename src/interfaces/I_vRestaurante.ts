// I_vRestaurante.ts

export interface I_vRestaurante {

    // Exponemos Una Acción 
        onNewComensal(callback: () => void): void;
        reportar({cntVarios, porcentD, porcentA, porcentAm, porcentDesM, porcentDesH }: 
            {cntVarios: number; porcentD: number; porcentA: number; porcentAm: number; 
                porcentDesM: number; porcentDesH: number;}): void;
}