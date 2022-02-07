const leadingBtn = document.querySelector("#leading");
const leadingClose = document.querySelector("#leading-dismiss");
const leadingDiv = document.querySelector("#leading-div");
const baselineBtn = document.querySelector("#baseline");
const baselineClose = document.querySelector("#baseline-dismiss");
const baselineDiv = document.querySelector("#baseline-div");

leadingBtn.addEventListener("click", leadingClickHandler);

function leadingClickHandler(){
    leadingDiv.classList.remove("hide-snack");
}
leadingClose.addEventListener("click", leadingClosingClickHandler);

function leadingClosingClickHandler(){
    leadingDiv.classList.add("hide-snack");
}
baselineBtn.addEventListener("click", baselineClickHandler);

function baselineClickHandler(){
    baselineDiv.classList.remove("hide-snack");
}
baselineClose.addEventListener("click", baselineClosingClickHandler);

function baselineClosingClickHandler(){
    baselineDiv.classList.add("hide-snack");
}