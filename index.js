let cards=[];
let cards1=[];
document.querySelector(".icon").addEventListener("click",function(){
document.querySelector(".poppup").style.visibility="visible"
document.querySelector(".msg").style.visibility="hidden"
})
document.querySelector(".closebtn").addEventListener("click",function(){
    document.querySelector(".poppup").style.visibility="hidden"
    document.querySelector(".msg").style.visibility="visible"
  })
  
  document.querySelector(".addbtn").addEventListener("click",function(){
    document.querySelector(".poppup").style.visibility="hidden"
    let inputtext=document.querySelector("#inputtext");
    let div1=document.createElement("div")
    div1.setAttribute("id","createcard")
    let title= document.createElement("h4")
    let ul=document.createElement("ul")
    title.innerText=inputtext.value;
    let line1=document.createElement("hr")
    line1.setAttribute("class","hr1")
 
    let plusicon=document.createElement("i")
    plusicon.className="fa fa-plus-circle"
    plusicon.addEventListener("click",()=>{
      showItemForm(ul);
      console.log("s")
  })

    let trash=document.createElement("i")
    trash.className="fa fa-trash";
    trash.addEventListener("click",function removeList(){
      let newarr=[];
      for(let i=0;i<cards.length;i++){
        if(cards[i]!==div1){
          newarr.push(cards[i])
        }
      }
      cards=newarr;
      display(cards)
    })
    div1.append(title,line1,ul,plusicon,trash)
      cards.push(div1)
display(cards)
 })
  function display(cards){
    let list=document.querySelector("#createcard1")
    list.innerHTML=""
    for(let i=0;i<cards.length;i++){
      list.appendChild(cards[i])
    }
  }

document.querySelector(".addbtn").addEventListener("click",function(){
    document.querySelector("#createcard1").style.visibility="visible";
})
document.querySelector(".closebtn1").addEventListener("click",function(){
  document.querySelector(".poppup1").style.visibility="hidden";
})
function showItemForm(tag){
  document.querySelector(".poppup1").style.visibility = "visible";
  document.querySelector(".addbtn1").addEventListener("click",function m1(){
   
      let li = document.createElement("li");
      li.innerText=document.querySelector("#inputtext1").value;
      tag.append(li);
      document.querySelector(".poppup1").style.visibility = "hidden";
      document.querySelector(".addbtn1").removeEventListener("click",m1);

 
  });
}
