$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})

$('.counter').countUp({
    time: 1000,
    delay: 10
})


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark__theme");
 }


 function openFunction(){
    document.getElementById("scale").style.width = "100%";
    element.classList.toggle("overlay-scale.open");
 }
 function closeFunction(){
    document.getElementById("scale").style.width = "0%";
    element.classList.toggle("overlay-scale");
 }

