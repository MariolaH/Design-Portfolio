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
        <h2 className="mb-5 mt-5">Museum App & Website </h2>
        <p className="mb-5 mt-5">
          PROMPT: Design an app and a responsive website for a public art museum
          to advertise exhibitions and events, provide museum information to
          patrons, and enable patrons to schedule visits.
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
          </div>
        </div>
      </section>
    </div>
  );
}
