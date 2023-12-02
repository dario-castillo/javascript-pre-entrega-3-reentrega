class Presupuestador {
    constructor(costoDibujo, dificultadEstilo, dificultadFormato,cantidad) {
        this.costoDibujo = parseInt(costoDibujo) || 1
        this.dificultadEstilo = parseFloat(dificultadEstilo) || 1
        this.dificultadFormato = parseFloat(dificultadFormato) || 1
        this.cantidad = parseInt(cantidad) || 1
    }
    presupuestar() {
        return (this.costoDibujo * this.dificultadEstilo * this.dificultadFormato * this.cantidad)
    }

}