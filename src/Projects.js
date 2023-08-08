import React from "react"

function Projects() {


    return (
      <div className="Projects">
        <br></br>
        <h2>Projects</h2>
        <br></br>
        <div className = "row">
            <div className="col-sm-6">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Friender</h5>
                        <p class="card-text">Fullstack app using Flask, Jinja, SQL, SQLAlchemy</p>
                        <a href="https://github.com/jstern718/friendly" class="btn btn-primary">GitHub Repository</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Jobly</h5>
                        <p class="card-text">Fullstack app using React, Express, SQL</p>
                        <a href="https://github.com/jstern718/react-jobly" class="btn btn-primary">Frontend Repository</a>
                        <span className="invisible"> - </span>
                        <a href="https://github.com/jstern718/express-jobly" class="btn btn-primary">Backend Repository</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

export default Projects;