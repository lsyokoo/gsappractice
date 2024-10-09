document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable);

  Draggable.create("#draggableElement", {
    type: "x,y", 
    bounds: window
  });
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".box1",{
  scrollTrigger:".box1",
  x:500,y:400,scale:3,duration:3});

let timeline = gsap.timeline({delay: 2});
timeline.to(".box1", {duration: 2, rotation: -360})
  .to(".box2", {duration: 1, x: -100, ease: 'elastic.out'})
  .to(".box3", {duration: 2, rotation: 360, x: 100, ease: 'expo.out'});
