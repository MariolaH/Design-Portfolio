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
        <h1 className="headerFont mainHeader mb-5 mt-5">Die Hard Anglers</h1>
        <div className="aroundText p-4 d-block shadow text-decoration-none">
        <h5 className="mb-4 caseStudy">
        In this case study, I designed the user interface for the Die Hard Anglers app.
        </h5>
        <div className="book">
        <p>The goal was to create a seamless platform that:</p>
        <p><i className="bi bi-droplet text-blue-700 pr-2"></i> Offers an intuitive and user-friendly experience</p>
        <p><i className="bi bi-droplet text-blue-700 pr-2"></i> Enhances engagement through visually appealing design</p>
        <p><i className="bi bi-droplet text-blue-700 pr-2"></i> Simplifies navigation to meet the needs of both novice and experienced anglers</p>
        <p>Role in the Project: Lead UX/UI Designer</p></div></div>
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
          <div className="row justify-content-center btn-round image-container">
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
