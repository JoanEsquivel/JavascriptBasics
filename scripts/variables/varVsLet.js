 //-------------------- VAR VS LET -----------------
   //Hoisting -> https://developer.mozilla.org/es/docs/Glossary/Hoisting
   console.log('-------------------- VAR VS LET -----------------');

   var varTest = 'var test';
   let letTest = 'let test';
   let aux = 1;

   console.log('---------------- Before if: Var & Let Values ----------')
   console.log(varTest);
   console.log(letTest);

       if(aux === 1){
           var varTest = 'new var Test';
           let letTest = 'new let test';

           console.log('---------------- Inside if: Var & Let Values ----------')
           console.log(varTest);
           console.log(letTest);
       };
   console.log('---------------- After if: Var & Let Values ----------')
   console.log(varTest);
   console.log('! LET RESPECT CODE BLOCKS')
   console.log(letTest);