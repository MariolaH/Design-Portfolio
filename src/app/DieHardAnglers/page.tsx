"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import Icon from "../icons";
import LinkCard from "../components/linkCard";
import Footer from "../components/footer";

export default function DieHardAnglers() {
  return (
    <div>
      <section className="container text-center py-5">
        <h2 className="headerFont mainHeader mb-5 mt-5">Die Hard Anglers</h2>
        <p className=" mt-5">
          I designed and developed the user interface for the Die Hard Anglers
          app, ensuring it offered a seamless and intuitive experience for
          users. <br /><br /> My work included conducting a comprehensive competitive audit
          of similar social platforms, allowing me to identify best practices
          and areas for improvement in terms of functionality and user
          experience. Leveraging this research, I crafted a visually appealing,
          user-friendly UI that enhances engagement, and simplifies navigation. <br />The
          design emphasizes clarity, ease of use, and accessibility to meet the
          needs of both novice and experienced anglers.
        </p>
        <div className="row justify-content-center mt-5">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="around p-4 d-block shadow text-decoration-none">
              <div className="justify-content-center">
                <a
                  href="https://www.diehardanglers.com/"
                  target="_blank"
                >
                  <img
                    className="justify-content-center"
                    src="/DieHardAnglers/DieHardAnglersMockUp.jpg"
                    alt="Die Hard Anglers"
                    width={150}
                    height={250}
                  />{" "}
                </a>
                {/* <img src="/flowers.png" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="row justify-content-center mt-5 btn-round image-container">
            {/* <LinkCard
              href="/MuseumWebsite/empathize"
              imgSrc="/DesignProcess/E.png"
              text="Empathize"
            />
            <LinkCard
              href="/MuseumWebsite/define"
              imgSrc="/DesignProcess/D.png"
              text="Define"
            />
            <LinkCard
              href="/MuseumWebsite/ideate"
              imgSrc="/DesignProcess/I.png"
              text="Ideate"
            /> */}
            {/* <LinkCard
              href="/DieHardAnglers/Prototype"
              imgSrc="/prototypeLogo.png"
              text="Prototype"
            /> */}
            {/* <LinkCard
              href="/MuseumWebsite/test"
              imgSrc="/DesignProcess/Test.png"
              text="Test"
            /> */}
            <LinkCard
              href="/DieHardAnglers/HiFi"
              imgSrc="/prototypeLogo.png"
              text="Prototype"
            />
          </div>
        </div>
      </section>
      < Footer />
    </div>
  );
}
