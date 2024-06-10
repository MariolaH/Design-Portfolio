"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";

export default function caseStudyTwo() {
  return (
    <div>
      <section className="container text-center py-5">
        <h2 className="mb-5 mt-5">CASE STUDY TWO</h2>
        <p className="mb-5 mt-5">
          PROMPT: Design an app and a responsive website for a public art museum
          to advertise exhibitions and events, provide museum information to
          patrons, and enable patrons to schedule visits.
        </p>
        
        <div className="d-flex justify-content-center mt-5">
          <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <Link
                href="/caseStudyTwo/empathize"
                className="btn btn-light p-4 d-block shadow text-decoration-none"
              >
                <div className="img-fluid">
                  <img src="/Empathize.png" />
                </div>
              </Link>
            </div>

            <div className="col-md-2 d-flex justify-content-center">
              <Link
                href="/caseStudyTwo/define"
                className="btn btn-light p-4 d-block shadow text-decoration-none"
              >
                <div className="img-fluid">
                  <img src="/lifecyleImages/define.png" />
                </div>
              </Link>
            </div>

            <div className="col-md-2 d-flex justify-content-center">
              <Link
                href="/caseStudyTwo/ideate"
                className="btn btn-light p-4 d-block shadow text-decoration-none"
              >
                <div className="img-fluid">
                  <img src="/lifecyleImages/ideate.png" />
                </div>
              </Link>
            </div>

            <div className="col-md-2 d-flex justify-content-center">
              <Link
                href="/caseStudyTwo/prototype"
                className="btn btn-light p-4 d-block shadow text-decoration-none"
              >
                <div className="img-fluid">
                  <img src="/lifecyleImages/prototype.png" />
                </div>
              </Link>
            </div>

            <div className="col-md-2 d-flex justify-content-center">
              <Link
                href="/caseStudyTwo/test"
                className="btn btn-light p-4 d-block shadow text-decoration-none"
              >
                <div className="img-fluid">
                  <img src="/lifecyleImages/test.png" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
