"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import "/src/app/styles/global.css";


export default function caseStudyOne() {
    return (
      <div>
        <p>Case Study One</p>
        <p>Case Study One</p>
        {/* Add more content about yourself here */}
        <section className="container text-center py-5">
        <h2 className="mb-4">UX / UI DESIGN</h2>
        {/* <p className="text-muted mb-5">THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</p> */}
        <div className="row">
          <div className="col-md-2 mb-2">
            <Link
              href="/caseStudyOne"
              className="btn btn-light p-4 d-block shadow text-decoration-none"
            >
              <div className="mb-3">
                <img src="/Empathize.png" className="centered-image" />
              </div>
              {/* <h3 className="h5">CASE STUDY 1</h3> */}
              {/* <p className="text-muted">
                Flower Catalogue Website
              </p> */}
            </Link>
          </div>
          <div className="col-md-2 mb-2">
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
          <div className="col-md-2 mb-2">
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
          <div className="col-md-2 mb-2">
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
          <div className="col-md-2 mb-2">
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
  };
  