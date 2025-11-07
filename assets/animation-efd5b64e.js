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
//   }, 50); // 少し遅延を入れると安定
// });

function isMobile() {
  // ユーザーエージェントを取得
  const userAgent = navigator.userAgent.toLowerCase();
  // スマホかどうかを判定する正規表現
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

//////////////////////////////////////////////////////////////////////////////// 慣性スクロール
const lenis = new Lenis({
  duration: 0.7, // アニメーションの継続時間
  direction: 'vertical', // 方向
  gestureDirection: 'vertical',
  // smooth: true, // スムーススクロールの有効・無効を設定
  smoothTouch: false, // タッチスクロール時のスムーススクロールの有効・無効を設定。(タッチデバイス本来の滑らかさを模倣することは不可能であるため、デフォルト無効)
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
    // 下に向かうスクロールが最下部にヒット
    e.preventDefault();
    lenis.scrollTo(scrollMax - 1); // 少し戻す
  }
}, { passive: false });

//////////////////////////////////////////////////////////////////////////////// ベースアニメーション
const list = document.querySelectorAll(".move")
list.forEach(function(element, i) {
    gsap.fromTo(
      list[i], // アニメーションさせる要素
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
        list3[i], // アニメーションさせる要素
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
        list3[i], // アニメーションさせる要素
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
        list3[i], // アニメーションさせる要素
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
        list3[i], // アニメーションさせる要素
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
      list3[i], // アニメーションさせる要素
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

//////////////////////////////////////////////////////////////////////////////// スクロールアニメーション
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);
  //////////////////////////////////////////////////////////////////////////////// 初回アニメーション
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

//// PCの時スクロールしたら
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



//////////////////////////////////////////////////////////////////////////////// スマホの処理を書く

// タップ時の誤動作を防ぐためのスワイプ時の処理を実行しない最小距離
const minimumDistance = 30
// スワイプ開始時の座標
let startX = 0
let startY = 0
// スワイプ終了時の座標
let endX = 0
let endY = 0

// 解説①：移動を開始した座標を取得
window.addEventListener('touchstart', (e) =>  {
  startX = e.touches[0].pageX
  startY = e.touches[0].pageY
})

// 解説②：移動した座標を取得
window.addEventListener('touchmove', (e) =>  {
  endX = e.changedTouches[0].pageX
  endY = e.changedTouches[0].pageY
})


// 解説③：移動距離から左右or上下の処理を実行
window.addEventListener('touchend', (e) =>  {
  // スワイプ終了時にx軸とy軸の移動量を取得
  // 左スワイプに対応するためMath.abs()で+に変換
  const distanceX = Math.abs(endX - startX)
  const distanceY = Math.abs(endY - startY)
  
  // 上下のスワイプ距離の方が左右より長い && 小さなスワイプは検知しないようにする
  if (distanceX < distanceY && distanceY > minimumDistance) {
    // スワイプ後の動作
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
