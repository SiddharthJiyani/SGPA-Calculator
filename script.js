

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
// }



function displayCSE2(){
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.add("active") ;
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked") ;
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


const cse = document.querySelector(".CSE") ;
const cce = document.querySelector(".CCE") ;
const ece = document.querySelector(".ECE") ;
const mme = document.querySelector(".MME") ;



cse.addEventListener("click", (e) => {
    const subs = document.querySelector(".subjects");
    const val = subs.value;
    console.log(val);
    console.log(e.target.innerHTML);
    if(val === "Sem-1"){
        console.log("sem1");
    }
    else if(val === "Sem-2"){
        console.log("sem2");
            displayCSE2();
    }
});
cce.addEventListener("click", (e) => {
    const subs = document.querySelector(".subjects");
    const val = subs.value;
    console.log(val);
    console.log(e.target.innerHTML);
    if(val === "Sem-1"){
        console.log("sem1");
    }
    else if(val === "Sem-2"){
        console.log("sem2");
        displayCCE2();
    }
});
ece.addEventListener("click", (e) => {
    const subs = document.querySelector(".subjects");
    const val = subs.value;
    console.log(val);
    console.log(e.target.innerHTML);
    if(val === "Sem-1"){
        console.log("sem1");
    }
    else if(val === "Sem-2"){
        console.log("sem2");
        displayECE2();
    }
});
mme.addEventListener("click", (e) => {
    const subs = document.querySelector(".subjects");
    const val = subs.value;
    console.log(val);
    console.log(e.target.innerHTML);
    if(val === "Sem-1"){
        console.log("sem1");
    }
    else if(val === "Sem-2"){
        console.log("sem2");
        displayMME2();
    }
});

// function clicked(e){
    
// }

const subjects = document.querySelector(".subjects");
const branch_btn = document.querySelector(".branch-button");
// console.log(branch_btn.value,"  value");
// console.log(branch_btn.innerHTML,"  inner");

// subjects.addEventListener("click", (e) => {
//     if(e.target.value === "Sem-1"){
//         console.log("sem1");
//     }

//     if(e.target.value === "Sem-2"){
//         console.log("sem2");
// console.log(branch_btn.innerHTML,"  value");
        
//         // if(branch_btn.value === "CSE"){
//         //     displayCSE2();
//         // }

//     }

//     if(e.target.value === "Sem-3"){
//         console.log("sem3");
//     }
//     if(e.target.value === "Sem-4"){
//         console.log('sem4');
//     }
//     if(e.target.value === "Sem-5"){
//         console.log('sem5');
//     }
//     if(e.target.value === "Sem-6"){
//         console.log('sem6');
//     }
//     if(e.target.value === "Sem-7"){
//         console.log('sem7');
//     }
//     if(e.target.value === "Sem-8"){
//         console.log('sem8');
//     }
// });
