const keys = document.querySelectorAll(".keys__key")
const operators = document.querySelectorAll("#operator")
const numbers = document.querySelectorAll("#number")
const display = document.querySelector(".display--current")
const topDisplay = document.querySelector(".display--last")
const clearAll = document.querySelector(".keys__key--all-clear")
const clearLast = document.querySelector(".keys__key--backspace")
const leftBracket = document.querySelector(".keys__key--left-perenth")
const rightBracket = document.querySelector(".keys__key--right-perenth")
// keys__key--multiply
// keys__key-- sqrt
const percent = document.querySelector(".keys__key--percent")
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
let percentArr = [0]
let totalNumber = 0
let previousEqArr = [[],[],[]] // stores storageNumberArr, operatorArray, activeNumberArray for secondary display


// console.log(keys)

//opperators have their own class

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=> {
        if (event.target.innerText == "." & activeNumberArr.includes(".")){
        } else {
            displayArr.push(event.target.innerText)
            activeNumberArr.push(event.target.innerText)
            display.innerText = displayArr.join("")
        }
    })
})


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
            displayArr.push("=")
            topDisplay.innerText = displayArr.join("")
            previousEqArr[0] = [...storageNumberArr]
            previousEqArr[1] = [...operatorArr[0]]
            previousEqArr[2] = [...activeNumberArr]
            storageNumberArr = totalNumber.toString().split("")
            activeNumberArr = []
            operatorArr[0] = event.target.innerText
            displayArr = [...storageNumberArr]
            displayArr.push(event.target.innerText)
        }
        display.innerText = displayArr.join("")
    })
})

// percent.addEventListener("click", (event)=>{
//     // displayArr.push(event.target.innerText)
//     // display.innerText = displayArr.join("")
//     if operatorArr == 0 activeNumberArr == 0
//      percentArr[0] = 0
//      else if operatorArr == 0 activeNumberArr >0
//      percentArr[0] = 1
//      else if operatorArr > 0 activeNumberArr ==0
//      nothing
//      else if operatorArr > 0 activeNumberArr > 0
//      percentArr[0] = 2 
//      
// }



//     // displayArr.push(event.target.innerText)
//     // activeNumberArr.push(event.target.innerText)
//     // display.innerText = displayArr.join("")
// })

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
    previousEqArr[0] = [...storageNumberArr]
    previousEqArr[1] = [...operatorArr]
    previousEqArr[2] = [...activeNumberArr]
    displayArr.push("=")
    topDisplay.innerText = displayArr.join("")
    activeNumberArr = totalNumber.toString().split("")
    operatorArr = []
    displayArr = [...activeNumberArr]
    display.innerText = displayArr.join("")
})

clearAll.addEventListener("click",()=>{
    displayArr = []
    storageNumberArr = []
    activeNumberArr = []
    operatorArr = []
    totalNumber = 0
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
})
