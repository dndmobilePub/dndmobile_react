import { gsap } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import $ from "jquery";
import { useEffect, useRef } from "react";
import { Indicator } from "../components/ui/Indicatior";

import * as Img from "../assets/images/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home({ isMain }) {
  const swiperRef = useRef(null);

  function animateFrom(elem) {
    var x = 0,
      y = 150,
      delay = 0;
    if (elem.classList.contains("txt-ani")) {
      x = 1000;
      y = 0;
    }

    if (elem.classList.contains("delay-1")) {
      delay = 0.6;
    } else if (elem.classList.contains("delay-2")) {
      delay = 0.9;
    } else if (elem.classList.contains("delay-3")) {
      delay = 1.2;
    }

    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1,
        x: 0,
        y: 0,
        delay: delay,
        autoAlpha: 1,
        stagger: 0.2,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  function hide(elem) {
    gsap.set(elem, { x: 0, y: 0, autoAlpha: 0 });
  }

  if (isMain === true) {
    document.querySelector(".wrap").classList.add("main");
  }

  useEffect(() => {
    gsap.utils.toArray(".gs-up").forEach(function (elem) {
      hide(elem);
      ScrollTrigger.create({
        trigger: elem,
        // start:"bottom bottom",
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem);
        },
        onLeave: function () {
          hide(elem);
        },
        delay: function () {
          // delay(elem);
        },
      });
    });

    const indiAni = document.querySelector(".main-indicator-wrap");
    window.addEventListener("scroll", () => {
      const windowScroll = window.pageYOffset;
      if (windowScroll > indiAni.offsetHeight) {
        indiAni.classList.add("on");
      } else {
        indiAni.classList.remove("on");
      }
    });

    let links = gsap.utils.toArray(".main-indicator-wrap a");
    let whiteSections = document.querySelectorAll('[data-type="white"]');
    let currentSpan = document.querySelector(".current"); // current span 요소 선택

    links.forEach((a, index) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            // 링크의 숫자값으로 "current" span 내용 변경
            const linkNumber = index + 1;

            if (currentSpan) {
              // currentSpan이 존재할 경우에만 애니메이션 적용
              gsap.to(currentSpan, {
                y: -20, // 위로 20px 이동
                opacity: 0, // 투명도 0으로 변경
                duration: 0.2,
                onComplete: () => {
                  currentSpan.textContent = linkNumber
                    .toString()
                    .padStart(2, "0"); // "current" span 내용 변경
                  gsap.to(currentSpan, {
                    y: 0, // 다시 원래 위치로
                    opacity: 1, // 투명도 원래대로
                    duration: 0.2,
                  });
                },
              });
            }
            setActive(a);
          }
        },
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto",
        });
      });
    });

    whiteSections.forEach((a) => {
      ScrollTrigger.create({
        trigger: a,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            document
              .querySelector(".main-indicator-wrap")
              .classList.add("white");
            document.querySelector(".menu-toggle").classList.add("white");
            document.querySelector(".main_logo").classList.add("white");
            document.querySelector(".top-nav").classList.add("white");
            document.querySelector("html").classList.add("bg-black");
          } else {
            document
              .querySelector(".main-indicator-wrap")
              .classList.remove("white");
            document.querySelector(".menu-toggle").classList.remove("white");
            document.querySelector(".main_logo").classList.remove("white");
            document.querySelector(".top-nav").classList.remove("white");
            document.querySelector("html").classList.remove("bg-black");
          }
        },
      });
    });

    function setActive(link) {
      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
      if (link.classList.contains("indi-white")) {
        document.querySelector(".main-indicator-wrap").classList.add("white");
        document.querySelector(".menu-toggle").classList.add("white");
        document.querySelector(".main_logo").classList.add("white");
        document.querySelector(".top-nav").classList.add("white");
        document.querySelector("html").classList.add("bg-black");
      } else {
        document
          .querySelector(".main-indicator-wrap")
          .classList.remove("white");
        document.querySelector(".menu-toggle").classList.remove("white");
        document.querySelector(".main_logo").classList.remove("white");
        document.querySelector(".top-nav").classList.remove("white");
        document.querySelector("html").classList.remove("bg-black");
      }

      // 화면 너비가 768px보다 작을 경우
      var header = $("header");
      var screenWidth = $(window).width();
      if (screenWidth < 768) {
        if ($(header).hasClass("active") === true) {
          $(".menu-toggle").removeClass("white");
        }
      }

      /* 인트로 추가 */
      if ($("#intro-indi").hasClass("active") === true) {
        $(".panel").removeClass("active");
        $("#intro").addClass("active");
      }
    }

    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      let panels = gsap.utils.toArray(".main .panel");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom bottom",
          // end: () => "+=" + panel.offsetHeight,
          scrub: true,
          // markers: true,
          onEnter: () => {
            panels.forEach((e) => {
              e.classList.remove("active");
            });
            panels[i].classList.add("active");
          },
          onEnterBack: () => {
            panels.forEach((e) => {
              e.classList.remove("active");
            });
            panels[i].classList.add("active");
          },
        });
      });
    });
  }, []);
  return (
    <>
      <Indicator />
      <section className="panel intro-panel" id="intro">
        <section className="pjt-con-wrap intro-wrap" data-type="white">
          <div className="pjt-top-full">
            <div className="pjt-title center white">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">
                We Convert <br className="hide-pc" />
                Your <br className="hide-mobile" />
                Thoughts <br className="hide-pc" /> Into Designs
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1600">
                UX · UI · GUI 분야에서 핵심기술을 고객중심의 서비스로
                <br className="hide-mobile" />
                최상의 퍼포먼스 최고의 크리에이티브를 만듭니다.
              </p>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white"></div>
          </div>
          <div className="arrow">
            <span>
              <svg
                className="arrow_mo"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M41.5078 27.6455L27.9245 41.2288C26.3203 42.833 23.6953 42.833 22.0911 41.2288L8.50781 27.6455"
                  stroke="white"
                  strokeOpacity="0.31"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                className="arrow_mo"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M41.5078 7.64551L27.9245 21.2288C26.3203 22.833 23.6953 22.833 22.0911 21.2288L8.50781 7.64551"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </section>
      </section>

      <section className="panel" id="hana">
        <section className="pjt-con-wrap hana">
          <div className="pjt-top">
            <div className="pjt-title">
              <p
                className="tit pd130"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span>하나카드</span>
                <br />
                하나머니 고도화
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                저축부터 보험 가입, 카드 사용, 투자에 이르기까지 다양한
                <br className="hide-pc" /> 금융 <br className="hide-mobile" />
                거래를 할 수 있는 플랫폼인 만큼 신규 사용자 유입 및
                <br className="hide-pc" /> 편의성을 고려한{" "}
                <br className="hide-mobile" />
                UI/UX를 구축했습니다.
              </p>
              <div
                className="tool-list"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div>
                  <img src={Img.IconPs} alt="" />
                </div>
                <div>
                  <img src={Img.IconAi} alt="" />
                </div>
                <div>
                  <img src={Img.IconPigma} alt="" />
                </div>
              </div>
            </div>
            <div
              className="pjt-top-img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Img.hanaMotion} alt="" />
            </div>
          </div>
          <div className="pjt-con hana-bg01" data-type="white">
            <div className="pjt-title center white">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">
                Design Concept
              </p>
              <p
                className="desc clr0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                단조로운 컬러를 개선하고 그라데이션을 배색하여
                <br className="hide-pc" /> UI/UX 전반에 생동감과 역동성을
                표현했습니다.
                <br />
                또한 기능성 콘텐츠에는 브랜드 캐릭터인 하하패밀리를
                <br className="hide-pc" /> 활용하여 친근감과 접근성을 제고하고,
                <br className="hide-mobile" />
                편의성과 실용성을
                <br className="hide-pc" /> 목적으로 UI/UX를 개편했습니다.
              </p>
              <div
                className="airplane-wrap hide-mobile"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="shadow-box"></div>
                <img src={Img.hanaAirplane} alt="" className="img-airplane" />
              </div>
            </div>
            <div
              className="phone-layout"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="phone-wrap"
              >
                <img src={Img.hanaPhone1} alt="" className="pjt-img" />
                <img
                  src={Img.hanaChar1}
                  alt=""
                  className="pjt-char01 hide-mobile"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.hanaPhone2} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="1000"
                className="phone-wrap hide-mobile"
              >
                <img src={Img.hanaPhone3} alt="" className="pjt-img" />
                <img src={Img.hanaChar2} alt="" className="pjt-char02" />
              </div>
            </div>
          </div>

          <div className="pjt-con type-white hana-bg02">
            <div className="pjt-title center">
              <p className="tit2" data-aos="fade-up" data-aos-duration="1000">
                Money Box
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                실시간 환전과 연동된 하나머니의 돈통 디자인을 그라데이션 컬러로
                배색하여 금액과 기능적인 요소에 무게를 실어 디자인을 했습니다.
                <br className="hide-mobile" />
                이를 통해 사용자에게 있어 접근성과 체류시간을 높이고자 하였으며,
                다채로운 컬러는 심미성과 디자인적인 재미요소를 제공합니다.
              </p>
            </div>
            <div
              className="type-motion hide-mobile"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="phone-box">
                <img src={Img.hanaPhone4} alt="" className="phone-mockup" />
                <img src={Img.hanaGift} alt="" className="phone-gift " />
              </div>
              <div className="phone-swiper hide-mobile">
                <img src={Img.hanaPhone5} alt="" className="phone-mockup" />
                <Swiper
                  ref={swiperRef}
                  className="phone-display"
                  autoplay={{ delay: 3000 }}
                  slidesPerView={3}
                  loop={true}
                  centeredSlides={true}
                  loopedSlides={1}
                  observer={true}
                  observeParents={true}
                  speed={600}
                  modules={[Autoplay]}
                  breakpoints={{
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img
                      src={Img.hanaDisplay1}
                      alt="하나머니 화면 이미지"
                      className="pjt-img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Img.hanaDisplay2}
                      alt="하나머니 화면 이미지"
                      className="pjt-img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Img.hanaDisplay3}
                      alt="하나머니 화면 이미지"
                      className="pjt-img"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="sc_aged">
        <section className="pjt-con-wrap sc-aged">
          <div className="pjt-top">
            <div className="pjt-title">
              <p
                className="tit pd130 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span>SC 제일은행</span>
                <br />
                고령자 위한 편한뱅킹
              </p>
              <p
                className="desc aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                SC제일은행의 모바일 앱을 고령화시대에 맞춰 고령자를{" "}
                <br className="hide-pc" />
                위한
                <br className="hide-mobile" /> 사용자 경험에 기반하여 단순화 한
                앱의 편의성과 <br className="hide-pc" />
                직관성을
                <br className="hide-mobile" /> 고려한 UX/UI 환경을 제공합니다.
              </p>
              <div
                className="tool-list aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div>
                  <img src={Img.IconPs} alt="" />
                </div>
                <div>
                  <img src={Img.IconAi} alt="" />
                </div>
                <div>
                  <img src={Img.IconPigma} alt="" />
                </div>
              </div>
            </div>
            <div className="pjt-top-img">
              <img src={Img.scAgedMotion} alt="" className="sc-aged-motion" />
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p
                className="tit fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Design Concept
              </p>
              <p
                className="desc clr0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                고령자의 ‘사용자 경험(User Experinence, UX) 디자인을
                적용하기위한 큰 글씨, 아이콘의 텍스트화,{" "}
                <br className="hide-mobile" />
                단순화 한 쉬운모드(고령화) 앱의 편의성과 직관성에 중점을
                두었습니다. <br className="hide-mobile" />
                또한 SC제일은행의 새로운 Look & Feel로 dark모드를 선보였습니다.
              </p>
            </div>
            <div
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-type="white"
            >
              <ul className="icon-layout">
                <li>
                  <span className="ico-sc-aged01"></span>
                  입금
                </li>
                <li>
                  <span className="ico-sc-aged02"></span>
                  주식
                </li>
                <li>
                  <span className="ico-sc-aged03"></span>
                  지불
                </li>
                <li>
                  <span className="ico-sc-aged04"></span>
                  보안
                </li>
                <li>
                  <span className="ico-sc-aged05"></span>
                  대출
                </li>
              </ul>
            </div>
            <div className="phone-layout type02" data-type="white">
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.scAgedPhone1} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.scAgedPhone2} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
          <div className="pjt-con type-white">
            <div className="pjt-title center">
              <p className="tit2" data-aos="fade-up" data-aos-duration="1000">
                Dark Mode
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                앱 사용자의 눈 피로도를 덜고자 편한뱅킹 서비스에 ‘다크모드’를
                도입하였습니다. <br />
                휴대전화의 다크모드를 이미 적용 중이라면 SC제일은행 모바일뱅킹
                앱에 로그인한 후 ‘편한뱅킹’ 버튼을{" "}
                <br className="hide-mobile" />
                누르면 자동으로 다크모드가 적용된 서비스를 경험할 수 있습니다.
              </p>
            </div>
            <div className="phone-layout">
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.scAgedPhone3} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.scAgedPhone4} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src={Img.scAgedPhone5} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="two">
        <section className="pjt-con-wrap sc">
          <div className="pjt-top-full">
            <div
              className="pjt-title center white indi-white"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="tit icon-if fw700">
                <span className="fw300">SC제일은행</span>{" "}
                <br className="hide-pc" />
                비즈니스 뱅킹
              </p>
              <p className="desc">
                기존 기업뱅킹(First Biz)을 새롭게 개편하여 중소기업 전용
                플랫폼인 '비즈니스 뱅킹'으로 새롭게 리뉴얼하여{" "}
                <br className="hide-mobile" />
                글로벌기업을 위해 외환 서비스를 더욱 강화합니다.
              </p>
            </div>
            <div
              className="pjt-top-img"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={Img.scSplash} alt="sc제일은행 이미지" className="" />
            </div>
          </div>
          <div className="pjt-con" data-type="white">
            <div className="pjt-title center white">
              <p
                className="tit fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Design Concept
              </p>
              <p
                className="desc clr0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                핵심 서비스를 고객 중심으로 전면 개편하여 사용이 쉽고 편한 UX·UI
                환경을 제공합니다. <br className="hide-mobile" />
                Global SC Group의 UX·UI Guide Line을 토대로 Korea SC Business
                Banking의 브랜딩 Identity를 확립에 주력합니다.
              </p>
            </div>
            <div className="phone-layout type02">
              <div data-aos="fade-up" data-aos-duration="1000">
                <img src={Img.sc01} alt="" className="pjt-img" />
              </div>
              <div
                className="mt160"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.sc02} alt="" className="pjt-img" />
              </div>
            </div>
            <div className="pjt-title type02 white">
              <p
                className="tit fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Design Element
              </p>
              <p
                className="desc clr0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                부드러운 색표현, 오브젝트와 비주얼 스타일에도 Easy 콘셉트
                적용합니다.
              </p>
            </div>
            <div className="phone-layout">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.sc03} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.sc04} alt="" className="pjt-img" />
              </div>
              <div
                className="hide-mobile"
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src={Img.sc05} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="one">
        <section className="pjt-con-wrap kb">
          <div className="pjt-top">
            <div className="pjt-title">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">
                <span>KB국민은행</span>
                <br />
                비대면 마케팅
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                비대면 서비스 이용 고객이 증가함에 따라 환경 변화에 신속히
                대응할 수 있는 'Marketing Tool'을 제공합니다.
                <br />
                즉시성, 지속성, 단순성, 인지성을 고려한 UI·GUI를 제공함으로써
                다양한 이용 고객층의 참여를 확대합니다.
              </p>
              <div
                className="tool-list"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div>
                  <img src={Img.IconPs} alt="" />
                </div>
                <div>
                  <img src={Img.IconAi} alt="" />
                </div>
                <div>
                  <img src={Img.IconPigma} alt="" />
                </div>
              </div>
            </div>
            <div className="pjt-top-img">
              <img src={Img.kbMotion} alt="" className="img-kb-phone" />
              <div className="bg-area">
                <span className="circle type01 gs-up"></span>
                <span className="circle type02 gs-up"></span>
                <span className="circle type03 gs-up"></span>
              </div>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center">
              <p
                className="tit fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Wallet
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                실물 지갑을 대체하는 간편 기능에 생활 연계 서비스를 더한 디지털
                지갑 형태의 생활밀착형 플랫폼입니다.{" "}
                <br className="hide-mobile" />
                기존 고객뿐만 아니라 KB국민은행 계좌가 없는 고객도 간편하게
                이용이 가능합니다.
              </p>
            </div>
            <div className="phone-layout">
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.kb01} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.kb02} alt="" className="pjt-img" />
              </div>
              <div
                className="hide-mobile"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src={Img.kb03} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="three">
        <section className="pjt-con-wrap cj">
          <div className="pjt-top">
            <div className="pjt-title">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">
                <span>CJ대한통운</span>
                <br />
                차세대 택배시스템
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                사용자의 여정에서 발생하는 일련의 과정 및 상태를
                <br className="hide-mobile" />
                직관적으로 인지할 수 있도록 디자인합니다.
              </p>
              <div
                className="tool-list"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div>
                  <img src={Img.IconPs} alt="" />
                </div>
                <div>
                  <img src={Img.IconAi} alt="" />
                </div>
                <div>
                  <img src={Img.IconXd} alt="" />
                </div>
                <div>
                  <img src={Img.IconPigma} alt="" />
                </div>
              </div>
            </div>
            <div className="pjt-top-img">
              <div
                className="pjt-img01"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.cjSplash1} alt="CJ대한통운 이미지" className="" />
              </div>
              <div
                className="pjt-img02"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.cjSplash2} alt="CJ대한통운 이미지" className="" />
              </div>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p
                className="tit fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Design Concept{" "}
              </p>
              <p
                className="desc clr0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                CJ 대한통운의 일원화된 브랜드 경험을 만드는 것을 목표로 고객
                중심의 사용성을 우선으로 하는 UX·UI를 구현합니다.{" "}
                <br className="hide-mobile" />
                일반고객용, 직원용의 APP UX·UI·GUI 환경을 통일화하여 브랜드
                Identity 강화합니다.
              </p>
            </div>
            <div className="icon" data-aos="fade-up" data-aos-duration="1000">
              <img src={Img.cjIcon2} alt="" />
            </div>
            <div className="phone-layout" data-type="white">
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.cj01} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.cj02} alt="" className="pjt-img" />
              </div>
              <div
                className="hide-mobile"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src={Img.cj03} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="five">
        <section className="pjt-con-wrap woori-my">
          <div className="black-section">
            <div className="pjt-top">
              <div className="pjt-title">
                <p
                  className="tit fw700"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span className="fw300">우리은행</span>
                  <br />
                  마이데이터 운영
                </p>
                <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                  금융과 비금융을 모두 아우르는 '데이터 관리 종합 플랫폼'으로서
                  <br className="hide-mobile" />
                  철저히 고객 관점에서 설계한 UX·UI를 제공합니다.
                  <br className="hide-mobile" />
                  고연령층 등 디지털 취약계층 고객도 편리하게
                  <br className="hide-mobile" />
                  마이데이터 서비스 이용이 가능한 환경을 제공합니다.
                </p>
                <div
                  className="tool-list"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div>
                    <img src={Img.IconPs} alt="" />
                  </div>
                  <div>
                    <img src={Img.IconAi} alt="" />
                  </div>
                  <div>
                    <img src={Img.IconPigma} alt="" />
                  </div>
                </div>
              </div>
              <div
                className="pjt-top-img"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="bg-area">
                  <div className="woori_bg_left">
                    <img src={Img.woorimyLeft} alt="" className="hide-mobile" />
                    <img src={Img.woorimyLeftMo} alt="" className="hide-pc" />
                  </div>
                  <div className="splash-img">
                    <img src={Img.woorimySplash} alt="" />
                  </div>
                  <div className="woori_bg_right">
                    <img
                      src={Img.woorimyRight}
                      alt=""
                      className="hide-mobile"
                    />
                    <img src={Img.woorimyRightMo} alt="" className="hide-pc" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pjt-con bg01">
              <div className="phone-layout type02">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <img src={Img.woorimy01} alt="" className="pjt-img" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <img src={Img.woorimy02} alt="" className="pjt-img" />
                </div>
              </div>
            </div>
            <div className="pjt-con bg02">
              <div className="icon-list-wrap">
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <img src={Img.IconWoorimy01} alt="" />
                    <p className="txt">카페</p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <img src={Img.IconWoorimy02} alt="" />
                    <p className="txt">외식</p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    <img src={Img.IconWoorimy03} alt="" />
                    <p className="txt">편의점</p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                  >
                    <img src={Img.IconWoorimy04} alt="" />
                    <p className="txt">대형마트</p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1200"
                    data-aos-duration="1000"
                  >
                    <img src={Img.IconWoorimy05} alt="" />
                    <p className="txt">세금/공과금</p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1500"
                    data-aos-duration="1000"
                  >
                    <img src={Img.IconWoorimy06} alt="" />
                    <p className="txt">저축/투자</p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1800"
                    data-aos-duration="1000"
                  >
                    <img src={Img.IconWoorimy07} alt="" />
                    <p className="txt">보험</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pjt-con bg03" data-type="white">
            <div className="pjt-title center white">
              <p
                className="tit ta-c fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                마이데이터 마케팅
              </p>
              <p
                className="desc clr0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                이벤트 및 프로모션의 제공은 즉시성, 지속성, 단순성, 인지성을
                고려하여 UX·UI(GUI) 환경을 제공합니다.{" "}
                <br className="hide-mobile" />
                고객의 니즈가 반영된 콘텐츠 큐레이션을 통해 긍정적인 경험과 이를
                바탕한 지속적인 참여가 가능하게 합니다.
              </p>
            </div>
            <div className="phone-layout">
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.woorimy03} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.woorimy04} alt="" className="pjt-img" />
              </div>
              <div
                className="hide-mobile"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src={Img.woorimy05} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="six">
        <section className="pjt-con-wrap woori-certi">
          <div className="pjt-top-full" data-type="white">
            <div className="pjt-title center white">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">
                <span>우리은행 사설인증 구축</span>
                <br />
                "우리WON인증"
              </p>
              <p
                className="desc hide-pc"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                단순하게, 명쾌하게, 가치있게 디앤디모바일은 <br />
                스스로의 긍정적 경험을 제공합니다.
              </p>
            </div>
            <div
              className="pjt-img-wrap hide-pc"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={Img.wooriCerti}
                alt="우리은행 사설인증 이미지"
                className=""
              />
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center">
              <p
                className="tit fw700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Design Concept
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                인증 서비스를 쉽고 빠르게 할 수 있도록 설계하였으며, 시장 환경에
                맞춰 유연하게 대처할 수 있도록 확장이 용이하게 구성합니다.
                <br className="hide-mobile" />
                고객 편의성 및 경쟁력을 강화로 종합서비스 시너지를 창출합니다.
              </p>
            </div>
            <div className="phone-layout type02">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.wooriCerti01} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.wooriCerti02} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="four">
        <section className="pjt-con-wrap woori-open" data-type="white">
          <div className="pjt-top-full">
            <div
              className="pjt-title center white"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p className="tit fw700">
                <span className="fw300">우리은행</span> <br />
                오픈뱅킹 시스템
              </p>
              <p className="desc">
                우리은행의 브랜드 색상을 적용하고 고해상도의 깔끔한 이미지와
                아이콘을 배치해 모던한 분위기의 디자인 요소를 적용합니다.
              </p>
            </div>
            <div
              className="pjt-top-img"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={Img.wooriOpenSplash}
                alt="우리은행 오픈뱅킹 시스템 이미지"
                className=""
              />
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p
                className="tit fw700"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Design Concept
              </p>
              <p
                className="desc clr0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                위비 APP의 브랜드 Identity가 일관성 있게 적용될 수 있도록 디자인
                시스템을 정리하고 UI를 직관적으로 설계합니다.
                <br className="hide-mobile" />
                복잡한 기능을 사용자가 편리하게 사용할 수 있도록 UI·GUI 환경
                제공합니다.
              </p>
            </div>
            <div className="phone-layout bg">
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.wooriOpen01} alt="" className="pjt-img" />
              </div>
            </div>
            <div className="phone-layout">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={Img.wooriOpen02} alt="" className="pjt-img" />
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <img src={Img.wooriOpen03} alt="" className="pjt-img" />
              </div>
              <div
                className="hide-mobile"
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <img src={Img.wooriOpen04} alt="" className="pjt-img" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
