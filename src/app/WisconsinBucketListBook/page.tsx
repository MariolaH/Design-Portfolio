"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import Icon from "../icons";
import LinkCard from "../components/linkCard";
import Footer from "../components/footer";

export default function WisconsinBucketListBook() {
  return (
    <div>
      <section className="container text-center py-5">
        <h1 className="headerFont mainHeader mb-5 mt-5">The Wisconsin Bucket List Website</h1>
        <div className="aroundText p-4 d-block shadow text-decoration-none">
        <h5 className=" mb-4 caseStudy">
        In this case study, I designed and developed an interactive website for an author. </h5>
        <div className="book"> 
       <p> The goal was to create an engaging platform that:</p>
<p><i className="bi bi-book text-red-500 pr-2" ></i> Promotes the Wisconsin Bucket List book</p>
<p><i className="bi bi-book text-red-500 pr-2"></i> Introduces the author and their story</p>
<p><i className="bi bi-book text-red-500 pr-2"></i> Provides visitors with a seamless browsing experience to learn about the book and make purchases</p>
<p>Role in the Project: Lead UX/UI Designer & Software Developer
</p></div></div>

        <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-sm-6 col-12 d-flex justify-content-center">
  <div className="around p-4 d-block shadow text-decoration-none">
    <a href="https://www.bookthewisconsinbucketlist.com/" target="_blank">
      <img src="/WIWebsite.png" className="responsive-image" />
    </a>
  </div>
</div>
            </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="row justify-content-center btn-round image-container">
            {/* <LinkCard
              href="/MuseumWebsite/empathize"
              imgSrc="/DesignProcess/E.png"
              text="Empathize"
            />
            <LinkCard
              href="/MuseumWebsite/define"
              imgSrc="/DesignProcess/D.png"
              text="Define"
            />
            <LinkCard
              href="/MuseumWebsite/ideate"
              imgSrc="/DesignProcess/I.png"
              text="Ideate"
            /> */}
            {/* <LinkCard
              href="/WisconsinBucketListBook/prototype"
              imgSrc="/prototypeLogo.png"
              text="Prototype"
            /> */}
            {/* <LinkCard
              href="/MuseumWebsite/test"
              imgSrc="/DesignProcess/Test.png"
              text="Test"
            /> */}
             <LinkCard
              href="/WisconsinBucketListBook/HiFi"
              imgSrc="/mockup.png"
              text="Mock Ups"
            />
          </div>
        </div>

      </section>
      < Footer />
    </div>
  );
}
