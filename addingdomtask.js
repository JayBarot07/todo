const inp=document.getElementById('inp');
const btn=document.getElementById('btn');
const div=document.getElementById('main');


btn.addEventListener('click',function(){
if(inp.value!=""){
let para =document.createElement('p');
div.appendChild(para);
para.innerText=inp.value;
para.classList.add("p");
inp.value="";
}
})
