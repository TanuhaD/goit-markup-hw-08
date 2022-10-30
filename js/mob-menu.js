(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const menuBtnOpen = document.querySelector('.js-btn-menu-open');
    const menuBtnClose = document.querySelector('.js-btn-menu-close');
  
    const toggleMenu = () => {
      mobileMenu.classList.toggle('is-open');
    };
  
    menuBtnOpen.addEventListener('click', toggleMenu);
    menuBtnClose.addEventListener('click', toggleMenu);
  })();


//   <section class="aboutus">
//   <div class="container aboutus__container">
//     <picture>
//       <source
//         srcset="
//           ./images/aboutus/aboutus608.png     608w,
//           ./images/aboutus/aboutus608@2x.png 1216w
//         "
//         media="(min-width: 1280px)"
//         sizes="608px"
//       />
//       <source
//         srcset="
//           ./images/aboutus/aboutus336.png    336w,
//           ./images/aboutus/aboutus336@2x.png 672w
//         "
//         media="(min-width: 768px)"
//         sizes="336px"
//       />
//       <source
//         srcset="
//           ./images/aboutus/aboutus280.png    280w,
//           ./images/aboutus/aboutus280@2x.png 560w
//         "
//         sizes="280px"
//       />
//       <img
//         class="aboutus__img"
//         src="./images/aboutus/aboutus280.png"
//         alt="delicious donuts"
//       />
//     </picture>

//     <div class="aboutus_wrapper">
//       <h2 class="aboutus__title">About us</h2>
//       <p class="aboutus__text">
//         Oh My Donut is the shop which adores tasty deserts and spend hours to
//         create sophisticated donuts which will save the world!
//       </p>
//       <p class="aboutus__text">
//         Eva has been baking since she was six years old and over the last 49
//         years, she has created hundreds of cakes for weddings and has baked for
//         many celebrities. Eva and our shop have received multiple awards &
//         recognition for excellence.
//       </p>

//       <p class="aboutus__text js-hidden-paragraph visually-hidden">
//         We are going to teach you how to cook with passion and sparkles in your
//         eyes! We love what we do and believe you will enjoy our cooking
//         atmosphere!
//       </p>
//       <button class="aboutus_button js-btn-paragraph-open">
//         <span> Read more</span>
//       </button>
//     </div>
//   </div>
// </section>
// <script>
//   (() => {
//     const hiddenParagraph = document.querySelector('.js-hidden-paragraph');
//     const menuBtnOpen = document.querySelector('.js-btn-paragraph-open');

//     const toggleMenu = () => {
//       hiddenParagraph.classList.toggle('visually-hidden');
//       menuBtnOpen.classList.toggle('visually-hidden');
//     };

//     menuBtnOpen.addEventListener('click', toggleMenu);
//   })();
// </script>


// .aboutus {
//   padding-top: 20px;
//   padding-bottom: 18px;
// }
// .aboutus__container {
//   display: block;
//   @media screen and (min-width: 768px) {
//     display: flex;
//   }
// }
// .aboutus_wrapper {
// }
// .aboutus__title {
//   margin-bottom: 8px;
//   font-family: 'Montserrat Alternates', sans-serif;
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 1.2;
//   text-align: center;
//   color: $text-color;
//   @media screen and (min-width: 768px) {
//     text-align: left;
//     margin-bottom: 28px;
//     font-size: 32px;
//     line-height: 39px;
//   }
// }
// .aboutus__text {
//   width: 279px;
//   line-height: 1.25;
//   &:not(:last-of-type) {
//     margin-bottom: 20px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 336px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 608px;
//     font-size: 18px;
//     line-height: 22px;
//   }
// }
// .aboutus__img {
//   display: block;
//   width: 280px;
//   height: 285px;

//   @media screen and (max-width: 767px) {
//     margin-bottom: 28px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 336px;
//     height: 359px;
//     margin-right: 31px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 608px;
//     height: 381px;
//     margin-right: 32px;
//   }
// }
// .aboutus_button {
//   padding: 0;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 20px;
//   @media screen and (min-width: 768px) {
//     font-size: 18px;
//     line-height: 22px;
//   }
//   @media screen and (min-width: 1280px) {
//     display: none;
//   }
// }

// .visually-hidden {
//   position: absolute;
//   width: 0px;
//   height: 1px;
//   margin: -1px;
//   border: 0;
//   padding: 0;
//   white-space: nowrap;
//   clip-path: inset(100%);
//   clip: rect(0 0 0 0);
//   overflow: hidden;
// }





// готова сенція ебаут хтмл


// <section class="aboutus">
//   <div class="container aboutus__container">
//     <picture>
//       <source
//         srcset="
//           ./images/aboutus/aboutus608.png    1x,
//           ./images/aboutus/aboutus608@2x.png 2x
//         "
//         media="(min-width: 1280px)"
//         width="608px"
//       />
//       <source
//         srcset="
//           ./images/aboutus/aboutus336.png    1x,
//           ./images/aboutus/aboutus336@2x.png 2x
//         "
//         media="(min-width: 768px)"
//         width="336px"
//       />
//       <source
//         srcset="
//           ./images/aboutus/aboutus280.png    1x,
//           ./images/aboutus/aboutus280@2x.png 2x
//         "
//         width="280px"
//       />
//       <img
//         class="aboutus__img"
//         src="./images/aboutus/aboutus280.png"
//         alt="delicious donuts"
//         width="280px"
//       />
//     </picture>

