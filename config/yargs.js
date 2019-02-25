const descripcion = {
	alias: 'd',
	demand : true,
	desc: 'Descipcion de la tarea por hacer'
}

const completada = {
	alias: 'c',
	default : true,
	desc: 'Completa tarea por defecto'
}


const argv = require('yargs')
				.command('crear','Crea tarea por hacer', {
					descripcion
				})
				.command('actualizar', 'Actualiza tarea completada',{
					descripcion,
					completada
				})
				.command('listar','Muestra en consola la lista de tareas', {
					
				})
				.command('borrar', 'Borra una tarea',{
					descripcion
				})
				.help()
				.argv;
				
				
module.exports = {
	argv
}
