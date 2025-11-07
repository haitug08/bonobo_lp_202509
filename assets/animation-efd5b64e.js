const Nav = document.querySelector('header');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.addEventListener("load", () => {
  setTimeout(() => {
    lenis.scrollTo(0, { immediate: true });
  }, 0);
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    window.scrollTo(0, 0);
  }
});


// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     document.body.classList.remove('is-loading');
//   }, 50); // 蟆代＠驕�ｻｶ繧貞�繧後ｋ縺ｨ螳牙ｮ�
// });

function isMobile() {
  // 繝ｦ繝ｼ繧ｶ繝ｼ繧ｨ繝ｼ繧ｸ繧ｧ繝ｳ繝医ｒ蜿門ｾ�
  const userAgent = navigator.userAgent.toLowerCase();
  // 繧ｹ繝槭�縺九←縺�°繧貞愛螳壹☆繧区ｭ｣隕剰｡ｨ迴ｾ
  const mobileDevices = /iphone|ipad|ipod|android|blackberry|windows phone|opera mini|iemobile/;
  return mobileDevices.test(userAgent);
}
function Timer(ms) {
  return () =>
    new Promise(resolve => {
      setTimeout(resolve, ms)
    })
}

let flag = 0;

//////////////////////////////////////////////////////////////////////////////// 諷｣諤ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
const lenis = new Lenis({
  duration: 0.7, // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ邯咏ｶ壽凾髢�
  direction: 'vertical', // 譁ｹ蜷�
  gestureDirection: 'vertical',
  // smooth: true, // 繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ譛牙柑繝ｻ辟｡蜉ｹ繧定ｨｭ螳�
  smoothTouch: false, // 繧ｿ繝�メ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ譛牙柑繝ｻ辟｡蜉ｹ繧定ｨｭ螳壹�(繧ｿ繝�メ繝�ヰ繧､繧ｹ譛ｬ譚･縺ｮ貊代ｉ縺九＆繧呈ｨ｡蛟｣縺吶ｋ縺薙→縺ｯ荳榊庄閭ｽ縺ｧ縺ゅｋ縺溘ａ縲√ョ繝輔か繝ｫ繝育┌蜉ｹ)
  touchMultiplier: 2,
  // scrollBehavior: auto,
})
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);}
requestAnimationFrame(raf);
lenis.stop();

window.addEventListener('wheel', (e) => {
  const scrollMax = document.body.scrollHeight - window.innerHeight;
  const current = window.scrollY;

  if (current >= scrollMax && e.deltaY > 0) {
    // 荳九↓蜷代°縺�せ繧ｯ繝ｭ繝ｼ繝ｫ縺梧怙荳矩Κ縺ｫ繝偵ャ繝�
    e.preventDefault();
    lenis.scrollTo(scrollMax - 1); // 蟆代＠謌ｻ縺�
  }
}, { passive: false });

//////////////////////////////////////////////////////////////////////////////// 繝吶�繧ｹ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
const list = document.querySelectorAll(".move")
list.forEach(function(element, i) {
    gsap.fromTo(
      list[i], // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺輔○繧玖ｦ∫ｴ�
      {opacity: 0,y: 50,},
      {
        opacity: 1,y: 0,duration: 0.6,
        scrollTrigger: {
          trigger: list[i],
          toggleActions: "play none none reverse", 
          start: "center center", 
          // markers: true,
        },
      }
    );
});

if (isMobile()) {
  const list3 = document.querySelectorAll(".move_normal")
  list3.forEach(function(element, i) {
      gsap.fromTo(
        list3[i], // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺輔○繧玖ｦ∫ｴ�
        {opacity: 0,},
        {
          opacity: 1,duration: 2,
          scrollTrigger: {
            trigger: list3[i],
            toggleActions: "play none none reverse", 
            start: "top+=200 bottom", 
            // markers: true,
          },
        }
      );
  });
}else {
  const list3 = document.querySelectorAll(".move_normal")
  list3.forEach(function(element, i) {
      gsap.fromTo(
        list3[i], // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺輔○繧玖ｦ∫ｴ�
        {opacity: 0,},
        {
          opacity: 1,duration: 2,
          scrollTrigger: {
            trigger: list3[i],
            toggleActions: "play none none reverse", 
            start: "top+=200 bottom", 
            // markers: true,
          },
        }
      );
  });
}

