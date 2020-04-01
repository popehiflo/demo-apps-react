
// const elemento = document.createElement('h1')

// elemento.innerHTML = "Hola React!"

// const conteneder = document.getElementById('root')

// conteneder.appendChild(elemento)

import React from "react"
import ReactDOM from "react-dom"

const elemento = <h1>Hi React!</h1>
const container = document.getElementById('root')

ReactDOM.render(elemento, container)
