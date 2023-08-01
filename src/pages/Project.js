import $ from 'jquery';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Project = () => {
	const swiperRef = useRef(null)

	function rotateSlide(index) {
		var slides = document.querySelectorAll('.project-swiper .swiper-slide');

		for (var i = 0; i < slides.length; i++) {
			var slide = slides[i];
			if (i === index) {
				slide.querySelector('.img').style.transform = "rotate(45deg)";
				slide.querySelector('img').style.transform = "rotatd(265deg)";
			} else {
				slide.querySelector('.img').style.transform = "";
			}
		}
	}

	useEffect(()=>{
		/**
		 * ==============================+
		 * 아코디언
		 * ==============================+
		 */
		$('.accordion').on('click', function (e) {
			e.preventDefault()
	
			const $siblings = $('.accordion')
	
			$siblings.next('.panel').slideUp()
			$siblings.removeClass('active')
	
			const $this = $(this)
			const $parent = $this.parent()
			const $nextToggleContents = $this.next('.panel')
	
			if ($this.next('.panel').is(':hidden')) {
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
				$this.removeClass('active')
				$nextToggleContents.slideUp();
			}
		})

		/**
		 * ==============================+
		 * 탭
		 * ==============================+
		 */
		$(".tab-top > ul > li").on('click',function() {
			var tabIdx = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".tab-detail").eq(tabIdx).addClass("on").siblings().removeClass("on");
			$(".tab-detail").fadeOut(0);
			$(".tab-detail").eq(tabIdx).fadeIn(600);
		});

		function tabScollHorizen() {
			if (tabScollHorizen.read) {
				return;
			}
			tabScollHorizen = this.scrollWidth - (Math.floor(this.scrollLeft)) === this.clientWidth;
			if(tabScollHorizen === true ){
					$('.bg.hide-pc').css('display','none');
					$('.tab-top ul').css('justify-content','');
			}else{
					$('.bg.hide-pc').css('display','block');
					$('.tab-top ul').css('justify-content','flex-start');
			}
		}

		if($(".tab-top ul").length > 0) {
			var tabList = document.querySelector(".tab-top ul");
			tabList.onscroll = tabScollHorizen;
		}		
	},[])
  return (
    <section className="project-wrap">
			<div className="project-box">
				<div className="title-wrap" data-aos="fade-up" data-aos-duration="1000">
					<p>Our Experience</p>
					<h2>고객의 생각을 <br className="hide-pc"/><strong>디자인으로 실현</strong>합니다</h2>
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
						className='project-swiper'
						modules={[Autoplay]}
						breakpoints={{
							768: {
								slidesPerView: 6.1,
								spaceBetween: 74,
								loop: true,
								loopedSlides: 1,
								speed: 1000,
								autoplay: {
									delay: 3500,
									disableOnInteraction: false,
								}
							}
						}}
						onInit={(e)=>{
							const {activeIndex} = e;
							rotateSlide(activeIndex);
						}}
						onSlideChange={(e)=>{
							const {activeIndex} = e;
							rotateSlide(activeIndex);
						}}
						onSlideChangeTransitionStart={(e)=>{
							const {activeIndex ,realIndex, previousIndex, slides} = e;

							console.log(e, slides);
							// 이전 활성화된 슬라이드의 이미지 변경
							var prevSlide = slides[previousIndex];
							var prevImageElement = prevSlide.querySelector('img');
		
							if (prevImageElement) {
								var imageUrl = prevImageElement.src;
								var pngUrl = imageUrl.replace('.gif', '.png');
								prevImageElement.src = pngUrl;
							}
			
							// 활성화된 슬라이드의 이미지 변경
							var activeSlide = slides[activeIndex];
							var activeImageElement = activeSlide.querySelector('img');
		
							if (activeImageElement) {
								console.log(activeIndex, realIndex)
								if(realIndex === 1 || realIndex === 4 || realIndex === 5 || realIndex === 6) {
									var imageUrl = activeImageElement.src;
									var gifUrl = imageUrl.replace('.png', '.gif');
									activeImageElement.src = gifUrl;
								}
							}
						}}
					>
						<SwiperSlide className="box-wrap bg-sc mask" data-aos-duration="1000">
							<p className="img"><img src="/assets/images/img_pj_sc_thumb.png" alt=""/></p>
							<div className="hover-box">
								<div className="box">
									<p>SC 제일은행<br/><strong>모바일 기업뱅킹</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="box-wrap bg-cj mask" data-aos-duration="1000">
							<p className="img"><img src="/assets/images/img_pj_cj_thumb.png" alt=""/></p>
							<div className="hover-box">
								<div className="box">
									<p>CJ대한통운<br/><strong>차세대 택배시스템</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="box-wrap bg-sc02 mask" data-aos-duration="1000">
							<p className="img"><img src="/assets/images/img_pj_sc02_thumb.png" alt=""/></p>
							<div className="hover-box">
								<div className="box">
									<p>SC제일은행<br/><strong>고령자 편한뱅킹</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="box-wrap bg-kb mask"  data-aos-duration="1000">
							<p className="img"><img src="/assets/images/img_pj_kb_thumb.png" alt=""/></p>
							<div className="hover-box">
								<div className="box">
									<p>KB국민은행<br/><strong>비대면 마케팅</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="box-wrap box-wrap bg-ha" data-aos-duration="1000">
							<p className="img">
								<img src="/assets/images/img_pj_ha_thumb.png" alt=""/>
							</p>
							<div className="hover-box">
								<div className="box">
									<p>하나카드<br/><strong>하나머니 고도화</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="box-wrap bg-wo mask" data-aos-duration="1000">
							<p className="img"><img src="/assets/images/img_pj_wo_thumb.png" alt=""/></p>
							<div className="hover-box">
								<div className="box">
									<p>우리은행 사설인증<br/><strong>우리WON인증</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="box-wrap bg-wo02 mask" data-aos-duration="1000">
							<p className="img"><img src="/assets/images/img_pj_wo02_thumb.png" alt=""/></p>
							<div className="hover-box">
								<div className="box">
									<p>우리은행<br/><strong>마이데이터</strong></p>
									<button type="button">GO</button>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
				<div className="project-box">
					<div className="tab-top">
						<ul>
							<li>
								<p>2023</p>
							</li>
							<li className="on">
								<p>2022</p>
							</li>
							<li>
								<p>2021</p>
							</li>
							<li>
								<p>2020</p>
							</li>
							<li>
								<p>2019</p>
							</li>
						</ul>
					<div className="bg hide-pc" style={{display: 'none'}}></div>
				</div>
				<div className="tab-detail tab-2023">
					<div className="accordion-wrap">
						<dl className="">
							<dt className="accordion active">진행중인 프로젝트<sup>(16)</sup></dt>
							<dd className="panel" style={{display: 'block'}}>
								<ul>
									<li>
										<p>하나캐피탈 디지털채널 운영</p>
									</li>
									<li>
										<p>하나은행 마케팅플랫폼 및 데이터 허브</p>
									</li>
									<li>
										<p>롯데제과 SFA영업지원 시스템</p>
									</li>
									<li>
										<p>하나카드 마이데이터 2차</p>
									</li>
									<li>
										<p>원더카드 서비스 마켓 및 카드신청 개발</p>
									</li>
									<li>
										<p>하나머니 App고도화(요건수립)</p></li>
									<li>
										<p>SC제일은행 마이데이터 2차</p>
									</li>
									<li>
										<p>SC제일은행 고령화를 위한 친화적 모바일 App</p>
									</li>
									<li>
										<p>KB국민은행 e-Capital Market 운영</p>
									</li>
									<li>
										<p>부산은행 전자증명서 수취시스템 구축</p>
									</li>
									<li>
										<p>우리은행 마이데이터 운영</p>
									</li>
									<li>
										<p>미래에셋생명 영업지원시스템 재구축</p>
									</li>
									<li>
										<p>라이나생명 대고객 디지털채널 재구축</p>
									</li>
									<li>
										<p>SK m&service 하이닉스 LMS시스템(SKHU) 구축</p>
									</li>
									<li>
										<p>주택도시보증공사 자가진단 안신전세 App 구축</p>
									</li>
									<li>
										<p>CJ대한통운 차세대 App서비스 구축</p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div className="tab-detail tab-2022 on">
					<div className="accordion-wrap">
						<dl>
							<dt className="accordion ">하나카드<sup>(3)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>마이데이터 2차<span>진행중</span></p>
									</li>
									<li className="ing">
										<p>원더카드 서비스 마켓 및 카드신청 개발<span>진행중</span></p>
									</li>
									<li className="ing">
										<p>하나머니 APP고도화(요건수립)<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SC제일은행<sup>(5)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>마이데이터 2차<span>진행중</span></p>
									</li>
									<li className="ing">
										<p>고령화를 위한 친화적 모바일APP<span>진행중</span></p>
									</li>
									<li>
										<p>현대카드 전략적 파트너쉽</p>
									</li>
									<li className="wa">
										<p>온라인 펀드 미스터리 쇼핑</p>
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico-wa">
											<rect width="20" height="20" rx="10" fill="#D22127"/>
											<path d="M13.6395 6.59774L10.8254 11.6627L9.86461 5.8726L8.81972 5.67306L6.01062 10.7119L5.06189 4.95229L3.80762 4.7113L5.18311 12.6169L6.19695 12.8121L8.99704 7.85826L9.98383 13.5383L11.0187 13.7367L13.941 8.57467L14.4219 11.3193L13.5233 11.147L12.849 12.3388L14.6443 12.6834L14.9779 14.4968L16.159 14.7236L14.8727 6.83436L13.6395 6.59774Z" fill="white"/>
										</svg>					
										<div className="pc-ico-wa">
											<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="26" height="26" rx="13" fill="#D22127" />
												<path
													d="M17.7199 8.57638L14.0615 15.1609L12.8126 7.63371L11.4542 7.3743L7.80238 13.9248L6.56904 6.4373L4.93848 6.12402L6.72662 16.4013L8.04462 16.655L11.6847 10.2151L12.9676 17.5991L14.3129 17.8571L18.1119 11.1464L18.737 14.7144L17.5688 14.4904L16.6923 16.0398L19.0262 16.4877L19.4598 18.8451L20.9953 19.14L19.3231 8.88399L17.7199 8.57638Z"
													fill="white" />
											</svg>
											{/* <!-- <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="60" height="60" rx="30" fill="#D22127"/>
												<path d="M40.9018 19.7924L32.4595 34.9874L29.5772 17.617L26.4425 17.0183L18.0152 32.1349L15.1691 14.856L11.4062 14.1331L15.5327 37.8498L18.5743 38.4353L26.9745 23.574L29.9349 40.614L33.0395 41.2094L41.8064 25.7232L43.2491 33.957L40.5532 33.4401L38.5305 37.0156L43.9163 38.0493L44.9171 43.4894L48.4605 44.1699L44.6015 20.5022L40.9018 19.7924Z" fill="white"/>
											</svg> --> */}
											<p>
												<strong>WEB AWARD KOREA</strong>
												{/* <!-- <span>웹표준 이노베이션 대상</span> --> */}
											</p>
										</div>						
									</li>
									<li>
										<p>공공데이터</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">KB국민은행<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>비대면 마케팅 TOOL 구축</p>
									</li>
									<li className="ing">
										<p>e-Capital Market 운영<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">부산은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>전자증명서 수취시스템 구축<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">우리은행<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>마이데이터 운영<span>진행중</span></p>
									</li>
									<li>
										<p>사설인증 구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">미래에셋생명<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>운영대응</p>
									</li>
									<li className="ing">
										<p>영업지원시스템 재구축<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">NH농협은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>BI포탈 구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">현대캐피탈<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>APP오픈대응</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">교보생명<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>모바일 청약시스템 구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">BNP생명보험<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>모바일 해피콜</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">라이나생명<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>대고객 디지털채널 재구축<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SK m&service<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>하이닉스 LMS시스템(SKHU) 구축<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">주택도시보증공사<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>자가진단 안심전세 APP 구축<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div className="tab-detail tab-2021">
					<div className="accordion-wrap">
						<dl>
							<dt className="accordion ">KB국민은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>e-Capital Market 구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">CJ대한통운<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li className="ing">
										<p>차세대 APP서비스 구축<span>진행중</span></p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">신한은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>SOL 디지털 채널 개발(신탁 ETF / ISA)</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">BNP파리바카디프<sup>(3)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>손해보험 카카오클레임</p>
									</li>
									<li>
										<p>생명보험 UX·UI 운영대응</p>
									</li>
									<li>
										<p>생명보험 메인 홈페이지 재구축(Liferay Replacemant)</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SC제일은행<sup>(9)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>마이데이터 1차</p>
									</li>
									<li className="webaward">
										<p>비지니스뱅킹 웹어워드대상</p>
									</li>
									<li>
										<p>파워콜</p>
									</li>
									<li>
										<p>금융소비자법</p>
									</li>
									<li>
										<p>자본시장과 그융투자업에 관한법률대응</p>
									</li>
									<li>
										<p>공공데이터</p>
									</li>
									<li>
										<p>증권업무개발BIB</p>
									</li>
									<li>
										<p>데일리론 모바일대응 및 고도화</p>
									</li>
									<li>
										<p>그룹브랜딩 변경대응</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">우리은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>DID인증 및 CBDC 파일럿구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">부산은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>PPR 화면디자인</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">하나카드<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>마이데이터 1차</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">제주은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>인터넷뱅킹 재구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">서민금융진흥원<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>영문사이트 구축</p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div className="tab-detail tab-2020">
					<div className="accordion-wrap">
						<dl>
							<dt className="accordion ">한국투자신탁<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>전사 정보관리체계 혁신구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SC제일은행<sup>(7)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>여신모바일 통합상담</p>
									</li>
									<li>
										<p>WM(모바일APP 자산관리 서비스)</p>
									</li>
									<li>
										<p>모바일 제신고</p>
									</li>
									<li>
										<p>인증고도화</p>
									</li>
									<li>
										<p>모바일 금융상품몰</p>
									</li>
									<li>
										<p>새희망홀씨론</p>
									</li>
									<li>
										<p>전세자금대출</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">우리은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>오픈뱅킹 시스템 채널확대</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">현대카드<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>블록체인 기반 DID 플랫폼구축 1차</p>
									</li>
									<li>
										<p>블록체인 기반 DID 플랫폼구축 2차</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">BNP파리바카디프<sup>(5)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>손해보험 신한 TM서비스</p>
									</li>
									<li>
										<p>생명보험 GPI가입동의</p>
									</li>
									<li>
										<p>생명보험 바이오인증</p>
									</li>
									<li>
										<p>생명보험 모바일 GMS프로젝트</p>
									</li>
									<li>
										<p>생명보험 건강보험공단스크래핑</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SK m&service<sup>(7)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>베네피아 리뉴얼(차세대)</p>
									</li>
									<li>
										<p>영상보안서비스구축</p>
									</li>
									<li>
										<p>SKI_mySUNI분담금 정산시스템 구축</p>
									</li>
									<li>
										<p>베네피아 고도화 운영</p>
									</li>
									<li>
										<p>운영업무 대응(기획)</p>
									</li>
									<li>
										<p>운영 (디자인)</p>
									</li>
									<li>
										<p>제휴사 검색 API연동개발 2차</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">메리츠증권<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>MTS서비스 비대면계좌개설</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">한국예탁결제원<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>전자투표시스템구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">현대자동차<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>현대자동차 모바일보이스</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">현대카드<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>M포인트몰 고도화</p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div className="tab-detail tab-2019">
					<div className="accordion-wrap">
						<dl>
							<dt className="accordion ">현대카드<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>현대카드APP리뉴얼</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SK m&service<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>제휴사 검색 API연동개발 1차</p>
									</li>
									<li>
										<p>모바일학습 시스템</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">BNP파리바카디프<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>손해보험 SK TM서비스</p>
									</li>
									<li>
										<p>손해보험 EWI WEB GA 시스템구축</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">SC제일은행<sup>(2)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>연금신탁해지</p>
									</li>
									<li>
										<p>데일리론</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">퍼시스<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>스마트락커 서비스</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">산업통상자원부<sup>(3)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>광업등록사무소</p>
									</li>
									<li>
										<p>무역위원회</p>
									</li>
									<li>
										<p>전기위원회</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">우리은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>거래명세시스템</p>
									</li>
								</ul>
							</dd>
						</dl>
						<dl>
							<dt className="accordion ">경남은행<sup>(1)</sup></dt>
							<dd className="panel">
								<ul>
									<li>
										<p>창구전자문서(PPR) UX·UI</p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Project;