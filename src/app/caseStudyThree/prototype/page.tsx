"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import ImageCard from "@/app/components/imageCard";
import ImageAndTextCard from "@/app/components/imageAndTextCard";
import Link from 'next/link';


export default function prototype() {
  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  return (
    <div>
      <Link href="/" >
        <img src='/HomeButton.png' alt='HomeButton' id="home-button" width={75} height={75}/>
      </Link>
     <section className="container text-center py-5">
        <h2 className="mb-5 mt-5">Introduction to the Prototype Section Phase</h2>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <p>
                  Welcome to the Empathize section of my portfolio. This section is dedicated to the foundational phase of the design thinking process—empathizing with users. Here, you will find an exploration of various methods and techniques used to deeply understand user needs, pain points, and goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <h5 className="mb-4">The Importance of Empathizing with Users</h5>
                <p>
                  Empathy is the cornerstone of effective UX design. By genuinely understanding and connecting with users, designers can create solutions that are not only functional but also meaningful and engaging. This deep understanding ensures that the products we create truly resonate with users, leading to more impactful and lasting experiences.
                </p>
                <p>
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
                <p>
                  In this section, you will be introduced to several key empathy activities that are crucial for gathering insights and creating user-centered designs:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5 pb-5">
        <ImageAndTextCard
            href="#user-interviews"
            imgSrc="/moduleIcons/userFlow.png"
            text="User flow, Storyboards, and Sitemaps: Detailed documentation and analysis of
            interviews conducted to gather firsthand user insights."
          />

<ImageAndTextCard
            href="#empathy-map"
            imgSrc="/moduleIcons/paperWireframes.png"
            text="Paper wireframes : Visual representations
            of user thoughts, feelings, and behaviors, helping to distill
            key insights from user interviews."
          />

<ImageAndTextCard
            href="#empathy-map"
            imgSrc="/moduleIcons/digitalWireframes.png"
            text="Digital wireframes: Visual representations
            of user thoughts, feelings, and behaviors, helping to distill
            key insights from user interviews."
          />
          <ImageAndTextCard
            href="#empathy-map"
            imgSrc="/moduleIcons/lowFidelityPrototypes.png"
            text="Low-fidelity prototypes: Visual representations
            of user thoughts, feelings, and behaviors, helping to distill
            key insights from user interviews."
          />
        </div>
        <div className='pt-5'>
        <ImageCard imgSrc="/empathizeCS3/researchGoals.png" />
        <ImageCard imgSrc="/empathizeCS3/audience.png" />
        <ImageCard id="user-interviews" imgSrc="/empathizeCS3/interviewQuestions.png" />
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

        <ImageCard id="User-Journey-Maps" imgSrc="/CS3JourneyMap/JourneyMapAnna.png" />
        <ImageCard imgSrc="/CS3JourneyMap/JourneyMapMichael.png" />
        <ImageCard imgSrc="/CS3JourneyMap/JourneyMapEmma.png" />
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                <p>
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
