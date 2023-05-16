class PaqueteCard extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')
        const idCapitalize = capitalizeWords(id)
        const isTop = isTopVentas(this.getAttribute('top'))

        // Render HTML
        this.innerHTML = ` 
          <div class="flex flex-col gap-y-0 w-[20rem]">
  
              ${isTop}
  
              <div class="py-6 border-x border-y border-gray-900/10">
                  <!-- Header -->
                  <div class="mb-4 flex flex-col items-center gap-y-1 px-4">
                      <img class="w-10" src="/src/assets/evidence-logos/${id}-icon.svg" alt="Icono de logo ${id}">
  
                      <span
                          class="flex gap-x-1 items-center justify-center text-center text-lg text-sm font-semibold leading-6 text-gray-900">
                          ${idCapitalize}</span>
                  </div>
  
                  <!-- Precios -->
                  <div class="flex flex-col items-center gap-y-1 px-4">
                      <!-- Costo inicial -->
                      <div class="flex flex-row items-center justify-center text-gray-900">
                          <span class="costoPrimerAno${idCapitalize} font-bold text-[2rem] leading-6 text-black"></span>
                          <span class="spanMoneda ml-1 text-sm leading-6 text-gray-600"></span>
                          <span class="ml-1 text-sm leading-6 text-gray-600">
                              <span class="spanPagos">
                              </span></span>
                      </div>
  
                      <!-- Costo segundo año -->
                      <div class="flex flex-col gap-y-2 mt-4 items-center">
                          <span
                              class="font-bold text-xs leading-6 text-black underline w-[13rem]">Contrata
                              hoy y el 2° año te costara:</span>
                          <div class="flex flex-row items-center text-gray-900">
                              <span class="costoSegundoAno${idCapitalize} font-bold text-lg leading-6 text-black"></span>
                              <span class="spanMoneda ml-1 text-sm leading-6 text-gray-600"></span>
                              <span class="ml-1 text-sm leading-6 text-gray-600">
                                  <span class="spanPagos">
                                  </span></span>
                          </div>
  
                          <!-- CTA -->
                          <div class="mt-3 flex flex-col gap-y-2 text-sm font-semibold ">
                              <a id=btnCotizar${idCapitalize} href="http://127.0.0.1:8000/contratar-paquete"
                                  class="flex gap-x-0.5 justify-center items-center rounded-full bg-blue-500 px-8 py-2 text-white">Contratar
                                  Ahora
                                  <span >
                                      &rarr;</span></a>
  
                              <a id="btnContratar${idCapitalize}" href="http://127.0.0.1:8000/contratar-paquete"
                                  class="flex gap-x-0.5 justify-center items-center border-blue-500 rounded-full capitalize border px-8 py-2 text-blue-500">Obtener
                                  Cotización Online
                                  <span>
                                      &rarr;</span></a>
                          </div>
  
                          <!-------------------- Etiqueta de que ya no esta disponible -------------------->
                          <div>
                              <span id="error${id}"
                                  class="mt-4 bg-blue-300 cursor-not-allowed text-white py-2.5 px-3 text-sm text-center rounded-3xl hidden">
                                  No disp. para tus
                                  filtros
                                  actuales</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
          `

        function capitalizeWords(text: string) {
            const words = text.split(' ')
            const capitalizedWords = words.map((word: string) => {
                const firstLetter = word.charAt(0).toUpperCase()
                const restOfWord = word.slice(1)
                return firstLetter + restOfWord
            })
            return capitalizedWords.join(' ')
        }

        function isTopVentas(atributo: string) {
            let atributoFinal = ''

            if (atributo === 'true') {
                atributoFinal = `     
                        <div
                            class="flex gap-x-2 justify-center rounded-t-lg text-sm px-14 max-w-sm font-semibold bg-blue-600 text-white py-3 text-center">
                            <h2>
                                Top Ventas 2023
                            </h2>
                            <span>
                                ★★★★★
                            </span>
                        </div>
                        `
            }

            return atributoFinal
        }
    }

    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() {}

    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() {}
}

if ('customElements' in window) {
    customElements.define('paquete-card', PaqueteCard)
}
