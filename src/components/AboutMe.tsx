import _ from "lodash";
import { lighten } from "polished";
import React from "react";
import { css } from "@emotion/react";
import { colors } from "../styles/colors";

export const AboutMe = () => {
  return (
    <article css={[AboutMeStyles]}>
      <div css={[LeftBox]}>
        <img
          css={[MyPhoto]}
          src="https://lh3.googleusercontent.com/lEZYpUDzV-T88KKY1Kz4K9E6ShTkqGq3CKbZzUVbyu7ocLIWGT02AlJMKDNshuOwpH9Ikr7swNF6jrJrK3o4evLgfeq073i9WorRn5QBMQ_91ZDcRjjf=w600-h600-n"
        />
      </div>
      <div css={[RightBox]}>
        <h1 style={{ fontSize: "40px" }}>
          안해본 거 해보기 / 싫어하는 거 다시 해보기
        </h1>
        <li css={[RightIntro]} className="intro_text">
          좋은 사용자 경험으로 앱의 한계를 높여주는 프론트엔드 개발자가 되고
          싶습니다.
        </li>
        <li css={[RightIntro]} className="intro_text">
          쉽게 하는 개발보다는 한단계 더 고민하는 개발자가 되고 싶습니다.
        </li>
        <li css={[RightIntro]} className="intro_text">
          나만이 아닌, 팀원 모두가 쉽게 공유할 수 있는 개발을 하고 싶습니다.
        </li>
        <li css={[RightIntro]} className="intro_text">
          프레임워크의 한계를 느껴 네이티브(ios, Android)개발까지 영역을 넓히고
          싶습니다.
        </li>
      </div>
    </article>
  );
};

const RightIntro = css`
  // background-color: black;
  font-size: 24px;
`;

const AboutMeStyles = css`
  display: flex;
  // position: relative;
  overflow: hidden;
  padding: 80px 0px 80px 40px;
  min-height: 350px;
  background-size: cover;
  background-color: #eeeee4;
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
