{/* <input id="total" type="text">
<button id="vatCalc">VAT</button>
<h1 id="vatResult">0.00$</h1>


<input id="numberOfParticipants" type="text">
<button id="qattahCalc">Qattah</button>
<h1 id="qattahResult">0.00$</h1> */}



let totalInput = document.getElementById('total');
let vatCalc = document.getElementById('vatCalc');
let vatResult = document.getElementById('vatResult');

let numberOfParticipants = document.getElementById('numberOfParticipants');
let qattahCalc = document.getElementById('qattahCalc');
let qattahResult = document.getElementById('qattahResult');



vatCalc.addEventListener('click', ()=>{
    let calcresult = parseInt(totalInput.value) + parseInt(totalInput.value) * .15
    vatResult.innerText = calcresult;
    


})

qattahCalc.addEventListener('click', ()=>{
    let qattahRes = (parseInt(totalInput.value) + parseInt(totalInput.value) * .15) / parseInt(numberOfParticipants.value);
    qattahResult.innerText = qattahRes
    console.log(qattahRes)
    


})




