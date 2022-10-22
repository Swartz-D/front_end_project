/* eslint-env jquery */

const body = document.querySelector('body');
let newDiv = document.createElement('div');

$('#submit').on('click', function(){
  event.preventDefault();
  var userInput = $('#bookGenre').val().toLowerCase();
  console.log(userInput);
  var formatted = userInput.replace(/ /g, '_');
  console.log(formatted);
  $.get('https://openlibrary.org/subjects/'+formatted+'.json', (data) => {
    console.log(data);
    let bookList = document.createElement('div');
    bookList.classList.add('container');
    for(let i=0; i<data.works.length; i++){
      let newBook = document.createElement('div');
      newBook.classList.add('book-info');
      let currentImg = $(`<img src="https://covers.openlibrary.org/b/id/${data.works[i].cover_id}-L.jpg" class="img-fluid" />`);
      console.log(currentImg);
      let bookContainer = document.createElement('div');
      bookContainer.classList.add('bookContainer');
      newBook.innerHTML = 'Book title: '+ data.works[i].title+' | '+ 'Author(s): '+data.works[i].authors[0].name;
      // newBook.append(currentImg[0]);
      bookContainer.append(newBook);
      bookContainer.append(currentImg[0]);
      bookList.append(bookContainer)
    
    }
    console.log(newDiv.children[0]);
    if(newDiv.children[0]===undefined){
      newDiv.appendChild(bookList);
      body.appendChild(newDiv);
      console.log('newDiv', newDiv.children[0]);
    }else{
      newDiv.innerHTML = '';
      newDiv.appendChild(bookList);
      body.appendChild(newDiv); 
      console.log('newDiv 2', newDiv);
    }  
  });});
