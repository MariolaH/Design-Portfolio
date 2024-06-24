"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";
import Section from "@/app/components/section";

export default function test() {
  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  const content = [
    {
      paragraphs: [
        "Welcome to the Test section of my portfolio. This section is dedicated to the iterative part of the design thinking process—validating designs through user feedback. Here, you will find an exploration of various methods and techniques used to plan, conduct, and synthesize usability studies to refine and improve designs.",
      ],
    },
    {
      subheading: "The Importance of Testing with Users",
      paragraphs: [
        "Testing is a crucial stage in the UX design process. By evaluating how real users interact with your designs, you can identify usability issues and areas for improvement. This phase ensures that the products we create truly meet user needs and expectations, leading to more effective and satisfying user experiences.",
        "Conducting usability studies is not just a one-time task—it is a continuous effort that informs every subsequent phase of design. By thoroughly testing and iterating on designs, we can ensure that the final product is intuitive, accessible, and user-friendly.",
        "The Test section of my portfolio is a comprehensive guide to validating and improving designs through user feedback. By delving into these activities, you will gain a deeper appreciation of the user-centered design process and how it leads to more effective and meaningful design solutions.",
      ],
    },
    {
      subheading: "What You Will See in This Section",
      paragraphs: [
        "In this section, you will be introduced to several key activities that are crucial for gathering insights and creating user-centered designs:",
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
      <Section title="Introduction to the Test Section Phase" content={content} />
      <div className="row justify-content-center mt-5 pb-5">
        <ImageAndTextCard
          href="#user-interviews"
          imgSrc="/moduleIcons/planUsabilityStudy.png"
          text="Plan a usability study:  Develop a comprehensive UX research plan by defining research goals, questions, KPIs, methodology, participants, and script to effectively assess user interactions and usability."
        />

        <ImageAndTextCard
          href="#empathy-map"
          imgSrc="/moduleIcons/conductAStudy.png"
          text="Conduct a usability study: Execute planned studies, take consistent notes, and gather valuable user feedback."
        />

        <ImageAndTextCard
          href="#user-persona"
          imgSrc="/moduleIcons/synthesizeResults.png"
          text="Synthesize Results and modify designs: Organize data, identify patterns and themes, and derive actionable insights. Apply insights to enhance design, focusing on usability and user experience improvements."
        />
      </div>
      <div className="container pt-5">
      <div className="row justify-content-center">
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
    </div>
  );
}
