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
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  let index = 0
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
})