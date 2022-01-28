
    //Primitivos
    //---------------------
    /*
    string, number, boolean, null, undefined, NaN.
    */
   let stringTest = 'String Text';
   console.log('----- String ------');
   console.log(stringTest);
   let numberTest = 20;
   console.log('----- Number ------');
   console.log(numberTest);
   let booleanTest = false;
   console.log('----- Boolean False ------');
   console.log(booleanTest);
   let booleanTest2 = true;
   console.log('----- Boolean True ------');
   console.log(booleanTest2);
   //---------------------

   //Compuestos
  //---------------------
  
   let car1 = {
       type: 'Honda',
       model: 'Civic',
       color:'White'
   };
   console.log('------ Object #1 -------')
   console.log(car1);

   const car2 = {
       type: 'Susuki',
       model: 'Ignis',
       color:'Black'
   };
   console.log('------ Object #2 -------')
   console.log(car2);

   console.log('------ Array of Objects -------')
   let carsArray = [car1, car2];
   console.log(carsArray);

   console.log('------ Array of Multiple values -------')
   let testArray = [car1, carsArray, 2, 'text'];
   console.log(testArray);
