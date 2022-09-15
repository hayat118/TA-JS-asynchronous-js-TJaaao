







let searchElm =document.querySelector("input");
let root=document.querySelector(".images");

const url="https://api.unsplash.com/photos/?client_id=joptt4GPL8B2cH5kyPCvzaSOhyhG1MzowM76hVz2_DQ"

const searchUrl=(query)=>
`https://api.unsplash.com/search/photos?query=${query}&client_id=joptt4GPL8B2cH5kyPCvzaSOhyhG1MzowM76hVz2_DQ`


function fetch(url){
  return new Promise((resolve,reject)=>{
  let xhr= new XMLHttpRequest();
      xhr.open("GET",url);

      xhr.onload= ()=>resolve(JSON.parse(xhr.response));
      xhr.onerror= ()=>reject('Somethimg went wrong');
      xhr.send();
  });
}

// let data=fetch(`https://api.github.com/users/getify`);




// function fetch(url,successHandler){
//   let xhr= new XMLHttpRequest();
//   xhr.open('GET',url);
//   xhr.onload=()=>successHandler(JSON.parse(xhr.response));

//   xhr.onerror=function(){
//     console.log(`Something went wrong`)
//   };
//   xhr.send();
// }

function displayImages(images){
  root.innerHTML=""
 images.forEach(image=>{
    let li=document.createElement("li");
    let img=document.createElement("img");
    img.src=image.urls.thumb;
    li.append(img);
    root.append(li);
  })
}

fetch(url)
   .then(displayImages)
   .catch((error)=>console.log(error));

function handleInput(event){
  if(event.keyCode===13 && searchElm.value) {
    fetch(searchUrl(searchElm.value))
       .then((searchResult)=>{
       displayImages(searchResult.results);
       })
       .catch((error)=>console.log(error));
       
       searchElm.value=""
    } ;
}

  

searchElm.addEventListener("keydown",handleInput);