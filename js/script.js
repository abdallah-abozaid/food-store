const swiper = new Swiper('.main5 .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.main5 .swiper-pagination',
    dynamicBullets: true,
    clickable: true,

  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {

    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
const swiper2 = new Swiper('.main6 .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: ".main6 .swiper-button-next",
    prevEl: ".main6 .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1124: {
      slidesPerView: 4,
    },
    1224: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});
const swiper3 = new Swiper('.main8 .swiper', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.main8 .swiper-pagination',
    dynamicBullets: true,
    clickable: true,

  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
const swiper4 = new Swiper('.main9 .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".main9 .swiper-button-next",
    prevEl: ".main9 .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1124: {
      slidesPerView: 4,
    },
    1224: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});

// extra two header
var extra_header = document.querySelector(".extra-tow");
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    extra_header.classList.add("show-extra-header")
  } else {
    extra_header.classList.remove("show-extra-header")
  }
}

// first navigation

var fst_navigation = document.querySelector(".extra-header .nav-1");
var fst_navigation_item = document.querySelector(".navigation-1");
var fst_navigation_shadow = document.querySelector(".navigation-1-shadow");
var fst_navigation_close = document.querySelector(".navigation-1 > div");
fst_navigation.onclick = function () {
  fst_navigation_item.classList.add("show-navigation-1")
  fst_navigation_shadow.classList.add("navigation-1-shadow-show")

}
fst_navigation_close.onclick = function () {
  fst_navigation_item.classList.remove("show-navigation-1")
  fst_navigation_shadow.classList.remove("navigation-1-shadow-show")
}
fst_navigation_shadow.onclick = function () {
  fst_navigation_item.classList.remove("show-navigation-1")
  fst_navigation_shadow.classList.remove("navigation-1-shadow-show")
}




// second navigation
var sec_navigation = document.querySelector(".extra-header .nav-2");
var sec_navigation_item = document.querySelector(".navigation-2");
var sec_navigation_shadow = document.querySelector(".navigation-2-shadow");
var sec_navigation_close = document.querySelector(".navigation-2 > div");
sec_navigation.onclick = function () {
  sec_navigation_item.classList.add("show-navigation-2")
  sec_navigation_shadow.classList.add("navigation-2-shadow-show")
}
sec_navigation_shadow.onclick = function () {
  sec_navigation_item.classList.remove("show-navigation-2")
  sec_navigation_shadow.classList.remove("navigation-2-shadow-show")
}


//prelaoder
var preloader = document.querySelector(".preloader");
window.onload = function () {
  preloader.classList.add("hidepreloud")
}



// scrolling
var myscrolling=document.querySelector(".scrolling");
window.onscroll=function(){
  if(window.pageYOffset > 300){
    myscrolling.classList.add("show-scroll")
  }else{
    myscrolling.classList.remove("show-scroll")
  }
}
var fst_ele=document.querySelector(".myheader")
myscrolling.onclick=function(){
  fst_ele.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
var item_to_top=document.querySelector(".to-top")
item_to_top.onclick=function(){
  fst_ele.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}