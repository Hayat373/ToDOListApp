const inputBox=document.getElementById("input-box");
const listContener=document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContener.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}
listContener.addEventListener("click", function(e){
    if(e.target.tagname ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagname ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContener.innerHTML);

}

function showTask(){
    listContener.innerHTML=localStorage.getItem("data");
}
showTask();