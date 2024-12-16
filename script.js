const txtBox=document.getElementById("todo_txt");

function addToDo() {
    const todoBox = document.getElementById("todo_box");
    const addBTN = document.getElementById("todo_add_btn");
    const addedTxt=document.getElementById("todo_txt");
    addedTxt.value="enter Your Tasks Here!";
    addedTxt.style.color="gray";
    addBTN.onclick=function (){
        const addedTxtDiv = document.createElement("div");
        const text = document.createElement("text");
        const deleteBTN = document.createElement("button");
        const checkedBTN = document.createElement("button");

        todoBox.appendChild(addedTxtDiv);
        addedTxtDiv.appendChild(text);
        addedTxtDiv.appendChild(deleteBTN);
        addedTxtDiv.appendChild(checkedBTN);
        addedTxtDiv.className="addedTxtDiv";
        todoBox.className="todoBox";
        deleteBTN.className="deleteBTN";
        checkedBTN.className="checkedBTN";
        text.className="text";

        text.textContent = addedTxt.value;
        deleteBTN.textContent ="Delete";
        checkedBTN.textContent ="Done";
        //done
        {
            checkedBTN.onclick=function(){
                text.style.color="gray";
                text.style.textDecoration = "line-through";
            }
        }
        //delete btn
        {
            deleteBTN.onclick=function (){
                addedTxtDiv.remove();
            }
        }
    };
    //add txt
    {
        addedTxt.onclick=function (){
            addedTxt.value="";
            addedTxt.style.color="black"
        }
    }
    //clear default text
    {
        if (addedTxt.onclick===true){
            addedTxt.value="";
            addedTxt.style.color="black";
        }
    }
}

document.addEventListener("DOMContentLoaded",addToDo);
