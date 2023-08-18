

// let subjects = {
//     "DSY" : 3 ,
//     "M2" : 4 ,
//     "DMS" : 3 ,
//     "EEB" : 3 ,
//     "VEE" : 3 ,
//     "DSA-LAB" : 1 ,
//     "CLP-LAB" : 2,
//     "DSA" : 3 ,
//     "Choose Subject" : 0
// }
// const select = document.body.getElementsByClassName("subjects"); 
// const grades = document.body.getElementsByClassName("grades") 

// const mapping = {
//     "A":10,
//     'AB':9,
//     'B' :8,
//     'BC':7,
//     'C':6,
//     'CD':5,
//     'D':4,
//     'F':0
// }

// const calbtn = document.getElementById('calbtn');

// calbtn.onclick = function()
// {
//     let earned = 0;
//     for (let i = 0; i < select.length; i++) 
//     {
//         earned = earned + subjects[`${select[i].value}`]*mapping[`${grades[i].value}`];
//         console.log(earned) ;
//     }
//     const res = document.getElementById('result');
//     res.innerHTML = `Your res:${(earned/22)}`;
// }

const csebtn = document.querySelector(".CSE");
const ccebtn = document.querySelector(".CCE");
const ecebtn = document.querySelector(".ECE");
const mmebtn = document.querySelector(".MME");

const semselector = document.querySelector(".semselector");
let cur_sem='Sem-1';
semselector.addEventListener("click",function(){
    cur_sem=semselector.value;
    removesemEvent();
    if (cur_sem=="Sem-2") 
    {
        csebtn.setAttribute("onclick","displayCSE2()");  
        ccebtn.setAttribute("onclick","displayCCE2()");  
        ecebtn.setAttribute("onclick","displayECE2()");  
        mmebtn.setAttribute("onclick","displayMME2()");  
    }
})

const calbtn = document.querySelector(".calbtn");

calbtn.addEventListener("click",function(e){
    
})

function removesemEvent()
{
    csebtn.removeAttribute("onclick");
    ccebtn.removeAttribute("onclick");
    ecebtn.removeAttribute("onclick");
    mmebtn.removeAttribute("onclick");
}

function displayCSE2(){
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.add("active");
    calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE2(){
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.remove("active") ;
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked") ;
}
function displayECE2(){
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.remove("active") ;
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked") ;
}
function displayMME2(){
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.remove("active") ;
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked") ;
}

