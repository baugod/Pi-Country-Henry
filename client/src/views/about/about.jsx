import "./about.Style.css";

export default function About() {
    return (
      <>
        <div className="container">
          <div className="about">
            <div className="aboutInfo">
              <h1>PI-COUNTRIES</h1>
              <p>
              This project was created as part of my training as a fullstack developer at {" "}
                <a
                  href="https://www.soyhenry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Henry bootcamp
                </a>
                . To display all the different countries, this application consumes data from the{" "}
                <a
                  href="https://thedogapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the Countries APi
                </a>
                . It is also possible to create and assign to one or more countries, an activity by entering a name, duration, difficulty, and season.
              </p>
              <p>
                Any feedback you can provide will be greatly appreciated. Thank
                you, and don't forget to create your own breed!
              </p>
            </div>
            <h1 className="TechTitle">Used technologies:</h1>
            <div className="techContainer">
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt=""
                />
                <h1>Javascript</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt=""
                />
                <h1>HTML</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt=""
                />
                <h1>CSS</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt=""
                />
                <h1>React</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt=""
                />
                <h1>Redux</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt=""
                />
                <h1>Express</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt=""
                />
                <h1>PostgreSQL</h1>
              </div>
            </div>
            <h1 className="TechTitle">Contact: </h1>
            <div className="redes_sociales">
              <a
                href="https://www.linkedin.com/in/bautista-godoy//"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img  alt="linkedin" />
              </a>
              <a
                href="https://github.com/baugod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img  alt="github" />
              </a>
              <a
                href="mailto:bautistagodoy060@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img  alt="email" />
              </a>
              <a
                href="https://github.com/baugod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img  alt="portafolio" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  