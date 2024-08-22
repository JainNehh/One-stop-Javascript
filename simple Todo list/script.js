let inputele=document.getElementById("inputfield");
let clickbtn=document.querySelector(".btn");
let todoele=document.querySelector(".todolist");

const addtodo=()=>
{
    // console.log(inputele.value);
    // todoele.textContent=inputele.value

    let pelem=document.createElement("p");
    pelem.textContent=inputele.value;
    console.log(pelem);
    todoele.append(pelem);

    inputele.value=" ";
    
}

clickbtn.addEventListener("click",()=>
{
   addtodo();
});

todoele.addEventListener("click",(event)=>
{
    console.log(event.target);
    let currelem=event.target;
    currelem.removeEventListener()
});

