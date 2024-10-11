"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";
import Section from "@/app/components/section";
import Footer from "@/app/components/footer";

export default function hifi() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const content = [
    {
      paragraphs: [
        "Welcome to the Prototype section of my portfolio. This section is dedicated to the iterative phase of the design thinking process—transforming ideas into tangible forms. Here, you will find an exploration of various prototyping methods and techniques used to develop interactive models that address user needs and pain points.",
      ],
    },
    {
      subheading: "The Importance of High-Fidelity Prototyping",
      paragraphs: [
        "High-fidelity prototyping is a crucial stage in the UX design process. By creating detailed and interactive representations of ideas, designers can test and refine solutions based on user feedback. This phase builds on the insights and ideas generated during the ideation stage, bringing concepts to life in a way that allows for practical evaluation and iteration.",
        "Developing high-fidelity prototypes is essential for identifying the most effective solutions. During this phase, we create mockups and assemble them into a working prototype for further testing and refinement. This helps in creating innovative and user-centered designs that are both functional and engaging.",
        "The Prototype section of my portfolio is a comprehensive guide to transforming ideas into tangible solutions. By delving into these prototyping activities, you will gain a deeper appreciation of the iterative design process and how it leads to more effective and meaningful user-centered designs.",
      ],
    },
    {
      subheading: "What You Will See in This Section",
      paragraphs: [
        "In this section, you will be introduced to several key prototyping techniques that are essential for developing high-fidelity models. These include:",
      ],
    },
  ];

  return (
    <div>
      <Link href="/">
        <img
          src="/HomeButton.png"
          alt="HomeButton"
          id="home-button"
          width={75}
          height={75}
        />
      </Link>
      <div className="title">
        <Section
          title="Introduction to the Mock Up and High Fidelity Prototype Section Phase"
          content={content}
        />
      </div>
      <div className="row justify-content-center mt-5 pb-5">
        <ImageAndTextCard
          href="#mock-ups"
          imgSrc="/CS3MockUps/mockupHeader.png"
          text="Mock Ups: are an essential tools in the design process, providing detailed, static representations of user flows, and overviews of a product's information architecture to refine aesthetics and functionality before development."
        />

        <ImageAndTextCard
          href="#high-fidelityPrototype"
          imgSrc="/headings/hifiPrototype.png"
          text="High-Fidelity Prototype: is a comprehensive, interactive model that closely mimics the final product's design and functionality, allowing for thorough user testing and feedback before full-scale development."
        />
      </div>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <ImageCard id="mock-ups" imgSrc="/CS3MockUps/mockup.png" />

          <ImageCard imgSrc="/CS3MockUps/1.png" />
          <ImageCard imgSrc="/CS3MockUps/2.png" />
          <ImageCard imgSrc="/CS3MockUps/3.png" />
          <ImageCard imgSrc="/CS3MockUps/4.png" />
          <ImageCard imgSrc="/CS3MockUps/5.png" />
          <ImageCard imgSrc="/CS3MockUps/6.png" />
          <ImageCard imgSrc="/CS3MockUps/7.png" />
          <ImageCard imgSrc="/CS3MockUps/8.png" />
          <ImageCard imgSrc="/CS3MockUps/9.png" />

          <ImageCard imgSrc="/CS3MockUps/App1.png" />
          <ImageCard imgSrc="/CS3MockUps/App2.png" />
          <ImageCard imgSrc="/CS3MockUps/App3.png" />
          <ImageCard imgSrc="/CS3MockUps/App4.png" />
          <ImageCard imgSrc="/CS3MockUps/App5.png" />
          <ImageCard imgSrc="/CS3MockUps/App6.png" />

          <ImageCard
            id="high-fidelityPrototype"
            imgSrc="/CS3MockUps/high-fidelityPrototype .png"
          />
          <div className="container ">
            <div className="row justify-content-center">
              <video
                className="responsive-video responsive-video1 mb-5"
                controls
                preload="auto"
              >
                <source src="/CS3MockUps/WebsiteMockup.mp4" type="video/mp4" />
                <track
                  src="/CS3prototype/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="row justify-content-center">
              <video className="responsive-video mb-5" controls preload="auto">
                <source src="/CS3MockUps/AppRecording.mp4" type="video/mp4" />
                <track
                  src="/CS3prototype/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <button id="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
      < Footer />
    </div>
  );
}
