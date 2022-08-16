import _ from "lodash";
import { lighten } from "polished";
import React from "react";
import { css } from "@emotion/react";
import { colors } from "../styles/colors";
import "./Skills.css";
import Simage from "./SImage";

export const imgUri = {
  JS: "https://blog.kakaocdn.net/dn/bd3qHy/btqURulLcRv/6lJaF5KICc3Ev1gWb84XqK/img.png",
  CSS: "https://weaklion.github.io/React-PortFolio/static/media/css.faae11a6.png",
  HTML: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  JSX: "https://thumbs.dreamstime.com/b/jsx-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-ui-135745157.jpg",
  REACT:
    "https://images.velog.io/images/jini_eun/post/107f5cfb-e97c-4c4c-b997-06098062e5b3/image.png",
  RN: "https://comart.io/images/rn/react-native.png",
  ES6: "https://t1.daumcdn.net/cfile/tistory/99623E335A17DBD241",
  TS: "https://weaklion.github.io/React-PortFolio/static/media/typescript.29edd163.png",
  AP: "https://images.velog.io/images/falling_star3/post/9e85154d-8f0e-4c9f-a1da-de347cb31f3e/%ED%86%B0%EC%BA%A3.JPG",
  JAVA: "https://weaklion.github.io/React-PortFolio/static/media/java.74e943d8.png",
  SP: "https://t1.daumcdn.net/cfile/tistory/9941A1385B99240D2E",
  ECLIPSE: "https://t1.daumcdn.net/cfile/tistory/990D854C5EB11C7A19",
  VS: "https://images.velog.io/images/leobang17/post/f481688c-f22f-4bac-8213-2f2bc24e3d69/vscode.jpeg",
  SENT: "https://images.velog.io/images/jay/post/028b7b0a-d9cc-44ec-939c-74c4ca32f0b0/sentry.png",
  GIT: "https://images.velog.io/images/mouse0429/post/19b9158e-731a-4e60-ab43-efcdafd9244e/%EA%B9%83%ED%97%88%EB%B8%8C.png",
  JQ: "https://t1.daumcdn.net/cfile/tistory/2541853857EA02BC16",
};

export const Skills = () => {
  return (
    <div className="Skill" id="s">
      <h1 className="" style={{ paddingTop: "20px" }}>
        Skills
      </h1>
      <div className="Skill_Content">
        <h2 className="Skill_Title">웹 퍼블리싱</h2>
        <span className="Skill_Content">
          <div className="SKill_box">
            <Simage url={imgUri.JS} familiar="tried"></Simage>
            <Simage url={imgUri.CSS} familiar="tried"></Simage>
            <Simage url={imgUri.HTML} familiar="tried"></Simage>
          </div>
        </span>
        <h2 className="Skill_Title"> Front-end</h2>
        <span className="Skill_Content">
          <div className="SKill_box">
            <Simage url={imgUri.JSX} familiar="familiar"></Simage>
            <Simage url={imgUri.ES6} familiar="familiar"></Simage>
            <Simage url={imgUri.REACT} familiar="tried"></Simage>
            <Simage url={imgUri.TS} familiar="tried"></Simage>
            <Simage url={imgUri.SP} familiar="tried"></Simage>
            <Simage url={imgUri.JQ} familiar="tried"></Simage>
            {/* <Simage url={imgUri.RN} familiar="familiar"></Simage> */}
          </div>
        </span>
        <h2 className="Skill_Title">Back-end</h2>
        <span className="Skill_Content">
          <Simage url={imgUri.AP} familiar="tried"></Simage>
          <Simage url={imgUri.JAVA} familiar="tried"></Simage>
        </span>
        <h2 className="Skill_Title"> 모바일 앱 개발</h2>
        <span className="Skill_Content">
          <div className="SKill_box">
            <Simage url={imgUri.JSX} familiar="familiar"></Simage>
            <Simage url={imgUri.RN} familiar="familiar"></Simage>
            <Simage url={imgUri.JS} familiar="familiar"></Simage>
            <Simage url={imgUri.JAVA} familiar="tried"></Simage>
          </div>
        </span>
        <h2 className="Skill_Title">개발 Tool</h2>
        <span className="Skill_Content">
          <Simage url={imgUri.ECLIPSE} familiar="tried"></Simage>
          <Simage url={imgUri.VS} familiar="familiar"></Simage>
          <Simage url={imgUri.SENT} familiar="tried"></Simage>
          <Simage url={imgUri.GIT} familiar="familiar"></Simage>
        </span>
      </div>
    </div>
  );
};

const SkillsHeader = css`
  width: 100%;
  padding-top: 40px;
  height: 100px;
`;

const SkillsStyles = css`
  position: relative;
  overflow: hidden;
  min-height: 350px;
  background-size: cover;
  background-color: #d4d5cc;
  text-align: center;
  .Skill_image_container {
    background-image: url(https://mdn.mozillademos.org/files/11305/firefox.png),
      url(https://mdn.mozillademos.org/files/11307/bubbles.png),
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom right, left, right;
    position: absolute;
    width: 100px;
    height: 100px;
  }
 
`;

const RightBox = css`
  padding: 0 60px 40px;
  .intro_text {
    // background-color: black;
    font-family: Times;
  }
`;

const LeftBox = css`
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  padding: 0 20px 40px;
  background-size: cover;
`;

const MyPhoto = css`
  width: 300px;
  border-radius: 200px;
`;

export const StaticAvatar = css`
  display: block;
  overflow: hidden;
  margin: 0 0 0 -6px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;

  @media (prefers-color-scheme: dark) {
    /* border-color: color(var(--darkgrey) l(+2%)); */
    border-color: ${lighten("0.02", colors.darkgrey)};
  }
`;

export const AuthorProfileImage = css`
  display: block;
  width: 100%;
  height: 100%;
  /* background: color(var(--lightgrey) l(+10%)); */
  background: ${lighten("0.1", colors.lightgrey)};
  border-radius: 100%;
  object-fit: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;
