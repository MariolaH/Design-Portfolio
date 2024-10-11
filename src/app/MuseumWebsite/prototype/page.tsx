"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";
import Section from "@/app/components/section";
import Footer from "@/app/components/footer";

export default function prototype() {
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
      subheading: "The Importance of Prototyping with Users",
      paragraphs: [
        "Prototyping is a crucial stage in the UX design process. By creating interactive representations of ideas, designers can test and refine solutions based on user feedback. This phase builds on the insights and ideas generated during the ideation stage, bringing concepts to life in a way that allows for practical evaluation and iteration.",
        "Developing prototypes is essential for identifying the most effective solutions. During the prototyping phase, we create various levels of prototypes, from low-fidelity wireframes to high-fidelity interactive models, to ensure that all aspects of the design are thoroughly tested and refined. This helps in creating innovative and user-centered designs that are both functional and engaging.",
        "The Prototype section of my portfolio is a comprehensive guide to transforming ideas into tangible solutions. By delving into these prototyping activities, you will gain a deeper appreciation of the iterative design process and how it leads to more effective and meaningful user-centered designs.",
      ],
    },
    {
      subheading: "What You Will See in This Section",
      paragraphs: [
        "In this section, you will be introduced to several key prototyping techniques that are essential for developing interactive models. These include:",
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
          title="Introduction to the Prototype Section Phase"
          content={content}
        />
      </div>
      <div className="row justify-content-center mt-5 pb-5">
        <ImageAndTextCard
          href="#user-Flow"
          imgSrc="/moduleIcons/userFlow.png"
          text="User flow diagrams, storyboards and sitemaps: User flow diagrams are visual maps of user steps; Storyboards detail user experiences visually; Sitemap are an overview of product information architecture."
        />

        <ImageAndTextCard
          href="#paper-Wireframes"
          imgSrc="/moduleIcons/paperWireframes.png"
          text="Paper wireframes: Creating basic layouts to define the structure and flow of the design."
        />

        <ImageAndTextCard
          href="#digital-Wireframes"
          imgSrc="/moduleIcons/digitalWireframes.png"
          text="Digital wireframes: Developing interactive digital layouts to simulate user interactions."
        />
        <ImageAndTextCard
          href="#lowFidelity-Prototypes"
          imgSrc="/moduleIcons/lowFidelityPrototypes.png"
          text="Low-fidelity prototypes: Initial interactive models to test and refine design concepts."
        />
      </div>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <ImageCard id="user-Flow" imgSrc="/headings/UserFlow.png" />
          <ImageCard imgSrc="/CS3prototype/userFlow.png" />

          <ImageCard imgSrc="/headings/storyboards.png" />
          <ImageCard imgSrc="/CS3prototype/StoryboardAnna.png" />
          <ImageCard imgSrc="/CS3prototype/StoryboardMichael.png" />
          <ImageCard imgSrc="/CS3prototype/StoryboardEmma.png" />
          <ImageCard imgSrc="/headings/sitemaps.png" />
          <ImageCard imgSrc="/CS3prototype/siteMap.png" />

          <ImageCard
            id="paper-Wireframes"
            imgSrc="/headings/PaperWireframes .png"
          />
          <ImageCard imgSrc="/CS3prototype/paperWireframe1.png" />
          <ImageCard imgSrc="/CS3prototype/paperWireframe2.png" />
          <ImageCard imgSrc="/CS3prototype/paperWireframe3.png" />

          <ImageCard
            id="digital-Wireframes"
            imgSrc="/headings/DigitalWireframes.png"
          />
          <ImageCard imgSrc="/CS3prototype/WFw1.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe2.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe3.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe4.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe5.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe6.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe7.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe8.png" />
          <ImageCard imgSrc="/CS3prototype/wireframe9.png" />

          <ImageCard imgSrc="/CS3prototype/LPAPP1.png" />
          <ImageCard imgSrc="/CS3prototype/LPAPP2.png" />
          <ImageCard imgSrc="/CS3prototype/LPAPP3.png" />
          <ImageCard imgSrc="/CS3prototype/LPAPP4.png" />

          <ImageCard
            id="lowFidelity-Prototypes"
            imgSrc="/headings/Low-FidelityPrototypes.png"
          />
          <div className="container ">
          <div className="row justify-content-center">
            <video
              className="responsive-video responsive-video1 mb-5"
              controls
              preload="auto"
            >
              <source src="/CS3prototype/LF-website.mp4" type="video/mp4" />
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
            <video
              className="responsive-video mb-5"
              controls
              preload="metadata"
            >
              <source src="/CS3prototype/AppPrototype.mp4" type="video/mp4" />
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
