let input =document.querySelector("input");
let info =document.querySelector(".info");
// let input =document.querySelector("input");
let userImage =document.querySelector(".info img");
let userName =document.querySelector(".info h2");
let userLogin =document.querySelector(".info p");
let followers =document.querySelector(".followers");
let following =document.querySelector(".following");



function fetch(url,successHandler){
   let xhr=new XMLHttpRequest();
     xhr.open("GET",url);
     xhr.onload=()=>successHandler(JSON.parse(xhr.response));

     xhr.onerror=function(){
       console.log("some thing went wrong")
     };
     xhr.send();
}


function displayFollowers(userName){
  followers.innerHTML=""
  fetch(`https://api.github.com/users/${userName}/followers`,function(followerList){
  
    let topFive=followerList.slice(0,5);
    topFive.forEach(info=>{
         let li=document.createElement("li");
        let img=document.createElement("img");
        img.src=info.avatar_url;
        img.alt=info.name;
        li.append(img)
        followers.append(li)
    })
   
  })
};


function displayFollowing(userName){
  following.innerHTML=""
  fetch(`https://api.github.com/users/${userName}/following`,function(followerList){
    let topFive=followerList.slice(0,5);
    topFive.forEach(info=>{
         let li=document.createElement("li");
        let img=document.createElement("img");
        img.src=info.avatar_url;
        img.alt=info.name;
        li.append(img)
        following.append(li)
    })
   
  })
};




function handleDisplay(userInfo){
   userImage.src=userInfo.avatar_url;
   userImage.alt=userInfo.name;
   userName.innerText=userInfo.name;
   userLogin.innerText="@"+userInfo.login;
   displayFollowers(userInfo.login);
   displayFollowing(userInfo.login);

}

function handleInput(event){
   if(event.keyCode===13 && input.value){
     const url="https://api.github.com/users/";
    let userName=input.value;
    //  console.log(input.value)
    fetch(url+userName,handleDisplay)

    // let xhr=new XMLHttpRequest();
    //  xhr.open("GET",url+userName);
    //  xhr.onload=function(){
    //    handleDisplay(JSON.parse(xhr.response));
    //  };
    //  xhr.onerror=function(){
    //    console.log("some thing went wrong")
    //  };
    //  xhr.send();
    input.value=""

   }
}

input.addEventListener("keydown",handleInput);



let catsImage=document.querySelector(".cats img");
let catsButton=document.querySelector(".cats button");

function handleClick(){
  fetch(`https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
  function(catInfo){
    catsImage.src=catInfo[0].url
  })
}
catsButton.addEventListener("click",handleClick)