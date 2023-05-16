/**
 * @author Raul Galindo
 * @description Unicamente interaccion con la UI.
 */
import { getAllCostosPaquetes } from './application/CostosPaquete.js';
import { paqueteGrow, paqueteInstitutional, paqueteManufacturing, paqueteEnterprise, paqueteInternationalEnterprise, } from './domain/entidades/CostosPaquetes.js';
const timbresRequeridos = 0, usuariosRequeridos = 0, isPagoImplementacionMensual = false, isPagoMensualidadMensual = false, hasPrecioVariable = false;
const atributosDinamicos = {
    timbresRequeridos: timbresRequeridos,
    usuariosRequeridos: usuariosRequeridos,
    isPagoImplementacionMensual: isPagoImplementacionMensual,
    isPagoMensualidadMensual: isPagoMensualidadMensual,
    hasPrecioVariable: hasPrecioVariable,
};
const costosPaquetes = getAllCostosPaquetes(atributosDinamicos, paqueteGrow, paqueteInstitutional, paqueteManufacturing, paqueteEnterprise, paqueteInternationalEnterprise);
// ----- Checar como definir este tipo en typescript -----
function printCostosPaquetes(costosPaquetes) {
    for (const paquete in costosPaquetes) {
        const costosEnPaquete = costosPaquetes[paquete];
        for (const costo in costosEnPaquete) {
            const selector = `${costo}${paquete}`;
            const spans = document.querySelectorAll(`.${selector}`);
            spans.forEach((elemento) => {
                const costoFormateado = `$${costosEnPaquete[costo]
                    .toLocaleString()
                    .replace(/\./g, ',')}`;
                elemento.textContent = costoFormateado;
            });
        }
    }
}
function printInfoPaquetes(costosPaquetes) {
    for (const paquete in costosPaquetes) {
        const costosEnPaquete = costosPaquetes[paquete];
        for (const costo in costosEnPaquete) {
            const selector = `${costo}${paquete}`;
            const spans = document.querySelectorAll(`.${selector}`);
            spans.forEach((elemento) => {
                const costoFormateado = `$${costosEnPaquete[costo]
                    .toLocaleString()
                    .replace(/\./g, ',')}`;
                elemento.textContent = costoFormateado;
            });
        }
    }
}
function printMoneda() {
    const moneda = localStorage.getItem('moneda');
    const spans = document.querySelectorAll(`.spanMoneda`);
    spans.forEach((elemento) => {
        elemento.textContent = moneda;
    });
}
function printModalidadPagos() {
    const modalidadPagos = localStorage.getItem('inputPagoRenta');
    const spans = document.querySelectorAll(`.spanPagos`);
    spans.forEach((elemento) => {
        elemento.textContent = `/${modalidadPagos}`;
    });
}
printCostosPaquetes(costosPaquetes);
printInfoPaquetes(costosPaquetes);
printMoneda();
printModalidadPagos();
