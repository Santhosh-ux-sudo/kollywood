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


let lists=[
  'AADUKALAM',    'ALAIPAYUTHEY', 'ANBESIVAM',   'ANNIYAN',
  'ARUL',         'ARUVI',        'ASURAN',      'ATTAKATHI',
  'AYAN',         'BAASHA',       'BEAST',       'BOMBAY',
  'CHANDRAMUKHI', 'CUCKOO',       'ENTHIRAN',    'ETHIRNEECHAL',
  'FRIENDS',      'GHAJINI',      'GHILLI',      'HEYRAM',
  'INDIAN',       'IRAIVI',       'IRUVAR',      'JAIBHIM',
  'JAILOR',       'JEEVA',        'JIGARTHANDA', 'JILLA',
  'JOKER',        'KAITHI',       'KALAVANI',    'KAYAL',
  'KUMKI',        'LATHTHI',      'MADRAS',      'MANDELA',
  'MANKATHA',     'MAYA',         'MIRUTHAN',    'MOUNARAGAM',
  'MOZHI',        'MUDHALVAN',    'MUTHU',       'NAADODIGAL',
  'NANBAN',       'NAYAKAN',      'PADAIYAPPA',  'PAPANASAM',
  'PARADESI',     'PASANGA',      'PERANBU',     'PITHAMAGAN',
  'PIZZA',        'POLLADHAVAN',  'PUTHUPETTAI', 'RAAM',
  'RAAVANAN',     'ROJA',         'SAAMY',       'SAATTAI',
  'SACHIEN',      'SIVAJI',       'SUPERDELUXE', 'THALAPATHI',
  'THANIORUVAN',  'THEAN',        'THEGIDI',     'THERI',
  'THUPPAKKI',    'VADACHENNAI',  'VEYIL',       'VIKRAM',
  'VIKRAMVEDHA',  'VIRUMANDI',    'VISAARANAI'
]
let lists_hint=[
  '________M',    '__________E_', 'A______A_',   '___I___',
  'A___',         '____I',        '_____N',      '________I',
  '___N',         '___S__',       '__A__',       '____A_',
  '___N________', '_U____',       '___H____',    '__________A_',
  '___E___',      '__A____',      '_H____',      '_E____',
  '____A_',       '____V_',       '__U___',      '_A_____',
  '_A____',       '____A',        '_____T_____', '____A',
  '___E_',        '___T__',       '_______I',    '_A_A_',
  '____I',        '_A_____',      '_A__A_',      '__N____',
  '__N_____',     '__Y_',         '_______N',    'M________M',
  '____I',        '___H_____',    '___H_',       '____O_____',
  '___B__',       '____K__',      '____I_____',  '________M',
  '_______I',     '____N__',      'P______',     '_________N',
  '____A',        '______H____',  '__________I', '___M',
  'R_______',     '___A',         '___M_',       '______I',
  '______N',      '___A__',       '___E__E___E', '_________I',
  'T__________',  '___A_',        '__E____',     '____I',
  '_____A___',    '__________I',  '_E___',       '____A_',
  '_________H_',  'V________',    '__S_______'
]

function random(){
    return Math.floor(Math.random()*lists.length)
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
    b=b.toUpperCase()
    a=a.toUpperCase()

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
                y.push(b)
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

