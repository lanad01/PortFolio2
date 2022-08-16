import _ from "lodash";
import React from "react";
import { css } from "@emotion/react";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="AboutMeStyles">
      <div css={[LeftBox]}>
        <img
          css={[MyPhoto]}
          src="https://lh3.googleusercontent.com/lEZYpUDzV-T88KKY1Kz4K9E6ShTkqGq3CKbZzUVbyu7ocLIWGT02AlJMKDNshuOwpH9Ikr7swNF6jrJrK3o4evLgfeq073i9WorRn5QBMQ_91ZDcRjjf=w600-h600-n"
        />
      </div>
      <div className="right">
        <h1 className="header">안해본 거 해보기 / 싫어하는 거 다시 해보기</h1>
        <li className="intro_text">
          좋은 사용자 경험으로 앱의 한계를 높여주는 프론트엔드 개발자가 되고
          싶습니다.
        </li>
        <li className="intro_text">
          쉽게 하는 개발보다는 한단계 더 고민하는 개발자가 되고 싶습니다.
        </li>
        <li className="intro_text">
          나만이 아닌, 팀원 모두가 쉽게 공유할 수 있는 개발을 하고 싶습니다.
        </li>
        <li className="intro_text">
          프레임워크의 한계를 느껴 네이티브(ios, Android)개발까지 영역을 넓히고
          싶습니다.
        </li>
      </div>
    </div>
  );
};

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
