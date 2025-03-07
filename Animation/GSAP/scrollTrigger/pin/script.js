gsap.to(".page2 img",{
  width:"100%",
  scrollTrigger:{
    //when use to pin so traget parent element
    trigger:".page2",
    scroller:"body",
    markers:true,
    start: "top 0",
    end: "top -100%",
    scrub:2,
    pin:true,
  }
});