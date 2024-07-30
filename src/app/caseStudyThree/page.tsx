"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import Icon from "../icons";
import LinkCard from "../components/linkCard";

export default function empathize() {
  return (
    <div>
      <section className="container text-center py-5">
        <h2 className="headerFont mainHeader mb-5 mt-5">
          {" "}
          Museum App & Website Case Study{" "}
        </h2>
        <p className=" mt-5">
          In this case study, I developed an application and responsive website
          for a public art museum.
        </p>
        <p>The goal was to create a digital platform that:</p>

 
            <p>Advertise Exhibitions and Events</p>
            <p>Provide Essential Information</p>
            <p>Enable patrons to schedule their visits</p>
   
            <p>
            Role in the Project: Lead UX / UI Designer
        </p>
        <div className="d-flex justify-content-center mt-5">
          <div className="row justify-content-center mt-5 btn-round image-container">
            <LinkCard
              href="/caseStudyThree/empathize"
              imgSrc="/DesignProcess/E.png"
              text="Empathize"
            />
            <LinkCard
              href="/caseStudyThree/define"
              imgSrc="/DesignProcess/D.png"
              text="Define"
            />
            <LinkCard
              href="/caseStudyThree/ideate"
              imgSrc="/DesignProcess/I.png"
              text="Ideate"
            />
            <LinkCard
              href="/caseStudyThree/prototype"
              imgSrc="/DesignProcess/Design2.png"
              text="Prototype"
            />
            <LinkCard
              href="/caseStudyThree/test"
              imgSrc="/DesignProcess/Test.png"
              text="Test"
            />
            <LinkCard
              href="/caseStudyThree/hiFi"
              imgSrc="/DesignProcess/Design2.png"
              text="Mock Ups"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
