const arrayForTesting = [1,2,3,4,5];

for(let i = 0; arrayForTesting.length > i; i++ ){
    console.log(`Printing inside of the regular FOR -> ${arrayForTesting[i]}`);
}

const joan = {
    nombre: 'Joan',
    apellido: 'Esquivel',
    edad: 25
}

for(const prop in joan){
    console.log(`Key: ${prop} - Value: ${joan[prop]}`);
};

for(const number of arrayForTesting){
    console.log(`Printing from For Of -> ${number}`);
}

//Difference between FOR OF & FOR EACH
//-> The forEach loop is another type of for loop in JavaScript. However, forEach() is actually an array method, 
//-> so it can only be used exclusively with arrays. There is also no way to stop or break a forEach loop. If you need that 
//-> type of behavior in your loop, you’ll have to use a basic for loop.