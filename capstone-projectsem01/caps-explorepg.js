

const exploreCards = document.querySelectorAll(".hero-card");


exploreCards.forEach(function(card){
    
    card.addEventListener("mouseenter", function(){
        card.style.opacity = "0.92";
    });

    card.addEventListener("mouseleave", function(){
        card.style.opacity = "1";
    });

    card.addEventListener("click", function(){
        alert("This category is added to your interests!");
    });
});