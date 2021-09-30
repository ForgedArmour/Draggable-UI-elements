const box = document.querySelectorAll(".box");
const mainbox = document.querySelectorAll(".mainbox");
const dragitem = document.querySelectorAll(".dragitem");
var draggedItem=null;

//functions
function dragStart() {
    draggedItem = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
}
function Drop(){
   const innerEle = this.querySelectorAll(".dragitem");
   if (innerEle.length >= 10) {
       alert("Maximum 10 elements in a Box");
   }
   else
   {    if(this === box[0]){
            draggedItem.style.backgroundColor = "#4CAF50";
        }
        else if(this === box[1]){
            draggedItem.style.backgroundColor = "#f44336";
        }
        else{
            draggedItem.style.backgroundColor = "#008CBA";
        }
        this.appendChild(draggedItem);
        draggedItem.style.color = "white";
   }
}
function dragEnd(){
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    draggedItem = null;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}


//event listners
dragitem.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend',dragEnd);
});


box.forEach((holder)=>{
    holder.addEventListener('drop',Drop);
    holder.addEventListener('dragover',dragOver);

})
