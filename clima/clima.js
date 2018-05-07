const axios = require('axios');

const getClima = async(lat, lng) => {

    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=es&appid=234d4bfd27d8a5c1316ec71e992156c7`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados de la temperatura para la ciudad ${lugar}`);
    }

    return respuesta.data.main.temp;
};

module.exports = {
    getClima
}