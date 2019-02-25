const fs = require('fs');


let tareaPorHacer = [];

const guardarDB = ()=> {
	
	let data = JSON.stringify(tareaPorHacer);
	
		fs.writeFile('./db/data.json', data, (err) => {
		  if (err) throw new Error('No se logro guardar', err); 
		});
}

const cargarDB = ()=> {
	
	try{
		tareaPorHacer = require('../db/data.json');
	}catch(err){
		tareaPorHacer = [];
	}
	 
}

const crear = (descripcion)=> {
	
	cargarDB();
	
	let porHacer = {
		descripcion,
		completada:false
	};
	tareaPorHacer.push(porHacer);
	guardarDB();
	return porHacer;
	
}

const getListado = ()=> {
	cargarDB()
	return tareaPorHacer;
}

const actualizar = (descripcion, completada = true)=> {
	cargarDB();
	let index = tareaPorHacer.findIndex(tarea => {
		return tarea.descripcion === descripcion;
	})
	console.log(index)
	
	if(index >= 0){
		tareaPorHacer[index].completada = completada;
		guardarDB();
		return true;
	} else {
		return false;
	}
}

const borrar = (descripcion)=> {
	
	cargarDB();
	let index = tareaPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	})
	console.log(index);
	if(index >= 0){
		tareaPorHacer.splice(index,1);
		guardarDB();
		return true;
		
	} else {
		return 'no se encontro tarea';
	}
}

module.exports = {
	crear,
	actualizar,
	getListado,
	borrar
}