if (isMobile()) {
  const list3 = document.querySelectorAll(".move_normal2")
  list3.forEach(function(element, i) {
      gsap.fromTo(
        list3[i], // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺輔○繧玖ｦ∫ｴ�
        {opacity: 0,},
        {
          opacity: 1,duration: 2,
          scrollTrigger: {
            trigger: list3[i],
            toggleActions: "play none none reverse", 
            start: "center center", 
            // markers: true,
          },
        }
      );
  });
}else {
  const list3 = document.querySelectorAll(".move_normal2")
  list3.forEach(function(element, i) {
      gsap.fromTo(
        list3[i], // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺輔○繧玖ｦ∫ｴ�
        {opacity: 0,},
        {
          opacity: 1,duration: 2,
          scrollTrigger: {
            trigger: list3[i],
            toggleActions: "play none none reverse", 
            start: "top bottom", 
            // markers: true,
          },
        }
      );
  });
}

const list3 = document.querySelectorAll(".move_normal3")
list3.forEach(function(element, i) {
    gsap.fromTo(
      list3[i], // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺輔○繧玖ｦ∫ｴ�
      {opacity: 0},
      {
        opacity: 1,duration: 1,
        scrollTrigger: {
          trigger: list3[i],
          toggleActions: "play none none reverse", 
          start: "top top+=220", 
          // markers: true,
        },
      }
    );
});

//////////////////////////////////////////////////////////////////////////////// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);
  //////////////////////////////////////////////////////////////////////////////// 蛻晏屓繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
  const TL = gsap.timeline({
  });
  TL.fromTo('.firstSecP1',{opacity: 0,},{opacity: 1, duration: 2,delay:0.5},"start")
  .fromTo('.firstSecP2',{opacity: 0},{opacity: 1, duration: 2,delay:1.5},"start")
  .to(".btn-scroll", {opacity: 1,duration: 1,delay:2.3},"start")
  .call(() => {flag = 1;})
});


const tlsec = gsap.timeline({paused: true});
tlsec.fromTo("#firstSec div",{y: 0,opacity:1,},{y:-20,opacity:0,duration: 0.5,},"on")
.fromTo("#firstSec",{opacity: 1},{opacity: 0, duration: 0.1,},"on")
.call(() => {flag = 2; console.log("")},null, "start+=3.2")
.to({}, { duration: 0.3 })
.fromTo('.secondSecP1',{opacity: 0},{opacity: 1, duration: 1.3,},"start")
.fromTo('.p2_1',{opacity: 0},{opacity: 1, duration: 2.2,delay:1},"start")
.fromTo('.secondSec_bg',{opacity: 0},{opacity: 1, duration: 4,delay:0.5},"start")
.to(".secondSec_bg", {"--before-scale": "1.25",duration:20,},"start+=0.5")
.fromTo('.p2_2',{opacity: 0},{opacity: 1, duration: 2.2, delay:2,},"start")
.fromTo('.p2_3',{opacity: 0},{opacity: 1, duration: 2.2, delay:3,},"start")

const tlsec2 = gsap.timeline({paused: true});
tlsec2.to(".secondSecP1, .secondSecP2",{y:-20,opacity:0,duration: 0.5,},"in")
.fromTo(".thirdSec_bg",{opacity: 0},{opacity: 1, duration: 0.4,},"in")
.to(".thirdSec_bg", {"--before-scale": "1.25",duration:20,},"moji")
.call(() => {flag = 3; console.log("")},null, "moji+=3.2")
.to({}, { duration: 0.3 })
.fromTo('.thirdSecP1',{opacity: 0},{opacity: 0.8, duration: 1.3,},"moji")
.fromTo('.thirdSecP2',{opacity: 0},{opacity: 0.8, duration: 1.3,delay:1.9},"moji")

