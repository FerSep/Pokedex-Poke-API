
let colors = {
    grass: '#7AC74C',
    poison: '#A33EA1'
}
//comparar la entrada de un color con la clave del objeto, y devolver el valor de esa clave

function cc (color){
   
    const colorValue = Object.keys(colors).find(key => key === color)
    

    console.log(colors[colorValue])
}
cc('grass')