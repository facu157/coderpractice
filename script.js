//Add a name to the title
let titleName = document.getElementById("title-name")
customName = prompt("What's your name?")
titleName.innerText += " " + customName

// Create a new list item when clicking on the "Add" button
function newTask(){
    const li = document.createElement("li")
    const inputEl = document.getElementById("input-el")
    let inputValue = inputEl.value
    const t = document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue === ""){
        alert("No se puede guardar una tarea vacia!")
    }else{
        document.getElementById("ul-el").appendChild(li)
    }
    inputEl.value = ""

    closeButton()

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}

// Create a "close" button and append it to each list item
function closeButton() {
    let myList = document.getElementsByTagName("li")
    for (let i = 0; i < myList.length; i++){
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myList[i].appendChild(span)
    }
}


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; I++){
    close[i].onclick = function(){
        myList[i].removeChild(li)
    }
}

// Add a "checked" symbol when clicking on a list item
var ulEl = document.getElementById('ul-el');
ulEl.addEventListener('click', function(ev) {
  if (ev.target.tagName = 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);