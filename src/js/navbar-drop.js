const navbar = document.querySelector("#nav");
onscroll = function() {

    var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(nVScroll > 50){
        navbar.setAttribute('class','navbar navbar-expand-lg fixed-top nav-desce');
    }else if(nVScroll < 50){
        navbar.style.transition = "0.3s";
        navbar.setAttribute('class','navbar navbar-expand-lg fixed-top');
    }
};