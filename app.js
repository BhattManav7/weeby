let mentBtn= document.getElementById("menuBtn")
let sideNav= document.getElementById("sideNav")
sideNav.style.right="-250px";
menuBtn.onclick= function(){
    if(sideNav.style.right== "-250px"){
        sideNav.style.right= "0px";
    }
    else{
        sideNav.style.right= "-250px";
    }
}

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});