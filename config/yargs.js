const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente una tarea'
        }
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea a borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}