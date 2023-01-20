const keys = document.querySelectorAll(".keys__key")
const operators = document.querySelectorAll("#operator")
const numbers = document.querySelectorAll("#number")
const display = document.querySelector(".display")
const clearAll = document.querySelector(".keys__key--all-clear")
const clearLast = document.querySelector(".keys__key--backspace")
const leftBracket = document.querySelector(".keys__key--left-perenth")
// keys__key--right-perenth
// keys__key--multiply
// keys__key-- sqrt
// keys__key--percent
// keys__key--plus-minus
// keys__key--divide
// keys__key--plus
// keys__key--minus
// keys__key--point
// keys__key--equal
let displayArr = []
let storageNumberArr = []
let activeNumberArr = []
let operatorArr = []



console.log(keys)

//opperators have their own class

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=> {
        displayArr.push(event.target.innerText)
        activeNumberArr.push(event.target.innerText)
        display.innerText = displayArr.join("")
        // console.log(activeNumberArr)
        // console.log(displayArr)
        // console.log(operatorArr)
        operatorArr = []
    })
})

operators.forEach((operator) =>{
    operator.addEventListener("click", (event)=>{
        console.log(operatorArr)
        if (operatorArr.length<1){
            displayArr.push(event.target.innerText)
            
            // console.log(displayArr)
        } else {
            displayArr.pop()
            displayArr.push(event.target.innerText)
            // console.log(displayArr)
        }
        operatorArr[0] = event.target.innerText

        display.innerText = displayArr.join("")
    })
})

// keys.forEach((key) =>{
//     key.addEventListener("click", (event)=> {
//         displayArr.push(event.target.innerText)
//         console.log(displayArr)
//         display.innerText = displayArr.join("")
//     })
// })

clearAll.addEventListener("click",()=>{
    displayArr = []
    console.log(displayArr)
    display.innerText = displayArr.join("")
})
clearLast.addEventListener("click",()=>{
    if(displayArr.length==0){
        displayArr=[]
    } else {
        displayArr.pop()
    }
    display.innerText = displayArr.join("")
    console.log(displayArr)
})

// const addition = () => {

// }