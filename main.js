// Question 1//

var number = 15
var number2 = 16

console.log (number + number2)

// Question 2//

var text = "this is text "
var text2 = "this is also text"

console.log(text + text2);

// Question 3//

var beer = {
  american:"bud",
  english:"newcsatle",
  german:"heineken",
  dutch:"stella artois",
  brews: ["ipa","pilsner","light","draught"]
}

console.log(beer);

var sports = [["hockey","baseball","golf","football"],["ice hockey","softball","flag football"]]

console.log(sports[1][2]);

var numb = 15
  if(numb<100){
    alert("This is less than 100")

  } else {
    alert("this is greaters than 100")
  }

// Question 4//
var numb = 150
  if(numb<100){
    alert("This is less than 100")
  }
  else {
    alert("this is greaters than 100")
  }

// Question 5//
var phrase = prompt ("This is a phrase")
  if(phrase == "this is a phrase"){
      alert("this is right")
}
  else {
    alert("you fkd up")
  }


// Question 5//
var chooseName= prompt("Enter A Name")
  function someName(name){
    return(name);
}
  alert(someName(chooseName))

// // Question 7//
function vinnie(){
  }
  vinnie();
  console.log("Hey")

// QUestion 8//
function doorPrize(doorNumber) {
 if(doorNumber == 1) {
    alert("YOU WIN 2MILLION DOLLHAIRS!!")
 }
 else if(doorNumber == 2) {
    alert("YOU WIN A DREAMCAST MEMORY CARD!")
 }
 else if(doorNumber == 3) {
    alert("YOU WIN A VHS COPY OF DISNEY'S ALADIN!")
 }
 else {
   alert("Wow theres 3 d1oors bruh")
 }
}
