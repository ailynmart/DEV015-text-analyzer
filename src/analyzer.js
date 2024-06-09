const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    let palabras = text.split(" ");
    return palabras.length;
    
},

  getCharacterCount: (text) => {

  console.log(text);
  return text.length; 
}, 
  getCharacterCountExcludingSpaces: (text) => {
    let textLimpio = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    return textLimpio.length;
 
},
  getAverageWordLength: (text) => {  
       // Divide el texto en palabras
    let palabras = text.split(/\s+/);
    let sumaLongitudes = 0;

    // Itera sobre cada palabra y suma sus longitudes
    palabras.forEach(function(palabra) {
        sumaLongitudes += palabra.length;

    });

    // Calcula la longitud media dividiendo la suma por el número total de palabras
    let longitudMedia = (sumaLongitudes / palabras.length).toFixed(2);

    return longitudMedia;
   
    
},
  getNumberCount: (text) => {      //función flecha
 
const number = text.match(/\b\d+(\.\d+)?\b/g);   //la funcion  (/\d+/g) sirve oara buscar los num del text, la g indica que la busqueda debe hacerse en TODO EL TEXT
if(number === null){  //Se esta verificando si hay num en el text, (number es null) la funcion devolvera 0
  return 0; 
}                        
else{ 
  return number.length   // si hay num en el text se devuelve la longitud  del array de "number" de mi const, que representa los num encontrados
}
},
  
  getNumberSum: (text) => {
    
  let number = text.match(/\b\d+(\.\d+)?\b/g); // Encuentra todos los números usando una expresión regular
  let sum = 0;
     if (number !== null) {
      for (var i = 0; i < number.length; i++) {
         sum += parseFloat(number[i], 10);  // Suma los números encontrados después de convertirlos a enteros
      
          }
      }
     return sum;
},
}

//el codigo de las funciones que necesitas que te arrojen los resultados de tus metricas
export default analyzer;
