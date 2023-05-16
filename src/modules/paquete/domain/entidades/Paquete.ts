/**
 * @author Raul Galindo
 * @description Entidad paquete
 */

export interface CostosPaquete {
    nombre: string

    costos: {
        costoActivacion: number | string
        costoCapacitacion: number | string
        costoMigracion: number | string
        costoBaseMensual: number | string
        costoUsuarioExtra: number | string
        costoUsuarioExtraDespuesDeLimite: number | string
        costoTimbreExtra: number | string
        costoRazonSocial: number | string
        costoUsuarioExtraRazonSocial: number | string
        costoHoraVirtualAdicionalCapacitacion: number | string
        costoUpgradeDeVersion: number | string
        costoCapacitacionUsuarioExtra: number | string
    }

    regalos: {
        usuariosGratisIncluidos: number | string
        mesesDeRegaloPorSeleccionUnPagoDeMembresia: number | string
        descuentoPorSeleccionUnPagoDeImplementacion: number | string
        timbresGratisIncluidos: number | string
    }
}

export interface InformacionPaquete {
    limites: {
        maxUsuarios: number | string
        maxSucursales: number | string
        maxEmpleados: number | string
    }

    capacitacion: {
        diasDeAsesorCapacitacion: number | string
        usuariosIncluidosCapacitacion: number | string
        horasIncluidasCapacitacion: number | string
        horasDisponibleSemanalesCapacitacion: number | string
    }

    soporte: {
        tiempoPromedioRespuesta: number | string
        via: string
        horarioAtencion: string
        upTime: number | string
        cantAsesoriasEspecializadas: number | string
        almacenamientoAdicional: number | string
        horasDesarrolloExtras: number | string
    }
}

export interface AtributosDinamicosPaquetes {
    timbresRequeridos: number
    usuariosRequeridos: number
    isPagoImplementacionMensual: boolean
    isPagoMensualidadMensual: boolean
    hasPrecioVariable: boolean
}
