gsap.from('.bg1', {
    scale: 1.3,
    duration: 1,
});

gsap.from('.fade', {
    opacity: 0,
    duration: 1,
    delay: 1,
});
gsap.from('nav li', {
    opacity: 0,
    bottom: 15,
    delay: 1,
    stagger: .2,
});

gsap.from('.content', {
    opacity: 0,
    left: "200px",
    delay: 1
});

function next(){
    gsap.to('.slid', {
        left: '100%',
        duration: 1.5,
        stagger: .1,
    });
    gsap.to('.bg1', {
        opacity: 0,
        duration: .1,
        delay: .5
    });

    gsap.to('.bg2', {
        opacity: 1,
        duration: .1,
        delay: .5
    });
}

function back(){
    gsap.to('.slid', {
        left: '-100%',
        duration: 1.5,
        stagger: .1,
    });
    gsap.to('.bg1', {
        opacity: 1,
        duration: .1,
        delay: .5
    });

    gsap.to('.bg2', {
        opacity: 0,
        duration: .1,
        delay: .5
    });
}