let modalWindow=document.querySelector(".modal-window");
let modelClose=document.querySelector(".modal-close");
let openButton=document.querySelector(".btn");
let booksUL=document.querySelector(".books-list");
let charactersUL=document.querySelector(".characters");

const booksURL='https://www.anapioficeandfire.com/api/books';


function displayCharacters(characters){
 Promise.all( characters.map((characters)=>fetch(characters).then(response=>response.json()))).then(charactersData=>{
  //  console.log(charactersData);
    charactersData.forEach(character=>{
      // charactersUL.innerHTML=""
      let li=document.createElement("li");
         li.innerText=`${character.name}:(${character.aliases.join(" ")})`
      charactersUL.append(li);
    })
 })
}

function displayBooks(data){
  booksUL.innerHTML=""
  data.forEach((book)=>{
    let li=document.createElement("li")
    let h3=document.createElement("h3");
        h3.innerText=book.name;
    let p=document.createElement("p")
        p.innerText=book.authors.join(" ")
    let button=document.createElement("button");
    button.classList.add('btn');
    button.innerText=`Show (${book.characters.length})`;

   button.addEventListener('click',()=>{
  modalWindow.style.display='block';
   displayCharacters(book.characters);
  modalWindow.querySelector('.modal-close').addEventListener('click',()=>{
  modalWindow.style.display='none';

  })
})

    li.append(h3,p,button);
    booksUL.append(li);
  })
}


function fetchBook(){
  fetch(booksURL).then(response=>response.json()).then((BooksData)=>{
    displayBooks(BooksData)
  })
}
fetchBook();

