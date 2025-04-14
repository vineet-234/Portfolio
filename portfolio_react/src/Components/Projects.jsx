import React from "react";
import Projects1 from "./Data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="conatiner project" id = "projects">
        <h1>Projects</h1>
        
        <div className="row d-flex justify-content-center align-items-center flex-wrap my-5">
          {Projects1.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3.5"
              >
                <div
                  className="card bg-dark text-white "
                  style={{
                    width: "18rem",
                    border: "1px solid blue",
                    boxShadow: "0px 0px 10px 1px rgb(44, 143, 200)",
                  }}
                  data-aos="zoom-out-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                 
                >
                  <div className="img d-flex justify-content-center align-items-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid white",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px 0px white",
                      }}
                       
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-2.5">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
