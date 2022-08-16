import { Link } from "gatsby";
import React from "react";
import "./anilog.css";

function Anilog() {
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
        <img src="https://i.imgur.com/sUz3Huy.png" id="logo"></img>
      </div>
      <div className="cont">
        <div id="ballon_01">
          <div id="intro" className="intro">
            동물을 사랑하는 사람들을 위한 SNS 및 유기 동물 보호 관리 플랫폼 앱
          </div>
          <div className="line"></div>
          <div id="duration">개발 참여 기간 : 2021.10.14 ~ 2022.08.14 </div>
          <div id="duration">담당 : 프론트엔드 </div>
          <div id="skill">
            #JavaScript &nbsp; #ReactNative &nbsp; #MongoDB &nbsp; #AWS &nbsp;
            #VS Code &nbsp; #macOS &nbsp; #GitHub
          </div>
          <div className="gitCont">
            <img
              id="git"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <a id="gitText" href="https://github.com/newddong/anilog2">
              : https://github.com/newddong/anilog2
            </a>
          </div>
          <div className="line" style={{ marginTop: "5vh" }}></div>
          <div id="duration">직접 구현한 화면 예시</div>
          <div className="gif">
            <div id="gif" className="login"></div>
            <div id="gif" className="feedProfileHome"></div>
            <div id="gif" className="feedWrite"></div>
            <div id="gif" className="Location"></div>
          </div>
          <div className="gif">
            <div id="gif" className="modal"></div>
            <div id="gif" className="Community"></div>
            <div id="gif" className="CommWrite"></div>
            <div id="gif" className="Search"></div>
          </div>
          <div className="line" style={{ marginTop: "5vh" }}></div>
          <div id="contribution">프로젝트 기여 요소</div>
          <div id="contribution_list">
            <li>Atomic 컴포넌트 개발 방식에 맞춰 기초 컴포넌트 개발 담당</li>
            <li>프론트엔드 기능 구현(동물보호, 커뮤니티, 프로필 홈, 댓글)</li>
            <li> 구글 API, 주소 API 등을 토대로 위치 및 지도 기능 개발</li>
            <li>무한 스크롤 리스트 아이템의 렌더링 최적화(Flatlist) </li>
            <li> 네비게이션 동작 최적화 </li>
          </div>
          <div id="contribution" style={{ marginTop: "2vh" }}>
            주요 활용 라이브러리
          </div>
          <div id="contribution_list">
            {library(
              "https://github.com/bernard-kms/react-daum-postcode",
              "react-daum-postcode"
            )}
            {library(
              "https://github.com/michalchudziak/react-native-geolocation",
              "react-native-community/geolocation"
            )}
            {library(
              "https://github.com/react-navigation/react-navigation",
              "react-navigation"
            )}
            {library(
              "https://github.com/react-native-maps/react-native-maps",
              "react-native-maps"
            )}
            {library(
              "https://www.npmjs.com/package/react-native-pell-rich-editor",
              "react-native-pell-rich-editor"
            )}
            {library(
              "https://www.npmjs.com/package/react-native-webview",
              "react-native-webview"
            )}
          </div>
        </div>
      </div>

      <div
        style={{ width: "100%", height: "100px", backgroundColor: "white" }}
      ></div>
    </div>
  );
}

export default Anilog;
