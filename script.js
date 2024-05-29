const inputSection = document.querySelector(".input-section");
const button = document.querySelector("button");
const input = document.querySelector("input");

   
        button.addEventListener("click",()=>{
            if(input.value != ""){
                let newL = document.createElement("div");
                newL.classList.add("newL");
                newL.classList.add("task");
                newL.textContent = `${input.value}`;
                inputSection.appendChild(newL);

                newL.addEventListener("click",function(){
                    console.log("yeeahh");
                    newL.classList.add("task-finish"); 
                    newL.classList.remove("task"); 
                })

                newL.addEventListener("dblclick",function(){
                    newL.remove(newL);
                })
            }
        })


   