"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import Icon from "../icons";
import LinkCard from "../components/linkCard";
import Footer from "../components/footer";

export default function empathize() {
  return (
    <div>
      <section className="container text-center py-5">
        <h1 className="headerFont mainHeader mb-5 mt-5">
          {" "}
          Museum App & Website Case Study{" "}
        </h1>
        <div className="aroundText p-4 d-block shadow text-decoration-none">
        <h5 className="mb-4 caseStudy">
          In this case study, I designed an app and responsive website
          for a public art museum.
        </h5>
        <div className="book">
        <p>The goal was to create a digital platform that:</p>

 
            <p><i className="bi bi-image text-purple-700"></i> Advertise Exhibitions and Events</p>
            <p><i className="bi bi-image text-purple-700"></i>  Provide Essential Information</p>
            <p><i className="bi bi-image text-purple-700"></i>  Enable patrons to schedule their visits</p>
   
            <p>
            Role in the Project: Lead UX / UI Designer
        </p></div></div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="row justify-content-center mt-5 btn-round image-container">
            <LinkCard
              href="/MuseumWebsite/empathize"
              imgSrc="/Empathize .png"
              text="Empathize"
            />
            <LinkCard
              href="/MuseumWebsite/define"
              imgSrc="/Define.png"
              text="Define"
            />
            <LinkCard
              href="/MuseumWebsite/ideate"
              imgSrc="/Ideate.png"
              text="Ideate"
            />
            <LinkCard
              href="/MuseumWebsite/prototype"
              imgSrc="/prototypeLogo.png"
              text="Prototype"
            />
            <LinkCard
              href="/MuseumWebsite/test"
              imgSrc="/Test.png"
              text="Test"
            />
            <LinkCard
              href="/MuseumWebsite/hiFi"
              imgSrc="/mockup.png"
              text="Mock Ups"
            />
            
          </div>
        </div>
      </section>
      < Footer />
    </div>
  );
}
