let jugaor = 0
let min = 1
let max = 3
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//math.floor-entero--math.random-aleatorio
let pc = aleatorio(1,3)
let jugador = prompt("elije 1 para piedra, 2 para papel , 3 para tijera ")
//alert("elegiste " + jugador )
if(jugador ==1){
    alert("elegiste 🥌 ")
}else if(jugador ==2){
    alert("elegiste 🧻")
}else if(jugador == 3){
    alert("elegiste ✂ ")
}else{
    alert("elejiste perder!")
}
if(pc ==1){
    alert("pc elije 🥌 ")
}else if(pc ==2){
    alert("pc elije 🧻")
}else if(pc == 3){
    alert("pc elije ✂ ")
}
//combate
if(pc == jugador){
    alert("empate!")
}else if (jugador == 1 && pc == 3){
    alert("ganaste!")
}else if(jugador == 2 && pc == 1){
    alert("ganaste!")
}else if(jugador == 3 && pc == 2){
    alert("ganaste!")   
}
else{
    alert("perdiste!")
}


