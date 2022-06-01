"use strict"
let data = [];
function getPrimeNumbers(primeNum){
    for(let outerNum = 2; outerNum < primeNum; outerNum++){
        if(!isAPrime(outerNum)){
            continue
        }
        data.push(outerNum)
    }
    sendData()
}

function isAPrime(outerNum){
    for(let innerNum = 2; innerNum < outerNum; innerNum++){
        if(outerNum % innerNum == 0){
            return false
        }
    }
    return true
}

function finalData(){
    return data
}

function getData(){
    let range = document.getElementById('number').value
    getPrimeNumbers(range)
}

function sendData(){
    window.location.href = 'working.html' + "?" + "data=" + data
    document.getElementById("data").textContent = finalData();
}



