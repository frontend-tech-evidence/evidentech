/**
 * @author Raul Galindo
 * @description Entidad paquete
 */

import { Paquete } from "./src/modules/paquete/domain/Paquete"

export interface PaqueteCosto{
    getCostoTimbres: () => Promise <number>
    getCostoUsuarios: () => Promise <number>
    getCostoImplementacion: () => Promise <number>
    getCostoMembresia: () => Promise<number>
    getCostoPrimerAno: () => Promise<number>
    getCostoSegundoAno: () => Promise<number>
    getCostoFacturacionAnual: () => Promise<number>
    getCostoHorasVirtuales: () => Promise<number>
    getAllCostos: () => Promise<Paquete>
}