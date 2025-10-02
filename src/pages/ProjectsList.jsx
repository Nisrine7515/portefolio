import "./ProjectsList.css";
import marvelImage from "../assets/img/api-marvel.png";
import vintedImage from "../assets/img/vinted-replique.png";
import leafImage from "../assets/img/testing-leaflet.png";

const ProjectsList = () => {
  return (
    <div className="projectslist-page-buttons">
      <ul className="allprojects-buttons">
        <button>
          <a
            href="https://marvelapi-front-reactjs.netlify.app/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            API MARVEL
          </a>
          <img src={marvelImage} alt="API Marvel" className="project-image" />
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/nisrine-snacel-b0a648157/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            VINTED REPLIQUE
          </a>
          <img
            src={vintedImage}
            alt="Vinted Replique"
            className="project-image"
          />
        </button>
        <button>
          <a
            href="https://testing-leaf-let.netlify.app/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TESTING LEAFLET
          </a>
          <img
            src={leafImage}
            alt="Testing Leaf Let"
            className="project-image"
          />
        </button>
      </ul>
    </div>
  );
};

export default ProjectsList;
