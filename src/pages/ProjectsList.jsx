import "./ProjectsList.css";
import marvelImage from "../assets/img/api-marvel.png";

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
        <button>REPLIQUE VINTED</button>
        <button>TRYING LEAFLET</button>
      </ul>
    </div>
  );
};

export default ProjectsList;
