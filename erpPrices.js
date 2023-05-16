/** ------------------------------------------------------------------------------------------------ */
/** -------------------------------------------  Imports ------------------------------------------- */
/** ------------------------------------------------------------------------------------------------ */

import { paquetes } from "./data/prices.js";

/** ****************************************         Importante Abajo        **************************************************** */

/**
 * @author Raul galindo
 * @description Debido a que se importa el @include('includes.include-scripts') en todas las html, se
 * debe de poner un id a la pagina donde quieres cargar este js que lo identifique para que asi se
 * cargue este script en esa pagina.
 */

/** ****************************************         Importante  Arriba       **************************************************** */

// Buscar el elemento con el ID
const parent = document.getElementById("precios");

/** ---------------------------------------------------------------------------------------------------------------- */
/** -------------------------------------------  Inits & Event Listeners ------------------------------------------- */
/** ---------------------------------------------------------------------------------------------------------------- */

// Verificar si el elemento existe
if (parent) {
  /** -------------------------------------------------------------------------------------------------- */
  /** -------------------------------------------  Variables y Constantes ------------------------------ */

  /** -------------------------------------------------------------------------------------------------- */

  // Define una matriz de variables que representan todos los diferentes inputs de la aplicacion.
  const inputs = [
    inputUsuarios,
    inputEmpleados,
    inputSucursales,
    inputTimbres,
    inputPagoInstalacion,
    inputPagoRenta,
  ];

  const inputsSwitches = [inputPagoInstalacion, inputPagoRenta];

  /** ----------------------------------------------------------------------------------- */
  /** ------------------------------  Métodos ------------------------------------------- */
  /** ----------------------------------------------------------------------------------- */

  /**
   * @author Raul Galindo
   *
   * @description Esta función lo que hace es recargar en los inputs los valores que se guardaron
   * en su ultima vista en el localStorage, y si no hay alguno, se inicializa tomando el valor que
   * tiene el input en el HTML.
   * ---- ATENCIÓN: Hay que poner a cada input en el HTML su atributo "value", no se te olvide. ----
   */

  function reloadLastLocalStorageValuesInInputs(inputs) {
    for (const input of inputs) {
      const inputValue = document.getElementById(input.id);
      const storedValue = window.localStorage.getItem(input.id);

      if (storedValue) {
        inputValue.value = storedValue;
      } else {
        window.localStorage.setItem(input.id, inputValue.value);
      }
    }
  }

  // Recarga los últimos valores de los inputs de tipo Switch y también su etiqueta de descuenta
  // (en caso de existir) seleccionados por el usuario antes de recargar o volver a abrir la pagina.
  function reloadLastLocalStorageValuesInSwitchInputs(inputs) {
    for (const input of inputs) {
      const inputValue = document.getElementById(input.id);
      const storedValue = window.localStorage.getItem(input.id);
      const inputLabel = document.getElementById(`${input.id}Label`);

      if (storedValue && storedValue === "12") {
        inputValue.checked = true;
        inputLabel.classList.remove("flex");
        inputLabel.classList.add("hidden");
      } else {
        inputLabel.classList.remove("hidden");
        inputLabel.classList.add("flex");
      }
    }
  }

  // Recarga el ultimo valor seleccionado de la moneda por el usuario antes de recargar o volver a abrir la pagina.
  function reloadLastCurrencyValue() {
    const actualCurrency = window.localStorage.getItem("moneda");
    const monedaUSD = document.getElementById("monedaUSD");
    const monedaMXN = document.getElementById("monedaMXN");

    if (!actualCurrency) {
      window.localStorage.setItem("moneda", "mxn");
    } else {
      // USD click classes changes
      // usd
      monedaUSD.classList.toggle("bg-blue-500", actualCurrency === "usd");
      monedaUSD.classList.toggle("text-white", actualCurrency === "usd");

      // mxn
      monedaUSD.classList.toggle("text-blue-500", actualCurrency !== "usd");
      monedaUSD.classList.toggle("border", actualCurrency !== "usd");
      monedaUSD.classList.toggle("border-blue-500", actualCurrency !== "usd");

      // MXN click classes changes
      // mxn
      monedaMXN.classList.toggle("bg-blue-500", actualCurrency !== "usd");
      monedaMXN.classList.toggle("text-white", actualCurrency !== "usd");
      // usd.
      monedaMXN.classList.toggle("text-blue-500", actualCurrency === "usd");
      monedaMXN.classList.toggle("border", actualCurrency === "usd");
      monedaMXN.classList.toggle("border-blue-500", actualCurrency === "usd");
    }
  }

  // Esconde y muestra elementos que no necesitan guardar valores pasados o recargarlos, solo
  // se necesitan esconder o mostrar en ese momento.
  function hideShowElement(id, firstClass = "hidden", secondClass = "flex") {
    const element = document.getElementById(id);
    if (element.classList.contains(firstClass)) {
      element.classList.remove(firstClass);
      element.classList.add(secondClass);
    } else {
      element.classList.remove(secondClass);
      element.classList.add(firstClass);
    }
  }

  function hideShowElementHidden(id) {
    const element = document.getElementById(id);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }

  // Actualizar el valor de un elemento input en el documento HTML,
  function updateInput(id) {
    const input = document.getElementById(id);
    window.localStorage.setItem(id, input.value);
  }

  // Actualizar el valor de un elemento input de tipo checkbox en el documento HTML,
  function updateSwitchInput(id) {
    const input = document.getElementById(id);
    const inputLabel = document.getElementById(`${input.id}Label`);
    if (input.checked === false) {
      window.localStorage.setItem(id, "1");
      inputLabel.classList.remove("hidden");
      inputLabel.classList.add("flex");
    } else {
      window.localStorage.setItem(id, "12");
      inputLabel.classList.remove("flex");
      inputLabel.classList.add("hidden");
    }
  }

  // Actualizar el valor de un elemento input de tipo number en el documento HTML, asegurándose
  // de que el valor esté dentro de un rango específico definido por minValue y maxValue.
  function updateNumberInput(id, minValue, maxValue) {
    const input = document.getElementById(id);
    input.value = Math.min(
      Math.max(parseInt(input.value) || 0, minValue),
      maxValue
    );
    window.localStorage.setItem(id, input.value);
  }

  // Reduce el valor de un elemento input en el documento HTML, siempre y cuando el
  // valor actual del input sea mayor que el valor mínimo especificado por minValue.
  function handleDecrementClick(input, minValue) {
    if (input.value > minValue) {
      input.value = parseInt(input.value) - 1;
      window.localStorage.setItem(input.id, input.value);
    }
  }

  // Incrementa el valor de un elemento input en el documento HTML, siempre y cuando el
  // valor actual del input sea mayor que el valor mínimo especificado por minValue.
  function handleIncrementClick(input, maxValue) {
    if (input.value < maxValue) {
      input.value = parseInt(input.value) + 1;
      window.localStorage.setItem(input.id, input.value);
    }
  }

  // Se usa para casos especificos donde solo deseas guardar o actualizar un valor.
  function saveAndUpdateLocalStorage(id, value) {
    window.localStorage.setItem(id, value);
  }

  function checkLimits(maxUsuarios, maxEmpleados, maxSucursales) {
    const inputUsuarios = document.getElementById("inputUsuarios").value;
    const inputEmpleados = document.getElementById("inputEmpleados").value;
    const inputSucursales = document.getElementById("inputSucursales").value;

    if (
      inputUsuarios > maxUsuarios ||
      inputSucursales > maxSucursales ||
      inputEmpleados > maxEmpleados
    ) {
      return false;
    }
    return true;
  }

  function updatePrices() {
    const pkgs = ["grow", "institutional", "manufacturing", "enterprise"];
    const inputUsuarios = localStorage.getItem("inputUsuarios");
    const inputTimbres = localStorage.getItem("inputTimbres");
    const inputSucursales = localStorage.getItem("inputSucursales");
    const inputEmpleados = localStorage.getItem("inputEmpleados");
    const inputPagoInstalacion = localStorage.getItem("inputPagoInstalacion");
    const inputPagoRenta = localStorage.getItem("inputPagoRenta");
    const currency = localStorage.getItem("moneda");

    // Sufijos
    const sufijoPagos = inputPagoRenta === 12 ? "/mes" : "/año";
    const sufijoMoneda = currency === "mxn" ? "MXN" : "USD";

    // Convercion de inputs
    const isPagoImplementacionMensual =
      inputPagoInstalacion === 12 ? "true" : "false";
    const isPagoRentaMensual = inputPagoRenta === 12 ? "true" : "false";

    pkgs.forEach((paquete) => {
      let hasPrecioVariable = false;
      if (paquete === "manufacturing" || paquete === "enterprise") {
        hasPrecioVariable = true;
      }

      const costoImplementacion = calcularCostoImplementacion(
        paquetes[paquete].costoActivacion,
        paquetes[paquete].costoMigracion,
        paquetes[paquete].costoCapacitacion,
        10,
        isPagoRentaMensual
      );

      const costoMembresia = calcularCostoMembresia(
        paquetes[paquete].costoBase,
        1,
        isPagoImplementacionMensual
      );

      const costoFacturacionAnual = calcularCostoFacturacionAnual(
        paquetes[paquete].costoBase
      );

      const costoTimbres = calcularCostoTimbres(
        inputTimbres,
        paquetes[paquete].timbresGratisIncluidos,
        paquetes[paquete].costoTimbreExtra
      );

      const costoUsuarios = calcularCostoUsuario(
        inputUsuarios,
        paquetes[paquete].usuariosGratisIncluidos,
        paquetes[paquete].costoUsuarioExtra,
        hasPrecioVariable,
        paquetes[paquete].costoUsuarioExtraDespuesDeLimite
      );

      const costoPrimerAno = calcularCostoPrimerAno(
        costoImplementacion,
        costoMembresia,
        costoTimbres,
        costoUsuarios
      );

      const costoSegundoAno = calcularCostoSegundoAno(
        costoMembresia,
        costoTimbres,
        costoUsuarios
      );

      const costosTotales = {
        paquete,
        costoPrimerAno,
        costoSegundoAno,
        costoUsuarios,
        costoTimbres,
        costoMembresia,
        costoImplementacion,
      };

      printPreciosTotales(costosTotales);
    });
  }

  function buyPackage(pkgName) {
    // const packageSelected = document.getElementById(`spanPrice${pkgName}`);

    // spanPriceInstitutional;
    // spanPriceInstitutionalRenew;
    console.log("Aun no creada la logica.");
  }

  // Eventos onChange
  window.document.addEventListener("change", (e) => {
    if (e.target.matches("#inputEspecialidad")) {
      updatePrices();
    }

    if (e.target.matches("#capacitacionCheckbox")) {
      updateNumberInput("inputUsuarios", 1, 10000);
      updatePrices();
    }

    if (e.target.matches("#migracionCheckbox")) {
      updateNumberInput("inputUsuarios", 1, 10000);
      updatePrices();
    }

    if (e.target.matches("#inputUsuarios")) {
      updateNumberInput("inputUsuarios", 1, 10000);
      updatePrices();
    }

    if (e.target.matches("#inputEmpleados")) {
      updateNumberInput("inputEmpleados", 1, 10000);
      updatePrices();
    }

    if (e.target.matches("#inputSucursales")) {
      updateNumberInput("inputSucursales", 1, 10000);
      updatePrices();
    }

    if (e.target.matches("#inputTimbres")) {
      updateNumberInput("inputTimbres", 1, 10000);
      updatePrices();
    }
  });

  // Eventos onClick
  window.document.addEventListener("click", (e) => {
    if (e.target.closest("#btnVerPaquete")) {
      hideShowElementHidden("paqueteRecomendado");
    }

    // Botones de cotizar

    // if (e.target.closest("#btnContratarStarter")) {
    //     buyPackage("Starter");
    // }

    if (e.target.closest("#btnContratarGrow")) {
      buyPackage("grow");
    }

    if (e.target.closest("#btnContratarInstitutional")) {
      buyPackage("institutional");
    }

    if (e.target.closest("#btnContratarManufacturing")) {
      buyPackage("manufacturing");
    }

    if (e.target.closest("#btnContratarEnterprise")) {
      buyPackage("enterprise");
    }

    // if (e.target.closest("#btnCotizarInternationalEnterprise")) {
    //     buyPackage("InternationalEnterprise");
    // }

    // ------ Logica de inputs ------

    if (e.target.matches("#decrementUsuarios")) {
      const inputUsuarios = document.getElementById("inputUsuarios");
      handleDecrementClick(inputUsuarios, 1);
      updatePrices();
    }

    if (e.target.matches("#incrementUsuarios")) {
      const inputUsuarios = document.getElementById("inputUsuarios");
      handleIncrementClick(inputUsuarios, 10000);
      updatePrices();
    }

    if (e.target.matches("#decrementEmpleados")) {
      const inputEmpleados = document.getElementById("inputEmpleados");
      handleDecrementClick(inputEmpleados, 1);
      updatePrices();
    }

    if (e.target.matches("#incrementEmpleados")) {
      const inputEmpleados = document.getElementById("inputEmpleados");
      handleIncrementClick(inputEmpleados, 10000);
      updatePrices();
    }

    if (e.target.matches("#decrementTimbres")) {
      const inputTimbres = document.getElementById("inputTimbres");
      handleDecrementClick(inputTimbres, 1);
      updatePrices();
    }

    if (e.target.matches("#incrementTimbres")) {
      const inputTimbres = document.getElementById("inputTimbres");
      handleIncrementClick(inputTimbres, 10000);
      updatePrices();
    }

    if (e.target.matches("#decrementSucursales")) {
      const inputSucursales = document.getElementById("inputSucursales");
      handleDecrementClick(inputSucursales, 1);
      updatePrices();
    }

    if (e.target.matches("#incrementSucursales")) {
      const inputSucursales = document.getElementById("inputSucursales");
      handleIncrementClick(inputSucursales, 10000);
      updatePrices();
    }

    // ------ Pagos ------
    if (e.target.matches("#inputPagoInstalacion")) {
      updateSwitchInput("inputPagoInstalacion");
      updatePrices();
    }

    if (e.target.matches("#inputPagoRenta")) {
      updateSwitchInput("inputPagoRenta");
      updatePrices();
    }

    if (e.target.matches("#monedaUSD")) {
      saveAndUpdateLocalStorage("moneda", "usd");
      reloadLastCurrencyValue();
      updatePrices();
    }

    if (e.target.matches("#monedaMXN")) {
      saveAndUpdateLocalStorage("moneda", "mxn");
      reloadLastCurrencyValue();
      updatePrices();
    }

    // ------ Botones de contratar ------

    // if (e.target.closest("#btnCotizarStarter")) {
    //     quotePackage("Starter");
    // }

    if (e.target.closest("#btnCotizarGrow")) {
      quotePackage("grow");
    }

    if (e.target.closest("#btnCotizarInstitutional")) {
      quotePackage("institutional");
    }

    if (e.target.closest("#btnCotizarManufacturing")) {
      quotePackage("manufacturing");
    }

    if (e.target.closest("#btnCotizarEnterprise")) {
      quotePackage("enterprise");
    }

    // if (e.target.closest("#btnCotizarInternationalEnterprise")) {
    //     quotePackage("InternationalEnterprise");
    // }
  });

  reloadLastLocalStorageValuesInInputs(inputs);
  reloadLastLocalStorageValuesInSwitchInputs(inputsSwitches);
  reloadLastCurrencyValue();
  updatePrices();

  /** ----------------------------------- FINAL ----------------------------------- */
}
