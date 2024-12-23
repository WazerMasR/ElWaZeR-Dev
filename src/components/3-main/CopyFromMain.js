import { useState } from "react";
import "./main.css";
import { myProjects } from "./api.js";
import { AnimatePresence, motion } from "motion/react";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const smallFilter = item.category.find((itemTwo) => {
        return itemTwo === buttonCategory;
      });

      return smallFilter === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            handleClick("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
            const newArr = myProjects.filter((item) => {
              const smallFilter = item.category.find((itemTwo) => {
                return itemTwo === "js";
              });

              return smallFilter === "js";
            });
            setArr(newArr);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          js & bootstrap
        </button>

        <button
          onClick={() => {
            handleClick("react");
            const newArr = myProjects.filter((item) => {
              const smallFilter = item.category.find((itemTwo) => {
                return itemTwo === "react";
              });

              return smallFilter === "react";
            });
            setArr(newArr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.projectTitle}
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
