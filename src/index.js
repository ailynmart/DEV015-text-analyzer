import analyzer from './analyzer.js';
console.log(analyzer)


  const textarea=document.querySelector("textarea");
textarea.addEventListener("input",function() {  
  
   const characterCount = analyzer.getCharacterCount(textarea.value); 
   console.log(characterCount); 
   const letras = document.querySelector ('li[data-testid="character-count"]');
   const palabras = document.querySelector ('li[data-testid="word-count"]');
   const espacioNulo = document.querySelector ('li[data-testid="character-no-spaces-count"]');
   const numeros = document.querySelector ('li[data-testid="number-count"]');
   const sum = document.querySelector ('li[data-testid="number-sum"]');
   const longitud = document.querySelector ('li[data-testid="word-length-average"]')
console.log(letras)

   letras.textContent = "Número de letras:" + analyzer.getCharacterCount(textarea.value)
   palabras.textContent = "Número de palabras:" + analyzer.getWordCount(textarea.value)
   espacioNulo.textContent = "letras sin espacio:" + analyzer.getCharacterCountExcludingSpaces(textarea.value) 
   numeros.textContent = "numeros:" +  analyzer.getNumberCount(textarea.value)
   sum.textContent = "suma de numeros:" + analyzer.getNumberSum(textarea.value)
   longitud.textContent = "longitud:" + analyzer.getAverageWordLength(textarea.value)

});

const resetbutton = document.getElementById("reset-button");
 resetbutton.addEventListener ("click", () => { 
 textarea.value = '';
 letras.textContent = "Número de letras: 0"
 palabras.textContent = "Número de palabras:0"
 espacioNulo.textContent = "letras sin espacio:0"
 numeros.textContent = "numeros:0"
 sum.textContent = "suma de numeros:0"
 longitud.textContent = "longitud:0"

console.log ("eliminar")

 });