const tlsec3 = gsap.timeline({paused: true});
tlsec3.fromTo("#fourthSec",{opacity: 0},{opacity: 1, duration: 0.2,})
.to({}, { duration: 0.4 })
.fromTo(".fourthSecP1",{opacity: 0},{opacity: 1, duration: 1,})
.to({}, { duration: 1.4 })
.to(".fourthSecP1",{opacity: 0, duration: 1,})
.fromTo("#fifthSec",{opacity: 0},{opacity: 1, duration: 0.1,})
.to(".fifthSec_bg", {"--maskSize": "3000px",duration:3,ease: "power3.out",},"go")
.to(".fifthSec_bg", {"--before-scale": "1.2",duration:20,},"go")
.fromTo(".fifthSeclogo",{opacity: 0,y:0,filter: 'blur(30px)',},{opacity: 1,y: 0,duration: 0.6,filter:'blur(0px)',delay:0.3},"go")
.fromTo(".fifthSecP1",{opacity: 0,y:0,filter: 'blur(30px)',},{opacity: 1,y: 0,duration: 0.6,filter:'blur(0px)',delay:0.6},"go")
.call(() => {lenis.start();},null,"go")

//// PC縺ｮ譎ゅせ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆繧�
window.addEventListener("wheel", function (event) {
  if (flag == 1) {
    tlsec.play();
  }
  if (flag == 2) {
    tlsec2.play();
  }
  if (flag == 3) {
    tlsec3.play();
  }
})



//////////////////////////////////////////////////////////////////////////////// 繧ｹ繝槭�縺ｮ蜃ｦ逅�ｒ譖ｸ縺�

// 繧ｿ繝��譎ゅ�隱､蜍穂ｽ懊ｒ髦ｲ縺舌◆繧√�繧ｹ繝ｯ繧､繝玲凾縺ｮ蜃ｦ逅�ｒ螳溯｡後＠縺ｪ縺�怙蟆剰ｷ晞屬
const minimumDistance = 30
// 繧ｹ繝ｯ繧､繝鈴幕蟋区凾縺ｮ蠎ｧ讓�
let startX = 0
let startY = 0
// 繧ｹ繝ｯ繧､繝礼ｵゆｺ�凾縺ｮ蠎ｧ讓�
let endX = 0
let endY = 0

// 隗｣隱ｬ竭��夂ｧｻ蜍輔ｒ髢句ｧ九＠縺溷ｺｧ讓吶ｒ蜿門ｾ�
window.addEventListener('touchstart', (e) =>  {
  startX = e.touches[0].pageX
  startY = e.touches[0].pageY
})

// 隗｣隱ｬ竭｡�夂ｧｻ蜍輔＠縺溷ｺｧ讓吶ｒ蜿門ｾ�
window.addEventListener('touchmove', (e) =>  {
  endX = e.changedTouches[0].pageX
  endY = e.changedTouches[0].pageY
})


// 隗｣隱ｬ竭｢�夂ｧｻ蜍戊ｷ晞屬縺九ｉ蟾ｦ蜿ｳor荳贋ｸ九�蜃ｦ逅�ｒ螳溯｡�
window.addEventListener('touchend', (e) =>  {
  // 繧ｹ繝ｯ繧､繝礼ｵゆｺ�凾縺ｫx霆ｸ縺ｨy霆ｸ縺ｮ遘ｻ蜍暮㍼繧貞叙蠕�
  // 蟾ｦ繧ｹ繝ｯ繧､繝励↓蟇ｾ蠢懊☆繧九◆繧｀ath.abs()縺ｧ+縺ｫ螟画鋤
  const distanceX = Math.abs(endX - startX)
  const distanceY = Math.abs(endY - startY)
  
  // 荳贋ｸ九�繧ｹ繝ｯ繧､繝苓ｷ晞屬縺ｮ譁ｹ縺悟ｷｦ蜿ｳ繧医ｊ髟ｷ縺� && 蟆上＆縺ｪ繧ｹ繝ｯ繧､繝励�讀懃衍縺励↑縺�ｈ縺�↓縺吶ｋ
  if (distanceX < distanceY && distanceY > minimumDistance) {
    // 繧ｹ繝ｯ繧､繝怜ｾ後�蜍穂ｽ�
    if (flag == 1) {
      tlsec.play();
    }
    if (flag == 2) {
      tlsec2.play();
    }
    if (flag == 3) {
      tlsec3.play();
    }
  }
})
