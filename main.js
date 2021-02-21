(function () {
    "use strict"

    var marca = document.getElementById("Marca")
    var modelo = document.getElementById("Modelo")
    var presupuesto = document.getElementById("Presupuesto")
    var transmision = document.getElementById("transmision")
    var cotizar = document.getElementById("Cotizar")
    var container = document.querySelector(".container")
    var image = document.getElementById("image")

    function obtenerTipo(i) {
        var result = ''
        for (var j = 0; j < autos[i].colors.length; j++) {
            if (j === 0) {
                result = result + autos[i].colors[j]
            } else {
                result = result + ', ' + autos[i].colors[j]
            }
        }
        return result;
    }

    cotizar.addEventListener('click', function () {
        
        var validacion = false;
        container.innerHTML = ""

        if (parseInt(presupuesto.value) < 15000 || parseInt(presupuesto.value) > 150000) {
            alert("El presupuesto debe estar en el rango de $15,000 y $150,000")
        }

        for (var i = 0; i < autos.length; i++) {
            if (marca.value === autos[i].make && modelo.value == autos[i].year && transmision.value === autos[i].transmision) {
                validacion = true;
                if (presupuesto.value >= 15000 && presupuesto.value <= 150000 && presupuesto.value >= ((autos[i].price) * (0.2))) {
                    image.innerHTML = ""

                    var card = document.createElement('section')
                    card.classList.add('card')
                    card.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png" alt="1">'
                        + '<h6>Nombre: ' + autos[i].model + '<BR>'
                        + 'Marca: ' + autos[i].make + '<BR>'
                        + 'Modelo: ' + autos[i].year + '<BR>'
                        + 'Colores: ' + obtenerTipo(i) + '<BR>'
                        + 'Precio: ' + autos[i].price + '</h6>'
                    container.appendChild(card)

                }
               
            }
        }
        if (validacion === false) {
            alert("No existen autos con las especificaciones ingresadas")
        }

    })

})()
