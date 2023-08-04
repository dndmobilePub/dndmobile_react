import { useState } from "react";
import $ from 'jquery';
const TabMenu = () => {
  const menuList = [2023, 2022, 2021, 2020, 2019];
  const [activeMenu, setActiveMenu] = useState(2022);
  const menus = menuList.map((item, index) => 
    <li key={index} onClick={
      ()=>{
        setActiveMenu(item);
        $(".tab-detail").fadeOut(0);
			  $(".tab-detail").eq(index).fadeIn(600);
      }

    } className={activeMenu === item ? 'on' : ''} >
      <p>{item}</p>
    </li>
  );

  return (
    <div className="tab-top">
      <ul>
        {menus}
      </ul>
      <div className="bg hide-pc" style={{display: 'none'}}></div>
    </div>
  )
}

export default TabMenu;