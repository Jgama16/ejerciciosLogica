function drawX(tamano){
    if(tamano % 2=== 0){
        console.log("El tamaño que debe poner debe ser un numero impar. ");
        return;
    }
    for(let i = 0; i < tamano; j++){
        let row = "";
        for (let j = 0; j < tamano; j++){
            if(i === j || i + j === tamano - 1){
                row += "*";
            }else{
                row += " ";
            }
        }
        console.log(row);
    }
}

drawX(5);