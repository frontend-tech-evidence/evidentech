# Evidence V2

-   Solamente meter cosas en la carpeta root que sean reutilizables de manera global. En caso de que solo se utilicen en un solo lugar, crear una carpeta para ese lugar.

// function hideShowElement(idSubmodule: string) {
// const subModulo = document.getElementById(idSubmodule)

// if (subModulo.classList.contains('hidden')) {
// subModulo.classList.remove('hidden')
// } else {
// subModulo.classList.add('hidden')
// }
// }

// function handleDecrementClick(inputId: string = '', minValue: number = 0) {
// const input = document.getElementById(inputId) as HTMLInputElement

// if (parseInt(input.value) > minValue) {
// input.value = (parseInt(input.value) - 1).toString()
// localStorage.setItem(input.id, input.value)
// }
// }

// function handleIncrementClick(inputId: string = '', maxValue: number = 0) {
// const input = document.getElementById(inputId) as HTMLInputElement

// if (parseInt(input.value) < maxValue) {
// input.value = (parseInt(input.value) + 1).toString()
// localStorage.setItem(input.id, input.value)
// }
// }

// function validarLimiteInputNumerico(
// valorIntroducido: number = 0,
// cantidadMaxima: number = 0,
// cantidadMinima: number = 0
// ) {
// if (typeof valorIntroducido === 'number') {
// if (
// valorIntroducido <= cantidadMaxima ||
// valorIntroducido >= cantidadMinima
// ) {
// return true
// }
// }

// return false
// }

// function reloadValoresAnterioresDeInputsDelLocalStorage(
// idDelValorEnLocalStorage: string,
// idDelInput: string = '',
// tipoDeInput: string | undefined = undefined
// ) {
// // 'inputUsuarios',
// // 'inputUsuarios',
// // 'number'
// const input = document.getElementById(idDelInput) as HTMLInputElement

// if (Boolean(localStorage.getItem(idDelValorEnLocalStorage))) {
// if (tipoDeInput === 'number') {
// input.value = localStorage.getItem(idDelValorEnLocalStorage)!
// } else if (tipoDeInput === 'checkbox') {
// if (localStorage.getItem(idDelValorEnLocalStorage) === '1') {
// input.checked = false
// } else {
// input.checked = true
// }
// }
// }
// }

// function guardarValoresDeInputsEnLocalStorage(
// idFuturoDelValorEnLocalStorage: string,
// idDelInput: string = '',
// tipoDeInput: string | undefined = undefined
// ) {
// const input = document.getElementById(idDelInput) as HTMLInputElement

// if (tipoDeInput === 'number') {
// localStorage.setItem(idFuturoDelValorEnLocalStorage, input.value)
// } else if (tipoDeInput === 'checkbox') {
// if (input.checked) {
// localStorage.setItem(idFuturoDelValorEnLocalStorage, 'checked')
// } else {
// localStorage.setItem(idFuturoDelValorEnLocalStorage, 'not checked')
// }
// }
// }

// function updateNumberInput(id: string, minValue: number, maxValue: number) {
// const input = document.getElementById(id) as HTMLInputElement | null
// if (input !== null) {
// input.value = Math.min(
// Math.max(parseInt(input.value) || 0, minValue),
// maxValue
// ).toString()
// window.localStorage.setItem(id, input.value)
// }
// }

// // Recarga el ultimo valor seleccionado de la moneda por el usuario antes de recargar o volver a abrir la pagina.
// function reloadLastCurrencyValue() {
// const actualCurrency = window.localStorage.getItem('moneda')
// const monedaUSD = document.getElementById('monedaUSD')
// const monedaMXN = document.getElementById('monedaMXN')

// if (!actualCurrency) {
// window.localStorage.setItem('moneda', 'mxn')
// } else {
// // USD click classes changes
// // usd
// monedaUSD.classList.toggle('bg-blue-500', actualCurrency === 'usd')
// monedaUSD.classList.toggle('text-white', actualCurrency === 'usd')

// // mxn
// monedaUSD.classList.toggle('text-blue-500', actualCurrency !== 'usd')
// monedaUSD.classList.toggle('border', actualCurrency !== 'usd')
// monedaUSD.classList.toggle('border-blue-500', actualCurrency !== 'usd')

