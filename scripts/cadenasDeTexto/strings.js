   //---------------- Cadenas de texto y Template Strings
   console.log("---------------- Cadenas de texto y Template Strings");
   //Poner atencion a comas y punto y coma.
   let cadenaDeTexto1 = 'Cadena 1',
       cadenaDeTexto2 = "Cadena 2", 
       cadenaDeTexto3 = ` Cadena 3`;

   console.log('Imprimiendo ' + cadenaDeTexto1 + '.');
   console.log("Imprimiendo " + cadenaDeTexto2 + ".");
   console.log(`Imprimiendo las cadenas de text "${cadenaDeTexto1}", '${cadenaDeTexto2}' y por ultimo la cadena de text ${cadenaDeTexto3}.`);

   //String methods
   console.log('Cadena Normal:-' + cadenaDeTexto3);
   console.log('To Upper Case: ' + cadenaDeTexto3.toUpperCase());
   console.log('To Lower Case: ' + cadenaDeTexto3.toLowerCase());
   console.log('Includes: ' + cadenaDeTexto3.includes('Cad'));
   console.log('Includes: ' + cadenaDeTexto3.includes('cad'));
   //Quita espacios en blancodel final e inicio
   console.log('Trim:-' + cadenaDeTexto3.trim());
   console.log("Split: " + cadenaDeTexto3.split(" "));
   console.log(cadenaDeTexto3.split(" "));