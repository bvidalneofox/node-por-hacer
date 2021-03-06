const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) reject(err);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDb();

    return porHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}

const getListado = () => {
    cargarDB();

    return listadoPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        listadoPorHacer.splice(index,1);
        guardarDb();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}