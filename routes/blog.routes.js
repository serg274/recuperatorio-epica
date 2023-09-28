// const router = require('express').Router();

const { Router } = require('express');
const {
  actualizarPublicacion,
  crearPublicacion,
  eliminarPublicacion,
  obtenerPublicaciones,
  obtenerPublicacion,
} = require("../controllers/blog.controllers");
const router = Router()

// =====================================
//      RUTAS PARA RENDERIZAR VISTAS
// =====================================

// Vista principal
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/publicaciones', (req, res) => {
    res.render('home')
})

// Ruta para devolver la vista para administrar publicaciones
router.get('/admin/publicaciones', (req, res) => {
    return res.render('tabla-publicaciones')
})

// Ruta para devolver la vista para agregar nueva publicación
router.get('/admin/nueva-publicacion', (req, res)=> {
    return res.render('nueva-publicacion')
})

// Ruta para devolver la vista para editar publicación existente
router.get('/admin/editar-publicacion/:id', (req, res)=> {
    res.render('editar-publicacion', { id: req.params.id })
})


// =====================================
//      RUTAS PARA MANEJAR DATOS
// =====================================

// Crear nueva publicación
router.post('/api/publicaciones', crearPublicacion);

// Obtener todas las publicaciones
router.get('/api/publicaciones', obtenerPublicaciones);

// Obtener una publicación
router.get('/api/publicacion/:id', obtenerPublicacion)

// Actualizar una publicación
router.put('/api/publicacion/:id', actualizarPublicacion);

// Eliminar una publicación
router.delete('/api/publicacion/:id', eliminarPublicacion);


module.exports = router;