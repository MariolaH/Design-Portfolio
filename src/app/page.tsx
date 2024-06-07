import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";

export default function Home() {
  return (
    <div>
      {/* <header className="text-center text-light py-5" style={{ backgroundImage: 'url("/crystal-7428278_1280.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="display-4">Hi, I'm Mariola</h1> */}
      {/* <p className="lead">A FREE RESPONSIVE TEMPLATE BY WEBFLOW</p> */}
      {/* <div className="mt-4">
          <Link href="/signup" legacyBehavior>
            <a className="btn btn-primary mx-2">Sign Up</a>
          </Link>
          <Link href="/learn-more" legacyBehavior>
            <a className="btn btn-outline-light mx-2">Learn More</a>
          </Link>
        </div>
      </header> */}

<header className="top text-center text-light py-5" style={{ backgroundImage: 'url("/crystal-7428278_1280.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="display-4">Hi, I'm Mariola</h1>
        <p className="lead">A UX/UI Designer and Software Developer</p>
        <div className="mt-4">
          <Link href="/bio" className="btn btn-purple btn-equal mx-2">
            More About Me
          </Link>
          <Link
            href="https://mariola-portfolio.vercel.app/" target="_blank"
            className="btn btn-equal btn-outline-light btn-white mx-2"
          >
            Developer Portfolio
          </Link>
        </div>
      </header>
      <section className="container text-center py-5">
        <h2 className="mb-4">UX / UI DESIGN</h2>
        {/* <p className="text-muted mb-5">THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</p> */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link
              href="/caseStudyOne"
              className="btn btn-light p-4 d-block shadow text-decoration-none"
            >
              <div className="mb-3">
                <img src="/CaseStudy1.png" />
              </div>
              <h3 className="h5">CASE STUDY 1</h3>
              <p className="text-muted">
                Flower Catalogue Website
              </p>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link
              href="/caseStudyTwo"
              className="btn btn-light p-4 d-block shadow text-decoration-none"
            >
              <div className="mb-3">
                <img src="/CaseStudy1.png" />
              </div>
              <h3 className="h5">CASE STUDY 2</h3>
              <p className="text-muted">
               Flower Catalogue Website
              </p>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link
              href="/caseStudyThree"
              className="btn btn-light p-4 d-block shadow text-decoration-none"
            >
              <div className="mb-3">
                <img src="/path/to/icon3.png" alt="Free Template" />
              </div>
              <h3 className="h5">CASE STUDY 3</h3>
              <p className="text-muted">
              Museum Website 
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
