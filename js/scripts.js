// scripts.js
$(function () {
	var carouselList = $("#carousel ul");
    var myVar = setInterval(slideRight, 3000);
    $left = $('#left');
    $right = $('#right');
   
    $left.click(function() {
        slideLeft();
    });
    $right.click(function() {
        slideRight ();
    });
    function slideRight() {
        carouselList.animate({"marginLeft": -800}, 500, moveFirstSlide);
	}
    function slideLeft() {
        carouselList.animate({"marginLeft": 0}, 500, moveLastSlide);
	}
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: -400});
    }
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});
    }
});