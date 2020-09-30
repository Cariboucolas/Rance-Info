const cardButton = document.querySelector(".cardButton");
const listButton =  document.querySelector(".listButton");

cardButton.addEventListener("click", function(){
    listButton.classList.toggle("visible");
    cardButton.classList.toggle("none");
});
listButton.addEventListener("click", function(){
    listButton.classList.toggle("visible");
    cardButton.classList.toggle("none");
});