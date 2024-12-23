/*const txtBox=document.getElementById("todo_txt");
txtBox.addEventListener("keypress",keyEnter);
function keyEnter(event){
    if (event.keyCode=="Enter"){
        addToDo();
    }
}*/
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
        const checkIMG=document.createElement("img");

        todoBox.appendChild(addedTxtDiv);
        addedTxtDiv.appendChild(checkIMG);
        addedTxtDiv.appendChild(text);
        addedTxtDiv.appendChild(deleteBTN);
        addedTxtDiv.appendChild(checkedBTN);

        addedTxtDiv.className="addedTxtDiv";
        todoBox.className="todoBox";
        deleteBTN.className="deleteBTN";
        checkedBTN.className="checkedBTN";
        text.className="text";
        checkIMG.className="checkIMG";

        text.textContent = addedTxt.value;
        deleteBTN.textContent ="Delete";
        checkedBTN.textContent ="Done";
        //done
        {
            checkedBTN.onclick=function(){
                if (checkIMG.style.display === "block") {
                    checkIMG.style.display = "none";
                    text.style.color = "black";
                    text.style.textDecoration = "none";
                } else {
                    checkIMG.style.display = "block";
                    checkIMG.src = "D:\\ACA\\JS Advanced\\ToDoList\\Assets\\check-mark.png";
                    text.style.color = "gray";
                    text.style.textDecoration = "line-through";
                }
            }
        }
        //delete btn
        {
            deleteBTN.onclick=function (){
                let res=confirm("Are you sure you want to delete the task?");
                if(res) addedTxtDiv.remove();
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
