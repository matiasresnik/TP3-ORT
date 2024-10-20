class ModelMem {
    constructor() {
        this.libros = [
            { id: '1', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', anio: 1605},
            { id: '2', titulo: 'Historia de dos ciudades', autor: 'Charles Dickens', anio: 1704},
            { id: '3', titulo: 'El Señor de los Anillos', autor: 'J. R. R. Tolkien', anio: 1997},
            { id: '4', titulo: 'El principito', autor: 'Antoine de Saint-Exupery', anio: 1802},
            { id: '5', titulo: 'El hobbit', autor: 'J. R. R. Tolkien', anio: 1999},
        ]
    }

    obtenerLibros = async () => this.libros

    obtenerLibro = async id => {
        const libro = this.libros.find(l => l.id === id)
        return libro || {}
    }

    guardarLibro = async libro => {
        libro.id = String(parseInt(this.libros[this.libros.length-1]?.id || 0) + 1)  // ?. optional chaining

        libro.titulo = libro.titulo
        libro.autor = libro.autor
        libro.anio = parseInt(libro.anio)

        /*Un libro será representado con una estructura JSON (dentro de un array de libros) con los
        siguientes campos: id, titulo, autor, año.*/

        this.libros.push(libro)
        return libro    
    }

    actualizarLibro = async (id, libro) => {
        libro.id = id

        const index = this.libros.findIndex(p => p.id === id)
        if(index != -1) {
            const libroAnt = this.libros[index]
            const libroAct = { ...libroAnt, ...libro } // Spread Operator + Object Merge
            this.libros.splice(index, 1, libroAct)

            return libroAct
        }
        else {
            return {}
        }
    }

    borrarLibro = async id => {
        let libro = {}

        const index = this.libros.findIndex(p => p.id === id)
        if(index != -1) {
            libro = this.libros.splice(index, 1)[0]
        }

        return libro
    }
}

export default ModelMem