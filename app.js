const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const colors = require('colors');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await getLugarLatLng(direccion);
        let temp = await getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp} °C`.green;
    } catch (e) {
        return `Lo sentimos, no es posible determinar el clima de ${direccion}`.red;
    }

}

getInfo(argv.direccion)
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log(e));