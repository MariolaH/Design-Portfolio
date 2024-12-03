"use client";

import SkillsSection from "./components/SkillsSection";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Typewriter from "typewriter-effect";

const skillsData = [
  { src: "/skills/Audit.svg", alt: "Competitive Audits", tooltip: "Competitive Audits" },
  { src: "/skills/paperwireframe.svg", alt: "Paper Wireframing", tooltip: "Paper Wireframing" },
  { src: "/skills/DigitalWireframes.svg", alt: "Digital Wireframing", tooltip: "Digital Wireframing" },
  { src: "/skills/Apple.svg", alt: "Apple", tooltip: "Apple" },
  { src: "/skills/Bootstrap.svg", alt: "Bootstrap", tooltip: "Bootstrap" },
  { src: "/skills/Canva.svg", alt: "Canva", tooltip: "Canva" },
  { src: "/skills/CSS3.svg", alt: "CSS3", tooltip: "CSS3" },
  { src: "/skills/Firebase.svg", alt: "Firebase", tooltip: "Firebase" },
  { src: "/skills/Docker.svg", alt: "Docker", tooltip: "Docker" },
  { src: "/skills/Git.svg", alt: "Git", tooltip: "Git" },
  { src: "/skills/Figma.svg", alt: "Figma", tooltip: "Figma" },
  { src: "/skills/HTML5.svg", alt: "HTML5", tooltip: "HTML5" },
  { src: "/skills/JavaScript.svg", alt: "JavaScript", tooltip: "JavaScript" },
  { src: "/skills/JSON.svg", alt: "JSON", tooltip: "JSON" },
  { src: "/skills/MongoDB.svg", alt: "MongoDB", tooltip: "MongoDB" },
  { src: "/skills/next.svg", alt: "Next.js", tooltip: "NEXT.js" },
  { src: "/skills/Python.svg", alt: "Python", tooltip: "Python" },
  { src: "/skills/PostgresSQL.svg", alt: "PostgresSQL", tooltip: "PostgresSQL" },
  { src: "/skills/React.svg", alt: "React", tooltip: "React" },
  { src: "/skills/Realm.svg", alt: "Realm", tooltip: "Realm" },
  { src: "/skills/SQLite.svg", alt: "SQLite", tooltip: "SQLite" },
  { src: "/skills/vercel.svg", alt: "Vercel", tooltip: "Vercel" },
  { src: "/skills/VisualStudioCode.svg", alt: "Visual Studio Code", tooltip: "Visual Studio Code" },
  { src: "/skills/Xcode.svg", alt: "Xcode", tooltip: "Xcode" },
];

interface Certificate {
  src: string;
}

