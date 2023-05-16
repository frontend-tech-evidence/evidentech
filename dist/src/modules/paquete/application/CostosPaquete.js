/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete en especifico.
 */
export function calcularCostoImplementacion(costoActivacion, costoMigracion, costoCapacitacion, descuento, isPagoMensual = false) {
    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion;
    const descuentoEnDecimal = descuento / 100;
    const numeroMeses = 12;
    if (isPagoMensual) {
        return costoTotal / numeroMeses;
    }
    return costoTotal * (1 - descuentoEnDecimal);
}
export function calcularCostoMembresia(costoBaseMensual, mesesDeRegalo, isPagoMensual = false) {
    const mesesDelAño = 12;
    if (isPagoMensual) {
        return costoBaseMensual;
    }
    return costoBaseMensual * (mesesDelAño - mesesDeRegalo);
}
export function calcularCostoFacturacionAnual(costoBaseMensual) {
    const mesesDelAño = 12;
    return costoBaseMensual * mesesDelAño;
}
export function calcularCostoTimbres(timbresRequeridos, timbresGratis, precioTimbreExtra) {
    let costoTotal = 0;
    if (timbresRequeridos > timbresGratis) {
        costoTotal = (timbresRequeridos - timbresGratis) * precioTimbreExtra;
        return costoTotal;
    }
    return costoTotal;
}
export function calcularCostoUsuario(cantidadUsuariosRequeridos, cantidadGratisIncluidos, costoUsuarioExtra, hasPrecioVariable = false, costoUsuarioExtraDespuesDeLimite, cantidadDeUsuariosSinDescuento) {
    if (hasPrecioVariable) {
        if (cantidadUsuariosRequeridos > cantidadDeUsuariosSinDescuento) {
            const cantidadAntesDelRango = cantidadDeUsuariosSinDescuento - cantidadGratisIncluidos;
            const cantidadDespuesDelRango = cantidadUsuariosRequeridos - cantidadDeUsuariosSinDescuento;
            const costoDespuesDelLimite = cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite;
            const costoAntesDelLimite = cantidadAntesDelRango * costoUsuarioExtra;
            return costoDespuesDelLimite + costoAntesDelLimite;
        }
    }
    const costo = Math.abs((cantidadGratisIncluidos - cantidadUsuariosRequeridos) *
        costoUsuarioExtra);
    return costo;
}
export function calcularCostoPrimerAno(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoImplementacion + costoMembresia + costoTimbres + costoUsuarios);
}
export function calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios);
}
export function getAllCostosPaquete(paquete, atributosDinamicosPaquetes) {
    const costoImplementacion = calcularCostoImplementacion(paquete.costos.costoActivacion, paquete.costos.costoMigracion, paquete.costos.costoCapacitacion, paquete.regalos.descuentoPorSeleccionUnPagoDeImplementacion, atributosDinamicosPaquetes.isPagoImplementacionMensual);
    const costoMembresia = calcularCostoMembresia(paquete.costos.costoBaseMensual, paquete.regalos.mesesDeRegaloPorSeleccionUnPagoDeMembresia, atributosDinamicosPaquetes.isPagoMensualidadMensual);
    const costoFacturacionAnual = calcularCostoFacturacionAnual(paquete.costos.costoBaseMensual);
    const costoTimbres = calcularCostoTimbres(atributosDinamicosPaquetes.timbresRequeridos, paquete.regalos.timbresGratisIncluidos, paquete.costos.costoTimbreExtra);
    const costoUsuarios = calcularCostoUsuario(atributosDinamicosPaquetes.usuariosRequeridos, paquete.regalos.usuariosGratisIncluidos, paquete.costos.costoUsuarioExtra, atributosDinamicosPaquetes.hasPrecioVariable);
    const costoPrimerAno = calcularCostoPrimerAno(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios);
    const costoSegundoAno = calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios);
    const costosPaquete = {
        costoImplementacion,
        costoMembresia,
        costoTimbres,
        costoUsuarios,
        costoFacturacionAnual,
        costoPrimerAno,
        costoSegundoAno,
    };
    return costosPaquete;
}
export function getAllCostosPaquetes(atributosDinamicosPaquetes, ...paquetes) {
    let costosPaquetes = {};
    for (const paquete of paquetes) {
        const costoImplementacion = calcularCostoImplementacion(paquete.costos.costoActivacion, paquete.costos.costoMigracion, paquete.costos.costoCapacitacion, paquete.regalos.descuentoPorSeleccionUnPagoDeImplementacion, atributosDinamicosPaquetes.isPagoImplementacionMensual);
        const costoMembresia = calcularCostoMembresia(paquete.costos.costoBaseMensual, paquete.regalos.mesesDeRegaloPorSeleccionUnPagoDeMembresia, atributosDinamicosPaquetes.isPagoMensualidadMensual);
        const costoFacturacionAnual = calcularCostoFacturacionAnual(paquete.costos.costoBaseMensual);
        const costoTimbres = calcularCostoTimbres(atributosDinamicosPaquetes.timbresRequeridos, paquete.regalos.timbresGratisIncluidos, paquete.costos.costoTimbreExtra);
        const costoUsuarios = calcularCostoUsuario(atributosDinamicosPaquetes.usuariosRequeridos, paquete.regalos.usuariosGratisIncluidos, paquete.costos.costoUsuarioExtra, atributosDinamicosPaquetes.hasPrecioVariable);
        const costoPrimerAno = calcularCostoPrimerAno(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios);
        const costoSegundoAno = calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios);
        const costosPaquete = {
            costoImplementacion,
            costoMembresia,
            // costoTimbres,
            // costoUsuarios,
            costoFacturacionAnual,
            costoPrimerAno,
            costoSegundoAno,
        };
        costosPaquetes[paquete.nombre] = costosPaquete;
    }
    return costosPaquetes;
}
