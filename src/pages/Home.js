import { gsap } from "gsap";
import { Indicator } from "../components/ui/Indicatior";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import $ from 'jquery';
gsap.registerPlugin(ScrollTrigger);

const Home = ({ isMain }) => {
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
            duration: 1.5,
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

  useEffect(()=>{
    if(isMain === true){
      document.querySelector(".wrap").classList.add('main');
    }
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

    let links = gsap.utils.toArray(".main-indicator-wrap a");
    links.forEach(a => {
        let element = document.querySelector(a.getAttribute("href")),
            linkST = ScrollTrigger.create({
                trigger: element,
                start: "top top"
            });
        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => self.isActive && setActive(a)
        });
        a.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
        });
    });

    function setActive(link) {
      links.forEach(el => el.classList.remove("active"));
      link.classList.add("active");
  
      if (link.classList.contains("indi-white")) {
          document.querySelector(".main-indicator-wrap").classList.add('white')
          document.querySelector(".menu-toggle").classList.add('white')
          document.querySelector("html").classList.add('bg-black')
      } else {
          document.querySelector(".main-indicator-wrap").classList.remove('white')
          document.querySelector(".menu-toggle").classList.remove('white')
          document.querySelector("html").classList.remove('bg-black')
      }
  
      /* 인트로 추가 */
      if($("#intro-indi").hasClass("active") === true){
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
                }
            });
        });
    });

    $(window).on('scroll', function () {
      let scroll = $(window).scrollTop();

      let articleTopIntro = $(".intro-wrap .pjt-con").offset().top;
      let articleBottomIntro = articleTopIntro + $(".intro-wrap .pjt-con").outerHeight();

      let articleTopScAge = $(".sc-aged .pjt-con").offset().top;
      let articleBottomScAge = articleTopScAge + $(".sc-aged .pjt-con").outerHeight();

      let articleTopScAge2 = $(".sc-aged .pjt-top").offset().top;
      let articleBottomScAge2 = articleTopScAge2 + $(".sc-aged .pjt-top").outerHeight();

      let articleTopScAge3 = $(".sc-aged .type-white").offset().top;
      let articleBottomScAge3 = articleTopScAge3 + $(".sc-aged .type-white").outerHeight();

      let articleTopSc = $(".sc .pjt-con").offset().top;
      let articleBottomSc = articleTopSc + $(".sc .pjt-con").outerHeight();

      let articleTopSc2 = $(".sc .pjt-top-full").offset().top;
      let articleBottomSc2 = articleTopSc2 + $(".sc .pjt-top-full").outerHeight();

      let articleTopCj = $(".cj .pjt-con").offset().top;
      let articleBottomCj = articleTopCj + $(".cj .pjt-con").outerHeight();
  
      let articleTopCj2 = $(".cj .pjt-top").offset().top;
      let articleBottomCj2 = articleTopCj2 + $(".cj .pjt-top").outerHeight();

      let articleTopWoori = $(".woori-my .pjt-con.bg03").offset().top;
      let articleBottomWoori = articleTopWoori + $(".woori-my .pjt-con.bg03").outerHeight();

      let articleTopWoori2 = $(".woori-my .black-section").offset().top;
      let articleBottomWoori2 = articleTopWoori2 + $(".woori-my .black-section").outerHeight();

      let articleTop = $(".woori-open .pjt-con").offset().top;
      let articleBottom = articleTop + $(".woori-open .pjt-con").outerHeight();
  
      let articleTop2 = $(".woori-open .pjt-top-full").offset().top;
      let articleBottom2 = articleTop2 + $(".woori-open .pjt-top-full").outerHeight();
      
      if (scroll >= 0 && scroll < articleTopIntro) {
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }

      if (scroll > articleBottomIntro) {
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }

      if (scroll >= articleTopScAge && scroll < articleBottomScAge) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }
  
      if (scroll >= articleTopScAge2 && scroll < articleBottomScAge2) {
        $(".main-indicator-wrap").removeClass("white");
        $(".menu-toggle").removeClass('white');
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }
  
      if (scroll >= articleTopScAge3 && scroll < articleBottomScAge3) {
        $(".main-indicator-wrap").removeClass("white");
        $(".menu-toggle").removeClass('white');
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }

      if (scroll >= articleTopSc2 && scroll < articleBottomSc2) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }

      if (scroll >= articleTopSc && scroll < articleBottomSc) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }

      if (scroll >= articleBottomSc && scroll < articleTopSc2) {
        $(".main-indicator-wrap").removeClass("white");
        $(".menu-toggle").removeClass('white');
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }

      if (scroll >= articleTopCj && scroll < articleBottomCj) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }
  
      if (scroll >= articleTopCj2 && scroll < articleBottomCj2) {
        $(".main-indicator-wrap").removeClass("white");
        $(".menu-toggle").removeClass('white');
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }

      if (scroll >= articleTopWoori && scroll < articleBottomWoori) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }
  
      if (scroll >= articleBottomWoori) {
        $(".main-indicator-wrap").removeClass("white");
        $(".menu-toggle").removeClass('white');
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }
  
      if (scroll >= articleTopWoori2 && scroll < articleBottomWoori2) {
        $(".main-indicator-wrap").removeClass("white");
        $(".menu-toggle").removeClass('white');
        $(".btn-top").removeClass('white');
        $(".quick_btn").removeClass('white')
      }
  
      if (scroll >= articleTop2 && scroll < articleBottom2) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }
  
      if (scroll >= articleTop && scroll < articleBottom) {
        $(".main-indicator-wrap").addClass("white");
        $(".menu-toggle").addClass('white');
        $(".btn-top").addClass('white');
        $(".quick_btn").addClass('white')
      }
    });
  },[])
  return (
    <>
      <Indicator />
      <section className="panel intro-panel" id="intro">
			  <section className="pjt-con-wrap intro-wrap">
				  <div className="pjt-top-full">
					  <div className="pjt-title center white">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">We Convert <br className="hide-pc"/>Your <br className="hide-mobile"/>Thoughts <br className="hide-pc"/> Into Designs
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1600">
                UX · UI · GUI 분야에서 핵심기술을 고객중심의 서비스로
                <br className="hide-mobile"/>
                최상의 퍼포먼스 최고의 크리에이티브를 만듭니다.
              </p>
					  </div>
				  </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
            </div>
          </div>
          <div className="arrow">
            <span>
              <svg className="arrow_mo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M41.5078 27.6455L27.9245 41.2288C26.3203 42.833 23.6953 42.833 22.0911 41.2288L8.50781 27.6455" stroke="white" strokeOpacity="0.31" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
                <span>
              <svg className="arrow_mo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M41.5078 7.64551L27.9245 21.2288C26.3203 22.833 23.6953 22.833 22.0911 21.2288L8.50781 7.64551" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
			  </section>
      </section>

      <section className="panel" id="sc_aged">
        <section className="pjt-con-wrap sc-aged">
          <div className="pjt-top">
            <div className="pjt-title">
              <p className="tit pd80" data-aos="fade-up" data-aos-duration="1000">
                <span>SC 제일은행</span><br/>
                고령자 위한 편한뱅킹
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                SC제일은행의 모바일 앱을 고령화시대에 맞춰 고령자를 위한 
                사용자 경험에 기반하여 단순화 한 앱의 편의성과 직관성을 
                고려한 UX/UI 환경을 제공합니다.
              </p>
              <div className="tool-list" data-aos="fade-up" data-aos-duration="1000">
                <div><img src="/assets/images/icon_ps.svg" alt="" /></div>
                <div><img src="/assets/images/icon_ai.svg" alt="" /></div>
                <div><img src="/assets/images/icon_pigma.svg" alt="" /></div>
              </div>
		        </div>
            <div className="pjt-top-img">
              <img src="/assets/images/img_sc_aged_motion.gif" alt="" className="sc-aged-motion" />
            </div>
	        </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">Design Concept</p>
              <p className="desc clr0" data-aos="fade-up" data-aos-duration="1000">
                고령자의 ‘사용자 경험(User Experinence, UX) 디자인을 적용하기위한 큰 글씨, 아이콘의 텍스트화, <br className="hide-mobile"/>
                단순화 한 쉬운모드(고령화) 앱의 편의성과 직관성에 중점을 두었습니다. <br className="hide-mobile"/>
                또한 SC제일은행의 새로운 Look & Feel로 dark모드를 선보였습니다.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <ul className="icon-layout">
                <li>
                  <span  className="ico-sc-aged01"></span>
                  입금
                </li>
                <li>
                  <span  className="ico-sc-aged02"></span>
                  주식
                </li>
                <li>
                  <span  className="ico-sc-aged03"></span>
                  지불
                </li>
                <li>
                  <span  className="ico-sc-aged04"></span>
                  보안
                </li>
                <li>
                  <span  className="ico-sc-aged05"></span>
                  대출
                </li>
              </ul>
            </div>
            <div className="phone-layout type02">
              <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/img_sc_aged_phone01.gif " alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                <img src="/assets/images/img_sc_aged_phone02.gif " alt="" className="pjt-img"/>
              </div>
            </div>
          </div>
          <div className="pjt-con type-white">
            <div className="pjt-title center">
              <p className="tit2" data-aos="fade-up" data-aos-duration="1000">Dark Mode</p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                앱 사용자의 눈 피로도를 덜고자 편한뱅킹 서비스에 ‘다크모드’를 도입하였습니다. <br/>
                휴대전화의 다크모드를 이미 적용 중이라면 SC제일은행 모바일뱅킹 앱에 로그인한 후 ‘편한뱅킹’ 버튼을 <br className="hide-mobile"/>
                누르면 자동으로 다크모드가 적용된 서비스를 경험할 수 있습니다. 
              </p>
            </div>
            <div className="phone-layout">
              <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/img_sc_aged_phone03.png " alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                <img src="/assets/images/img_sc_aged_phone04.png " alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">
                <img src="/assets/images/img_sc_aged_phone05.png " alt="" className="pjt-img"/>
              </div>
            </div>
          </div>
        </section>
		  </section>
      <section className="panel" id="two">
        <section className="pjt-con-wrap sc">
          <div className="pjt-top-full">
            <div className="pjt-title center white indi-white" data-aos="fade-right" data-aos-duration="1000">
              <p className="tit icon-if fw700">
                <span className="fw300">SC제일은행</span> <br className="hide-pc"/>
                비즈니스 뱅킹
              </p>
              <p className="desc">
                기존 기업뱅킹(First Biz)을 새롭게 개편하여 중소기업 전용 플랫폼인 '비즈니스 뱅킹'으로 새롭게 리뉴얼하여 <br className="hide-mobile"/>
                글로벌기업을 위해 외환 서비스를 더욱 강화합니다.
              </p>
            </div>
            <div className="pjt-top-img" data-aos="fade-left" data-aos-duration="1000">
              <img src="/assets/images/img_sc_splash.png" alt="sc제일은행 이미지" className=""/>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">Design Concept</p>
              <p className="desc clr0" data-aos="fade-up" data-aos-duration="1000">
                핵심 서비스를 고객 중심으로 전면 개편하여 사용이 쉽고 편한 UX·UI 환경을 제공합니다. <br className="hide-mobile"/>
                Global SC Group의 UX·UI Guide Line을 토대로 Korea SC Business Banking의 브랜딩 Identity를 확립에 주력합니다.
              </p>
            </div>
            <div className="phone-layout type02">
              <div data-aos="fade-up" data-aos-duration="1000">
                <img src="/assets/images/img_sc01.png" alt="" className="pjt-img"/>
              </div>
              <div className="mt160" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/img_sc02.png" alt="" className="pjt-img"/>
              </div>
            </div>
            <div className="pjt-title type02 white">
              <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">Design Element</p>
              <p className="desc clr0" data-aos="fade-up" data-aos-duration="1000">
                부드러운 색표현, 오브젝트와 비주얼 스타일에도 Easy 콘셉트 적용합니다.
              </p>
            </div>
            <div className="phone-layout">
              <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"><img src="/assets/images/img_sc03.png "
                  alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000"><img src="/assets/images/img_sc04.png"
                  alt="" className="pjt-img"/>
              </div>
              <div className="hide-mobile" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">
                <img src="/assets/images/img_sc05.png" alt="" className="pjt-img"/>
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
                <span>KB국민은행</span><br/>
                비대면 마케팅
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                비대면 서비스 이용 고객이 증가함에 따라 환경 변화에 신속히 대응할 수 있는 'Marketing Tool'을 제공합니다.<br/>
                즉시성, 지속성, 단순성, 인지성을 고려한 UI·GUI를 제공함으로써 다양한 이용
                고객층의 참여를 확대합니다.
              </p>
              <div className="tool-list" data-aos="fade-up" data-aos-duration="1000">
                <div><img src="/assets/images/icon_ps.svg" alt=""/></div>
                <div><img src="/assets/images/icon_ai.svg" alt=""/></div>
                <div><img src="/assets/images/icon_pigma.svg" alt=""/></div>
              </div>
            </div>
            <div className="pjt-top-img">
              <div className="swiper-container splash-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="/assets/images/img_kb_splash01.jpg" alt="kb국민은행 이미지" className="pjt-img"/>
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/images/img_kb_splash02.jpg" alt="kb국민은행 이미지" className="pjt-img"/>
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/images/img_kb_splash03.jpg" alt="kb국민은행 이미지" className="pjt-img"/>
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/images/img_kb_splash04.jpg" alt="kb국민은행 이미지" className="pjt-img"/>
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/images/img_kb_splash05.jpg" alt="kb국민은행 이미지" className="pjt-img"/>
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/images/img_kb_splash06.jpg" alt="kb국민은행 이미지" className="pjt-img"/>
                  </div>
                </div>
              </div>
              {/* <!-- <img src="../assets/assets/images/img_kb_splash.png" alt="kb국민은행 이미지" className="pjt-img gs-up gs-left"> --> */}
              <div className="bg-area">
                <span className="circle type01 gs-up"></span>
                <span className="circle type02 gs-up"></span>
                <span className="circle type03 gs-up"></span>
              </div>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center">
              <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">Wallet</p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                실물 지갑을 대체하는 간편 기능에 생활 연계 서비스를 더한 디지털 지갑 형태의 생활밀착형 플랫폼입니다. <br className="hide-mobile"/>
                기존 고객뿐만 아니라 KB국민은행 계좌가 없는 고객도 간편하게 이용이 가능합니다.
              </p>
            </div>
            <div className="phone-layout">
              <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/img_kb01.png" alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                <img src="/assets/images/img_kb02.png" alt="" className="pjt-img"/>
              </div>
              <div className="hide-mobile" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">
                <img src="/assets/images/img_kb03.png" alt="" className="pjt-img"/>
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
                <span>CJ대한통운</span><br/>
                차세대 택배시스템
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                사용자의 여정에서 발생하는 일련의 과정 및 상태를<br className="hide-mobile"/>직관적으로 인지할 수 있도록 디자인합니다.
              </p>
              <div className="tool-list" data-aos="fade-up" data-aos-duration="1000">
                <div><img src="/assets/images/icon_ps.svg" alt=""/></div>
                <div><img src="/assets/images/icon_ai.svg" alt=""/></div>
                <div><img src="/assets/images/icon_xd.svg" alt=""/></div>
                <div><img src="/assets/images/icon_pigma.svg" alt=""/></div>
              </div>
            </div>
            <div className="pjt-top-img">
              <div className="pjt-img01" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/img_cj_splash01.png" alt="CJ대한통운 이미지" className=""/>
              </div>
              <div className="pjt-img02" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                <img src="/assets/images/img_cj_splash02.png" alt="CJ대한통운 이미지" className=""/>
              </div>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">Design Concept </p>
              <p className="desc clr0" data-aos="fade-up" data-aos-duration="1000">
                CJ 대한통운의 일원화된 브랜드 경험을 만드는 것을 목표로 고객 중심의 사용성을 우선으로 하는 UX·UI를 구현합니다. <br className="hide-mobile"/>
                일반고객용, 직원용의 APP UX·UI·GUI 환경을 통일화하여 브랜드 Identity 강화합니다.
              </p>
            </div>
            <div className="icon" data-aos="fade-up" data-aos-duration="1000">
              <img src="/assets/images/img_cj_icon2.png" alt=""/>
            </div>
            <div className="phone-layout">
              <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/img_cj01.png" alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                <img src="/assets/images/img_cj02.png" alt="" className="pjt-img"/>
              </div>
              <div className="hide-mobile" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">
                <img src="/assets/images/img_cj03.png" alt="" className="pjt-img"/>
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
                <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">
                  <span className="fw300">우리은행</span><br/>
                  마이데이터 운영
                </p>
                <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                  금융과 비금융을 모두 아우르는 '데이터 관리 종합 플랫폼'으로서<br className="hide-mobile"/>
                  철저히 고객 관점에서 설계한 UX·UI를 제공합니다.<br className="hide-mobile"/>
                  고연령층 등 디지털 취약계층 고객도 편리하게<br className="hide-mobile"/>
                  마이데이터 서비스 이용이 가능한 환경을 제공합니다.
                </p>
                <div className="tool-list" data-aos="fade-up" data-aos-duration="1000">
                  <div><img src="/assets/images/icon_ps.svg" alt=""/></div>
                  <div><img src="/assets/images/icon_ai.svg" alt=""/></div>
                  <div><img src="/assets/images/icon_pigma.svg" alt=""/></div>
                </div>
              </div>
              <div className="pjt-top-img" data-aos="fade-right" data-aos-duration="1000">
                <div className="bg-area">
                  <div className="woori_bg_left">
                  <img src="/assets/images/img_woorimy_left.png" alt="" className="hide-mobile"/>
                  <img src="/assets/images/img_woorimy_left_mo.png" alt="" className="hide-pc"/>
                </div>
                  <div className="splash-img">
                    <img src="/assets/images/img_woorimy_splash.gif" alt=""/>
                  </div>
                  <div className="woori_bg_right">
                  <img src="/assets/images/img_woorimy_right.png" alt="" className="hide-mobile"/>
                  <img src="/assets/images/img_woorimy_right_mo.png" alt="" className="hide-pc"/>
                </div>
                </div>
              </div>
            </div>
            <div className="pjt-con bg01">
              <div className="phone-layout type02">
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"><img
                    src="/assets/images/img_woorimy01.png" alt="" className="pjt-img"/></div>
                <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"><img
                    src="/assets/images/img_woorimy02.png" alt="" className="pjt-img"/></div>
              </div>
            </div>
            <div className="pjt-con bg02">
              <div className="icon-list-wrap">
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy01.svg" alt=""/>
                    <p className="txt">카페</p>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy02.svg" alt=""/>
                    <p className="txt">외식</p>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy03.svg" alt=""/>
                    <p className="txt">편의점</p>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy04.svg" alt=""/>
                    <p className="txt">대형마트</p>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy05.svg" alt=""/>
                    <p className="txt">세금/공과금</p>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy06.svg" alt=""/>
                    <p className="txt">저축/투자</p>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="1800" data-aos-duration="1000">
                    <img src="/assets/images/icon_woorimy07.svg" alt=""/>
                    <p className="txt">보험</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pjt-con bg03">
            <div className="pjt-title center white">
              <p className="tit ta-c fw700" data-aos="fade-up" data-aos-duration="1000">
                마이데이터 마케팅
              </p>
              <p className="desc clr0" data-aos="fade-up" data-aos-duration="1000">
                이벤트 및 프로모션의 제공은 즉시성, 지속성, 단순성, 인지성을 고려하여 UX·UI(GUI) 환경을 제공합니다. <br className="hide-mobile"/>
                고객의 니즈가 반영된 콘텐츠 큐레이션을 통해 긍정적인 경험과 이를 바탕한 지속적인 참여가 가능하게 합니다.
              </p>
            </div>
            <div className="phone-layout">
              <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"><img
                  src="/assets/images/img_woorimy03.png" alt="" className="pjt-img"/></div>
              <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000"><img
                  src="/assets/images/img_woorimy04.png" alt="" className="pjt-img"/></div>
              <div className="hide-mobile" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000"><img
                  src="/assets/images/img_woorimy05.png" alt="" className="pjt-img"/></div>
            </div>
          </div>
        </section>
		  </section>
      <section className="panel" id="six">
        <section className="pjt-con-wrap woori-certi">
          <div className="pjt-top-full">
            <div className="pjt-title center white">
              <p className="tit" data-aos="fade-up" data-aos-duration="1000">
                <span>우리은행 사설인증 구축</span>
                <br/>"우리WON인증"
              </p>
              <p className="desc hide-pc" data-aos="fade-up" data-aos-duration="1000">
                단순하게, 명쾌하게, 가치있게 디앤디모바일은 <br/>
                스스로의 긍정적 경험을 제공합니다.
              </p>
            </div>
            <div className="pjt-img-wrap hide-pc" data-aos="fade-up" data-aos-duration="1000">
              <img src="/assets/images/bg_wooricerti_phone_mo.png" alt="우리은행 사설인증 이미지" className=""/>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center">
              <p className="tit fw700" data-aos="fade-up" data-aos-duration="1000">Design Concept</p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                인증 서비스를 쉽고 빠르게 할 수 있도록 설계하였으며, 시장 환경에 맞춰 유연하게 대처할 수 있도록 확장이 용이하게 구성합니다.<br className="hide-mobile"/>
                고객 편의성 및 경쟁력을 강화로 종합서비스 시너지를 창출합니다.
              </p>
            </div>
            <div className="phone-layout type02">
              <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"><img
                  src="/assets/images/img_wooricerti01.png" alt="" className="pjt-img"/></div>
              <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000"><img
                  src="/assets/images/img_wooricerti02.png" alt="" className="pjt-img"/></div>
            </div>
          </div>
        </section>
      </section>
      <section className="panel" id="four">
        <section className="pjt-con-wrap woori-open">
          <div className="pjt-top-full">
            <div className="pjt-title center white" data-aos="fade-left" data-aos-duration="1000">
              <p className="tit fw700">
                <span className="fw300">우리은행</span> <br/>
                오픈뱅킹 시스템
              </p>
              <p className="desc">
                우리은행의 브랜드 색상을 적용하고 고해상도의 깔끔한 이미지와 아이콘을 배치해 모던한 분위기의 디자인 요소를 적용합니다.
              </p>
            </div>
            <div className="pjt-top-img" data-aos="fade-right" data-aos-duration="1000">
              <img src="/assets/images/img_wooriopen_splash.png" alt="우리은행 오픈뱅킹 시스템 이미지" className=""/>
            </div>
          </div>
          <div className="pjt-con">
            <div className="pjt-title center white">
              <p className="tit fw700" data-aos="fade-right" data-aos-duration="1000">Design Concept</p>
              <p className="desc clr0" data-aos="fade-right" data-aos-duration="1000">
                위비 APP의 브랜드 Identity가 일관성 있게 적용될 수 있도록 디자인 시스템을 정리하고 UI를 직관적으로 설계합니다.<br className="hide-mobile"/>
                복잡한 기능을 사용자가 편리하게 사용할 수 있도록 UI·GUI 환경 제공합니다.
              </p>
            </div>
            <div className="phone-layout bg">
              <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000"><img
                  src="/assets/images/img_wooriopen01.png" alt="" className="pjt-img"/>
              </div>
            </div>
            <div className="phone-layout">
              <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"><img
                  src="/assets/images/img_wooriopen02.png" alt="" className="pjt-img"/>
              </div>
              <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000"><img
                  src="/assets/images/img_wooriopen03.png" alt="" className="pjt-img"/>
              </div>
              <div className="hide-mobile" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000"><img
                  src="/assets/images/img_wooriopen04.png" alt="" className="pjt-img"/></div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home;