const certificates: Certificate[] = [
  { src: "/Certificates/FoundationsofUserExperience(UX)Design.png" },
  { src: "/Certificates/StarttheUXDesignProcessEmpathizeDefineandIdeate.png" },
  { src: "/Certificates/BuildWireframesandLow-FidelityPrototypes.png" },
  { src: "/Certificates/ConductUXResearchandTestEarlyConcepts.png" },
  { src: "/Certificates/CreateHigh-FidelityDesignsandPrototypesinFigma.png" },
  { src: "/Certificates/BuildDynamicUserInterfaces(UI)forWebsites.png" },
  {
    src: "/Certificates/DesignaUserExperienceforSocialGood&PrepareforJobs.png",
  },
  { src: "/Certificates/Google.png" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const header = document.querySelector(".homepageHeader") as HTMLElement;
      if (header) {
        const headerHeight = header.offsetHeight;
        const opacity = scrollTop === 0 ? 1 : Math.max(0, 1 - scrollTop / (headerHeight * 0.5));
        const fixedContent = document.querySelector(".fixed-content") as HTMLElement;
    
        if (fixedContent) {
          fixedContent.style.opacity = `${opacity}`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const enlargeImage = (certificate: Certificate) => {
    document.body.classList.add("modal-open");
    setSelectedImage(certificate);
  };

  const closeModal = () => {
    document.body.classList.remove("modal-open");
    setSelectedImage(null);
  };

  return (
    <div>
      <div>
        <section id="home">
          <header className=" text-center text-light py-5 homepageHeader parallax">
            <div className={`fixed-content ${scrolled ? "scrolled" : ""}`}>
              <h1 className="display-4 mainHeader animated">
                Hi, I&apos;m Mariola
              </h1>
              <div className="mainSubheader lead animated">
                <Typewriter
                  options={{
                    strings: ["UX / UI Designer and Software Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              {/* <p className="mainSubheader lead animated">
              UX / UI Designer and Software Developer
            </p> */}
            </div>
          </header>
        </section>
      </div>

      <section id="ux-ui-design" className="text-center py-5">
        <h2 className="headerFont mainHeader mb-4 p-4">UX / UI DESIGN</h2>
        <div className="row p-4 justify-content-center">
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/WisconsinBucketListBook"
              className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container"
            >
              <div className="mb-3 mt-4 image-container">
                <img
                  src="/wireframeBook.png"
                  alt="Wisconsin Bucket List Book"
                  className="img-fluid default-image hover-image"
                />
                <img
                  src="/WisconsinBucketListMockUP.png"
                  className="img-fluid"
                  alt="Wisconsin Bucket List Mockup"
                />
              </div>
              <p className="text-muted">The Wisconsin Bucket List</p>
            </Link>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/FlowersFlowersFlowersWebsite"
              className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container"
            >
              <div className="mb-3 mt-4 image-container">
                <img
                  src="/Flowerwireframe.png"
                  alt="Flowers Flowers Flowers Website"
                  className="img-fluid default-image hover-image"
                />
                <img src="/CaseStudy1.png" className="img-fluid" alt="Flowers Flowers Flowers Website" />
              </div>
              <p className="text-muted">Flower Catalogue Website & App</p>
            </Link>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/MuseumWebsite"
              className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container"
            >
              <div className="mb-3 mt-4 image-container">
                <img
                  src="/Musuem.png"
                  className="img-fluid default-image hover-image"
                  alt="Museum Website"
                />
                <img src="/MusuemMockup.png" className="img-fluid" alt="Musuem Mockup" />
              </div>
              <p className="text-muted">Museum Website & App</p>
            </Link>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/DieHardAnglers"
              className="btn btn-light p-4 d-block shadow text-decoration-none custom-hover equal-size image-hover-container"
            >
              <div className="mb-3">
                <img
                  src="/DieHardAnglers/DieHardAnglersMockUp.jpg"
                  className="img-fluid small-img"
                  alt="Die Hard Anglers"
                />
              </div>
              <p className="text-muted">Die Hard Anglers</p>
            </Link>
          </div>
        </div>
      </section>
      <div>
        <header className="text-center text-light py-5 homepageHeader2 parallax"></header>
      </div>

      <section id="certificates" className="text-center py-5">
        <h2 className="mb-4 section-heading mainHeader p-4 text-uppercase">
          UX Certificates
        </h2>
        <div className="row p-12 justify-content-center">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 skill-container"
            >
              <div
                className=" p-2 d-block shadow text-decoration-none"
                onClick={() => enlargeImage(certificate)}
              >
                <img
                  src={certificate.src}
                  alt={`Certificate ${index + 1}`}
                  className="img-fluid certificate-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div id="imageModal" className="modal show" onClick={closeModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            id="modalImage"
            src={selectedImage.src}
            alt="Certificate"
          />
        </div>
      )}

      <div>
        <header className="text-center text-light py-5 homepageHeader2 parallax"></header>
      </div>
      <SkillsSection skills={skillsData} />
      <section id="resume">
        <header className="text-center text-light py-5 homepageHeader2 homepageHeader3 parallax">
          <div className="mt-4">
            <div className="button-group text-center py-5 button-group1 mt-5">
              <Link
                href="https://mariola-portfolio.vercel.app/"
                target="_blank"
                className="btn btn-equal btn-outline-light btn-white mx-2"
              >
                Developer Portfolio
              </Link>

              <a
                href="/DesignResume.pdf"
                target="_blank"
                className="btn btn-equal btn-outline-light btn-white mx-2"
              >
                Resume
              </a>
            </div>

            <div className="button-group pb-5 mb-5 d-flex justify-content-center align-items-center">
              <Link
                href="https://www.linkedin.com/in/mariola-hullings/"
                target="_blank"
                className="btn btn-purple btn-icon mx-2"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="icon-svg" />
              </Link>
              <Link
                href="https://github.com/MariolaH"
                target="_blank"
                className="btn btn-purple btn-icon mx-2"
              >
                <img src="/github.svg" alt="GitHub" className="icon-svg" />
              </Link>
            </div>
          </div>
        </header>
        <Footer />
      </section>
    </div>
  );
}