// // MXN click classes changes
// // mxn
// monedaMXN.classList.toggle('bg-blue-500', actualCurrency !== 'usd')
// monedaMXN.classList.toggle('text-white', actualCurrency !== 'usd')
// // usd.
// monedaMXN.classList.toggle('text-blue-500', actualCurrency === 'usd')
// monedaMXN.classList.toggle('border', actualCurrency === 'usd')
// monedaMXN.classList.toggle('border-blue-500', actualCurrency === 'usd')
// }
// }

// // Se usa para casos especificos donde solo deseas guardar o actualizar un valor.
// function saveAndUpdateLocalStorage(id, value) {
// window.localStorage.setItem(id, value)
// }

// const inputsSwitches = ['inputImplementacion', 'inputMembresia']

// function updateSwitchInput(id: string) {
// const input = document.getElementById(
// `input${id}`
// ) as HTMLInputElement | null
// const inputLabel = document.getElementById(`input${id}Label`)
// if (input.checked === false) {
// window.localStorage.setItem(`input${id}`, '1')
// inputLabel.classList.remove('hidden')
// inputLabel.classList.add('flex')
// } else {
// window.localStorage.setItem(`input${id}`, '12')
// inputLabel.classList.remove('flex')
// inputLabel.classList.add('hidden')
// }
// }

// function monedaLoad() {
// const currency = localStorage.getItem('moneda').toUpperCase()
// const elementosMoneda = document.querySelectorAll('.moneda')
// elementosMoneda.forEach((elemento) => {
// elemento.textContent = `${currency}`
// })
// }

// // Checar

// // Calcula y actualiza los precios finales mostrados en la página en función de las entradas
// // del usuario y los precios del paquete.
// function updatePrices(erpPrices) {
// let paqueteGanador = ''

// // 1- Conocer que especialidad le interesa.
// const inputEspecialidad = document.getElementById('inputEspecialidad').value

// // 2- Conocer y checar limites de usuarios para descartar paquetes
// const limiteGrow = checkLimits(14, 29, 2)
// const limiteInstitutional = checkLimits(29, 99, 10)

// if (inputEspecialidad == 'manufactura') {
// paqueteGanador = 'manufacturing'
// }

// if (inputEspecialidad === 'ninguno') {
// if (limiteGrow) {
// paqueteGanador = 'grow'
// } else if (limiteInstitutional) {
// paqueteGanador = 'institutional'
// } else {
// paqueteGanador = 'manufacturing'
// }
// }

// if (inputEspecialidad === 'mantenimiento') {
// if (limiteInstitutional) {
// paqueteGanador = 'institutional'
// } else {
// paqueteGanador = 'manufacturing'
// }
// }

// const inputUsuarios = window.localStorage.getItem('inputUsuarios')
// const inputTimbres = window.localStorage.getItem('inputTimbres')
// const inputCapacitacion = document.getElementById('capacitacionCheckbox')
// const inputMigracion = document.getElementById('migracionCheckbox')
// const inputPagoInstalacion = document.getElementById('inputPagoInstalacion')
// const inputPagoRenta = document.getElementById('inputPagoRenta')

// let migracionCheck = false
// let capacitacionCheck = false
// let pagarMembresiaMensual = false
// let pagarImplementacionMensual = false

// if (inputCapacitacion.checked) {
// capacitacionCheck = true
// }

// if (inputMigracion.checked) {
// migracionCheck = true
// }

// if (inputPagoRenta.checked) {
// pagarMembresiaMensual = true
// }

// if (inputPagoInstalacion.checked) {
// pagarImplementacionMensual = true
// }

// const capacitacionCheckbox = document.getElementById('capacitacionCheckbox')
// const migracionCheckbox = document.getElementById('migracionCheckbox')

// if (paqueteGanador === 'grow') {
// migracionCheckbox.classList.remove('hidden')
// capacitacionCheckbox.classList.remove('hidden')
// } else {
// migracionCheckbox.classList.add('hidden')
// capacitacionCheckbox.classList.add('hidden')
// }

// localStorage.setItem('paqueteGanador', paqueteGanador)
// const currency = localStorage.getItem('moneda')

