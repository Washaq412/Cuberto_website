Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos: ["./video/0.mp4","./video/2.mp4" ,"./video/3.mp4"]});
// Shery.imageEffect("#s-right",{style:4, debug:true} )



gsap.to(".s-leftElem" , {
    scrollTrigger:{
        trigger: "#sticky-page",
        pin:true,
        start: "top top",
        end: " bottom bottom",
        endTrigger: ".last_element",
        scrub: 1
    },
    y:"-300%",
    ease:Power1,

})




