"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from 'next/link';


export default function ideate() {
  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  return (
    <div>
      <Link href="/" >
        <img src='/HomeButton.png' alt='HomeButton' id="home-button" width={75} height={75} />
      </Link>
     <section className="container text-center py-5">
        <h2 className="mb-5 mt-5">Introduction to the Ideate Section Phase</h2>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <p className="lead-responsive">
                Welcome to the Ideate section of my portfolio. This section is dedicated to the creative phase of the design thinking process—generating innovative solutions. Here, you will find an exploration of various brainstorming methods and techniques used to develop a wide range of ideas that address user needs and pain points.                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <h5 className="mb-4">The Importance of Empathizing with Users</h5>
                <p className="lead-responsive">
                  Empathy is the cornerstone of effective UX design. By genuinely understanding and connecting with users, designers can create solutions that are not only functional but also meaningful and engaging. This deep understanding ensures that the products we create truly resonate with users, leading to more impactful and lasting experiences.
                </p>
                <p className="lead-responsive">
                  Empathizing with users is not just the first step in the design process—it is a continuous effort that informs every subsequent phase. By thoroughly understanding the users, we can ensure that the design solutions are tailored to their real needs and challenges. This results in products that are more likely to be successful and well-received.
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
                <p className="lead-responsive">
                  In this section, you will be introduced to several key empathy activities that are crucial for gathering insights and creating user-centered designs:
                </p>
              </div>
            </div>
          </div>
        </div>

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
        <div className='pt-5'>  
        <ImageCard id="competitiveAudits" imgSrc="/Ideate/CompetitiveAudit.png" />
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

        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <p className="lead-responsive">
                  The Empathize section of my portfolio is a comprehensive guide
                  to understanding users and their experiences. By delving into
                  these empathy activities, you will gain a deeper appreciation
                  of the user-centered design process and how it leads to more
                  effective and meaningful design solutions.
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
