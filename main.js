let myList = []

//Boton X en cada item de la lista

for(let i = 0; i < myList.length; i++){
        var span = document.createElement("SPAN")
        var txt = document.createTextNode("\u00D7")
        span.className = "close"
        span.appendChild(txt)
        myList[i].appendChild(span)
    }




//Titulo superior
let nameEl = document.getElementById("name-el")
let nombre = prompt("Ingresa tu nombre");
nameEl.innerText += " " + nombre


//Declaracion del Espacio Input y Placeholder
const inputEl = document.getElementById("input-el")
inputEl.placeholder = "Escribí tu tarea acá!"


//Boton Save
const saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click", function(){
    if(inputEl.value == ""){
        alert("No se puede guardar un campo vacío");
    }else{
        myList.push(inputEl.value)
        inputEl.value = ""
        newTask(myList)
    }
})


//Boton Delete Last
const deleteLastBtn = document.getElementById("deletelast-btn");
deleteLastBtn.addEventListener("click", function(){
    myList.pop();
    newTask(myList);
})


//Boton Delete All
const deleteAllBtn = document.getElementById("deleteall-btn")
deleteAllBtn.addEventListener("click", function(){
    myList = []
    newTask(myList)
})


//Funcion para agregar nuevos items a la lista myList
function newTask(tasks){
    toDo = ""
   for (let i = 0; i < tasks.length; i++){
        toDo+= 
            `
            <li>
                ${tasks[i]}
            </li>
            `
   }

   let ulEl = document.getElementById("ul-el")
   ulEl.innerHTML = toDo


//Texto de Tareas Pendientes
const workEl = document.getElementById("work-el")
if(myList.length > 0){
    workEl.textContent = "te quedan " + myList.length + " tareas pendientes" 
}else{
    workEl.textContent = "No tenes tareas pendientes"
}
}