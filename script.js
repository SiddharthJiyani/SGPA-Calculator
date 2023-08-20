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
    "MfT-2": 3,
    "AI":3,
    "CS":3,
    "IDS":3,
    "SE":3,
    "ISD(L)":3,
    "PE-1":3,
    "PE-2":3,
    "PE-3":3,
    "PE-4":3,
    "PE-5":3,
    "PE-6":3,
    "PE-7":3,
    "PE-8":3,
    "PE-9":3,
    "CD":3,
    "BTP":3,
    "OR-1":3,
    "OE-2":3,
    "OE-3":3,
    "OE-4":3,
    "OE-5":3,
    "DC":3,
    "DC(L)":2,
    "DSP": 3,
    "DSP(L)": 2,
    "IOT":4,
    "CN":4,
    "M&amp;I":3,
    "M&amp;I(L)":2,
    "DL-2":2 ,
    "HT":3,
    "HT(L)":1,
    "MD-2":3,
    "MD-2(L)":1,
    "CAD-CAM":3,
    "CAD-CAM(L)":1,
    "ICE":3,
    "ICE(L)":1,

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
    const sem5 = document.querySelector(".semester-5");
    const sem6 = document.querySelector(".semester-6");
    const sem7 = document.querySelector(".semester-7");
    const sem8 = document.querySelector(".semester-8");

    // console.log(sem1);

    if (cur_sem == "Sem-1") {
        sem1.style.display = "flex";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "none";
        sem5.style.display = "none";
        sem6.style.display = "none";
        sem7.style.display = "none";
        sem8.style.display = "none";
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
        sem5.style.display = "none";
        sem6.style.display = "none";
        sem7.style.display = "none";
        sem8.style.display = "none";
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
        sem5.style.display = "none";
        sem6.style.display = "none";
        sem7.style.display = "none";
        sem8.style.display = "none";
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
        sem5.style.display = "none";
        sem6.style.display = "none";
        sem7.style.display = "none";
        sem8.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE4()");
        ccebtn.setAttribute("onclick", "displayCCE4()");
        ecebtn.setAttribute("onclick", "displayECE4()");
        mmebtn.setAttribute("onclick", "displayMME4()");
    }
    else if (cur_sem == "Sem-5") {
        sem1.style.display = "none";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "none";
        sem5.style.display = "flex";
        sem6.style.display = "none";
        sem7.style.display = "none";
        sem8.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE5()");
        ccebtn.setAttribute("onclick", "displayCCE5()");
        ecebtn.setAttribute("onclick", "displayECE5()");
        mmebtn.setAttribute("onclick", "displayMME5()");
    }
    else if (cur_sem == "Sem-6") {
        sem1.style.display = "none";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "none";
        sem5.style.display = "none";
        sem6.style.display = "flex";
        sem7.style.display = "none";
        sem8.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE6()");
        ccebtn.setAttribute("onclick", "displayCCE6()");
        ecebtn.setAttribute("onclick", "displayECE6()");
        mmebtn.setAttribute("onclick", "displayMME6()");
    }
    else if (cur_sem == "Sem-7") {
        sem1.style.display = "none";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "none";
        sem5.style.display = "none";
        sem6.style.display = "none";
        sem7.style.display = "flex";
        sem8.style.display = "none";
        csebtn.setAttribute("onclick", "displayCSE7()");
        ccebtn.setAttribute("onclick", "displayCCE7()");
        ecebtn.setAttribute("onclick", "displayECE7()");
        mmebtn.setAttribute("onclick", "displayMME7()");
    }
    else if (cur_sem == "Sem-8") {
        sem1.style.display = "none";
        sem2.style.display = "none";
        sem3.style.display = "none";
        sem4.style.display = "none";
        sem5.style.display = "none";
        sem6.style.display = "none";
        sem7.style.display = "none";
        sem8.style.display = "flex";     
        csebtn.setAttribute("onclick", "displayCSE8()");
        ccebtn.setAttribute("onclick", "displayCCE8()");
        ecebtn.setAttribute("onclick", "displayECE8()");
        mmebtn.setAttribute("onclick", "displayMME8()");
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
function displayCSE5() {
    const cse = document.querySelector(".Branch-CSE-sem5");
    const cce = document.querySelector(".Branch-CCE-sem5");
    const ece = document.querySelector(".Branch-ECE-sem5");
    const mme = document.querySelector(".Branch-MME-sem5");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE5() {
    const cse = document.querySelector(".Branch-CSE-sem5");
    const cce = document.querySelector(".Branch-CCE-sem5");
    const ece = document.querySelector(".Branch-ECE-sem5");
    const mme = document.querySelector(".Branch-MME-sem5");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayECE5() {
    const cse = document.querySelector(".Branch-CSE-sem5");
    const cce = document.querySelector(".Branch-CCE-sem5");
    const ece = document.querySelector(".Branch-ECE-sem5");
    const mme = document.querySelector(".Branch-MME-sem5");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayMME5() {
    const cse = document.querySelector(".Branch-CSE-sem5");
    const cce = document.querySelector(".Branch-CCE-sem5");
    const ece = document.querySelector(".Branch-ECE-sem5");
    const mme = document.querySelector(".Branch-MME-sem5");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}
function displayCSE6() {
    const cse = document.querySelector(".Branch-CSE-sem6");
    const cce = document.querySelector(".Branch-CCE-sem6");
    const ece = document.querySelector(".Branch-ECE-sem6");
    const mme = document.querySelector(".Branch-MME-sem6");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}
function displayCCE6() {
    const cse = document.querySelector(".Branch-CSE-sem6");
    const cce = document.querySelector(".Branch-CCE-sem6");
    const ece = document.querySelector(".Branch-ECE-sem6");
    const mme = document.querySelector(".Branch-MME-sem6");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayECE6() {
    const cse = document.querySelector(".Branch-CSE-sem6");
    const cce = document.querySelector(".Branch-CCE-sem6");
    const ece = document.querySelector(".Branch-ECE-sem6");
    const mme = document.querySelector(".Branch-MME-sem6");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}
function displayMME6() {
    const cse = document.querySelector(".Branch-CSE-sem6");
    const cce = document.querySelector(".Branch-CCE-sem6");
    const ece = document.querySelector(".Branch-ECE-sem6");
    const mme = document.querySelector(".Branch-MME-sem6");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}

function displayCSE7() {
    const cse = document.querySelector(".Branch-CSE-sem7");
    const cce = document.querySelector(".Branch-CCE-sem7");
    const ece = document.querySelector(".Branch-ECE-sem7");
    const mme = document.querySelector(".Branch-MME-sem7");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}

function displayCCE7() {
    const cse = document.querySelector(".Branch-CSE-sem7");
    const cce = document.querySelector(".Branch-CCE-sem7");
    const ece = document.querySelector(".Branch-ECE-sem7");
    const mme = document.querySelector(".Branch-MME-sem7");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}

function displayECE7() {
    const cse = document.querySelector(".Branch-CSE-sem7");
    const cce = document.querySelector(".Branch-CCE-sem7");
    const ece = document.querySelector(".Branch-ECE-sem7");
    const mme = document.querySelector(".Branch-MME-sem7");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}

function displayMME7() {
    const cse = document.querySelector(".Branch-CSE-sem7");
    const cce = document.querySelector(".Branch-CCE-sem7");
    const ece = document.querySelector(".Branch-ECE-sem7");
    const mme = document.querySelector(".Branch-MME-sem7");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}

function displayCSE8() {
    const cse = document.querySelector(".Branch-CSE-sem8");
    const cce = document.querySelector(".Branch-CCE-sem8");
    const ece = document.querySelector(".Branch-ECE-sem8");
    const mme = document.querySelector(".Branch-MME-sem8");
    cse.classList.add("active");
    // calbtn.classList.add("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
}

function displayCCE8() {
    const cse = document.querySelector(".Branch-CSE-sem8");
    const cce = document.querySelector(".Branch-CCE-sem8");
    const ece = document.querySelector(".Branch-ECE-sem8");
    const mme = document.querySelector(".Branch-MME-sem8");
    cse.classList.remove("active");
    cce.classList.add("active");
    ece.classList.remove("active");
    mme.classList.remove("active");
    console.log("clicked");
}

function displayECE8() {
    const cse = document.querySelector(".Branch-CSE-sem8");
    const cce = document.querySelector(".Branch-CCE-sem8");
    const ece = document.querySelector(".Branch-ECE-sem8");
    const mme = document.querySelector(".Branch-MME-sem8");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.add("active");
    mme.classList.remove("active");
    console.log("clicked");
}

function displayMME8() {
    const cse = document.querySelector(".Branch-CSE-sem8");
    const cce = document.querySelector(".Branch-CCE-sem8");
    const ece = document.querySelector(".Branch-ECE-sem8");
    const mme = document.querySelector(".Branch-MME-sem8");
    cse.classList.remove("active");
    cce.classList.remove("active");
    ece.classList.remove("active");
    mme.classList.add("active");
    console.log("clicked");
}




