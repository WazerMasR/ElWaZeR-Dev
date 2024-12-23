import { useState } from "react";
import "./main.css";
import { myProjects } from "./api.js";
import { AnimatePresence, motion } from "motion/react";

const btn = [
  {
    title: "HTML & CSS",
    categories: "css",
  },
  {
    title: "javaScript",
    categories: "js",
  },
  {
    title: "react & MUI",
    categories: "react",
  },
];

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex" id="project">
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        {btn.map((btn) => {
          return (
            <button
              key={btn.categories}
              onClick={() => {
                setCurrentActive(btn.categories);
                const newArr = myProjects.filter((item) => {
                  return btn.categories === item.category;
                });
                setArr(newArr);
              }}
              className={currentActive === btn.categories ? "active" : null}
            >
              {btn.title}
            </button>
          );
        })}
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{
                  duration: 1.6,
                  type: "spring",
                  damping: 8,
                  stiffness: 50,
                }}
                key={item.id}
                className="card"
              >
                <img width={266} src={item.projectImg} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">{item.projectDescription}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link" />
                      <div className="icon-github" />
                    </div>

                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
