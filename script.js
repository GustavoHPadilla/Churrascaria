var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


var target = document.querySelectorAll('[data-anime]');
var animationClass = 'animate';


function scrollMouse() {

    var janela = window.pageYOffset + ((window.innerHeight * 4) / 4.5);

    target.forEach(function(element) {

        if((janela) > element.offsetTop) {
            element.classList.add(animationClass);
        }
        
        else {
            element.classList.remove(animationClass);
        }

    })

} scrollMouse();

if(target.length) {

window.addEventListener('scroll', function() {

    scrollMouse();

})

}