"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";
import Image from "next/image";
import Section from '@/app/components/section';

export default function define() {
  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  };
  const content = [
    {
      paragraphs: [
        " Welcome to the Define section of my portfolio. This section is dedicated to the second phase of the design thinking process—defining user needs and problems. Here, you will find an exploration of various methods and techniques used to clearly articulate and prioritize user pain points, needs, and goals.",
      ],
    },
    {
      subheading: "The Importance of Defining User Needs",
      paragraphs: [
        " Defining user needs is crucial in the product lifecycle. By clearly identifying and prioritizing these needs, designers can create targeted solutions that address the most critical issues faced by users. This ensures that the products we develop are not only functional but also provide significant value and satisfaction to the users.",
"  The define phase sets the direction for all subsequent phases. By thoroughly understanding and articulating the users needs and challenges, we ensure that our design solutions are precisely tailored to solve the most pressing problems. This results in products that are more likely to be successful and well-received.",
" The Define section of my portfolio is a comprehensive guide to synthesizing user insights and establishing clear problem statements. By exploring these defining activities, we will gain a deeper appreciation of how refining and articulating user needs and challenges leads to more focused and impactful design solutions.",
      ],
    },
    {
      subheading: "What You Will See in This Section",
      paragraphs: [
        " In this section, you will be introduced to several key activities that are crucial for defining user needs and creating user-centered designs: this section, you will be introduced to several key empathy activities that are crucial for gathering insights and creating user-centered designs:",
      ],
    },
  ];
  return (
    <div>
      <Link href="/">
        <Image src="/HomeButton.png" alt="HomeButton" id="home-button" width={75} height={75} />
      </Link>
      < div className="title">
      <Section title="IIntroduction to the Define Section Phase" content={content} />
      </div>
        <div className="row justify-content-center mt-5 pb-5">
          <ImageAndTextCard
            href="#problem-statement"
            imgSrc="/moduleIcons/problemStatements.png"
            text="Problem statement:  concisely describes a user need that the design must address"
          />

          <ImageAndTextCard
            href="#hypothesis-statement"
            imgSrc="/moduleIcons/hypothesisStatements.png"
            text="Hypothesis statement: propose potential solutions to identified problems, outlining specific solutions and expected outcomes to guide design and development efforts."
          />

          <ImageAndTextCard
            href="#goal-Statements"
            imgSrc="/moduleIcons/goalStatements.png"
            text="Goal statement: define the desired outcomes of the design process, providing clear, SMART objectives to ensure the final product delivers real value to users."
          />
        </div>
        <div className="container pt-5">
      <div className="row justify-content-center">
          <ImageCard
            id="problem-statement"
            imgSrc="/CS3PS/ProblemStatement.png"
          />
          <ImageCard imgSrc="/CS3PS/ProblemStatementAnna.png" />
          <ImageCard imgSrc="/CS3PS/ProblemStatementMichael.png" />
          <ImageCard imgSrc="/CS3PS/ProblemStatementEmma.png" />

          <ImageCard
            id="hypothesis-statement"
            imgSrc="/CS3HypothesisStatements/HypothesisStatements.png"
          />
          <ImageCard imgSrc="/CS3HypothesisStatements/HypothesisStatmentAnna.png" />
          <ImageCard imgSrc="/CS3HypothesisStatements/HypothesisStatmentMichael.png" />
          <ImageCard imgSrc="/CS3HypothesisStatements/HypothesisStatmentEmma.png" />

          <ImageCard
            id="goal-Statements"
            imgSrc="/CS3GoalStatement/GoalStatements.png"
          />
          <ImageCard imgSrc="/CS3GoalStatement/GoalStatementAnna.png" />
          <ImageCard imgSrc="/CS3GoalStatement/GoalStatementMichael.png" />
          <ImageCard imgSrc="/CS3GoalStatement/GoalStatementEmma.png" />
        </div>
        </div>
      <button id="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
}
