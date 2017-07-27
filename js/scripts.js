// scripts.js
$(function () {
	var carouselList = $("#carousel ol");
    var myVar = setInterval(Slide, 3000);
    
    function Slide() {
        carouselList.animate({"marginLeft": -400}, 500, moveFirstSlide);
	}
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
});