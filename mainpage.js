 
document.addEventListener("DOMContentLoaded", function () {
            var seeMenuButton = document.querySelector('.custom-button');
            var exploreMenuSection = document.getElementById('exploreMenuSection');     
            seeMenuButton.addEventListener('click', function (event) {

                event.preventDefault();
                exploreMenuSection.scrollIntoView({
                    behavior: 'smooth' 
                });
            });
        });

function redirectToRestaurantWebsite() {
window.location.href = '/Users/sanjaychariteshmakam/Visual-Studio/Web project/index.html'; 
}                        


    document.getElementById("viewAllButton").addEventListener("click", function() {
        window.location.href = "/Users/sanjaychariteshmakam/Visual-Studio/Web project/web-foods-cards-deserts.html";
    });


