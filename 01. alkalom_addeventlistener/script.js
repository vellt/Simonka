const bevitel= document.getElementById("bevitel")
const gomb1= document.getElementById("gomb1")
const gomb2= document.getElementById("gomb2")
const gomb3= document.getElementById("gomb3")
const gomb4= document.getElementById("gomb4")
const gomb5= document.getElementById("gomb5")
const eredmeny= document.getElementById("eredmeny")  

gomb1.addEventListener('click',()=>{
    if(isNaN(bevitel.value) || !bevitel.value){
        alert("A megadott érték nem szám")
    }else{
        eredmeny.innerHTML=bevitel.value % 2 === 0 ? 'paros':'nem páros';
    }
})

gomb2.addEventListener('click', ()=> {
    if (isNaN(bevitel.value) || !bevitel.value) {
        alert("A megadott érték nem szám")
    } else {
        eredmeny.innerHTML=bevitel.value<0?'Negatív':'Pozitív';
    }
})

gomb3.addEventListener('click', ()=> {
    if (isNaN(bevitel.value) || !bevitel.value) {
        alert("A megadott érték nem szám")
    } else {
        eredmeny.innerHTML=bevitel.value<50?'Igen':'Nem.';
    }
})

gomb4.addEventListener('click', ()=> {
    if (isNaN(bevitel.value) || !bevitel.value) {
        // nem szám
        eredmeny.innerHTML="Nem szám."
    } else {
        // szám
        eredmeny.innerHTML="Szám."
    }
})

gomb5.addEventListener('click', ()=> {
    if (isNaN(bevitel.value) || !bevitel.value) {
        alert("A megadott érték nem szám")
    } else {
        eredmeny.innerHTML=bevitel.value * 5;
    }
})
