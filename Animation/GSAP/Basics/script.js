/*GSAP : GrrenSock Animation Platform
is using moving animation*/
/*gsap animtion is two way 
1. intial to final (position)
*/
gsap.to(".box", {
  //all css property apply here
  x: 1200,
  rotate: 360,
  backgroundColor: "blue",
  duration: 2,
  delay: 1,
});
// 2. final to intial (position)
gsap.from(".box0", {
  x: 1200,
  rotate: 360,
  backgroundColor: "blue",
  duration: 2,
  delay: 1,
});

//GSAP Timeline
let tl = gsap.timeline();
tl.to(".box1", {
  x: 1275,
  rotate:360,
  scale:0.5,
  duration:2,
  delay:1
});
tl.to(".box2", {
  x: 1275,
  rotate:360,
  scale:0.5,
  duration:2,
  // delay:3
});
tl.to(".box3", {
  x: 1275,
  rotate:360,
  scale:0.5,
  duration:2,
  // delay:3
});
