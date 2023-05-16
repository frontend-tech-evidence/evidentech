/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete en especifico.
 */
export function calcularCostoPrimerAno(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoImplementacion + costoMembresia + costoTimbres + costoUsuarios);
}
export function calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios);
}
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
export function calcularCostoUsuario(cantidadRequeridos, cantidadGratisIncluidos, costoUsuarioExtra, hasPrecioVariable = false, costoUsuarioExtraDespuesDeLimite, cantidadDeUsuariosSinDescuento) {
    if (hasPrecioVariable) {
        if (cantidadRequeridos > cantidadDeUsuariosSinDescuento) {
            const cantidadAntesDelRango = cantidadDeUsuariosSinDescuento - cantidadGratisIncluidos;
            const cantidadDespuesDelRango = cantidadRequeridos - cantidadDeUsuariosSinDescuento;
            const costoDespuesDelLimite = cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite;
            const costoAntesDelLimite = cantidadAntesDelRango * costoUsuarioExtra;
            return costoDespuesDelLimite + costoAntesDelLimite;
        }
    }
    const costo = Math.abs((cantidadGratisIncluidos - cantidadRequeridos) * costoUsuarioExtra);
    return costo;
}
export function getAllCostos(paquete) {
    const costoImplementacion = calcularCostoImplementacion(paquete.costos.costoActivacion, paquete.costos.costoMigracion, paquete.costos.costoCapacitacion, paquete.regalos.descuentoPorSeleccionUnPagoDeImplementacion, paquete.atributosDinamicos.isPagoImplementacionMensual);
    const costoMembresia = calcularCostoMembresia(100, 1, false);
    const costoTimbres = calcularCostoTimbres(1, 1, 1);
    const costoUsuarios = calcularCostoUsuario(1, 1, 100, false, 1, 1);
    const costoFacturacionAnual = calcularCostoFacturacionAnual(200);
    const costoPrimerAno = calcularCostoPrimerAno(100, 100, 100, 100);
    const costoSegundoAno = calcularCostoSegundoAno(100, 1, 100);
    const costosPaquete = {
        costoImplementacion, costoMembresia, costoTimbres, costoUsuarios, costoFacturacionAnual, costoPrimerAno, costoSegundoAno
    };
    return costosPaquete;
}
