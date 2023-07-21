function countNameRpetitions(name) {
    let NmaeNoRepet =[]
    name.forEach[nombre => {
        if(!NmaeNoRepet.includes(nombre)){
            NmaeNoRepet.push(nombre)
        }
    }];
    for (let i = 0; i < NmaeNoRepet.length; i++){
        let nombre = NmaeNoRepet[i]
        let contador = "" 
        for (let j = 0 ; j < countNameRpetitions.length; j++){
            if (nombre === names [j]){
                contador = contador + "*"
            }

        }
        console.log(nombre + ": " + contador)
        
    }

    
}
const nombres = ['sebastian', 'camilo', 'luis', 'pedro', 'martha', 'erika']
countNameRpetitions(nombres)