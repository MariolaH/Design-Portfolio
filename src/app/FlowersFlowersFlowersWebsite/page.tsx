"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import LinkCard from "../components/linkCard";
import Footer from "../components/footer";

export default function FlowersFlowersFlowersWebsite() {
  return (
    <div>
      <section className="container text-center py-5">
      <h1 className="headerFont mainHeader mb-5 mt-5">Flowers Flowers Flowers Website</h1>
      <div className="aroundText p-4 d-block shadow text-decoration-none">
        <h5 className="mb-5 caseStudy">
        In this case study, I designed a floral catalog website for a florist.
        </h5>
        <div className="book">
<p>The goal was to create a digital platform that:</p>
<p><i className="bi bi-flower3 text-yellow-500"></i> Showcases a variety of floral arrangements and services</p>
<p><i className="bi bi-flower3 text-yellow-500"></i> Provides an intuitive catalog for easy browsing</p>
<p><i className="bi bi-flower3 text-yellow-500"></i> Enables seamless customer inquiries and order placements</p>
<p>Role in the Project: Lead UX/UI Designer</p>
      </div></div>
        <div className="row justify-content-center mt-5">
  <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
    <div className="around p-4 d-block shadow text-decoration-none">
      <a
        href="https://docs.google.com/presentation/d/e/2PACX-1vQxDZK_2-fSdpQ4_jTZp7Dn1YUB-VS0ZrzNranteznP__tqwoOtuWzq6A8Y86HRgCeAzZzbFRvBq6Ut/pub?start=true&loop=true&delayms=30000"
        target="_blank"
      >
        <img src="/flowers.png" className="responsive-image-flower" />
      </a>
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
            <LinkCard
              href="/FlowersFlowersFlowersWebsite/prototype"
              imgSrc="/prototypeLogo.png"
              text="Prototype"
            />
            {/* <LinkCard
              href="/MuseumWebsite/test"
              imgSrc="/DesignProcess/Test.png"
              text="Test"
            /> */}
             <LinkCard
              href="/FlowersFlowersFlowersWebsite/HiFi"
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
