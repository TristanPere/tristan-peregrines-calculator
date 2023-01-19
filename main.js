const keys = document.querySelectorAll(".keys__key")
const display = document.querySelector(".display")
const clearAll = document.querySelector(".keys__key--all-clear")
const clearLast = document.querySelector(".keys__key--backspace")
let displayArr = []



console.log(keys)

//opperators have their own class

keys.forEach((key,index) =>{
    key.addEventListener("click", (event)=> {
        displayArr.push(event.target.innerText)
        console.log(displayArr)
        display.innerText = displayArr.join("")
    })
})
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
        displayArr.pop()
    }
    display.innerText = displayArr.join("")
    console.log(displayArr)
})
