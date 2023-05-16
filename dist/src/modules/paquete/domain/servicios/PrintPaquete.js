/**
 * @author Raul Galindo
 * @description Responsabilidad: Imprimir los valores en el DOM de un paquete en especifico.
 */
// import {
//     obtenerElementosDelDom,
//     actualizarTextContent
//   } from '../../utils/DOM/Dom.js'
//   import { CapitalizeFirstWord } from '../../utils/TextManipulation/PlainText.js'
//   import { modulosPaquetes } from '../../data/ModulosPaquete.js'
//   import { atributosPaquetes } from '../../data/InformacionPaquetes.js'
// export function printCostosTotales (nombrePaquete, costosTotales) {
//   const nombrePaqueteMayuscula = CapitalizeFirstWord(nombrePaquete)
//   for (const paquete in costosTotales) {
//     const atributos = costosTotales[paquete]
//     for (const atributo in atributos) {
//       const valorDelAtributo = atributos[atributo]
//       if (typeof valorDelAtributo === 'number') {
//         const span = obtenerElementosDelDom(
//           `${atributo}${nombrePaqueteMayuscula}`
//         )
//         span.forEach((elemento) => {
//           actualizarTextContent(elemento, valorDelAtributo)
//         })
//       }
//     }
//   }
// }
// export function printCostosPaquetes (nombrePaquete, costosPaquetes) {
//   const nombrePaqueteMayuscula = CapitalizeFirstWord(nombrePaquete)
//   for (const paquete in costosPaquetes) {
//     const atributos = costosPaquetes[paquete]
//     for (const atributo in atributos) {
//       const valorDelAtributo = atributos[atributo]
//       const span = obtenerElementosDelDom(
//         `${atributo}${nombrePaqueteMayuscula}`
//       )
//       span.forEach((elemento) => {
//         typeof valorDelAtributo === 'number'
//           ? actualizarTextContent(elemento, `$${valorDelAtributo}`)
//           : actualizarTextContent(elemento, valorDelAtributo)
//       })
//     }
//   }
// }
// export function printInformacionPaquete (paquetes, idTabla) {
//   const tabla = document.getElementById(idTabla)
//   const tr = document.createElement('tr')
//   const tdHeader = document.createElement('td')
//   tr.setAttribute(
//     'class',
//     'flex justify-center items-start h-fit w-[114.2rem] text-center'
//   )
//   tdHeader.setAttribute('class', 'flex flex-col justify-start w-[13rem] px-0')
//   let aux = 0
//   tr.appendChild(tdHeader)
//   for (const paquete in paquetes) {
//     const tdPaquete = document.createElement('td')
//     tdPaquete.setAttribute(
//       'class',
//       'flex flex-col justify-start w-[20rem] px-0'
//     )
//     const atributosPaquete = paquetes[paquete]
//     for (const atributo in atributosPaquete) {
//       if (aux === 0) {
//         tdHeader.innerHTML += `
//       <span class="py-4 px-4 border-r border-b">${atributo} </span>        
//       `
//       }
//       tdPaquete.innerHTML += `
//       <span class="py-4 px-4 border-r border-b">${atributosPaquete[atributo]} </span>        
//       `
//     }
//     aux++
//     tr.appendChild(tdPaquete)
//   }
//   tabla.appendChild(tr)
// }
// /**
//  * 1- Crear un tr
//  * 2- El primer td es el de modulo
//  * 3- Los demas td son los submodulos
//  * 4- tableBody
//  */
// export function printModulosPaquetes (paquetes, idTabla) {
//   const tabla = document.getElementById(idTabla)
//   for (const paquete in paquetes) {
//     const modulos = paquetes[paquete]
//     const tr = document.createElement('tr')
//     tr.setAttribute(
//       'class',
//       'flex justify-center items-end h-fit w-[114.2rem] text-center'
//     )
//     for (const modulo in modulos) {
//       const tdModulo = document.createElement('td')
//       tdModulo.setAttribute('class', 'flex flex-col justify-center w-[13rem]')
//       tdModulo.innerHTML = `
//         ${modulo}
//       `
//       tr.appendChild(tdModulo)
//       console.log('Paquete:', paquete, 'Modulo:', modulo)
//       for (const subModulo in modulos[modulo]) {
//         const tdSubModulo = document.createElement('td')
//         tdSubModulo.setAttribute(
//           'class',
//           'flex flex-col justify-center w-[20rem] px-0 border-x border-b'
//         )
//         tdSubModulo.innerHTML = `
//         <span class="py-4"> ${subModulo} </span>
//       `
//         tr.appendChild(tdSubModulo)
//       }
//       tabla.appendChild(tr)
//     }
//   }
// }  