// // // 3- Mostrar precios de ese ganador
// // const precioTotal = calculatePrice(
// // paqueteGanador, // packageType

// // // Parametros de timbres
// // erpPrices.categories.servicios[paqueteGanador].timbres.timbresIncluidos, // numTimbresGratis
// // inputTimbres, // numTimbresAgregados
// // erpPrices.categories.servicios[paqueteGanador].timbres.costoTimbreExtra, // precioTimbreExtra

// // // Parametros de Membresia
// // erpPrices.categories.servicios[paqueteGanador].costoBase, // costoBaseMembresiaMensual
// // pagarMembresiaMensual, // pagarMembresiaMensual

// // // Parametros de implementacion
// // erpPrices.categories.servicios[paqueteGanador].costosExtra
// // .costoActivacion, // costoActivacion
// // erpPrices.categories.servicios[paqueteGanador].costosExtra
// // .costoCapacitacion, // costoCapacitacion
// // capacitacionCheck, // pagarCapacitacion
// // erpPrices.categories.servicios[paqueteGanador].costosExtra
// // .costoMigracion, // costoMigracion
// // migracionCheck, // pagarMigracion
// // pagarImplementacionMensual, // pagarImplementacionMensual
// // inputUsuarios, // numUsuarios
// // erpPrices.categories.servicios[paqueteGanador].numUsuariosLimites, // numUsuariosLimites
// // erpPrices.categories.servicios[paqueteGanador]
// // .precioPorUsuarioDespuesDeLimite, // precioUsuarioDespuesLimite
// // erpPrices.categories.servicios[paqueteGanador].precioPorUsuario, //precioUsuario
// // erpPrices.categories.servicios[paqueteGanador].usuariosGratis, // usuariosGratis
// // // Parametro de cambio de moneda
// // currency, // tasaDeCambio
// // erpPrices.precioDolar // precioDolar
// // )

// window.localStorage.setItem('paqueteGanador', paqueteGanador)
// window.localStorage.setItem(
// 'precioTotalSegundoAnioPaqueteSeleccionado',
// precioTotal.precioTotalSegundoAño
// )
// window.localStorage.setItem(
// 'precioTotalPaqueteSeleccionado',
// precioTotal.precioTotalPrimerAño
// )
// window.localStorage.setItem(
// 'costoUsuarioExtra',
// precioTotal.costoUsuarioAux
// )

// // Agregar el precio actual en los spans
// const sufijoPagos = pagarMembresiaMensual === true ? '/mes' : '/año'

// // Agregar los sufijos de pagos en los spans
// const elementosPagos = document.querySelectorAll('.spanPagos')
// elementosPagos.forEach((elemento) => {
// elemento.textContent = `${sufijoPagos}`
// })

// const elementosMoneda = document.querySelectorAll('.spanMoneda')
// elementosMoneda.forEach((elemento) => {
// elemento.textContent = `${currency}`
// })

// const elementosCapacitacion = document.querySelectorAll(
// '.spanPrecioCapacitacion'
// )
// elementosCapacitacion.forEach((elemento) => {
// elemento.textContent = precioTotal.costoCapacitacionFinal
// .toLocaleString()
// .replace(/\./g, ',')
// })

// const precioPorUsuario = document.querySelector('.spanPrecioPorUsuario')
// precioPorUsuario.textContent = `$${precioTotal.precioUsuario}`

// const maxUsuarios = document.querySelector('.spanMaxUsuarios')
// maxUsuarios.textContent = `${erpPrices.categories.servicios[paqueteGanador].maxUsuarios}`

// const maxSucursales = document.querySelector('.spanMaxSucursales')
// maxSucursales.textContent = `${erpPrices.categories.servicios[paqueteGanador].maxSucursales}`

// const maxEmpleados = document.querySelector('.spanMaxEmpleados')
// maxEmpleados.textContent = `${erpPrices.categories.servicios[paqueteGanador].maxEmpleados}`

// const timbresIncluidos = document.querySelector('.spanTimbresIncluidos')
// timbresIncluidos.textContent = `${erpPrices.categories.servicios[paqueteGanador].timbres.timbresIncluidos}`

