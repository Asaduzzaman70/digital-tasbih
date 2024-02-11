const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillaInitialValue = 0;
let allahuakharInitialValue = 0;


subhanAllahIncrimentBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert("Subhanallah Complete, Please Fill up another.");
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
subhanAllahDecrimentBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert("You Can't Negative Value");
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})


alhamdulillahIncrimentBtn.addEventListener('click', function(){
    if(alhamdulillaInitialValue === 33){
        return alert("Alhamdulillah Complete, Please Fill up another.");
    }
    alhamdulillaInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillaInitialValue;
})
alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if(alhamdulillaInitialValue === 0){
        return alert("You Can't Negative Value");
    }
    alhamdulillaInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillaInitialValue;
})


allahAkberIncrimentBtn.addEventListener('click', function(){
    if(allahuakharInitialValue === 33){
        return alert("AllahAkber Complete, Please Fill up another.");
    }
    allahuakharInitialValue += 1;
    allahAkberDisplay.innerText = allahuakharInitialValue;
})
allahAkberDecrimentBtn.addEventListener('click', function(){
    if(allahuakharInitialValue === 0){
        return alert("You Can't Negative Value");
    }
    allahuakharInitialValue -= 1;
    allahAkberDisplay.innerText = allahuakharInitialValue;
})

resetBtn.addEventListener('click', function(){
    // if(subhanAllahInitialValue >= 1 || alhamdulillaInitialValue >= 1 || allahuakharInitialValue >= 1){
    //     return alert('Confirm You reset All');
    // }
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    subhanAllahDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    alhamdulillaInitialValue = 0;
    allahuakharInitialValue = 0;
    return alert("AllahAkber Complete, Please Fill up another.");
})