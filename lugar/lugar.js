const axios = require('axios');

const getLugarLatLng = async lugar => {

    let encodeUrl = encodeURI(lugar);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key= AIzaSyDzdDbQrPMYS3jgQAXxZ6M2j4V9IMpbvnM`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${lugar}`);
    }

    let direccion, lat, lng;

    respuesta.data.results.forEach(resultados => {
        direccion = resultados.formatted_address;
        lat = resultados.geometry.location.lat;
        lng = resultados.geometry.location.lng;
    })
    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}