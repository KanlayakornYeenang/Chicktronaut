var scrollBefore = 0;
var moveMars = 0;
var winHeight = window.innerHeight;
// var time = 0;
// var num_pig = 4;
// var burHeight = 0;
// var time2 = 0;
// var run = 0;
// var lastHeight = 0;
// var sec = 0;
// var sec1 = 0;
window.addEventListener('scroll',function(e){
    scrolled = window.scrollY;
    console.log(winHeight);
    if (scrolled <= winHeight){
    perHeight = (scrolled*50)/winHeight;
    document.getElementById('mars').style.transform = `translate(${perHeight*0.5}vw, ${perHeight*0.7}vh)`;
    }
})
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});