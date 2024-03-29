const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea.'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar un elemento por hacer.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
