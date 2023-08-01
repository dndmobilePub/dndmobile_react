
import { Link } from "react-router-dom";
import MapComponent from "../components/common/Map";

const Contact = () => {
  return (
    <section className="contact-wrap">
			<div className="inner">
				<div className="title-wrap" data-aos="fade-up" data-aos-duration="1000">
					<p>Contact Our Company</p>
					<h2><strong>풍부한 경험과 전문성</strong>으로 <br className="hide-pc"/>보답합니다</h2>
				</div>
				<div className="map-wrap" data-aos="fade-up" data-aos-duration="1000">
					<MapComponent />
				</div>
				<div className="info-wrap" data-aos="fade-up" data-aos-duration="1000">
					<dl className="addr">
						<dt>Address</dt>
						<dd>서울시 마포구 월드컵북로2길 11 삼희빌딩 7F</dd>
					</dl>
					<dl className="tel">
						<dt>Office Line</dt>
						<dd>
							<dl>
								<dt className="title hide-mobile">Tel.</dt>
								<dt className="title hide-pc">T.</dt>
								<dd>+82 2 6446-2286</dd>
							</dl>
							<dl>
								<dt className="title hide-mobile">Fax.</dt>
								<dt className="title hide-pc">F.</dt>
								<dd>+82 2 6446-2284</dd>
							</dl>
						</dd>
					</dl>
					<dl className="email">
						<dt>E-mail</dt>
						<dd><Link to="mailto:dndmobile@dndmobile.co.kr" target="_blank">dndmobile@dndmobile.co.kr</Link></dd>
					</dl>
				</div>
      </div>
		</section>
  )
}

export default Contact;