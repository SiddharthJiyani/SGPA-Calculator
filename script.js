let courses = {
    "Choose Subject": 0,
    "DSY": 3,
    "M2": 4,
    "DMS": 3,
    "EEB": 3,
    "VEE": 3,
    "DSA(L)": 1,
    "UGP(L)": 2,
    "CLP(L)": 2,
    "DSA": 3,
    "CLP": 4,
    "M1": 4,
    "BE": 4,
    "BE(L)": 3,
    "CP": 3,
    "CP(L)": 2,
    "TCE": 3,
    "M3": 4,
    "EFE/PTS": 3,
    "COA": 3,
    "AP": 3,
    "OTA": 3,
    "IDBMS": 3,
    "ANEL": 3,
    "NAS" : 3,
    "ANEL(L)" : 2,
    "IMP":3,
    "EPM":3,
    "EG(L)":2,
    "DCS": 3,
    "S&amp;S": 3,
    "SDC": 3,
    "E&amp;E":3,
    "DCS(L)" :2,
    "DL-1" :2,
    "MEET" :3,
    "MoS" :3,
    "MoS(L)":1,
    "MfT-1" :3,
    "MfT(L)" :2,
    "ET": 4,
    "IEM": 3,
    "P&amp;S": 4,
    "DAA": 3,
    "ToC": 3,
    "OS": 4,
    "CN": 4,
    "PE-1": 3,
    "CSE" : 3,
    "PoC": 3,
    "S&amp;SC(L)": 2,
    "ME": 3,
    "ME(L)": 2,
    "VLSI": 3,
    "MD-1": 3,
    "K&amp;D": 3,
    "K&amp;D(L)": 1,
    "FMM": 3,
    "FMM(L)": 1,
    "MIC": 3,
    "MIC(L)": 1,
    "TQM": 3,
    "MfT-2": 3
};
const grades = document.body.getElementsByClassName("grades");

const mapping = {
    A: 10,
    AB: 9,
    B: 8,
    BC: 7,
    C: 6,
    CD: 5,
    D: 4,
    F: 0,
    "Choose": 0,
};


const calbtn = document.getElementById("calbtn");


calbtn.onclick = function () {
    let total=0;
    let earned = 0;
    console.log("earn-",earned);
    let active = document.querySelector(".active");
    console.log(active);
    let x = active.firstChild.nextElementSibling;
    let list = x.children;
    for (let i = 0; i < list.length; i++) {
        let prefinal = list[i].children[0].firstChild.nextElementSibling.innerHTML;
        let grade =
            list[i].children[0].firstChild.nextElementSibling.parentElement
                .children[1].value;

        console.log(prefinal, "-", courses[`${prefinal}`]);
        console.log(prefinal, "-", mapping[`${grade}`]);
        earned = earned + courses[prefinal.trim()] * mapping[grade];
        total = total + courses[prefinal.trim()] * 10;
        console.log("CG=",earned*10/total);
    }
    
    // for (let i = 0; i < active.length-1; i++) 
    // {
    //     active[i].remove();        
    // }

};

const csebtn = document.querySelector(".CSE");
const ccebtn = document.querySelector(".CCE");
const ecebtn = document.querySelector(".ECE");
const mmebtn = document.querySelector(".MME");

const semselector = document.querySelector(".semselector");

let cur_sem;

const Branches = document.querySelectorAll(".Branches") ;
semselector.addEventListener("click", function () {
    console.log(Branches);
    for(let i =0;i<Branches.length;i++){
        Branches[i].classList.remove("active") ;
    }
    cur_sem = semselector.value;

    removesemEvent();
    console.log();
    const sem1 = document.querySelector(".semester-1");
    const sem2 = document.querySelector(".semester-2");
    const sem3 = document.querySelector(".semester-3");
    const sem4 = document.querySelector(".semester-4");
    // console.log(sem1);

    if (cur_sem == "Sem-1") {
        sem1.style.display = "flex";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE1()");
        ccebtn.setAttribute("onclick", "displayCCE1()");
        ecebtn.setAttribute("onclick", "displayECE1()");
        mmebtn.setAttribute("onclick", "displayMME1()");

    }
    else if (cur_sem == "Sem-2") {
        sem1.style.display = "none";
        sem2.style.display = "flex";
        sem3.style.display = "none";
        sem4.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE2()");
        ccebtn.setAttribute("onclick", "displayCCE2()");
        ecebtn.setAttribute("onclick", "displayECE2()");
        mmebtn.setAttribute("onclick", "displayMME2()");
        console.log("HEMLO");
    }
    else if (cur_sem == "Sem-3") {
        sem1.style.display = "none";
        sem2.style.display = "none";
        sem3.style.display = "flex";
        sem4.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE3()");
        ccebtn.setAttribute("onclick", "displayCCE3()");
        ecebtn.setAttribute("onclick", "displayECE3()");
        mmebtn.setAttribute("onclick", "displayMME3()");
    }
    else if (cur_sem == "Sem-4") {
        sem1.style.display = "none";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "flex";
        csebtn.setAttribute("onclick", "displayCSE4()");
        ccebtn.setAttribute("onclick", "displayCCE4()");
        ecebtn.setAttribute("onclick", "displayECE4()");
        mmebtn.setAttribute("onclick", "displayMME4()");
    }
})

