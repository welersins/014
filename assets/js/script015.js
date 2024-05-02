$(document).ready(function() {
    
    function obtenerDigimones() {
        $('obternerDigimones').click(function() {
            $.ajax({
                url: 'https://digimon-api.vercel.app/api/digimon',
                type: 'GET',
                success: function(data) {
                    mostrarDigimones(data);
                },
                error: function(xhr, status, error) {
                    console.log('error al obtener los datos;', error);
                }
            });
        });
    }
            

    //funcion para mostrar los digimon en cards
    function mostrarDigimones(digimones) {
        let digimonList ='';
        $.map(digimones, function(digimon) {
            let card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card-body">
                    <h2>${digimon.name}</h2>
                        {/* <img src="${digimon.img}"  class="card-img-top" alt="${digimon.name}"> */}
                        <div class="card-body">
                            <h5 class="card-title">${digimon.name}</h5>
                            <p class="card-text">Nivel: ${digimon.level}</p>
                            <p clsas="card-text">Tipo: ${digimon.type}</p>
                        </div>
                    </div>
                </div>
            `;
            digimonList += card;
        });
        $('digimonList').html(digimonList);
    }

    //ejecutar la funcion para mostrar los digimon
    obtenerDigimones();


    function mostrarDigimones(digimones) {
        var digimonList ='';
        digimones.forEach(function(digimon) {
            digimonList += `
                <div class="digimon">
                    <h2>${digimon.name}</h2>
                    <img src="${digimon.img}" alt="${digimon.name}">
                    <p>Nivel: ${digimon.level}</p>
                    <p>Tipo: ${digimon.type}</p>
                </div>
            `;
        });
        $('digimonList').html(digimonList);
    }

})