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
  konami.addEventListener("keydown", function(event){
    if (konami.key==="e"){
      console.log("an e was pressed!") 
    }
  })
}
