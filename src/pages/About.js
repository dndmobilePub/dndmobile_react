import bgServiceCircle01 from "../assets/images/bg_service_circle01.png";
import bgServiceCircleMo01 from "../assets/images/bg_service_circle01_mo.png";
import bgServiceCircle02 from "../assets/images/bg_service_circle02.png";
import bgServiceCircleMo02 from "../assets/images/bg_service_circle02_mo.png";
import iconWork01 from "../assets/images/icon_work01.gif";
import iconWork02 from "../assets/images/icon_work02.gif";
import iconWork03 from "../assets/images/icon_work03.gif";
import iconWork04 from "../assets/images/icon_work04.gif";
import iconWork05 from "../assets/images/icon_work05.gif";
import imgClient01 from "../assets/images/img_clients01.jpg";
import imgClient02 from "../assets/images/img_clients02.jpg";
import imgClient03 from "../assets/images/img_clients03.jpg";
import imgClient04 from "../assets/images/img_clients04.jpg";
import imgClientMo01 from "../assets/images/img_clients01_mo.jpg";
import imgClientMo02 from "../assets/images/img_clients02_mo.jpg";
import imgClientMo03 from "../assets/images/img_clients03_mo.jpg";
import imgClientMo04 from "../assets/images/img_clients04_mo.jpg";
import imgClientMo05 from "../assets/images/img_clients05_mo.jpg";
import imgClientMo06 from "../assets/images/img_clients06_mo.jpg";
import imgClientMo07 from "../assets/images/img_clients07_mo.jpg";
import imgClientMo08 from "../assets/images/img_clients08_mo.jpg";
import imgClientMo09 from "../assets/images/img_clients09_mo.jpg";

