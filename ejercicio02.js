function createPhoneNumber(array) {
    let PhoneNumber 
    for (let i=0; i < array.length; i++){
        let a = array[i].toString()
        if (a.length !== 1 || typeof array[i]!== "number" || array.length !== 10){
            PhoneNumber = "El siguiente formato ingresado es incorrecto :("
            break;
        } else{
            PhoneNumber = "(" + array[0] + array[1] + array[2] + ")" + array [3] + array [4] + array [5] + "-" + array[6] + array[7] + array[8] + array[9] + array[10];
        }
    }
    console.log(PhoneNumber)
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])

