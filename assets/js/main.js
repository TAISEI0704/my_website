let setImage = ["../assets/img/spot_nichinan_coast7.jpg",
                "../assets/img/spot_nichinan_coast9.jpg",
                "../assets/img/spot_seagaia_04.jpg",
                "../assets/img/spot_hyugaokuraga03.JPG",
                "../assets/img/spot_toimisaki_02.jpg",
                "../assets/img/spot_mochiokouen_02.jpg",
                "../assets/img/spot_kirishima.jpg"];

let counter = 0;
function slideImage(){
    if( counter > setImage.length-1 ){

        counter = 0;

    }

    document.getElementById("welcome").style.backgroundImage = "url("+setImage[counter]+")";
    // document.querySelector(".img").style.backgroundImage = "url("+setImage[counter]+")";
    counter++;
}

setInterval("slideImage()",3800);





const btnMenu = document.querySelector('#btn-menu');

const nav = document.querySelector("#g-nav");

// const header = document.querySelector("header");

btnMenu.addEventListener("click",function(){
  btnMenu.classList.toggle('on');
    // header.classList.toggle('on');
  nav.classList.toggle('panelactive');
});

if(nav.classList.contains("panelactive")){
    nav.classList.remove("panelactive");
}



// $(document).ready(function(){
//     $('.slider').slick({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000
//     });
//   });

// let slidePic = $("#test").children("<div>").children("<img>");

// $(function(){
//     $("#test").children("a").on("click",function(){
//         $("slidePic")[0].animate({
//             left: '+=50px'
//           }, 500);
//     })
// })

$('.slider').slick({
  dots: true,
  arrows: true,
  // dotsClass: dots,
  centerMode: true,
  variableWidth: true,
  // centerPadding: "0%",
  slidesToShow: 3,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30%',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30%',
        slidesToShow: 1
      }
    }
  ]
});

const container = document.getElementById("slide_container");
const prevBtn = document.getElementById("arrow-left");
const nextBtn = document.getElementById("arrow-right");

let scrollAmount = 0;
const step = 200; // 移動する距離

prevBtn.addEventListener('click', () => {
  scrollAmount += step;
  container.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
    scrollAmount -= step;
    container.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
});






// document.querySelector("#btn-menu").addEventListener("click",function(){
//   document.querySelector("#btn-menu").css.addClass("on");
// });