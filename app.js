const quoteP = document.querySelector("#advice-text");
const imgButton = document.querySelector(".dice");
const adviceId = document.getElementById("advice-id");

const fetchAdvice = async () => {
    try {
        const resp = await fetch('https://api.adviceslip.com/advice')
        const data = await resp.json()
        renderAdvice(data)
    } catch (error) {
        console.log(error);
    }
}
const renderAdvice = (adviceData) => {
    quoteP.textContent = `"${adviceData.slip.advice}"`
    adviceId.textContent = adviceData.slip.id
}
document.body.onload = fetchAdvice;
imgButton.addEventListener("click", fetchAdvice)
// fetch('https://api.adviceslip.com/advice').then((data)=> {
//     // console.log(data)
//     return data.json();
// }).then((completedata) => {
//     const completeAdvice = (completedata.slip.advice);
//     const completeId = (completedata.slip.id)
//     console.log(completeAdvice)
//     console.log(completeId)
//     body.addEventListener("load",() => {
//         quoteP.innerHTML = completeAdvice
//         adviceId.innerHTML = completeId    
//     })
    
//     quoteP.innerHTML = completeAdvice
//     adviceId.innerHTML = completeId
// }).catch((error) => {
//     console.log(error)
// })