//const calbtn = document.querySelector(".calbtn");

// calbtn.addEventListener("click",function(e){

// })

function removesemEvent() {
    csebtn.removeAttribute("onclick");
    ccebtn.removeAttribute("onclick");
    ecebtn.removeAttribute("onclick");
    mmebtn.removeAttribute("onclick");
}

function displayCSE1() {
    const cse = document.querySelector(".Branch-CSE-sem1");
    const cce = document.querySelector(".Branch-CCE-sem1");
    const ece = document.querySelector(".Branch-ECE-sem1");
    const mme = document.querySelector(".Branch-MME-sem1");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE1() {
    const cse = document.querySelector(".Branch-CSE-sem1");
    const cce = document.querySelector(".Branch-CCE-sem1");
    const ece = document.querySelector(".Branch-ECE-sem1");
    const mme = document.querySelector(".Branch-MME-sem1");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayECE1() {
    const cse = document.querySelector(".Branch-CSE-sem1");
    const cce = document.querySelector(".Branch-CCE-sem1");
    const ece = document.querySelector(".Branch-ECE-sem1");
    const mme = document.querySelector(".Branch-MME-sem1");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayMME1() {
    const cse = document.querySelector(".Branch-CSE-sem1");
    const cce = document.querySelector(".Branch-CCE-sem1");
    const ece = document.querySelector(".Branch-ECE-sem1");
    const mme = document.querySelector(".Branch-MME-sem1");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}
function displayCSE2() {
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE2() {
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayECE2() {
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayMME2() {
    const cse = document.querySelector(".Branch-CSE-sem2");
    const cce = document.querySelector(".Branch-CCE-sem2");
    const ece = document.querySelector(".Branch-ECE-sem2");
    const mme = document.querySelector(".Branch-MME-sem2");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}
function displayCSE3() {
    const cse = document.querySelector(".Branch-CSE-sem3");
    const cce = document.querySelector(".Branch-CCE-sem3");
    const ece = document.querySelector(".Branch-ECE-sem3");
    const mme = document.querySelector(".Branch-MME-sem3");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE3() {
    const cse = document.querySelector(".Branch-CSE-sem3");
    const cce = document.querySelector(".Branch-CCE-sem3");
    const ece = document.querySelector(".Branch-ECE-sem3");
    const mme = document.querySelector(".Branch-MME-sem3");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayECE3() {
    const cse = document.querySelector(".Branch-CSE-sem3");
    const cce = document.querySelector(".Branch-CCE-sem3");
    const ece = document.querySelector(".Branch-ECE-sem3");
    const mme = document.querySelector(".Branch-MME-sem3");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayMME3() {
    const cse = document.querySelector(".Branch-CSE-sem3");
    const cce = document.querySelector(".Branch-CCE-sem3");
    const ece = document.querySelector(".Branch-ECE-sem3");
    const mme = document.querySelector(".Branch-MME-sem3");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}
function displayCSE4() {
    const cse = document.querySelector(".Branch-CSE-sem4");
    const cce = document.querySelector(".Branch-CCE-sem4");
    const ece = document.querySelector(".Branch-ECE-sem4");
    const mme = document.querySelector(".Branch-MME-sem4");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE4() {
    const cse = document.querySelector(".Branch-CSE-sem4");
    const cce = document.querySelector(".Branch-CCE-sem4");
    const ece = document.querySelector(".Branch-ECE-sem4");
    const mme = document.querySelector(".Branch-MME-sem4");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayECE4() {
    const cse = document.querySelector(".Branch-CSE-sem4");
    const cce = document.querySelector(".Branch-CCE-sem4");
    const ece = document.querySelector(".Branch-ECE-sem4");
    const mme = document.querySelector(".Branch-MME-sem4");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayMME4() {
    const cse = document.querySelector(".Branch-CSE-sem4");
    const cce = document.querySelector(".Branch-CCE-sem4");
    const ece = document.querySelector(".Branch-ECE-sem4");
    const mme = document.querySelector(".Branch-MME-sem4");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}