// const costoTimbreExtra = document.querySelector('.spanCostoTimbreExtra')
// costoTimbreExtra.textContent = `$${precioTotal.costoTimbresFijo.toFixed(2)}`

// const elementosPrecioFinal = document.querySelectorAll('.spanPrecioFinal')
// elementosPrecioFinal.forEach((elemento) => {
// elemento.textContent = `$${precioTotal.precioTotalPrimerAño
//             .toLocaleString()
//             .replace(/\./g, ',')}`
// })

// const elementosPrecioSegundoAnio = document.querySelectorAll(
// '.spanPrecioSegundoAnio'
// )

// elementosPrecioSegundoAnio.forEach((elemento) => {
// elemento.textContent = `$${precioTotal.precioTotalSegundoAño
//             .toLocaleString()
//             .replace(/\./g, ',')}`
// })

// const precioActivacion = document.querySelector('.spanActivacion')
// precioActivacion.textContent = `$${precioTotal.costoActivacion
//         .toLocaleString()
//         .replace(/\./g, ',')}`

// const spanCapacitacion = document.querySelector('.spanCapacitacion')
// spanCapacitacion.textContent = `$${precioTotal.costoCapacitacion
//         .toLocaleString()
//         .replace(/\./g, ',')}`

// const spanPrecioMigracion = document.querySelector('.spanMigracion')
// spanPrecioMigracion.textContent = `$${precioTotal.costoMigracion
//         .toLocaleString()
//         .replace(/\./g, ',')}
//     `

// const spanPagoImplementacion = document.querySelector(
// '.spanPagoImplementacion'
// )

// const precioImplementacionAux = parseInt(
// precioTotal.costoImplementacionFinal
// )

// const sufijoAuxImplementacion =
// pagarImplementacionMensual === true
// ? '/mes'
// : '/unico pago (descuento aplicado)'

// spanPagoImplementacion.textContent = `$${precioImplementacionAux
//         .toLocaleString()
//         .replace(/\./g, ',')}`

// const precioAnualFinal =
// precioTotal.costoBaseMembresiaFinal \* 12 +
// precioTotal.costoUsuariosFinales

// const costoTotal = document.querySelector('.costoTotal')
// costoTotal.textContent = `$${precioAnualFinal
//         .toLocaleString()
//         .replace(/\./g, ',')}`

// const elementosNombrePaquete = document.querySelectorAll('.packageType')
// elementosNombrePaquete.forEach((elemento) => {
// const texto = precioTotal.packageType
// elemento.textContent = texto.charAt(0).toUpperCase() + texto.slice(1)
// })

// // Costos aparte

// const costoBaseTotal = document.querySelector('.costoBaseTotal')
// costoBaseTotal.textContent = `$${precioTotal.costoBaseFija
//         .toLocaleString()
//         .replace(/\./g, ',')}`

// // Soporte
// const atencion = document.querySelector('.spanAtencion')
// atencion.textContent = `${erpPrices.categories.servicios[paqueteGanador].soporte.atencion}`

// const upTime = document.querySelector('.spanUpTime')
// upTime.textContent = `${erpPrices.categories.servicios[paqueteGanador].soporte.upTime}`

// const tiempoPromedioDeRespuesta = document.querySelector(
// '.spanTiempoPromedioDeRespuesta'
// )
// tiempoPromedioDeRespuesta.textContent = `${erpPrices.categories.servicios[paqueteGanador].soporte.tiempoPromedioDeRespuesta}`

// // capacitacion
// const usuariosIncluidos = document.querySelector('.spanUsuariosIncluidos')
// usuariosIncluidos.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.usuariosIncluidos}`

// const horasIncluidas = document.querySelector('.spanHorasIncluidas')
// horasIncluidas.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.horasIncluidas}`

// const horasDisponiblesSemana = document.querySelector(
// '.spanHorasDisponiblesSemana'
// )
// horasDisponiblesSemana.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.horasDisponiblesSemana}`

// const horaVirtualAdicional = document.querySelector(
// '.spanHoraVirtualAdicional'
// )
// horaVirtualAdicional.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.horaVirtualAdicional}`

// const precioPorCapacitacionUsuariosExtras = document.querySelector(
// '.spanPrecioPorCapacitacionUsuariosExtras'
// )
// precioPorCapacitacionUsuariosExtras.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.precioPorCapacitacionUsuariosExtras}`

