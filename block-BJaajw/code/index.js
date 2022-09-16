
let newsElm=document.querySelector(".news");
let select=document.querySelector("select");
let allNews=[];


const url=`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;





function displayNews(news){
  newsElm.innerHTML="";
  news.forEach(newsItem=>{
      let li=document.createElement("li")
      let img=document.createElement("img")
          img.src=newsItem.imageUrl;
          img.alt=newsItem.title;
      let div=document.createElement("div")
      let span=document.createElement("span");
          span.classList.add('source');
          span.innerText=newsItem.newsSite;
      let h2=document.createElement("h2")
          h2.innerText=newsItem.title;
      let a=document.createElement("a")
          a.href=newsItem.url;
      let button=document.createElement("button")
         a.append(button);
          button.innerText="Read More"
      div.append(span,h2,a);
      li.append(img,div);
      newsElm.append(li);
  })
 

};

function displayOptions(sources){
  sources.forEach((source)=>{
  let option=document.createElement('option');
      option.innerText=source;
      option.value=source;
      select.append(option)
  })
}


fetch(url)
   .then((response)=>response.json())
   .then((news)=>{
    //  console.log(news)
    allNews=news;
    displayNews(news);
    let allSources=Array.from(new Set(news.map((news)=>news.newsSite)));
    displayOptions(allSources);
   })
  //     .catch((error)=>{
  //    ul.innerText=error;
  //  })
 



select.addEventListener('change',(event)=>{
  let source=event.target.value.trim();
  // let filteredNews;
  if(source){
   var filteredNews=allNews.filter((news)=>news.newsSite===source);
  }else{
    filteredNews=allNews;
  }
  displayNews(filteredNews);
})