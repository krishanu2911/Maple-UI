const cardBtn = document.querySelector(".card-close-btn");
const cardDiv = document.querySelector(".card-dismiss");
cardBtn.addEventListener("click", cardCloseHandler);
function cardCloseHandler(){
    cardDiv.style.display = "none";
}