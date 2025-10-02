import Footer from "../components/Footer";
import Skills from "../components/Skills";
import MyProjects from "../components/MyProjects";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="about-me">
        <h1 className="aboiut-me-description">
          <span>
            I'm Nisrine and i'm studying software engineering. What I like about
            this field is that it allows me to be truly autonomous in my work.
          </span>{" "}
          <span>
            I have a background in psychology and in arts public politics.
          </span>{" "}
          <span>
            I’ve been looking to develop hard skills that will benefit me
            throughout my life, both personally and professionally.
          </span>{" "}
          <span>
            I love building things from scratch, but what I enjoy most is
            exchanging ideas with other tech professionals to get new insights.
          </span>{" "}
          <span>
            I hope the atmosphere of my portfolio also conveys my passion for
            literature and history.
          </span>{" "}
          <span>
            I believe that software engineering is an art — one through which we
            can tell countless stories.
          </span>
        </h1>
        <div className="home-buttons">
          <div>
            <Skills />
          </div>
          <div>
            <MyProjects />
          </div>
        </div>
      </div>

      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
