import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BentoGridDemo } from "./BentoGridDemo";
import { BentoGridDemoOne } from "./BentoGridDemoOne";
import { useGSAP } from "@gsap/react";
import { useSpring, animated } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import EventSlider from "./EventSlider";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Announce from "./Announcement/Announce";
import Footer from "./Footer";
import Theme from "./Chatbot/Theme";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import slide_image_1 from "../assets/Ablock.jpg";
import slide_image_2 from "../assets/admin_campus.jpg";
import slide_image_4 from "../assets/mech_block.jpg";
import slide_image_5 from "../assets/canteen.jpg";
import slide_image_3 from "../assets/hostelpic.jpg";
import slide_image_6 from "../assets/classroom.jpg";
import slide_image_7 from "../assets/campus2.jpg";
import AotBg from "../assets/aotbg.png";
import Alliance from "./Alliance";
import Rankings from "./Rankings";
import PlacementHead from "./PlacementHead";
import MenuPart from "./MenuPart";


function Number({ n }) {
  const [startAnimation, setStartAnimation] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0 && !startAnimation) {
  //       setStartAnimation(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [startAnimation]);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: startAnimation ? n : 0 },
    config: { mass: 1, tension: 20, friction: 20, duration: 2000 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Head() {
  // sticky nav
  const [scroll, setScroll] = useState(false);
  function setFixed() {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to(".counter", {
  //       y: -280,
  //       duration: 2,
  //     });
  //   },
  //   { scope: container }
  // );

  ScrollTrigger.refresh();

  useGSAP(
    () => {
      gsap.from(
        ".menupart",
        {
          y: 120,
          stagger: 0.2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".menupart",
            pin: true,
            start: "top 60%",
            end: "top 55%",
            // scrub: 1,
            toggleActions: "restart none reverse none",
            once:true,
          },
        }
      );
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(
        ".ranking h1, .ranking bar,.ranking .rank-main",
        {
          y: 120,
          stagger: 0.2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".ranking",
            pin: true,
            start: "top 60%",
            end: "top 55%",
            // scrub: 1,
            toggleActions: "restart none reverse none",
            once:true,
          },
        }
      );
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(
        ".alliance h1, .alliance bar,.alliance .moving-alliance",
        {
          y: 120,
          stagger: 0.2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".alliance",
            pin: true,
            start: "top 60%",
            end: "top 55%",
            // scrub: 1,
            toggleActions: "restart none reverse none",
            once:true,
          },
        }
      );
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(
        ".placement h1, .placement bar, .placement .placement-main",
        {
          y: 120,
          stagger: 0.2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".placement",
            pin: true,
            start: "top 60%",
            end: "top 55%",
            // scrub: 1,
            toggleActions: "restart none reverse none",
            once:true,
          },
        }
      );
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(
        ".news-feed h1, .news-feed p, .news-feed bar, .news-feed button",
        {
          y: 120,
          stagger: 0.2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".news-feed",
            pin: true,
            start: "top 60%",
            end: "top 55%",
            // scrub: 1,
            toggleActions: "restart none reverse none",
            once:true,
          },
        }
      );
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(".aboutclg h1, .aboutclg p, .aboutclg bar, .aboutclg button", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".aboutclg",
          pin: true,
          start: "top 60%",
          end: "top 55%",
          // scrub: 1,
          toggleActions: "restart none reverse none",
          once:true,
        },
      });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(".elem2 h1, .elem2 p, .elem2 bar, .elem2 button", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".elem2",
          pin: true,
          start: "top 60%",
          end: "top 55%",
          // scrub: 1,
          toggleActions: "restart none reverse none",
          once:true,
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div             
        ref={container}
        className=" w-full md:h-full h-screen selection:bg-black selection:text-white main scroll-container smooth-scroll"
      >
        <div
          className={
            scroll
              ? `z-50 fixed w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100`
              : `z-50 fixed bg-transparent w-full transition-all ease-in-out duration-400`
          }
        >
          <Navbar />
        </div>

        <main className="h-screen w-full">
          <img
            src={AotBg}
            alt="aotbg"
            className="h-[92%] w-full filter brightness-100"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-full aotmain font-bold text-center top-[50%] right-[-50%] sm:top-[50%] sm:left-[50%] translate-x-[-50%] translate-y-[-50%] absolute text-white font-[headline]">
            Academy of Technology
          </h1>
          <h2 className="italic text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl aotmain text-center top-[55%] right-[-25%] sm:top-[54%] sm:left-[60%] md:top-[56%] md:left-[61%] lg:top-[58%] lg:left-[62%] xl:top-[58%] xl:left-[60%] 2xl:top-[60%] 2xl:left-[64%] translate-x-[-50%] translate-y-[-50%] absolute text-white font-[headline]">
            ... translate your vision into reality
          </h2>
          <div className=" gradcol w-full h-40"></div>
          <div className=" counter w-full bg-transparent z-0 pt-[10%] md:pt-0 absolute bottom-0 ">
            <div className="mx-[10%] md:mx-[12%] lg:mx-[22%] lg:pr-12 xl:pr-0 bg-yellow-400 py-6 shadow-xl  shadow-black rounded-3xl">
              <div className="lg:flex-row items-center sm:justify-between justify-center flex sm:flex-nowrap md:gap-0 gap-4 flex-wrap ">
                <div className="pl-[6%] lg:px-[8%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={2400} />
                    <h1 className="">+</h1>
                  </div>
                  <h2 className="font-['para']">Students</h2>
                </div>
                <div className="lg:px-[1%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={130} />
                    <h1 className="">+</h1>
                  </div>

                  <h2 className=" font-['para']">Faculties</h2>
                </div>
                <div className="lg:px-[5%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={8000} />
                    <h1 className="">+</h1>
                  </div>

                  <h2 className=" font-['para']">Alumunis</h2>
                </div>
                <div className="lg:px-[2%] py-4 text-2xl font-semibold flex flex-col items-center">
                  <div className="flex flex-row text-4xl font-['Headline']">
                    <Number n={7} />
                    <h1 className=" ">+</h1>
                  </div>

                  <h2 className=" font-['para']">Courses</h2>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </main>
        <section className="mt-20 md:mt-12 menupart">
          <MenuPart/>
        </section>
        <section className="text-gray-600 mt-32 ranking">
          <div class="text-center mb-20 ">
            <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              Rankings
            </h1>
            <div class="flex mt-6 mb-6 justify-center bar">
              <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
          </div>
          <div className="rank-main">
            <Rankings />
          </div>
        </section>

        <section className="text-gray-600 mt-32 alliance">
          <div class="text-center mb-20 ">
            <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              Accreditation & Alliances
            </h1>
            <div class="flex mt-6 mb-6 justify-center bar">
              <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
          </div>
          <div className="moving-alliance whitespace-nowrap flex-nowrap flex">
            <Marquee
              pauseOnHover
              autoFill
              speed={100}
              style={{
                width: 1600,
                justifyContent: "center",
                margin: "0 auto",
                zIndex: 0,
              }}
            >
              <Alliance />
            </Marquee>
          </div>
        </section>

        <section className="text-gray-600 mt-32 placement">
          <div class="text-center mb-20 ">
            <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              Placement
            </h1>
            <div class="flex mt-6 mb-6 justify-center bar">
              <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
          </div>
          <div  className="placement-main">
            <PlacementHead/>
          </div>
        </section>


        <section className="news-feed h-auto mt-32">
          <div class="text-center mb-20 ">
            <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              Campus News
            </h1>
            <p class="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              A place for learning, discovery, innovation, expression and
              discourse, the campus is full of life and is always active with
              events.
            </p>
            <div class="flex mt-6 mb-6 justify-center bar">
              <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
            <button class="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              <NavLink to="https://www.aotingenium.com/#thesliderofnewsoflp">
                Explore News
              </NavLink>
            </button>
          </div>
          <div className="moving-news whitespace-nowrap flex-nowrap flex">
            <Marquee
              pauseOnHover
              autoFill
              speed={100}
              style={{
                width: 1600,
                justifyContent: "center",
                margin: "0 auto",
                zIndex: 0,
              }}
            >
              <BentoGridDemo />
              <BentoGridDemoOne />
            </Marquee>
          </div>
        </section>

        <section class="text-gray-600 mt-32 aboutclg">
          <div class="text-center mb-20 ">
            <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              About the College
            </h1>
            <p class="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              “Aspires to be a pre-eminent deemed university of national
              standing in education and innovation”.
            </p>
            <div class="flex mt-6 mb-6 justify-center bar">
              <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
            <button class="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              <NavLink to="https://aot.edu.in/about-aot/">
                More about AOT
              </NavLink>
            </button>
          </div>

          <div className="slide-container static">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              autoplay={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              style={{
                zIndex: 0,
                marginLeft: "32px",
                marginRight: "32px",
                marginBottom: "32px",
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper_container text-white font-['Headline'] h-1/2"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <img src={slide_image_1} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  A block
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_2} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  Admin block
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_3} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  Hostel
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_4} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  Mechanical block
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_5} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  Canteen
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_6} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  Classrooms
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_7} alt="slide_image" />
                <h1 className="absolute bottom-4 left-4 text-sm  md:bottom-20 md:left-32 md:text-4xl">
                  Basketball Ground
                </h1>
              </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrows">
                  <SlArrowLeft className="arrow" />
                </div>
                <div className="swiper-button-next slider-arrows">
                  <SlArrowRight className="arrow" />
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </section>

        <section className="mt-20">
          <div class="text-center elem2">
            <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 font-['Headline']">
              Upcoming Events
            </h1>
            <p class="text-base sm:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 font-['para']">
              At University's beautiful campus, you willl find a diverse and
              welcoming community that will teach you life skills along with
              having fun.
            </p>
            <div class="flex mt-6 mb-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
            <button class="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              Explore Events
            </button>
          </div>
          <EventSlider />
        </section>

        <div className="notice-bar fixed bottom-28 right-8">
          <Announce />
        </div>
        <div className="chatbar absolute">
          <Theme />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Head;
