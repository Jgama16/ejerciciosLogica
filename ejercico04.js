// fizz buzz
const comienzo = 1;
const final = 100;
let result = '0';
let x3, x5;

for (let i = comienzo; i <= final; i++)
{
    result += ', ';
    x3 = i% 3 == 0;
    x5 = i% 5 == 0;

    if (x3  || x5) {
        if (x3) result += 'fizz';
        if (x5) result += 'buzz';
    } else result += i;
}

console.log(result);
