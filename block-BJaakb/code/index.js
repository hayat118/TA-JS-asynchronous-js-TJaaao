

function fetch(url){
  return new Promise((resolve,reject)=>{
  let xhr= new XMLHttpRequest();
      xhr.open("GET",url);

      xhr.onload=()=>
          setTimeout(()=>resolve(JSON.parse(xhr.response)),8000)
      xhr.onerror= ()=>reject('Somethimg went wrong')
      xhr.send();
  });
}

let data=fetch(`https://api.github.com/users/getify`);