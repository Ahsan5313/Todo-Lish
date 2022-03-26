// getting all requirement here
const inputBox = document.querySelector('.inputFiled input');
const addBtn = document.querySelector('.inputFiled button');
const todoList = document.querySelector('.todoList');
const deleteBtn = document.querySelector('.footer button');



inputBox.onkeyup = () =>{

    let userData = inputBox.value; // getting user data;
    if(userData.trim() != 0){ // if user value are not space;

      addBtn.classList.add('active') // active the btn
    }else{
        addBtn.classList.remove('active') // remove the btn
    }  
    
}

// if user click on the add button

addBtn.onclick = () =>{

    
    let userData = inputBox.value; // getting user data;
    let getLocalStorage = localStorage.getItem('New Todo') // getting new todo
    if(getLocalStorage == null){ // if localStorage is null

        listArr = []; // creating array
    }else{

        listArr = JSON.parse(getLocalStorage);
    }
    listArr.unshift(userData);
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTask();
    
}

// function to add list

 function showTask(){

    let getLocalStorage = localStorage.getItem('New Todo') // getting new todo
    if(getLocalStorage == null){ // if localStorage is null

        listArr = []; // creating array
    }else{

        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector('.pendingNum');
    pendingNum.textContent = listArr.length; // passing the len of listArr

    if(listArr.length > 0){
        deleteBtn.classList.add('active')

    }else{
        deleteBtn.classList.remove('active')

    }

    let newLiTag = '';

     listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
   });
   todoList.innerHTML = newLiTag; // adding new li tag element
   inputBox.value = '';

}
// delete list function
function deleteTask(index){

    let getLocalStorage = localStorage.getItem('New Todo') // getting new todo
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1) // delete or remove element

    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTask();
    
}
// deleting all task 
deleteBtn.onclick = () =>{

    listArr = []; // again empty array
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTask();
    
}