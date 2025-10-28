function obtenerPokemones(){
    fetch("https://pokeapi.co/api/v2/pokemon")
.then((response) => response.json())  // Convierte los datos a json
.then(data => {  // Crea una nueva funcion, pasando los datos obtenidos como parámetro
    console.log(data)  // (O cualquier código js)
})
}