// const diasDeProfesionalesEnfocados = document.querySelector(
// '.spanDiasDeProfesionalesEnfocados'
// )
// diasDeProfesionalesEnfocados.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.diasDeProfesionalesEnfocados}`

// // otros
// const numeroAsesoriasEspecialistas = document.querySelector(
// '.spanNumeroAsesoriasEspecialistas'
// )
// numeroAsesoriasEspecialistas.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.numeroAsesoriasEspecialistas}`

// const almacenamientoAdicional = document.querySelector(
// '.spanAlmacenamientoAdicional'
// )
// almacenamientoAdicional.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.almacenamientoAdicional}`

// const horasDeDesarrolloIncluidas = document.querySelector(
// '.spanHorasDeDesarrolloIncluidas'
// )
// horasDeDesarrolloIncluidas.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.horasDeDesarrolloIncluidas}`

// const upgrateVersion = document.querySelector('.spanUpgrateVersion')
// upgrateVersion.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.upgrateVersion}`

// // Razon social
// const precioPorRazon = document.querySelector('.spanPrecioPorRazon')
// precioPorRazon.textContent = `${erpPrices.categories.servicios[paqueteGanador].razonSocial.precioPorRazon}`

// const precioUsuarioAdicional = document.querySelector(
// '.spanPrecioUsuarioAdicional'
// )
// precioUsuarioAdicional.textContent = `${erpPrices.categories.servicios[paqueteGanador].razonSocial.precioUsuarioAdicional}`
// }

// window.document.addEventListener('click', (e) => {
// // Moneda
// if ((e.target as Element).matches('#monedaUSD')) {
// saveAndUpdateLocalStorage('moneda', 'usd')
// reloadLastCurrencyValue()
// monedaLoad()
// }

// if ((e.target as Element).matches('#monedaMXN')) {
// saveAndUpdateLocalStorage('moneda', 'mxn')
// reloadLastCurrencyValue()
// monedaLoad()
// }

// // ------- Switches -------
// if ((e.target as Element).closest('#inputImplementacion')) {
// updateSwitchInput('Implementacion')
// }

// if ((e.target as Element).closest('#inputMembresia')) {
// updateSwitchInput('Membresia')
// }

// // ------- Buttons -------
// if ((e.target as Element).closest('#btnProductos')) {
// hideShowElement('childProductos')
// }

// if ((e.target as Element).closest('#btnPorqueEvidence')) {
// hideShowElement('childPorqueEvidence')
// }

// if ((e.target as Element).closest('#btnRecursos')) {
// hideShowElement('childRecursos')
// }

// // -------- Tabla --------
// if ((e.target as Element).closest('#preciosFather')) {
// hideShowElement('preciosChildren')
// }

// if ((e.target as Element).closest('#modulosFather')) {
// hideShowElement('modulosChildren')
// }

// if ((e.target as Element).closest('#soporteFather')) {
// hideShowElement('soporteChildren')
// }

// if ((e.target as Element).closest('#otrosFather')) {
// hideShowElement('otrosChildren')
// }

// if ((e.target as Element).closest('#capacitacionesFather')) {
// hideShowElement('capacitacionesChildren')
// }

// // -------- inputs --------
// if ((e.target as Element).closest('#incrementUsuarios')) {
// handleIncrementClick('inputUsuarios', 10000)
// }

// if ((e.target as Element).closest('#decrementUsuarios')) {
// handleDecrementClick('inputUsuarios', 1)
// }

// if ((e.target as Element).closest('#incrementSucursales')) {
// handleIncrementClick('inputSucursales', 10000)
// }

// if ((e.target as Element).closest('#decrementSucursales')) {
// handleDecrementClick('inputSucursales', 1)
// }

// if ((e.target as Element).closest('#incrementEmpleados')) {
// handleIncrementClick('inputEmpleados', 10000)
// }

// if ((e.target as Element).closest('#decrementEmpleados')) {
// handleDecrementClick('inputEmpleados', 1)
// }

// if ((e.target as Element).closest('#incrementTimbres')) {
// handleIncrementClick('inputTimbres', 10000)
// }

