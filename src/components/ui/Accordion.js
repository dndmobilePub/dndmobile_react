import { motion } from "framer-motion";
import { useRef } from "react";

const variants = {
  initialOpen: { display: "block", height: "auto" },
  initial: { display: "block", height: 0 },
  open: { height: "auto" },
  closed: { height: 0 },
};

const Accordion = ({
  onclick,
  visible,
  id,
  type = "project",
  title,
  list0,
  list1,
  list2,
  list3,
  isOpen = false,
}) => {
  const accordionRef = useRef(null);
  let projectList, workList, coreList, qualList;
  if (type === "project") {
    projectList = list0.map((item) => (
      <li
        key={item.title}
        className={`${item.ing ? "ing" : ""}${item.wa ? " wa" : ""}`}
      >
        <p>
          {item.title} {item.ing && <span>진행중</span>}
        </p>
        {item.wa && (
          <>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ico-wa"
            >
              <rect width="20" height="20" rx="10" fill="#D22127" />
              <path
                d="M13.6395 6.59774L10.8254 11.6627L9.86461 5.8726L8.81972 5.67306L6.01062 10.7119L5.06189 4.95229L3.80762 4.7113L5.18311 12.6169L6.19695 12.8121L8.99704 7.85826L9.98383 13.5383L11.0187 13.7367L13.941 8.57467L14.4219 11.3193L13.5233 11.147L12.849 12.3388L14.6443 12.6834L14.9779 14.4968L16.159 14.7236L14.8727 6.83436L13.6395 6.59774Z"
                fill="white"
              />
            </svg>
            <div className="pc-ico-wa">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="26" rx="13" fill="#D22127" />
                <path
                  d="M17.7199 8.57638L14.0615 15.1609L12.8126 7.63371L11.4542 7.3743L7.80238 13.9248L6.56904 6.4373L4.93848 6.12402L6.72662 16.4013L8.04462 16.655L11.6847 10.2151L12.9676 17.5991L14.3129 17.8571L18.1119 11.1464L18.737 14.7144L17.5688 14.4904L16.6923 16.0398L19.0262 16.4877L19.4598 18.8451L20.9953 19.14L19.3231 8.88399L17.7199 8.57638Z"
                  fill="white"
                />
              </svg>
              <p>
                <strong>WEB AWARD KOREA</strong>
              </p>
            </div>
          </>
        )}
      </li>
    ));
  } else {
    workList = list1.map((item) => <li key={item}>{item}</li>);
    coreList = list2.map((item) => <li key={item}>{item}</li>);
    qualList = list3.map((item) => <li key={item}>{item}</li>);
  }
  return (
    <dl>
      <dt
        className={`accordion ${
          visible === id
            ? visible === id && isOpen
              ? ""
              : "active"
            : isOpen
            ? "active"
            : ""
        }`}
        onClick={() => {
          onclick && onclick();
          setTimeout(() => {
            let topOfElement =
              accordionRef.current?.offsetTop -
              document.querySelector("header").clientHeight;
            window.scroll({ top: topOfElement, behavior: "smooth" });
          }, 300);
        }}
        ref={accordionRef}
      >
        {title} {projectList && <sup>({projectList.length})</sup>}
      </dt>
      <motion.dd
        className="panel"
        initial={isOpen ? "initialOpen" : "initial"}
        animate={
          visible === id
            ? visible === id && isOpen
              ? "closed"
              : "open"
            : isOpen
            ? "open"
            : "closed"
        }
        variants={variants}
        transition={{ ease: "linear", duration: 0.3 }}
      >
        {type === "project" ? (
          <ul>{projectList}</ul>
        ) : (
          <div className="part-box">
            <div className="part">
              <p>담당업무</p>
              <ul>{workList}</ul>
            </div>
            <div className="part">
              <p>핵심역량</p>
              <ul>{coreList}</ul>
            </div>
            <div className="part">
              <p>자격요건</p>
              <ul>{qualList}</ul>
            </div>
          </div>
        )}
      </motion.dd>
    </dl>
  );
};

export default Accordion;
