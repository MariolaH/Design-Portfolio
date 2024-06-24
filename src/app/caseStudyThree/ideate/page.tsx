"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";
import Section from "@/app/components/section";

export default function ideate() {
  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  const content = [
    {
      paragraphs: [
        "Welcome to the Ideate section of my portfolio. This section is dedicated to the creative phase of the design thinking process—generating innovative solutions. Here, you will find an exploration of various brainstorming methods and techniques used to develop a wide range of ideas that address user needs and pain points.",
      ],
    },
    {
      subheading: "The Importance of Ideating with Users",
      paragraphs: [
        "Ideation is a pivotal stage in the UX design process. By fostering creativity and encouraging the generation of a diverse array of ideas, designers can explore multiple solutions to user challenges. This phase leverages the insights gained during the empathize stage, using them as a foundation to think broadly.",
        "Generating a variety of ideas is crucial for identifying the most effective solutions. During the ideation phase, we employ a variety of techniques to ensure that all potential avenues are explored. This helps in creating innovative and user-centered designs that are both practical and engaging.",
        "The Empathize section of my portfolio is a comprehensive guide to understanding users and their experiences. By delving into these activities, you will gain a deeper appreciation of the user-centered design process and how it leads to more effective and meaningful design solutions.",
      ],
    },
    {
      subheading: "What You Will See in This Section",
      paragraphs: [
        "In this section, you will be introduced to several key ideation techniques that are essential for generating creative solutions. These include:",
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
      <Section
        title="Introduction to the Ideate Section Phase"
        content={content}
      />
      <div className="row justify-content-center mt-5 pb-5">
        <ImageAndTextCard
          href="#competitiveAudits"
          imgSrc="/moduleIcons/competitiveAudits.png"
          text="Competitive Audits: Detailed documentation and analysis of
            interviews conducted to gather firsthand user insights."
        />

        <ImageAndTextCard
          href="#HowMightWe"
          imgSrc="/moduleIcons/ideationActivities.png"
          text="Ideation Activities: Visual representations
            of user thoughts, feelings, and behaviors, helping to distill
            key insights from user interviews."
        />
      </div>
      <div className="container pt-5">
      <div className="row justify-content-center">
        <ImageCard
          id="competitiveAudits"
          imgSrc="/Ideate/CompetitiveAudit.png"
        />
        <ImageCard imgSrc="/Ideate/AuditGoal.png" />
        <ImageCard imgSrc="/Ideate/AuditAims.png" />
        <ImageCard imgSrc="/Ideate/KeyInsights.png" />
        <ImageCard imgSrc="/Ideate/PainPointIdentified.png" />
        <ImageCard imgSrc="/Ideate/PainPoints.png" />
        <ImageCard imgSrc="/Ideate/PainPoints2.png" />

        <ImageCard id="HowMightWe" imgSrc="/Ideate/HowMightWe.png" />
        <ImageCard imgSrc="/Ideate/HMW1.png" />
        <ImageCard imgSrc="/Ideate/HMW2.png" />
        <ImageCard imgSrc="/Ideate/HMW3.png" />

        <ImageCard imgSrc="/Ideate/RapidSketching1.png" />
        <ImageCard imgSrc="/Ideate/RapidSketching.png" />
      </div>
      </div>
      <button id="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
}
