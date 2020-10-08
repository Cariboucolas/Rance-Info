/*window.onload = function()
{
    console.log("loaded");*/
    const layoutButton = document.querySelector("#layout-button");
    
    /**
    *card button's actions:
    */
    let cardDeckArray = document.querySelectorAll(".card-deck");
    layoutButton.addEventListener("click", function () 
    {
        
        for(i =0 ; i<cardDeckArray.length ; i++)
           {
            cardDeckArray[i].classList.toggle("d-none");
            }
        ;
        document.querySelector("#article-list").classList.toggle("d-none");
    });

    /**
    * list button's actions
    */


/**
 * Event pour changer l'icône du bouton
 */
    layoutButton.addEventListener("click", function () 
        {
        let fontAwesomeIcon = layoutButton.querySelector("i");
        fontAwesomeIcon.classList.toggle("fa-clone");
        fontAwesomeIcon.classList.toggle("fa-list");
        });
//}
