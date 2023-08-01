import { Link } from "react-router-dom";
import { useEffect } from "react";
import $ from 'jquery';

const Recruit = () => {
	useEffect(()=>{
		$('.accordion').on('click', function (e) {
			e.preventDefault()
	
			const $siblings = $('.accordion')
	
			$siblings.next('.panel').slideUp()
			$siblings.removeClass('active')
	
			const $this = $(this)
			const $parent = $this.parent()
			const $nextToggleContents = $this.next('.panel')
	
			if ($this.next('.panel').is(':hidden')) {
				console.log('here')
				$this.addClass('active');
				$nextToggleContents.slideDown(function() {
					let offsetTop = $parent.offset().top;
					let gnbHeight = $('header').outerHeight();

					$('html, body').animate({ 
						scrollTop: offsetTop - gnbHeight
					}, 300);

					// 화면 너비가 768px보다 작을 경우
					let screenWidth = $(window).width();
					if (screenWidth < 768) {
						offsetTop = $parent.offset().top;
						gnbHeight = $('header').outerHeight();

						$('html, body').animate({ 
								scrollTop: offsetTop - gnbHeight
						}, 300);
					}
				});
				return;
			} else {
				console.log('here2')
				$this.removeClass('active')
				$nextToggleContents.slideUp();
			}
		})
	},[])
  return (
    <section className="recruit-wrap">
			<div className="title-wrap">
				<p className="tit hide-mobile" data-aos="fade-up" data-aos-duration="1000">
					디앤디모바일과 같이 <strong>생각</strong>할
				</p>
				<p className="tit hide-mobile" data-aos="fade-up" data-aos-duration="1000">
					<strong>'나'</strong>를 <strong>초대</strong>합니다.
				</p>
				<p className="tit hide-pc" data-aos="fade-up" data-aos-duration="1000">
					디앤디모바일과 같이 <strong>생각</strong>할<br/><strong>'나'</strong><span>를</span> <strong>초대</strong><span>합니다.</span>
				</p>
				<p className="desc" data-aos="fade-up" data-aos-duration="1000">
					자유로움 속에서 생각에 생각을 더하면 더 참신한 생각이 됩니다.<br className="hide-mobile"/>
					이 크리에이티브한 디자인 공동체 디앤디모바일에 새로운 ‘나’가 되어주세요.
				</p>
			</div>

			<div className="accordion-wrap">
				<dl>
					<dt className="accordion">기획자</dt>
					<dd className="panel">
						<div className="part-box">
							<div className="part">
								<p>담당업무</p>
								<ul>
									<li>Web, Mobile 기획</li>
									<li>UX·UI 기획</li>
									<li>UX Writing</li>
									<li>서비스 분석 및 기획 설계</li>
									<li>프로젝트 유지 관리</li>
									<li>원활한 커뮤니케이션</li>
								</ul>
							</div>
							<div className="part">
								<p>핵심역량</p>
								<ul>
									<li>성실성, 협동심, 꼼꼼함, 적응성</li>
								</ul>
							</div>
							<div className="part">
								<p>자격요건</p>
								<ul>
									<li>학력 : 초대졸이상</li>
									<li>경력 : 경력1년↑(주임~대리급)</li>
									<li>경력 : 경력5년↑(과장~차장급)</li>
								</ul>
							</div>
						</div>
					</dd>
				</dl>
				<dl>
					<dt className="accordion">디자이너</dt>
					<dd className="panel">
						<div className="part-box">
							<div className="part">
								<p>담당업무</p>
								<ul>
									<li>Web, Mobile 디자인</li>
									<li>UX·UI 디자인</li>
									<li>Figma, XD, Sketch를 이용한 디자인</li>
									<li>프로젝트 유지 관리</li>
								</ul>
							</div>
							<div className="part">
								<p>핵심역량</p>
								<ul>
									<li>성실성, 협동심, 꼼꼼함, 적응성</li>
								</ul>
							</div>
							<div className="part">
								<p>자격요건</p>
								<ul>
									<li>학력 : 초대졸이상</li>
									<li>경력 : 경력1년↑(주임~대리급)</li>
									<li>경력 : 경력5년↑(과장~차장급)</li>
								</ul>
							</div>
						</div>
					</dd>
				</dl>
				<dl>
					<dt className="accordion">퍼블리셔</dt>
					<dd className="panel">
						<div className="part-box">
							<div className="part">
								<p>담당업무</p>
								<ul>
									<li>HTML 코딩 및 웹퍼블리싱</li>
									<li>Javascript, jQuery 코딩</li>
									<li>프레임워크 (VUE, REACT)를 통한 웹사이트 구축</li>
									<li>프로젝트 유지 관리</li>
								</ul>
							</div>
							<div className="part">
								<p>핵심역량</p>
								<ul>
									<li>성실성, 협동심, 꼼꼼함, 적응성</li>
								</ul>
							</div>
							<div className="part">
								<p>자격요건</p>
								<ul>
									<li>학력 : 초대졸이상</li>
									<li>경력 : 경력6년↑(과장~차장급)</li>
								</ul>
							</div>
						</div>
					</dd>
				</dl>
			</div>

			<div className="btn-wrap" data-aos="fade-up" data-aos-duration="1000">
				{/* <!-- <a href="https://www.jobkorea.co.kr/net/Recruit/Co_Read/C/dndmobile?Oem_Code=C1" target="_blank" name="잡코리아에서 지원하기" className="type1">잡코리아에서 지원하기</a> --> */}
				<Link to="mailto:dndmobile@dndmobile.co.kr" target="_blank" name="이메일 지원하기" className="type4 type4-hover">이메일 지원하기</Link>
			</div>
		</section>
  )
}

export default Recruit;