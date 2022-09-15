let searchElm=document.querySelector("input")
let root=document.querySelector(".news");


const url=`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

function fetch(url){
  return new Promise((resolve,reject)=>{
    let xhr=new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload=()=>resolve(JSON.parse(xhr.response));
        xhr.onerror=()=>reject('somethoing went wrong');
        xhr.send();
  });
}

function displayNews(news){
  // root.innerHTML="";
  news.forEach(news=>{
      let img=document.querySelector("img")
      let h2=document.querySelector("h2")
      let p=document.querySelector("p")
      let button=document.querySelector("button")
  })
};

fetch(url)
   .then(displayNews)
   .catch((error)=>console.log(error));


function handleSearchElm(event){
  if(event.keycode===13 && event.value){
   fetch(url(searchElm.value))
   .then((searchResult)=>{
     displayNews(searchResult.results);
   })
   .catch((error)=>console.log(error));
   searchElm.value="";
  }
}
searchElm.addEventListener("keydown",handleSearchElm)
