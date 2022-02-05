const closeBtn = document.querySelector(".close-icon");
const alertDivToClose = document.querySelector(".alert-dismiss");
closeBtn.addEventListener("click", closeHandler);
function closeHandler(){
    alertDivToClose.style.display = "none";
}