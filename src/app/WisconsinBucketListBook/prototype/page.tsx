"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";
import Section from "@/app/components/section";
import Footer from "@/app/components/footer";

export default function cs1prototype() {
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
        "In this section, you will be introduced to a key prototyping technique that is essential for developing interactive models. This includes:",
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
        {/* <ImageAndTextCard
          href="#user-interviews"
          imgSrc="/moduleIcons/userFlow.png"
          text="User flow diagrams, storyboards and sitemaps: User flow diagrams are visual maps of user steps; Storyboards detail user experiences visually; Sitemap are an overview of product information architecture."
        /> */}

        {/* <ImageAndTextCard
          href="#empathy-map"
          imgSrc="/moduleIcons/paperWireframes.png"
          text="Paper wireframes: Creating basic layouts to define the structure and flow of the design."
        /> */}

        <ImageAndTextCard
          href="#digitalWireframes"
          imgSrc="/moduleIcons/digitalWireframes.png"
          text="Digital wireframes: Developing interactive digital layouts to simulate user interactions."
        />
        {/* <ImageAndTextCard
          href="#empathy-map"
          imgSrc="/moduleIcons/lowFidelityPrototypes.png"
          text="Low-fidelity prototypes: Initial interactive models to test and refine design concepts."
        /> */}
      </div>
      <div className="container pt-5">
      <div className="row justify-content-center">

      <ImageCard id="digitalWireframes" imgSrc="/WisconsinBucketList/1.png" />
      <ImageCard imgSrc="/WisconsinBucketList/2.png" />
      <ImageCard imgSrc="/WisconsinBucketList/3.png" />
      <ImageCard imgSrc="/WisconsinBucketList/4.png" />
      
      
        {/* <ImageCard imgSrc="/empathizeCS3/researchGoals.png" />
        <ImageCard imgSrc="/empathizeCS3/audience.png" />
        <ImageCard
          id="user-interviews"
          imgSrc="/empathizeCS3/interviewQuestions.png"
        />
        <ImageCard imgSrc="/empathizeCS3/Anna.png" />
        <ImageCard imgSrc="/empathizeCS3/Carlos.png" />
        <ImageCard imgSrc="/empathizeCS3/Sophie.png" />
        <ImageCard imgSrc="/empathizeCS3/Ravi.png" />
        <ImageCard imgSrc="/empathizeCS3/Jasmine.png" />
        <ImageCard imgSrc="/empathizeCS3/Michael.png" />
        <ImageCard id="empathy-map" imgSrc="/empathyMaps/AnnaEmpathyMap.png" />
        <ImageCard imgSrc="/empathyMaps/CarlosEmpathyMap.png" />
        <ImageCard imgSrc="/empathyMaps/SophieEmpathyMap.png" />
        <ImageCard imgSrc="/empathyMaps/RaviEmpathyMap.png" />
        <ImageCard imgSrc="/empathyMaps/JasmineEmpathyMap.png" />
        <ImageCard imgSrc="/empathyMaps/MichaelEmpathyMap.png" />

        <ImageCard id="user-persona" imgSrc="/CS3Personas/PersonaAnna2.png" />
        <ImageCard imgSrc="/CS3Personas/PersonaMichael2.png" />
        <ImageCard imgSrc="/CS3Personas/PersonaEmma2.png" />

        <ImageCard id="user-stories" imgSrc="/CS3UserStory/UserStoryAnna.png" />
        <ImageCard imgSrc="/CS3UserStory/UserStoryMichael.png" />
        <ImageCard imgSrc="/CS3UserStory/UserStoryEmma.png" />

        <ImageCard
          id="User-Journey-Maps"
          imgSrc="/CS3JourneyMap/JourneyMapAnna.png"
        />
        <ImageCard imgSrc="/CS3JourneyMap/JourneyMapMichael.png" />
        <ImageCard imgSrc="/CS3JourneyMap/JourneyMapEmma.png" /> */}
      </div>
      </div>
      <button id="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
      < Footer />
    </div>
  );
}
