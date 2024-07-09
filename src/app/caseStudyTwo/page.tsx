"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import LinkCard from "../components/linkCard";

export default function caseStudyTwo() {
  return (
    <div>
      <section className="container text-center py-5">
        <h2 className="headerFont mb-5 mt-5">Flower Catalogue App</h2>
        <p className="mb-5 mt-5">
        PROMPT: Design a flower catalogue app for a florist.
        </p>
        {/* <div className="d-flex justify-content-center mt-5">
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
              imgSrc="/DesignProcess/Design.png"
              text="Prototype"
            />
            <LinkCard
              href="/caseStudyThree/test"
              imgSrc="/DesignProcess/Test.png"
              text="Test"
            />
          </div>
        </div> */}
      </section>
      <h4 className="container text-center justify-content-center">Product Development Lifecycle Documentation </h4>
      <h4 className="container text-center justify-content-center">Coming Soon... </h4>
    </div>
  );
}
