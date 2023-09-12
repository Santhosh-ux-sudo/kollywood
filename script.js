const index=document.querySelector(".index")
const movies_name=document.querySelector(".movies_name")
const game=document.querySelector(".game")
const display_hint=document.querySelector(".hint_name")
const abcd=document.querySelectorAll(".abcd")

const wood=document.querySelectorAll(".wood")
const wo=document.querySelectorAll(".wo")
const result=document.querySelector(".result")

const self_play=document.querySelector(".self_play")
const start_btn=document.querySelector(".start")
const given_name=document.querySelector(".name")
const given_hint=document.querySelector(".hint")
const warning1=document.querySelector(".warning1")
const warning2=document.querySelector(".warning2")
const user=document.querySelector(".user")

let a,b


let lists=["JAILOR","BEAST","PIZZA","MAYA","LATHTHI","JILLA"]
let lists_hint=["__I___","__A__","____A","_A_A","_A_____","_I___"]

function random(){
    return Math.floor(Math.random()*6)
}



self_play.addEventListener("click",function(){
    index.style.display="none"

    user.classList.add("passive")
})

movies_name.addEventListener("click",function(){
    index.style.display="none"
    game.style.display="flex"
    let z=random()
    let x=lists[z]
    let y=[]
    for(let i=0;i<lists_hint[z].length;i++){
        y.push(lists_hint[z][i])
    }
    play(x,y,z)
})

start_btn.addEventListener("click",function(){
    
    warning1.classList.remove("active1")
    warning2.classList.remove("active1")
    warning1.textContent=""
    warning2.textContent=""
    a=given_name.value
    b=given_hint.value

  

    let flag=1
    for(let i=0;i<a.length;i++){
        if(a[i]===b){
            flag=0
            break
        }
    }
    if(a===""){
         warning1.classList.add("active1")
         warning1.textContent="enter the name"
    }else if(b===""){
           warning2.classList.add("active1")
           warning2.textContent="enter the hint"
    }else if(a.length<3){
            warning1.classList.add("active1")
            warning1.textContent="name must contains 3 or more letters"
    }else if(b.length>1){
            warning2.classList.add("active1")
            warning2.textContent="hint must be ONE letter"
    }else if(flag==1){
           warning2.classList.add("active1")
           warning2.textContent="hint not present in the name"
    }
    else{
        user.style.display="none"
        game.style.display="flex"
        let x=a
        let y=[]
        for(let i=0;i<a.length;i++){
            if(a[i]===b){
                y.push(b.toUpperCase())
            }else{
                y.push("_")
            }
        }
        
        play(x,y)
    }
})

//x => string
//y => array


function play(x,y){
    console.log(x,y);
    for(let i=0;i<y.length;i++){
        if(y[i]!=="_"){
            console.log("ya");
            for(let j=0;j<26;j++){
                if(abcd[j].textContent===y[i]){
                    abcd[j].classList.add("pointernone")
                     abcd[j].style.color="white"
                     abcd[j].style.backgroundColor="black"
                     break
                }
            }
            break
        }
    }
    x=x.toUpperCase()
    display_hint.textContent=y.join("")
    let alpha
    let wrong_answer=0
    let play=true
    
    
    for(let i=0;i<26;i++){
        abcd[i].addEventListener("click",function(){
            let f1=0
           
            alpha=abcd[i].textContent
            abcd[i].classList.add("pointernone")
            for(let j=0;j<x.length;j++){
                if(alpha===x[j]){
                    f1=1
                    y[j]=alpha
                }
            }
            if(f1==0){
                abcd[i].style.color="white"
                abcd[i].style.backgroundColor="red"
                wrong_answer++
                for(let k=0;k<wrong_answer;k++){
                    wo[k].style.display="block"
                }
                if(wrong_answer==9){
                    finish()
                    result.textContent="ANSWER : "+x
                }
                

            }else{
                abcd[i].style.color="white"
                abcd[i].style.backgroundColor="#09cd09"
                display_hint.textContent=y.join("")
                if(y.join("")===x){
                    finish()
                    result.textContent="YOU WON"
                }
                
            }

        })
    }
}

function finish(){
    for(let i=0;i<26;i++){
        abcd[i].classList.add("pointernone")
    }
}

