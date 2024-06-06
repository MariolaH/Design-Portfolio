import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import '../app/styles/global.css'

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

      <header className="text-center text-light">
        <h1 className="display-4">Hi, I'm Mariola</h1>
        <p className="lead">A UX/UI Designer and Software Developer</p>
        <div className="mt-4">
          <Link href="/signup" legacyBehavior>
            <a className="btn btn-purple btn-equal mx-2">More About Me</a>
          </Link>
          <Link href="/learn-more" legacyBehavior>
            <a className="btn btn-equal btn-outline-light btn-white mx-2">Developer Portfolio</a>
          </Link>
        </div>
      </header>
      <section className="container text-center py-5">
        <h2 className="mb-4">UX / UI DESIGN</h2>
        <p className="text-muted mb-5">THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link href="/case-studies/graphic-design" legacyBehavior>
              <a className="btn btn-light p-4 d-block shadow text-decoration-none">
                <div className="mb-3"><img src="/path/to/icon1.png" alt="Graphic Design" /></div>
                <h3 className="h5">GRAPHIC DESIGN</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
            </Link>

          </div>
          <div className="col-md-4 mb-4">
            <Link href="/case-studies/awesome-code" legacyBehavior>
              <a className="btn btn-light p-4 d-block shadow text-decoration-none">
                <div className="mb-3"><img src="/path/to/icon2.png" alt="Awesome Code" /></div>
                <h3 className="h5">AWESOME CODE</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link href="/case-studies/free-template" legacyBehavior>
              <a className="btn btn-light p-4 d-block shadow text-decoration-none">
                <div className="mb-3"><img src="/path/to/icon3.png" alt="Free Template" /></div>
                <h3 className="h5">FREE TEMPLATE</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
