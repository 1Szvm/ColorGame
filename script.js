function makeColor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)

    return `rgb(${r}, ${g}, ${b})`
}

let match=false
let colors=[]
let squareArr=document.querySelectorAll(".square")

function init(){
    colors=[]
    for(let obj of squareArr){
        let color=makeColor()
        obj.style.backgroundColor=color
        colors.push(color)
    }
    let index=Math.floor(Math.random()*6)
    document.getElementById("color").innerHTML=colors[index]
}

init()
console.log(colors)

function verify(e){
    if(!match){
        let cilickedColor=e.target.style.backgroundColor
        if(cilickedColor==document.getElementById("color").innerHTML){
            document.querySelector("h1").style.backgroundColor=cilickedColor
            document.querySelector(".msg").innerHTML="🙂"
            match=true
        }else{
            document.querySelector(".msg").innerHTML="☹️"
        }
    }
}

function ncolor(){
    init()
    document.querySelector("h1").style.backgroundColor="white"
    document.querySelector(".msg").innerHTML="😐"
}