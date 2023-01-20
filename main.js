const keys = document.querySelectorAll(".keys__key")
const operators = document.querySelectorAll("#operator")
const numbers = document.querySelectorAll("#number")
const display = document.querySelector(".display")
const clearAll = document.querySelector(".keys__key--all-clear")
const clearLast = document.querySelector(".keys__key--backspace")
const leftBracket = document.querySelector(".keys__key--left-perenth")
const rightBracket = document.querySelector(".keys__key--right-perenth")
// keys__key--multiply
// keys__key-- sqrt
// const percent = document.querySelector(".keys__key--percent")
// keys__key--plus-minus
// keys__key--divide
// const additionButton = document.querySelector(".keys__key--plus")
// keys__key--minus
// keys__key--point
const equals = document.querySelector(".keys__key--equal")


let displayArr = []
let storageNumberArr = []
let activeNumberArr = []
let operatorArr = []
let totalNumber = 0
let previousEqArr = [[],[],[]] // stores storageNumberArr, operatorArray, activeNumberArray


// console.log(keys)

//opperators have their own class

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=> {
        if (event.target.innerText == "." & activeNumberArr[activeNumberArr.length-1] == "."){
            display.innerText = displayArr.join("")
        } else {
            displayArr.push(event.target.innerText)
            activeNumberArr.push(event.target.innerText)
            display.innerText = displayArr.join("")
        }
        // console.log(activeNumberArr)
        // console.log(displayArr)
        // console.log(operatorArr)
    })
})
// additionButton.addEventListener("click", ()=>{
//     // const addition = (x,y) => {
//     //     return x+y
//     // }

//     if (operatorArr[0]=="+"){}
//         totalNumber = Number(storageNumberArr.join("")) + Number(activeNumberArr.join(""))
//     } 
//     console.log(storageNumberArr)
//     console.log(totalNumberArr)
// )

// +,-,*,/
operators.forEach((operator) =>{
    operator.addEventListener("click", (event)=>{
        if (operatorArr==0 & activeNumberArr.length>0){
            displayArr.push(event.target.innerText)
            storageNumberArr = [...activeNumberArr]
            activeNumberArr = []
            operatorArr[0] = event.target.innerText
            // console.log(displayArr)
        } else if (operatorArr==0 & activeNumberArr==0){
            // operatorArr[0] = event.target.innerText
        } else if (operatorArr.length==1 & activeNumberArr==0){
            displayArr.pop()
            displayArr.push(event.target.innerText)
            operatorArr[0] = event.target.innerText
        }
        else { 
            if (operatorArr[0]=="*"){
                totalNumber = Number(storageNumberArr.join("")) * Number(activeNumberArr.join(""))
            } else if (operatorArr[0]=="/"){
                totalNumber = Number(storageNumberArr.join("")) / Number(activeNumberArr.join(""))
            } else if (operatorArr[0]=="+"){
                totalNumber = Number(storageNumberArr.join("")) + Number(activeNumberArr.join(""))
            } else if (operatorArr[0]=="-"){
                totalNumber = Number(storageNumberArr.join("")) - Number(activeNumberArr.join(""))
            } 
            storageNumberArr = []
            storageNumberArr = totalNumber.toString().split("")
            activeNumberArr = []
            operatorArr[0] = event.target.innerText
            displayArr.unshift("=")
            previousEq = displayArr.join("")
            displayArr = []
            displayArr = [...storageNumberArr]
            displayArr.push(event.target.innerText)
        }
            // displayArr.push(event.target.innerText)
        display.innerText = displayArr.join("")
    })
})


equals.addEventListener("click",(event)=>{
    if (operatorArr==0){
        totalNumber = activeNumberArr.join("")
    }else if (operatorArr[0]=="*"){
        totalNumber = Number(storageNumberArr.join("")) * Number(activeNumberArr.join(""))
    } else if (operatorArr[0]=="/"){
        if (Number(activeNumberArr.join(""))==0){
            totalNumber = "NaN"
        } else {
            totalNumber = Number(storageNumberArr.join("")) / Number(activeNumberArr.join(""))
        }
    } else if (operatorArr[0]=="+"){
        totalNumber = Number(storageNumberArr.join("")) + Number(activeNumberArr.join(""))
    } else if (operatorArr[0]=="-"){
        totalNumber = Number(storageNumberArr.join("")) - Number(activeNumberArr.join(""))
    }
    // console.log(activeNumberArr)
    // console.log(displayArr)
    activeNumberArr = totalNumber.toString().split("")
    operatorArr = []
    displayArr.unshift("=")
    previousEq = displayArr.join("")
    displayArr = []
    displayArr = [...activeNumberArr]
    display.innerText = displayArr.join("")
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
    storageNumberArr = []
    activeNumberArr = []
    operatorArr = []
    totalNumber = 0
    // console.log(displayArr)
    display.innerText = displayArr.join("")
})
clearLast.addEventListener("click",()=>{
    if(displayArr.length==0){
        displayArr=[]
    } else {
        if(operatorArr.length==1 & activeNumberArr.length==0) {
            operatorArr = []
            activeNumberArr = [...storageNumberArr]
            storageNumberArr = []
            displayArr = [...activeNumberArr]
        } else if(operatorArr.length==1 & activeNumberArr.length>0 ){
            displayArr.pop()
            activeNumberArr.pop()
        } else { 
            displayArr.pop()
            activeNumberArr.pop()
        }
    } 
    display.innerText = displayArr.join("")
    // console.log(displayArr)
})

// const addition = () => {

// }