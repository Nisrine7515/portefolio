import "./SkillsList.css";

const Skillslist = () => {
  return (
    <div className="skillslist-buttons">
      <ul className="allskills-buttons">
        <div>
          <button>JavaScript</button>
          <button>React</button>
          <button>Node.js</button>
          <button>Express</button>
        </div>
        <div>
          <button>Netflify</button>
          <button>Cloudinary</button>
          <button>Github</button>
        </div>
        <button>MongoDB</button>
        <button>Northflank</button>
        <button>React Native</button>
        <button>Expo</button>
      </ul>
    </div>
  );
};

export default Skillslist;
