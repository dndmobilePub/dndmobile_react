import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "../components/ui/Accordion";

const Recruit = () => {
  const [visible, setVisible] = useState(0);

  return (
    <section className="recruit-wrap">
      <div className="title-wrap">
        <p
          className="tit hide-mobile"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          디앤디모바일과 같이 <strong>생각</strong>할
        </p>
        <p
          className="tit hide-mobile"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <strong>'나'</strong>를 <strong>초대</strong>합니다.
        </p>
        <p className="tit hide-pc" data-aos="fade-up" data-aos-duration="1000">
          디앤디모바일과 같이 <strong>생각</strong>할<br />
          <strong>'나'</strong>
          <span>를</span> <strong>초대</strong>
          <span>합니다.</span>
        </p>
        <p className="desc" data-aos="fade-up" data-aos-duration="1000">
          자유로움 속에서 생각에 생각을 더하면 더 참신한 생각이 됩니다.
          <br className="hide-mobile" />이 크리에이티브한 디자인 공동체
          디앤디모바일에 새로운 ‘나’가 되어주세요.
        </p>
      </div>

      <div className="accordion-wrap">
        <Accordion 
          visible={visible}
          type="recruit"
          id={1}
          title="기획자"
          list1={["Web, Mobile 기획","UX·UI 기획","UX Writing","서비스 분석 및 기획 설계","프로젝트 유지 관리","원활한 커뮤니케이션"]}
          list2={["성실성, 협동심, 꼼꼼함, 적응성"]}
          list3={["학력 : 초대졸이상","경력 : 경력1년↑(주임~대리급)","경력 : 경력5년↑(과장~차장급)"]}
          onclick={()=>setVisible(visible === 1 ? 0 : 1)}
        />
        <Accordion 
          visible={visible}
          type="recruit"
          id={2}
          title="디자이너"
          list1={["Web, Mobile 기획","UX·UI 기획","UX Writing","서비스 분석 및 기획 설계","프로젝트 유지 관리","원활한 커뮤니케이션"]}
          list2={["성실성, 협동심, 꼼꼼함, 적응성"]}
          list3={["학력 : 초대졸이상","경력 : 경력1년↑(주임~대리급)","경력 : 경력5년↑(과장~차장급)"]}
          onclick={()=>setVisible(visible === 2 ? 0 : 2)}
        />
        <Accordion 
          visible={visible}
          type="recruit"
          id={3}
          title="퍼블리셔"
          list1={["Web, Mobile 기획","UX·UI 기획","UX Writing","서비스 분석 및 기획 설계","프로젝트 유지 관리","원활한 커뮤니케이션"]}
          list2={["성실성, 협동심, 꼼꼼함, 적응성"]}
          list3={["학력 : 초대졸이상","경력 : 경력1년↑(주임~대리급)","경력 : 경력5년↑(과장~차장급)"]}
          onclick={()=>setVisible(visible === 3 ? 0 : 3)}
        />
      </div>

      <div className="btn-wrap" data-aos="fade-up" data-aos-duration="1000">
        {/* <!-- <a href="https://www.jobkorea.co.kr/net/Recruit/Co_Read/C/dndmobile?Oem_Code=C1" target="_blank" name="잡코리아에서 지원하기" className="type1">잡코리아에서 지원하기</a> --> */}
        <Link
          to="mailto:dndmobile@dndmobile.co.kr"
          target="_blank"
          name="이메일 지원하기"
          className="type4 type4-hover"
        >
          이메일 지원하기
        </Link>
      </div>
    </section>
  );
};

export default Recruit;
