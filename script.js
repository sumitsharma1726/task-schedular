const timee = document.getElementById("timing");
const desc = document.getElementById("description");
const form = document.querySelector("form");
const container = document.getElementById("contain");



const task = localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")) : [];

showtasks();

function showtasks(){
    task.forEach((value,index) =>{
        const div = document.createElement("div");
        div.setAttribute("class","tasklist");

        const innerdiv = document.createElement("div");
        div.append(innerdiv);

        const para = document.createElement("p");
        para.innerText = value.time;
        innerdiv.append(para);

        const span = document.createElement("span");
        span.innerText = value.desc;
        innerdiv.append(span);

        const btn = document.createElement("button") ;
        btn.setAttribute("class","deletebtn");
        btn.innerText="-";

        btn.addEventListener("click",()=>{
            removetask();
            task.splice(index,1);
            localStorage.setItem("task", JSON.stringify(task));
            showtasks();
        })
        div.append(btn);

        container.append(div);

        




    })
}

function removetask(){
    task.forEach((value) =>{
        const div = document.querySelector(".tasklist");
        div.remove();
    })
}




form.addEventListener("submit",(e)=> {
    e.preventDefault();
    removetask();
    task.push({
        time:timee.value,
        desc:desc.value,
    })

    localStorage.setItem("task", JSON.stringify(task));
    
    showtasks();
})