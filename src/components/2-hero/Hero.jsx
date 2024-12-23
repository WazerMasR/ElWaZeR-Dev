import Lottie from "lottie-react";
import responsiveDesignAnimation from "../../animation/Animation responsive.json";
import "./hero.css";
import { useRef } from "react";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex" id="about">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me.png" alt="" className="avatar" />
          <div className="icon-verified" />
        </div>

        <h1 className="title">
          <span>Eslam Hassan</span>
        </h1>

        <h2 className="txt">Front-End Developer</h2>
        <p className="sub-title">
          I&apos;m Eslam Hassan, a Front-End Developer skilled in creating
          interactive, user-friendly interfaces using HTML, CSS, JavaScript, and
          React. Passionate about improving user experiences and ensuring
          responsive designs, while staying current with the latest trends in
          programming.
        </p>
        <div className="all-icons flex">
          <a
            className="icon icon-facebook2"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100022548409876"
          />
          <a
            className="icon icon-whatsapp"
            target="_blank"
            href="https://wa.me/201019271685"
          />
          <a
            className="icon icon-github"
            target="_blank"
            href="https://github.com/WazerMasR"
          />
          <a
            className="icon icon-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/eslam-hassan-5b0905256"
          />
        </div>
      </div>

      <section className="right-section animation">
        <Lottie
          style={{ width: "85%" }}
          lottieRef={lottieRef}
          className="responsiveDesignAnimation"
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.9);
          }}
          animationData={responsiveDesignAnimation}
        />
      </section>
    </section>
  );
};

export default Hero;
