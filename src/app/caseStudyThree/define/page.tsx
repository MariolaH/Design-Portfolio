"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from "next/link";

export default function define() {
  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  };
  return (
    <div>
      <Link href="/">
        <img src="/HomeButton.png" alt="HomeButton" id="home-button" />
      </Link>
      <section className="container text-center py-5">
        <h2 className="mb-5 mt-5">Introduction to the Define Section Phase</h2>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <p>
                  Welcome to the Define section of my portfolio. This section is
                  dedicated to the second phase of the design thinking
                  process—defining user needs and problems. Here, you will find
                  an exploration of various methods and techniques used to
                  clearly articulate and prioritize user pain points, needs, and
                  goals.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <h5 className="mb-4">The Importance of Defining User Needs</h5>
                <p>
                  Defining user needs is crucial in the product lifecycle. By
                  clearly identifying and prioritizing these needs, designers
                  can create targeted solutions that address the most critical
                  issues faced by users. This ensures that the products we
                  develop are not only functional but also provide significant
                  value and satisfaction to the users.
                </p>
                <p>
                  The define phase sets the direction for all subsequent phases.
                  By thoroughly understanding and articulating the users' needs
                  and challenges, we ensure that our design solutions are
                  precisely tailored to solve the most pressing problems. This
                  results in products that are more likely to be successful and
                  well-received.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <h5 className="mb-4">What You Will See in This Section</h5>
                <p>
                  In this section, you will be introduced to several key
                  activities that are crucial for defining user needs and
                  creating user-centered designs:
                </p>
              </div>
            </div>
          </div>
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
        <div className="pt-5">
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

        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <p>
                 The Define section of my portfolio is a comprehensive
                  guide to synthesizing user insights and establishing clear
                  problem statements. By exploring these defining activities,
                  we will gain a deeper appreciation of how refining and
                  articulating user needs and challenges leads to more focused
                  and impactful design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button id="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
}
