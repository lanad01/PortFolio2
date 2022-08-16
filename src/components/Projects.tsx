import _ from "lodash";
import { lighten } from "polished";
import React from "react";
import { css } from "@emotion/react";
import { colors } from "../styles/colors";
import "./Skills.css";
import { CustomPost } from "./CustomPost";
import { PostFeed } from "../styles/shared";
import { cont } from "../content/cont";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="Projects" id="s">
      {/* <div css={[PostFeed]} style={{ backgroundColor: "black" }}> */}
      {cont.map((v, i) => {
        return <CustomPost data={v} />;
      })}
      {/* </div> */}
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
