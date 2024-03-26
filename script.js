function locomotiveanim() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveanim();


var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 10 + "px";
    crsr.style.top = dets.y + 10 + "px";
});


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 22%",
        end: "top 0",
        scrub: 2
    }
});

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -75%",
        end: "top 130%",
        scrub: 1.5
    }
});

tl.to(".page1 h1", {
    x: -100,
}, "anim");

tl.to(".page1 h2", {
    x: 140
}, "anim");

tl.to(".page1 video", {
    width: "96%"
}, "anim");

tl2.to(".main", {
    backgroundColor: "#FEFCFF"
})


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -475%",
        end: "top -530%",
        scrub: 1.5
    }
});

tl3.to(".page3", {
    borderBottom: "1px solid white"
})

tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})

tl3.to(".page3-part3 h2", {
    color: "white"
})




function page2anim() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2 h1",
            scroller: ".main",
            start: "top 70%",
            end: "top 15%",
            scrub: 2
        }
    });

    tl4.from(".page2 h1", {
        y: 90,
        opacity: "0"
    })

    tl4.from(".page2-left", {
        y: 60,
        opacity: "0"
    })

    tl4.from(".page2-right", {
        y: 60,
        opacity: "0"
    })
}
page2anim();



function page3anim() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3 h1",
            scroller: ".main",
            start: "top 75%",
            end: "top 15%",
            scrub: 2
        }
    });

    tl5.from(".page3 h1", {
        y: 90,
        opacity: "0"
    })

    tl5.from(".page3-img1, .page3-vid1", {
        y: 90,
        opacity: "0"
    })

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3-vid2",
            scroller: ".main",
            start: "top 60%",
            end: "top 15%",
            scrub: 2
        }
    });

    tl6.from(".page3-img2, .page3-vid2", {
        y: 90,
        opacity: "0"
    })
}
page3anim();



function page5anim() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5 h2",
            scroller: ".main",
            start: "top 72%",
            end: "top 35%",
            scrub: 2
        }
    });

    tl7.from(".page5 h2", {
        y: 70,
        opacity: "0"
    })

    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5 h2",
            scroller: ".main",
            start: "top 50%",
            end: "top 20%",
            scrub: 2
        }
    });

    tl8.from(".box", {
        y: 40,
        opacity: "0",
        stagger:0.3
    })
}
page5anim();



function footeranim(){
    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".left-head h1",
            scroller: ".main",
            start: "top 78%",
            end: "top 43%",
            scrub: 2
        }
    });

    tl9.from(".left-head h1", {
        y: 90,
        opacity: "0"
    })
}
footeranim();



function imagehover() {
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            var att = elem.getAttribute("data-image");
            crsr.style.width = "300px"
            crsr.style.height = "250px"
            crsr.style.borderRadius = "0"
            crsr.style.backgroundImage = `url(${att})`
        })
        elem.addEventListener("mouseleave", function () {
            var att = elem.getAttribute("data-image");
            crsr.style.width = "13px"
            crsr.style.height = "13px"
            crsr.style.borderRadius = "50%"
            crsr.style.backgroundImage = `none`
        })
    })
}
imagehover()



function purple() {
    var h4 = document.querySelectorAll("#nav h4");
    var prple = document.querySelector(".purple");
    h4.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            prple.style.display = "block";
            prple.style.opacity = "1"
        })
        elem.addEventListener("mouseleave", function () {
            prple.style.display = "none";
        })
    })
}
purple();



function cirprple() {
    var minicir = document.querySelectorAll("#circle");
    var prple = document.querySelector(".purple");
    minicir.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            prple.style.display = "block";
            prple.style.opacity = "1"
        })
        elem.addEventListener("mouseleave", function () {
            prple.style.display = "none";
        })
    })
}
cirprple();



function navloop() {
    function homeloop() {
        var home = document.querySelector("#nav-part2-H");
        var homeloop = document.querySelector(".purple .nav-home");
        home.addEventListener("mouseenter", function () {
            homeloop.style.opacity = "1"
        })
        home.addEventListener("mouseleave", function () {
            homeloop.style.opacity = "0"
        })
    }
    homeloop();

    function workloop() {
        var work = document.querySelector("#nav-part2-W");
        var workloop = document.querySelector(".purple .nav-work");
        work.addEventListener("mouseenter", function () {
            workloop.style.opacity = "1"
        })
        work.addEventListener("mouseleave", function () {
            workloop.style.opacity = "0"
        })
    }
    workloop();

    function studioloop() {
        var studio = document.querySelector("#nav-part2-S");
        var studioloop = document.querySelector(".purple .nav-studio");
        studio.addEventListener("mouseenter", function () {
            studioloop.style.opacity = "1"
        })
        studio.addEventListener("mouseleave", function () {
            studioloop.style.opacity = "0"
        })
    }
    studioloop();

    function contactloop() {
        var contact = document.querySelector("#nav-part2-C");
        var contactloop = document.querySelector(".purple .nav-contact");
        contact.addEventListener("mouseenter", function () {
            contactloop.style.opacity = "1"
        })
        contact.addEventListener("mouseleave", function () {
            contactloop.style.opacity = "0"
        })
    }
    contactloop();

    function circleloop() {
        var circle = document.querySelector("#circle");
        var circleloop = document.querySelector(".purple .nav-circle");
        circle.addEventListener("mouseenter", function () {
            circleloop.style.opacity = "1"
        })
        circle.addEventListener("mouseleave", function () {
            circleloop.style.opacity = "0"
        })
    }
    circleloop();
}
navloop();