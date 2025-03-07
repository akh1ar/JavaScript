gsap.to('.page2 h1',{
  transform:"translateX(-160%)",
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    scrub:2,
    markers:true,
    start:"top 0",
    end: "top -100%",
    scurb:5,
    pin:true
  }
})