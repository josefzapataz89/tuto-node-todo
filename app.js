const argv = require('./config/yargs').argv;
const color = require('colors');

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        
        break;
    
    case 'listar':

        let listado = porHacer.getListado();

        listado.forEach((item) => {
            console.log('========================POR HACER======================='.green);
            console.log(item.descripcion);
            console.log(`Estado: ${item.completado ? 'Terminada' : 'Pendiente'}`);
            console.log('========================================================'.green);
            
        });
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        
        break;

    default:
        console.log('Comando no es reconocido');
        break;        
}
