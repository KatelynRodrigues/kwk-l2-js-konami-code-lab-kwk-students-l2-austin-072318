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

function init() {
  let i = 0
  const konami = document.querySelector("body")
  konami.addEventListener("keydown", function onKeyDownHandler(e){
    const key = e.key
    for (key in codes){
      if (key===codes[i]){
        i++
        if (index === codes.length){
          alert("Hurray!")
          i = 0
        }
      } 
      
      else {
        alert("Please try again!")
        i = 0
      }
    }
  })
    }
