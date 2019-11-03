const fs = require('fs');

let listadoPorHacer = [];

const cargaDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const getListado = () => {
    cargaDB();

    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargaDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargaDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion )

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }

    return false;
}

const borrar = (descripcion) => {
    cargaDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length !== nuevoListado.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

    return false;

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