const About = () => {
  return (
    <>
      <div className="about-wrap">
        <section className="section nth01">
          <div className="inner">
            <div className="gs-up txt-ani">
              <p>IDENTITY</p>
            </div>
            <div className="title-wrap">
              <p className="tit01" data-aos="fade-up" data-aos-duration="1000">
                아름다운 디지털 환경을
                <br className="hide-pc" /> 만들어 갑니다.
              </p>
              <p
                className="tit02 hide-mobile"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                디앤디모바일은 날마다 디지털 세계에 아름다움을 더해 갑니다.
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                디앤디모바일은 현재 속에 안주하는 것이 아닌 현재를 넘어 아름다운
                내일을 바라봅니다. <br className="hide-mobile" />
                디지털의 발전에만 전념하는 것이 아니라 발전을 넘어 디지털 세계를
                향유할 수 있는 사용자의 경험과 <br className="hide-mobile" />
                디자인의 아름다움을 바라보는 것이 디앤디모바일의 시선입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section nth02">
          <div className="inner">
            <div className="gs-up txt-ani white">
              <p>SERVICE</p>
            </div>
            <div className="title-wrap white">
              <p className="tit01" data-aos="fade-up" data-aos-duration="1000">
                UX.UI.DX
              </p>
              <p
                className="tit02 hide-mobile"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                디앤디모바일은 UX.UI를 통한 디지털트랜스포메이션을 이루어
                갑니다.
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                디지털의 발전은 이제 사용하는 기술을 넘어 업무 전반에 거쳐
                영향력을 더해 가고 있습니다.
                <br className="hide-mobile" />
                디앤디모바일은 이에 발마춰 UX.UI를 통해 모든 산업에 적용 가능한
                광범위한 비즈니스 전략, 디지털 포메이션을 이루어 갑니다.
              </p>
            </div>

            <div className="service-list-wrap">
              <div className="bg-area hide-mobile">
                <p
                  className="circle01"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img src={bgServiceCircle01} alt="" />
                </p>
                <p
                  className="circle02"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={bgServiceCircle02} alt="" />
                </p>
              </div>
              <div className="bg-area hide-pc">
                <p
                  className="circle01"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img src={bgServiceCircleMo01} alt="" />
                </p>
                <p
                  className="circle02"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={bgServiceCircleMo02} alt="" />
                </p>
              </div>
              <div
                className="service-list"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <p className="tit01">UX.UI.DX</p>
                <p className="tit02">전략기획</p>
                <p className="desc">
                  UX.UI 컨설팅 <br />
                  콘텐츠 기획 <br />
                  브랜딩
                </p>
              </div>
              <div
                className="service-list"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <p className="tit01">
                  Web<span>&</span>Mobile
                </p>
                <p className="tit02">구축</p>
                <p className="desc">
                  UX·UI 디자인 <br />
                  GUI 디자인 <br />
                  모션그래픽
                </p>
              </div>
              <div
                className="service-list"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <p className="tit01">Maintenance</p>
                <p className="tit02">운영 유지보수</p>
                <p className="desc">
                  사이트 운영 관리 <br />
                  시스템 관리 <br />
                  운영 컨설팅
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section nth03">
          <div className="inner">
            <div className="gs-up txt-ani">
              <p>WORKS</p>
            </div>
            <div className="title-wrap">
              <p className="tit01" data-aos="fade-up" data-aos-duration="1000">
                단순하게, 명쾌하게, 더 가치있게
              </p>
              <p
                className="tit02 hide-mobile"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                선입견 없는 접근, 사용자의 이해를 통해 균형과 조화를
                이루어냅니다.
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                트렌드에 맞는 디자인 서비스를 제공하고, 클라이언트의
                아이덴티티를 사용자에게 가장 흥미롭고 적합한 방법으로 전달 할 수
                있는 방법을 제시하고 실행합니다.
              </p>
            </div>
            <div className="work-list-wrap">
              <ul>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={iconWork01} alt="" />
                  </p>
                  <p className="tit">Define</p>
                  <p className="desc">귀기울이는 요구사항 분석</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <p className="img">
                    <img src={iconWork02} alt="" />
                  </p>
                  <p className="tit">Planning</p>
                  <p className="desc">편의와 만족의 UX·UI 기획</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <p className="img">
                    <img src={iconWork03} alt="" />
                  </p>
                  <p className="tit">Design</p>
                  <p className="desc">즐거움을 위한 UI·GUI 디자인</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                >
                  <p className="img">
                    <img src={iconWork04} alt="" />
                  </p>
                  <p className="tit">Publishing</p>
                  <p className="desc">동일하게 보이는 퍼블리싱</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="1000"
                >
                  <p className="img">
                    <img src={iconWork05} alt="" />
                  </p>
                  <p className="tit">Management</p>
                  <p className="desc">내일을 바라보는 운영</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section nth04">
          <div className="inner">
            <div className="gs-up txt-ani">
              <p>CLIENTS</p>
            </div>
            <div className="title-wrap">
              <p className="tit01" data-aos="fade-up" data-aos-duration="1000">
                고객과의 시선과 호흡을 <br className="hide-pc" />
                맞추다
              </p>
              <p
                className="tit02 hide-mobile"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                고객과의 시선과 호흡을 맞춰 성공적인 프로젝트를 수행하겠습니다.
              </p>
              <p className="desc" data-aos="fade-up" data-aos-duration="1000">
                디앤디모바일은 각 분야의 전문성을 가진 ManPower, 역할과 규칙을
                공유하는 체계적인 시스템을 유지하며 스스로의 가치와 의미로
                긍정적 경험을 제공합니다.
              </p>
            </div>
            <div className="clients-list-wrap hide-mobile">
              <ul>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClient01} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClient02} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClient03} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClient04} alt="" />
                  </p>
                </li>
              </ul>
            </div>

            <div className="clients-list-wrap hide-pc">
              <ul>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo01} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo02} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo03} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo04} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo05} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo06} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo07} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo08} alt="" />
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <p className="img">
                    <img src={imgClientMo09} alt="" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
