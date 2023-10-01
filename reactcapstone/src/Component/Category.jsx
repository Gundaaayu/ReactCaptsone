import React from "react";
import "../Component/Category.css";
import actionimg from '../assets/actionimg.png'
import drama from '../assets/drama.png'
import fantasy from '../assets/fantasy.png'
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";

const Category = () => {
  return (
    <div>
      <div className="Container">
        <div className="leftcontainer">
          <div>
            <h1 className="heading">Super app</h1>
          </div>
          <div>
            <h1 className="subheading">Choose Your Entertainment Category</h1>
          </div>
          <div className="categorySelected">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="condition">
            <p>Minimum 3 category required</p>
          </div>
        </div>
        <div className="rightcontainer">
          <div className="items itm1" style={{ backgroundColor: "#FF5209" }}>
            <div className="title">
              <h3>Action</h3>
            </div>
            <div className="titleImage">
              <img src={actionimg} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm2" style={{ backgroundColor: "#D7A4FF" }}>
            <div className="title">
              <h3>Drama</h3>
            </div>
            <div className="titleImage">
              <img src={drama} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm3" style={{ backgroundColor: "#11B800" }}>
            <div className="title">
              <h3>Romance</h3>
            </div>
            <div className="titleImage">
              <img src={romance} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm4" style={{ backgroundColor: "#84C2FF" }}>
            <div className="title">
              <h3>Thriller</h3>
            </div>
            <div className="titleImage">
              <img src={thriller} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm5" style={{ backgroundColor: "#902500" }}>
            <div className="title">
              <h3>Western</h3>
            </div>
            <div className="titleImage">
              <img src={western} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm6" style={{ backgroundColor: "#7358FF" }}>
            <div className="title">
              <h3>Horror</h3>
            </div>
            <div className="titleImage">
              <img src={horror} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm7" style={{ backgroundColor: "#FF4ADE" }}>
            <div className="title">
              <h3>Fantasy</h3>
            </div>
            <div className="titleImage">
              <img src={fantasy} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm8" style={{ backgroundColor: "#E61E32" }}>
            {" "}
            <div className="title">
              <h3>Music</h3>
            </div>
            <div className="titleImage">
              <img src={music} alt="image" width="auto" />
            </div>
          </div>
          <div className="items itm9" style={{ backgroundColor: "#6CD061" }}>
            <div className="title">
              <h3>Fiction</h3>
            </div>
            <div className="titleImage">
              <img src={fiction} alt="image" width="auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
