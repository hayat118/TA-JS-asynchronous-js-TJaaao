    let ulRoot=document.querySelector(".todos");
    let todoInput=document.querySelector(`input[type="text"]`);



const baseURL=`https://basic-todo-api.vercel.app/api/`;

function handleDelete(id){
  fetch(baseURL + `todo/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(()=>{
    displayTodos();
  })
}

function handleToggle(id,status){
  let data={
    todo:{
      isCompleted:!status,
    },
  }
  fetch(baseURL + `todo/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(()=>{
    displayTodos();
  })
}

function handleEdit(event,id){
   let data={
    todo:{
      title:event.target.value,
    },
  }
  fetch(baseURL + `todo/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(()=>{
    displayTodos();
  })

let input =document.createElement('input');
let p=event.target;
   input.value=event.target.innerText;
   input.addEventListener("keyup",(event)=>{
     if(event.keyCode===13 && event.target.value){
          let data={
    todo:{
      title:event.target.value,
    },
  }
  fetch(baseURL + `todo/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(()=>{
    displayTodos();
  })

     }
   })
let parent=event.target.parentElement;
parent.replaceChild(input,p)
console.log(input,p,parent)

}


function createUI(data){
  ulRoot.innerHTML="";
  data.forEach((todo,i)=>{
    let li=document.createElement("li");
    let input=document.createElement("input");
        input.type="checkbox";
        input.checked=todo.isCompleted;
        input.addEventListener("click",()=>handleToggle(todo._id,todo.isCompleted))
        input.setAttribute("data-id",todo._id)
    let p=document.createElement("p");
        p.innerText=todo.title;
        p.addEventListener("dblClick",(event)=>handleEdit(event,todo._id))
    let span=document.createElement("span");
        span.innerText="X";
        span.addEventListener("click",()=>handleDelete(todo._id))
        span.setAttribute("data-id",todo._id);
    li.append(input,p,span);
    ulRoot.append(li);
    

  })
};
function displayTodos(){
fetch(baseURL + "todo").then(response=>response.json()).then((allTodos)=>{
  console.log(allTodos.todos)
  createUI(allTodos.todos)
})
}


function addTodo(event){
  if(event.keyCode===13 && event.target.value.trim()){
    let data={
      todo:{
        title:event.target.value,
        isCompleted:false,
      }
    }

    fetch(baseURL + "todo", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(()=>{
    event.target.value=""
    displayTodos();
  })
  }
}


todoInput.addEventListener("keyup",addTodo)
displayTodos();