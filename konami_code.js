const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
// Keys for A, B, and C keys.
const alphabet = ['a', 'b', 'c'];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}




const input = document.querySelector('body')

input.addEventListener('keydown', function(e) {
  console.log(e.key)
  
  onKeyDownHandler(e)
  
  
  
  // if (e.key === "g") {
  //   return e.preventDefault()
  // }
})

// function init() {
//   var konami = document.querySelector("body")
//   konami.addEventListener("keydown",function())
  
  
  
  // let i = 0
  // document.querySelector("body").addEventListener("keydown", function onKeyDownHandler(e){
  //   const key = e.key
  //   for (key in codes){
  //     if (key===codes[i]){
  //       i++
  //       if (index === codes.length){
  //         alert("Hurray!")
  //         i = 0
  //       }
  //     } 
      
  //     else {
  //       i = 0
  //     }
  //   }
  // })
//    }
