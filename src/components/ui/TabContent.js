import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import {
  Project2019,
  Project2020,
  Project2021,
  Project2022,
  Project2023,
} from "../../data/Projects";
import { motion, useAnimate } from "framer-motion";

const TabContent = ({ year = 2022 }) => {
  const [scope, animate] = useAnimate();
  const [visible, setVisible] = useState(0);
  const list2023 = Project2023.map((item) => (
    <Accordion
      visible={visible}
      id={item.id}
      title={item.company}
      list0={item.list}
      onclick={() => setVisible(visible === item.id ? 0 : item.id)}
      key={item.id}
      isOpen={true}
    />
  ));
  const list2022 = Project2022.map((item) => (
    <Accordion
      visible={visible}
      id={item.id}
      title={item.company}
      list0={item.list}
      onclick={() => setVisible(visible === item.id ? 0 : item.id)}
      key={item.id}
    />
  ));
  const list2021 = Project2021.map((item) => (
    <Accordion
      visible={visible}
      id={item.id}
      title={item.company}
      list0={item.list}
      onclick={() => setVisible(visible === item.id ? 0 : item.id)}
      key={item.id}
    />
  ));
  const list2020 = Project2020.map((item) => (
    <Accordion
      visible={visible}
      id={item.id}
      title={item.company}
      list0={item.list}
      onclick={() => setVisible(visible === item.id ? 0 : item.id)}
      key={item.id}
    />
  ));
  const list2019 = Project2019.map((item) => (
    <Accordion
      visible={visible}
      id={item.id}
      title={item.company}
      list0={item.list}
      onclick={() => setVisible(visible === item.id ? 0 : item.id)}
      key={item.id}
    />
  ));

  useEffect(() => {
    if (year) {
      animate({ opacity: 0 });
      console.log("done");
    }
  }, [year, animate]);
  return (
    <motion.div
      className={`tab-detail tab-${year} ${year === 2023 ? "active":""} on`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.3 }}
      ref={scope}
    >
      <div className="accordion-wrap">
        {year === 2023 && list2023}
        {year === 2022 && list2022}
        {year === 2021 && list2021}
        {year === 2020 && list2020}
        {year === 2019 && list2019}
      </div>
    </motion.div>
  );
};

export default TabContent;
