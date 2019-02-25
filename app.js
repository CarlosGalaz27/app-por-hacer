//require
var colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
		break;
		
	case 'listar':
		let listado = porHacer.getListado();
		for(let tarea of listado){
			console.log('============Por Hacer============='.green);
			console.log('Tarea:	   ', tarea.descripcion);
			console.log('Completada:', tarea.completada);
			console.log('=================================='.green);
		}
		break;
		
	case 'actualizar': 
		let actualiza = porHacer.actualizar(argv.descripcion, argv.completada);
		console.log(actualiza);
		break;
		
	case 'borrar' : 
		let result = porHacer.borrar(argv.descripcion);
		console.log(result);
		break;
		
	default:
		console.log('Comando no reconocido, favor consule la ayuda');
}