import { useState } from "react";

const AccordionMenu = (props) => {
  const [visible, setVisible] = useState(false);
  const projects = props.list;
  const projectList = projects.map((item) => 
    <li key={item.id}>
      {item.text} {item.active ===  true ? "진행중" : ""}
    </li>
  );

  return (
    <dl>
      <dt className={`accordion${visible ? ' active' : ''}`} onClick={()=>{setVisible(!visible)}}>{props.title}</dt>
      <dd className="panel" style={visible === true ? {display: "block"} : {display: "none"}}>
        <ul>
          {projectList}
        </ul>
      </dd>
    </dl>
  )
}

export default AccordionMenu;