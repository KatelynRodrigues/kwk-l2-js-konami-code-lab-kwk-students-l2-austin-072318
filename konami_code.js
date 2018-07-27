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

const input = document.querySelector('body')
 

input.addEventListener('keydown', function(e) {
  console.log(e.key)
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
