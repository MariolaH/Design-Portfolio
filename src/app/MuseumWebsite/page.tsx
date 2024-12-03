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
        <h5 className=" mt-5 mb-4">
          In this case study, I developed an application and responsive website
          for a public art museum.
        </h5>
        <p>The goal was to create a digital platform that:</p>

 
            <p>Advertise Exhibitions and Events</p>
            <p>Provide Essential Information</p>
            <p>Enable patrons to schedule their visits</p>
   
            <p>
            Role in the Project: Lead UX / UI Designer
        </p>
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
