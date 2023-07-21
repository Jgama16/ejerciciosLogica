function next_pal(){
    let inicial = numero + 1;
    let new_pal = 0;

    for (let i = inicial; new_pal === 0; i++){
        let a = i.toString()
        let b = []
        for (let j = a.length;j > 0 ; j--) {
            let c = a [j-1]
            b.push(c)
        }
        let num_alr = b.join("")
        let c = num_alr
        if (a === c) {
            new_pal = c;
        } else {
            new_pal = 0;
        }
    }
    console.log(new_pal)
}

next_pal(200)