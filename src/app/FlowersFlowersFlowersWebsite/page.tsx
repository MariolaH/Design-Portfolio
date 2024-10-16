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
      <h2 className="headerFont mainHeader mb-5 mt-5">Flowers Flowers Flowers Website</h2>
        <p className="mb-5 mt-5">
          Design a flower catalogue website for a florist.
        </p>
        <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="around p-4 d-block shadow text-decoration-none">
                <div className="size">
                <a href="https://docs.google.com/presentation/d/e/2PACX-1vQxDZK_2-fSdpQ4_jTZp7Dn1YUB-VS0ZrzNranteznP__tqwoOtuWzq6A8Y86HRgCeAzZzbFRvBq6Ut/pub?start=true&loop=true&delayms=30000" target="_blank"> <img src="/flowers.png" /> </a>
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
            <LinkCard
              href="/FlowersFlowersFlowersWebsite/prototype"
              imgSrc="/DesignProcess/Design2.png"
              text="Prototype"
            />
            {/* <LinkCard
              href="/MuseumWebsite/test"
              imgSrc="/DesignProcess/Test.png"
              text="Test"
            /> */}
             <LinkCard
              href="/FlowersFlowersFlowersWebsite/HiFi"
              imgSrc="/DesignProcess/Design2.png"
              text="Mock Ups"
            />
          </div>
        </div>
        </section>
        < Footer />
    </div>
  );
}
