let btn=document.querySelectorAll(".button-option");
let popup=document.querySelector(".popup ");
let newgame=document.getElementById("new-game");
let restart=document.getElementById("restart");
let messge=document.getElementById("message");
let x=true

let petturn=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [1,4,7],
    [3,4,5],
    [2,4,6],
    [0,4,8]
]
let disabledbtn=()=>{
    btn.forEach((element)=>{
        element.disabled=true
    })
    popup.classList.remove("hide")
}
let count=0
const draw=()=>{
    disabledbtn()
    messge.innerHTML=`"😶" <br> ' Draw'`

}

const winfunction=(letter)=>{
    disabledbtn()
    if
    (letter=="x") 
        {
        messge.innerHTML=`"🎉" <br> 'x win'`
    }
    else
    {
        messge.innerHTML=`"🎉"<br> 'o win'`
    }
}

const winchecker=()=>{
    for(let i of petturn){
        let [element1,element2,element3 ]=[
            btn[i[0]].innerHTML,
            btn[i[1]].innerHTML,
            btn[i[2]].innerHTML
        ]
        if(element1!=""&&(element2!="")&&(element3!="")){
            if(element1==element2&&element2==element3){
                winfunction(element1)
            }
        }
    }
}


btn.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(x){
            element.innerHTML="x"
            x=false;
            element.disabled=true
        }
        else{
            element.innerHTML="O"
            x=true;
            element.disabled=true
        }
        count+=1
        if(count==9){
            draw()
        }
    winchecker()
    })
})


restart.addEventListener("click", () => {
    btn.forEach(element => {
      element.innerHTML = "";
      element.disabled = false;
    });
    x = true;
    count = 0;
    popup.classList.add("hide");
  });

  newgame.addEventListener("click", () => {
    btn.forEach(element => {
      element.innerHTML = "";
      element.disabled = false;
    });
    x = true;
    count = 0;
    popup.classList.add("hide");
  });
  