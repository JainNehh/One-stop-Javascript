const maintodo=document.querySelector(".todolist");
const inpval=document.getElementById("inputfield");


const gettodolist=()=>{
 return JSON.parse(localStorage.getItem("youtubetodolist"));
};

const addtodolistlocal=(localtodolist)=>{
    return localStorage.setItem("youtubetodolist",JSON.stringify(localtodolist));
}
;


let localtodolist=gettodolist() || [];

const addtodynamicele=(curelem)=>{
    const divele=document.createElement("div");
    divele.classList.add("main_todo_div");
    divele.innerHTML=`<li>${curelem} <button class="delbtn">Delete</button></li>`;
    maintodo.append(divele);

};


const addtodolist=(e)=>{
    e.preventDefault();
   
   
const todolistval=inpval.value.trim();
inpval.value="";

if( todolistval != " " && !localtodolist.includes(todolistval)){
localtodolist.push(todolistval);
 localtodolist=[...new Set(localtodolist)];
console.log(localtodolist);

localStorage.setItem('youtubetodolist',JSON.stringify(localtodolist))

addtodynamicele(todolistval);
}

};

const showtodolist=()=>{
  console.log(localtodolist);
  localtodolist.forEach((curelem)=>{
addtodynamicele(curelem);
  });
};





showtodolist();


const removetodoele=(e)=>{
    const todotoremove=e.target;
    let todocontent=todotoremove.previousElementSibling.innerText;
    let parentele=todotoremove.parentele;
    console.log(todocontent);

    localtodolist=localtodolist.filter((curtodo)=>{
        return curtodo !=todocontent.toLowerCase();
    })
};

addtodolistlocal(localtodolist);
parentele.remove();

document.querySelector(".btn").addEventListener("click",(e)=>{
    addtodolist(e);
});

maintodo.addEventListener("click",(e)=>{
    e.preventDefault();
    removetodoele(e);
});