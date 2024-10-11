"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import div from "next/link";
import "/src/app/styles/global.css";
import Footer from "@/app/components/footer";

export default function define() {
  return (
    <div>
      <section className="container text-center py-5">
        <h2 className="mb-5 mt-5">DEFINE PHASE</h2>
        
      
          <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="around p-4 d-block shadow text-decoration-none">
                <div className="size">
                {/* <img src="/empathizeCS3/researchGoal.png" /> */}
                </div>
              </div>
            </div>
            </div>

            <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="around p-4 d-block shadow text-decoration-none">
                <div className="size">
                <img src="/empathizeCS3/audience.png" />
                </div>
              </div>
            </div>
            </div>

            <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="around p-4 d-block shadow text-decoration-none">
                <div className="size">
                <img src="/empathizeCS3/audience.png" />
                </div>
              </div>
            </div>
            </div>
            <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="around p-4 d-block shadow text-decoration-none">
                <div className="size">
                <img src="/empathizeCS3/audience.png" />
                </div>
              </div>
            </div>
            </div>

            <div className="row justify-content-center mt-5">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="around p-4 d-block shadow text-decoration-none">
                <div className="size">
                <img src="/empathizeCS3/audience.png" />
                </div>
              </div>
            </div>
          </div>
     
      </section>
      < Footer />
    </div>
  );
}
