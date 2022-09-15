function fetch(url){
new Promise((resolve,reject)=>{
  let xhr=new XMLHttpRequest();
      xhr.open("GET",url);

      xhr.onload=
         setTimeout(()=>resolve(JSON.parse(xhr.response)),1000)
        //  .then((value)=>console.log(`Promise Resolved!`));

      xhr.onerror=()=>reject("something went wrong");
      xhr.send();
});
}

let data=fetch(`https://api.github.com/users/getify`);