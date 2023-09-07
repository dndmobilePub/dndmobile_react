import "swiper/css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TabContent from "../components/ui/TabContent";
import TabMenu from "../components/ui/TabMenu";

import pjScThumb from "../assets/images/img_pj_sc_thumb.png";
import pjCjThumb from "../assets/images/img_pj_cj_thumb.png";
import pjCjThumbGif from "../assets/images/img_pj_cj_thumb.gif";
import pjSc02Thumb from "../assets/images/img_pj_sc02_thumb.png";
import pjKbThumb from "../assets/images/img_pj_kb_thumb.png";
import pjHaThumb from "../assets/images/img_pj_ha_thumb.png";
import pjHaThumbGif from "../assets/images/img_pj_ha_thumb.gif";
import pjWoThumb from "../assets/images/img_pj_wo_thumb.png";
import pjWoThumbGif from "../assets/images/img_pj_wo_thumb.gif";
import pjWo02Thumb from "../assets/images/img_pj_wo02_thumb.png";
import pjWo02ThumbGif from "../assets/images/img_pj_wo02_thumb.gif";

const Project = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [year, setYear] = useState(2022);
  const setTabYear = (year) => {
    year && setYear(year);
  };
  return (
    <section className="project-wrap">
      <div className="project-box">
        <div className="title-wrap" data-aos="fade-up" data-aos-duration="1000">
          <p>Our Experience</p>
          <h2>
            고객의 생각을 <br className="hide-pc" />
            <strong>디자인으로 실현</strong>합니다
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          <Swiper
            ref={swiperRef}
            slidesPerView={2}
            spaceBetween={10}
            centeredSlides={true}
            roundLengths={true}
            loop={true}
            loopedSlides={1}
            observer={true}
            observeParents={true}
            speed={600}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="project-swiper"
            modules={[Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 6.1,
                spaceBetween: 74,
                loop: true,
                loopedSlides: 3,
                speed: 1000,
                autoplay: {
                  delay: 3500,
                  disableOnInteraction: false,
                },
              },
            }}
            onSlideChangeTransitionStart={(e) => {
              const { realIndex } = e;
              setActiveSlide(realIndex);
            }}
          >
            <SwiperSlide
              className="box-wrap bg-sc mask"
              data-aos-duration="1000"
            >
              <p className="img">
                <img src={pjScThumb} alt="" />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    SC 제일은행
                    <br />
                    <strong>모바일 기업뱅킹</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="box-wrap bg-cj mask"
              data-aos-duration="1000"
            >
              <p className="img">
                <img
                  src={activeSlide === 1 ? pjCjThumbGif : pjCjThumb}
                  alt=""
                />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    CJ대한통운
                    <br />
                    <strong>차세대 택배시스템</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="box-wrap bg-sc02 mask"
              data-aos-duration="1000"
            >
              <p className="img">
                <img src={pjSc02Thumb} alt="" />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    SC제일은행
                    <br />
                    <strong>고령자 편한뱅킹</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="box-wrap bg-kb mask"
              data-aos-duration="1000"
            >
              <p className="img">
                <img src={pjKbThumb} alt="" />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    KB국민은행
                    <br />
                    <strong>비대면 마케팅</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="box-wrap box-wrap bg-ha"
              data-aos-duration="1000"
            >
              <p className="img">
                <img
                  src={activeSlide === 4 ? pjHaThumbGif : pjHaThumb}
                  alt=""
                />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    하나카드
                    <br />
                    <strong>하나머니 고도화</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="box-wrap bg-wo mask"
              data-aos-duration="1000"
            >
              <p className="img">
                <img
                  src={activeSlide === 5 ? pjWoThumbGif : pjWoThumb}
                  alt=""
                />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    우리은행 사설인증
                    <br />
                    <strong>우리WON인증</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="box-wrap bg-wo02 mask"
              data-aos-duration="1000"
            >
              <p className="img">
                <img
                  src={activeSlide === 6 ? pjWo02ThumbGif : pjWo02Thumb}
                  alt=""
                />
              </p>
              <div className="hover-box">
                <div className="box">
                  <p>
                    우리은행
                    <br />
                    <strong>마이데이터</strong>
                  </p>
                  <button type="button">GO</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="project-box">
        <TabMenu onclick={setTabYear} />
      </div>
      <TabContent year={year} />
    </section>
  );
};

export default Project;
