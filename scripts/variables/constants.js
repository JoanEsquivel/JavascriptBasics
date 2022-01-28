//------------------- Const ----------------------------
   //---> Pointer vs Reference: https://www.geeksforgeeks.org/pointers-vs-references-cpp/
   console.log('-------------------- Const -----------------');
   //------ Datos primitivos
   const PI = 3.14;
   console.log('--> PI: ' + PI);
   //No se puede reasignar valores al ser constante
   // PI= 2;

   const car2 = {
    type: 'Susuki',
    model: 'Ignis',
    color:'Black'
   };

   console.log(`--> Car Object -> ${car2}`);

   const sampleArray = [1,2,3,4];
   console.log(`--> Array: -> ${sampleArray}`)

   console.log('-------- Reference Update --------')
   console.log('-------- Object update even if it is CONST --------')


   console.log(`Before Array Update`)
   console.log(car2);
   console.log(`After Array Update`)
   car2.color = 'Red'
   console.log(car2);

   console.log('-------- Array update even if it is CONST --------')
   console.log(`Before Array Update`)
   sampleArray.push('new push value');
   console.log(`After Array Update`)
   console.log(sampleArray);
   // console.log('Delete First value');
   // testArray.shift();
   // console.log(testArray);