//     <div class="aboutus_wrapper">
//       <h2 class="aboutus__title">About us</h2>
//       <p class="aboutus__text">
//         Oh My Donut is the shop which adores tasty deserts and spend hours to
//         create sophisticated donuts which will save the world!
//       </p>
//       <p class="aboutus__text">
//         Eva has been baking since she was six years old and over the last 49
//         years, she has created hundreds of cakes for weddings and has baked for
//         many celebrities. Eva and our shop have received multiple awards &
//         recognition for excellence.
//       </p>

//       <p class="aboutus__text js-hidden-paragraph visually-hidden">
//         We are going to teach you how to cook with passion and sparkles in your
//         eyes! We love what we do and believe you will enjoy our cooking
//         atmosphere!
//       </p>
//       <button class="aboutus_button js-btn-paragraph-open">
//         <span> Read more</span>
//       </button>
//     </div>
//   </div>
// </section>
// <script>
//   (() => {
//     const hiddenParagraph = document.querySelector('.js-hidden-paragraph');
//     const menuBtnOpen = document.querySelector('.js-btn-paragraph-open');

//     const toggleMenu = () => {
//       hiddenParagraph.classList.toggle('visually-hidden');
//       menuBtnOpen.classList.toggle('visually-hidden');
//     };

//     menuBtnOpen.addEventListener('click', toggleMenu);
//   })();
// </script>


// готовий код css секція ебаут

// .aboutus {
//   padding-top: 20px;
//   padding-bottom: 18px;
//   @media screen and (min-width: 768px) {
//     padding-bottom: 29px;
//     padding-top: 36px;
//   }
//   @media screen and (min-width: 1280px) {
//     padding-bottom: 17px;
//     padding-top: 43px;
//   }
// }
// .aboutus__container {
//   display: block;
//   @media screen and (min-width: 768px) {
//     display: flex;
//   }
// }
// .aboutus_wrapper {
// }
// .aboutus__title {
//   margin-bottom: 8px;
//   font-family: 'Montserrat Alternates', sans-serif;
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 1.2;
//   text-align: center;
//   color: $text-color;
//   @media screen and (min-width: 768px) {
//     text-align: left;
//     margin-bottom: 28px;
//     font-size: 32px;
//     line-height: 39px;
//   }
// }
// .aboutus__text {
//   line-height: 1.25;
//   &:not(:last-of-type) {
//     margin-bottom: 20px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 336px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 608px;
//     font-size: 18px;
//     line-height: 22px;
//   }
// }
// .aboutus__img {
//   display: block;
//   width: 280px;
//   height: 285px;

//   @media screen and (max-width: 767px) {
//     margin-bottom: 28px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 336px;
//     height: 359px;
//     margin-right: 31px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 608px;
//     height: 381px;
//     margin-right: 32px;
//   }
// }
// .aboutus_button {
//   padding: 0;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 20px;
//   @media screen and (min-width: 768px) {
//     font-size: 18px;
//     line-height: 22px;
//   }
//   @media screen and (min-width: 1280px) {
//     display: none;
//   }
// }

// // .visually-hidden {
// //   position: absolute;
// //   width: 0px;
// //   height: 1px;
// //   margin: -1px;
// //   border: 0;
// //   padding: 0;
// //   white-space: nowrap;
// //   clip-path: inset(100%);
// //   clip: rect(0 0 0 0);
// //   overflow: hidden;

// // }

// .visually-hidden {
//   display: none;

//   @media screen and (min-width: 1280px) {
//     display: block;
//   }
// }

// programm html

{/* <section class="program">
  <div class="program__container container">
    <div class="program__box">
      <h2 class="program__title">Program</h2>

      <p>
        Indulge in this immersive sweet treat experience with The Chef Donut
        Queen in her New York donut shop!
      </p>

      <ul class="program__list">
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>A stand up history of donuts</span>
        </li>
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>Make 3 donut flavors of your choice</span>
        </li>
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>Enjoy all-you-can-eat donuts</span>
        </li>
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>Cocktail pairings and coffee included</span>
        </li>
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>Photoshoot by professional photographer</span>
        </li>
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>Secret receipt of cooking from Eva</span>
        </li>
        <li class="program__item">
          <!-- <svg><use></use></svg> -->
          <span>All products are included in the price</span>
        </li>
      </ul>
      <p>
        Come with your dear people and friends and you will spend an
        unforgettable time and will become a real professional in donuts
        cooking!
      </p>

      <button><span>Read more</span></button>
    </div>

    <ul>
      <li>
        <img src="#" alt="" />
        <p>Type of the event</p>
      </li>
      <li>
        <img src="#" alt="" />
        <p>Time of the event</p>
      </li>
      <li>
        <img src="#" alt="" />
        <p>Number of guests</p>
      </li>
      <li>
        <img src="#" alt="" />
        <p>The host speaks</p>
      </li>
    </ul>
  </div>
</section> */}


// .program__container {
//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//   }
// }

// .program__box {
//   @media screen and (min-width: 1280px) {
//     width: 418px;
//   }
// }

// .program__item::before {
//   content: '';
//   display: inline-block;
//   width: 24px;
//   height: 24px;
//   background-image: url(../images/price/paragraph-icon.svg);
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;

//   @media screen and (min-width: 1280px) {
//     margin-right: 15px;
//   }
// }
