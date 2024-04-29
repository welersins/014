const obtenegerDigimonAsyncAwait = async() => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        
        if (!response.ok) {
            throw new Error('hubo un problema al obtener los datos de digimon');
        }

        const data  = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

// ejemplo de uso :
(async function() {
    try {
        const data = await obtenegerDigimonAsyncAwait();
        console.log('datos obetenidos ocn exito: ', data);
    } catch (error) {
        console.log('error al obtener los datos de digimon', error);
    }
})();