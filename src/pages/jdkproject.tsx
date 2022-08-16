import { Link } from "gatsby";
import React from "react";
import "./jdk.css";
import ERD from "../assets/image/ERD.png";

function Jdkproject() {
  const library = (src: string, txt: string) => {
    return (
      <Link to={src}>
        <div className="list">* {txt}</div>
      </Link>
    );
  };

  return (
    <div className="container">
      <div className="main">
        <Link to={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/63/63633.png"
            className="home"
          />
        </Link>
      </div>
      <div className="header">JDK Project</div>
      <div className="ballon_01" style={{ marginTop: "30px" }}>
        <div className="intro">
          JDK(Japan Developer Korean) <br />
          재일(在日) 한국인 개발자 정보 공유 커뮤니티 사이트
        </div>
        <div className="line" style={{ marginTop: "30px" }}></div>

        <div className="duration">개발 기간 : 2020.07.29 ~ 2020.09.12 </div>
        <div className="duration">담당 : 개인프로젝트 </div>
        <div className="skill">
          #JavaScript &nbsp; #SpringFramework &nbsp; #Oracle 11g &nbsp; #Apache
          Tomcat &nbsp; #Windows &nbsp; #GitHub &nbsp; #Eclipse
        </div>
        <div className="gitCont">
          <img
            className="git"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <a className="gitText" href="https://github.com/lanad01/JDKProject">
            https://github.com/lanad01/JDKProject{" "}
          </a>
        </div>
        <div className="line" style={{ marginTop: "30px" }}></div>

        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/G9suxlXPZbA"
            width="800px"
            height="440px"
          ></iframe>
        </div>
        <div className="line" style={{ marginTop: "30px" }}></div>

        <div className="contribution">ERD </div>
        <div className="contribution_list">
          <img src={ERD} width="100%" />
        </div>
        <div className="duration">프로젝트 상세 </div>
        <a
          className="pdfText"
          href="https://drive.google.com/file/d/13FDvvLsC0_hpP1BqujZNx22D5uuDGdJu/view?usp=sharing"
        >
          https://drive.google.com/file/d/13FDvvLsC0_hpP1BqujZNx22D5uuDGdJu/view?usp=sharing
        </a>
      </div>
      <div
        style={{ width: "100%", height: "100px", backgroundColor: "white" }}
      ></div>
    </div>
  );
}

export default Jdkproject;
