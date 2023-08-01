import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Lnb = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('/');

  useEffect(()=>{
    // console.log('activeMenu : ', activeMenu);
    setActiveMenu(location.pathname);
  },[activeMenu, location]);

  return (
    <ul className="lnb">
      <li className={activeMenu === '/' ? 'active' : ''}>
        <Link to="/">MAIN</Link>
      </li>
      <li className={activeMenu === '/project' ? 'active' : ''}>
        <Link to="/project">PROJECTS</Link>
      </li>
      <li className={activeMenu === '/about' ? 'active' : ''}>
        <Link to="/about">ABOUT US</Link>
      </li>
      <li className={activeMenu === '/about/sample' ? 'active' : ''}>
        <Link to="/about/sample">ABOUT Sample</Link>
      </li>
      <li className={activeMenu === '/recruit' ? 'active' : ''}>
        <Link to="/recruit">RECRUIT</Link>
      </li>
      <li className={activeMenu === '/contact' ? 'active' : ''}>
        <Link to="/contact">CONTACT</Link>
      </li>
  </ul>
  )
}

export default Lnb;