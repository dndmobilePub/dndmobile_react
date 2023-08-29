/* eslint-disable jsx-a11y/anchor-has-content */
export const Indicator = () => {
  return (
    <div className="main-indicator-wrap white">
			{/* <!-- DNDMOBILE --> */}
			<a href="#intro" className="indi-white active" id="intro-indi"></a>
			{/* <!-- SC제일은행 --> */}
			<a href="#sc_aged"></a>
			{/* <!-- SC제일은행 --> */}
			<a href="#two" className="indi-white"></a>
			{/* <!-- KB국민은행 --> */}
			<a href="#one"></a>
			{/* <!-- CJ대한통운 --> */}
			<a href="#three" className="cj-white"></a>
			{/* <!-- 우리은행 --> */}
			<a href="#five"></a>
			{/* <!-- 우리은행 --> */}
			<a href="#six"></a>
			{/* <!-- 우리은행 --> */}
			<a href="#four" className="indi-white"></a>
			<span className="current-circle"></span>
			<div className="num-box white">
				<span className="current">01</span>/<span>08</span>
			</div>
		</div>
  )
}

