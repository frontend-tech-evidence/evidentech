class InputNumber extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')
        const idCapitalize = capitalizeWords(id)
        const min = 1
        const max = 10000
        const texto = this.getAttribute('texto')
        let value = reloadUltimoValorGuardado(1)

        // Render HTML
        this.innerHTML = `               
            <div class="flex flex-col">
                <!-- Titulo -->
                <span class="text-sm font-semibold leading-6 text-gray-900">${texto}</span>

                <!-- Buttons -->
                <div
                    class="bg-white mt-2 w-min rounded-full flex items-center border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                    <!-- Button - -->
                    <button id="decrement${idCapitalize}" class="w-6 text-center rounded-full border-0 px-1.5 py-1 text-gray-900">
                    -
                    </button>

                    <!-- Input -->
                    <input type="number" value="${value}" id="${idCapitalize}" autocomplete="${idCapitalize}"
                    class="text-center w-[4.5rem] rounded-full border-0 px-3.5 text-gray-900" />

                    <!-- Button + -->
                    <button id="increment${idCapitalize}" class="w-6 text-center rounded-full border-0 px-1.5 py-1 text-gray-900">
                    +
                    </button>
                </div>
            </div>
          `

        function capitalizeWords(text: string): string {
            const words = text.split(' ')
            const capitalizedWords = words.map((word: string) => {
                const firstLetter = word.charAt(0).toUpperCase()
                const restOfWord = word.slice(1)
                return firstLetter + restOfWord
            })
            return capitalizedWords.join(' ')
        }

        function reloadUltimoValorGuardado(value: number): number {
            const storedValue = localStorage.getItem(`${idCapitalize}`)

            if (storedValue) {
                value = parseInt(storedValue)
                return value
            }

            window.localStorage.setItem(`${idCapitalize}`, '1')
            return value
        }

        function estaDentroDeLimites(
            value: number,
            min: number,
            max: number
        ): boolean {
            const parsedValue = value
            return parsedValue > min && parsedValue < max ? true : false
        }

        function updateValorEnLocalStorage(id: string): void {
            const input = document.getElementById(id) as HTMLInputElement
            localStorage.setItem(id, input.value.toString())
        }

        window.document.addEventListener('keydown', (e) => {
            const targetElement = e.target as HTMLElement
            if (targetElement.closest(`#${idCapitalize}`)) {
                if (e.key === 'Enter') {
                    targetElement.blur()

                    if (estaDentroDeLimites(value, min, max)) {
                        updateValorEnLocalStorage(idCapitalize)
                        console.log('Hola')
                    }
                } else if (e.key === 'Escape') {
                    targetElement.blur()
                    // Realiza aquí las acciones necesarias al presionar "Escape"
                    console.log('Escape presionado')
                }
            }
        })

        window.document.addEventListener('input', (e) => {
            const targetElement = e.target as HTMLElement
            if (targetElement.closest(`#${idCapitalize}`)) {
                if (estaDentroDeLimites(value, min, max)) {
                    updateValorEnLocalStorage(idCapitalize)
                    console.log('Hola')
                }
            }
        })
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
    customElements.define('input-number', InputNumber)
}
