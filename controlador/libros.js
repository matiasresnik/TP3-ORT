import Servicio from '../servicio/libros.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    //obtenerProductos(req,res) {
    //obtenerProductos = (function(req,res) {

    /*obtenerLibro = async (req,res) => {
        const { id } = req.params
        const productos = await this.servicio.obtenerLibro(id)
        res.json(productos)
    //}).bind(this)
    }*/

    obtenerLibros = async (req,res) => {
        const { id } = req.params
        const productos = await this.servicio.obtenerLibros(id)
        res.json(productos)
    //}).bind(this)
    }

    guardarLibro = async (req,res) => {
        const producto = req.body
        const productoGuardado = await this.servicio.guardarLibro(producto)
        res.json(productoGuardado)
    }

    actualizarLibro = async (req,res) => {
        const { id } = req.params
        const producto = req.body
        const productoActualizado = await this.servicio.actualizarLibro(id, producto)
        res.json(productoActualizado)
    }

    borrarLibro = async (req,res) => {
        const { id } = req.params
        const productoEliminado = await this.servicio.borrarLibro(id)
        res.json(productoEliminado)
    }
}

export default Controlador