// if ((e.target as Element).closest('#decrementTimbres')) {
// handleDecrementClick('inputTimbres', 1)
// }

// // Tabla
// if ((e.target as Element).closest('#modulosCRM')) {
// hideShowElement('submodulosCRM')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosPuntoDeVenta')) {
// hideShowElement('submodulosPuntoDeVenta')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosGestionDeVentas')) {
// hideShowElement('submodulosGestionDeVentas')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosCompras')) {
// hideShowElement('submodulosCompras')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosCreditoYCobranza')) {
// hideShowElement('submodulosCreditoYCobranza')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosBancos')) {
// hideShowElement('submodulosBancos')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosAlmacenes')) {
// hideShowElement('submodulosAlmacenes')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosGestionDeVentasInstitucional')) {
// hideShowElement('submodulosGestionDeVentasInstitucional')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosAlmacenesInstitucional')) {
// hideShowElement('submodulosAlmacenesInstitucional')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosPagos')) {
// hideShowElement('submodulosPagos')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosServicios')) {
// hideShowElement('submodulosServicios')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosContabilidad')) {
// hideShowElement('submodulosContabilidad')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosFiscalMexico')) {
// hideShowElement('submodulosFiscalMexico')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosNomina')) {
// hideShowElement('submodulosNomina')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosGestionDeVentasAutomaticas')) {
// hideShowElement('submodulosGestionDeVentasAutomaticas')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosComprasProfesionales')) {
// hideShowElement('submodulosComprasProfesionales')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosBlindajeYPrevencionFiscal')) {
// hideShowElement('submodulosBlindajeYPrevencionFiscal')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosRecursosHumanos')) {
// hideShowElement('submodulosRecursosHumanos')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosLogistica')) {
// hideShowElement('submodulosLogistica')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosActivosFijos')) {
// hideShowElement('submodulosActivosFijos')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosProyectos')) {
// hideShowElement('submodulosProyectos')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosActividades')) {
// hideShowElement('submodulosActividades')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosEvidencias')) {
// hideShowElement('submodulosEvidencias')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosMantenimiento')) {
// hideShowElement('submodulosMantenimiento')
// }

// // Tabla
// if ((e.target as Element).closest('#modulosManufactura')) {
// hideShowElement('submodulosManufactura')
// }

// // Tabla
// if (
// (e.target as Element).closest('#modulosModulosYServiciosEspecializados')
// ) {
// hideShowElement('submodulosModulosYServiciosEspecializados')
// }
// })

// window.document.addEventListener('change', (e) => {
// if ((e.target as Element).closest('#inputUsuarios')) {
// updateNumberInput('inputUsuarios', 1, 10000)
// }

// if ((e.target as Element).closest('#inputSucursales')) {
// updateNumberInput('inputSucursales', 1, 10000)
// }

// if ((e.target as Element).closest('#inputEmpleados')) {
// updateNumberInput('inputEmpleados', 1, 10000)
// }
// })

// monedaLoad()

// reloadValoresAnterioresDeInputsDelLocalStorage(
// 'inputUsuarios',
// 'inputUsuarios',
// 'number'
// )

// reloadValoresAnterioresDeInputsDelLocalStorage(
// 'inputEmpleados',
// 'inputEmpleados',
// 'number'
// )

// reloadValoresAnterioresDeInputsDelLocalStorage(
// 'inputSucursales',
// 'inputSucursales',
// 'number'
// )

// reloadValoresAnterioresDeInputsDelLocalStorage(
// 'inputTimbres',
// 'inputTimbres',
// 'number'
// )

// reloadValoresAnterioresDeInputsDelLocalStorage(
// 'inputImplementacion',
// 'inputImplementacion',
// 'checkbox'
// )

// reloadValoresAnterioresDeInputsDelLocalStorage(
// 'inputMembresia',
// 'inputMembresia',
// 'checkbox'
// )

// updateSwitchInput('Implementacion')
// updateSwitchInput('Membresia')
// updateNumberInput('inputUsuarios', 1, 10000)
// updateNumberInput('inputSucursales', 1, 10000)
// updateNumberInput('inputEmpleados', 1, 10000)
// updateNumberInput('inputTimbres', 1, 10000)
// reloadLastCurrencyValue()
