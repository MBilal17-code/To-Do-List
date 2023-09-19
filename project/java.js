var input = document.getElementById("input");
var list = document.getElementById("List");
var btn = document.getElementsByClassName("btn")[0];


btn.onclick=()=>{
    if (input.value=="") {
        alert('You must write something in input box!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    Save();
}

list.addEventListener('click',(e)=>{
if (e.target.tagName === 'LI') {
    e.target.classList.toggle('select');
    Save();
}
else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    Save();
}
});

function Save()
{
    localStorage.setItem('data',list.innerHTML);
}
function show()
{
    list.innerHTML=localStorage.getItem('data');
}
show();