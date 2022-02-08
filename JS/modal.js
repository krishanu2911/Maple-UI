const mainDialog = document.querySelector(".dialog-main");
const dialogDiv = document.querySelector(".dialog");
const openDia = document.querySelector(".open-dialog");
const itemsOfDia = document.querySelector(".items");

openDia.addEventListener("click", defaulDia);
function defaulDia() {
    mainDialog.classList.add("open");    
}
mainDialog.addEventListener("click", clickHandler);
 function clickHandler(event) {
    if(event.target.closest(".dialog")) return;

    mainDialog.classList.remove("open");
}