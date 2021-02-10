function sum(a,b)
{
    if(arguments.length !=2) 
        throw new Error('Invalid Input Parameters');
    return a + b;
}

//console.log(sum(3,4));
console.log(sum());
//console.log(sum(1));
//console.log(sum(3,4,5));