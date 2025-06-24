//It is not an assignment it is just practice.

let inp1= document.querySelector('#i1');
let btn1 = document.querySelector("#btn1");
let ul1 = document.querySelector("#ul1")
btn1.addEventListener('click',function(event){
    let item = document.createElement('li');
    item.innerText=inp1.value;
    inp1.value= ""

    let dltbtn= document.createElement('button');
    dltbtn.innerText = "Delete this task";
    item.appendChild(dltbtn)

    ul1.appendChild(item)
    

    ul1.addEventListener("click", function(event){
        if(event.target.nodeName=="BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
            
        }
    })
})