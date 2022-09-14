let input =document.querySelector("input");





function handleInput(event){
  if(event.keyCode===13 && input.value) {
    let userName=input.value;
    console.log(input.value)
  }
}

input.addEventListener("keydown",handleInput)