import NavBar from "../components/NavBar";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function Home() {
  useLayoutEffect(() => {
    // gsap.config({ trialWarn: false });

    const myText = new SplitType("#intro2", { types: "chars" });

    gsap.fromTo(
      myText.chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.05,
        // ease: 1,
      }
    );
  }, []);

  return (
    <>
      <body>
        <div className="header">
          <div className="nav">
            <NavBar />
          </div>
        </div>
        <div className="content">
          <div className="intro ">
            <div className="border-4 rounded-lg border-black p-6 bg-base-100 content-center">
              <div className="text-center">
                <div id="intro2">
                  Hi There!
                  <br />
                  I'm Prathik and this is my personal webpage.
                  <br />
                  You can find my projects and more here.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </body>
    </>
  );
}

export default Home;
