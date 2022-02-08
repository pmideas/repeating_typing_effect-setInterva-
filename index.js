
var texts= ['live your dreams','listen to your heart'];
//  debugger;
var letters="";
var currentText ="";
var count = 0;
var index = 0;

(function typing(){

   if (count === texts.length){
   count = 0; 
  
}


currentText= texts[count]
   
   letters = currentText.slice(0,  ++index);
   console.log(letters)


document.querySelector(".typing").textContent=letters;

if(letters.length === currentText.length ){
count++;
index=0; 
console.log(index)
}

setTimeout(typing,400)

}


())



