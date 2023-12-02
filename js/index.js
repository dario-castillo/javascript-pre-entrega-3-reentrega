const tipoDibujo = [
    {estilo: 'Dibujo a lápiz', dificultad: 1.2},
    {estilo: 'Ilustración en acrílico', dificultad: 1.5},
    {estilo: 'Ilustración al óleo', dificultad: 1.5},
    {estilo: 'Ilustración digital', dificultad: 1.9},
    {estilo: 'Retrato a lápiz', dificultad: 1.3},
    {estilo: 'Paisaje al óleo', dificultad: 1.7},
]

const tamanioDibujo = [
    {formato:'A4 (29,7 x 21 cm)', dificultad: 1.2},
    {formato:'A3 (29,7 x 42 cm)', dificultad: 1.3},
    {formato:'A2 (42 x 59,4 cm)', dificultad: 1.4},
]

const costoDibujo = 5000

const divPresupuestar = document.querySelector(".presupuestar")
const divDibujoConsultado = document.querySelector(".dibujoConsultado")

const formuNombre = document.querySelector("#nombre")
const formuEmail = document.querySelector("#email")
const formuTipoDibujo = document.querySelector("#tipoDibujo")
const formuCantidad = document.querySelector("#cantidad")
const formuTamanioDibujo = document.querySelector("#tamanioDibujo")

const botonCuantoCuesta = document.querySelector("#botonCuantoCuesta")
const botonQuieroMiDibujo = document.querySelector("button#botonQuiero")

// const tablaDibujoConsultado = document.querySelector("table tbody")

const valorDibujo = document.querySelector("span#valorDibujo")


function cargarTipoDibujo() {
    if (tipoDibujo.length > 0) {
        tipoDibujo.forEach((dibujo)=> {
            formuTipoDibujo.innerHTML += `<option>${dibujo.estilo}</option>`
        })
    }
}
cargarTipoDibujo()

function cargarTamanioDibujo() {
    if (tamanioDibujo.length > 0) {
        tamanioDibujo.forEach((dibujo)=> {
            formuTamanioDibujo.innerHTML += `<option>${dibujo.formato}</option>`
        })
    }
}
cargarTamanioDibujo()

function armarPresupuesto() {
    if (formuTipoDibujo.value !== "Estilo..." && formuTamanioDibujo.value !== "Formato..." && parseInt(formuCantidad.value)){
        let difEstilo = tipoDibujo.find((tipo)=> tipo.estilo === formuTipoDibujo.value)
        let difFormato = tamanioDibujo.find((tamanio)=> tamanio.formato === formuTamanioDibujo.value)
    
        const presu = new Presupuestador(costoDibujo, difEstilo.dificultad, difFormato.dificultad, formuCantidad.value)
        valorDibujo.innerText = presu.presupuestar()
        
        const spanTipoDibujo = document.querySelector("span.tipo-dibujo")
        const spanTamanioDibujo = document.querySelector("span.tamanio-dibujo")
        const spanCantidadDibujo = document.querySelector("span#cantidad-dibujo")
        
        spanTipoDibujo.textContent = formuTipoDibujo.value
        spanTamanioDibujo.textContent = formuTamanioDibujo.value
        spanCantidadDibujo.textContent = formuCantidad.value
        guardarPresupuesto()
        divDibujoConsultado.classList.remove("ocultar")
        divPresupuestar.classList.add("ocultar")
    }
    }  
    function guardarPresupuesto() {
        const historialPresupuesto = {
        fecha: new Date(),
        nombre: formuNombre.value,
        email: formuEmail.value,
        tipo: formuTipoDibujo.value,
        tamanio: formuTamanioDibujo.value,
        cantidad: formuCantidad.value,
        precio: valorDibujo.innerText,
    }
    localStorage.setItem("historialPresupuesto", JSON.stringify(historialPresupuesto))
}

botonCuantoCuesta.addEventListener("click", ()=> armarPresupuesto())

botonQuieroMiDibujo.addEventListener("click", ()=> {
    localStorage.clear()
    location.reload()
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Muchas gracias por tu pedido!",
        showConfirmButton: false,
        timer: 15500
    })
})

