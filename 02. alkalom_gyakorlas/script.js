const gomb1 = document.getElementById("gomb1");
const gomb2 = document.getElementById("gomb2");
const gomb3 = document.getElementById("gomb3")
const gomb4 = document.getElementById("gomb4")
const gomb5 = document.getElementById("gomb5")
const eredmeny = document.getElementById("eredmeny");
const bevitel = document.getElementById("bevitel")

gomb1.addEventListener('click',()=>{
    for (let i = 1; i <= 10; i++) {
        eredmeny.innerHTML+=`${i}<br>`
    }
})

gomb2.addEventListener('click',()=>{
    for (let i = 10; i >= 1; i--) {
        eredmeny.innerHTML+=`${i}<br>`
        
    }
})

gomb3.addEventListener('click',()=>{
    for (let i = 1; i <= 5; i++) {
    eredmeny.innerHTML+=`<p>${i}. Figyelmeztetés!</p>`  
        
    }
})

let tomb = [];
gomb4.addEventListener('click',()=>{
   tomb.push(`${tomb.length+1}. Figyelmeztetés`)
   kirajzol(tomb)
})

gomb5.addEventListener('click',()=>{
    tomb.pop();
    kirajzol(tomb);
})


function kirajzol(tomb) {
    eredmeny.innerHTML="";
    for (let i = 0; i < tomb.length; i++) {
        eredmeny.innerHTML+=`<p>${tomb[i]}</p>`  
    }
}

