/*jshint esversion: 6 */
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
};

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
};

const getListadoFiltrado = (completado) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.completado === completado;
    });
    console.log('elementos originales: ', listadoPorHacer.length);
    console.log('elementos filtrados: ', nuevoListado.length);
    return nuevoListado;
};

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getListadoFiltrado
};