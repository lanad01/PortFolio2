import { Link } from "gatsby";
import React from "react";
import "./todo.css";
import TaskAni from "../assets/image/TaskAni.gif";
import TodoLogin from "../assets/image/TodoLogin.png";
import Assign1 from "../assets/image/Assign1.png";
import Assign2 from "../assets/image/Assign2.png";
import Assign3 from "../assets/image/Assign3.png";
import Calendar from "../assets/image/Calendar.png";
import Photo1 from "../assets/image/Photo1.png";
import TodoProfile from "../assets/image/TodoProfile.png";
import TodoProfileEdit from "../assets/image/TodoProfileEdit.png";
import PwdCh from "../assets/image/PwdCh.png";
import Task1 from "../assets/image/Task1.png";
import Task2 from "../assets/image/Task2.png";
import Task3 from "../assets/image/Task3.png";
import Taskdelete from "../assets/image/Taskdelete.gif";

function Todo() {
  const library = (src: string, txt: string) => {
    return (
      <Link to={src}>
        <div className="list">* {txt}</div>
      </Link>
    );
  };

  const line = () => {
    return <div className="line" style={{ marginTop: "30px" }}></div>;
  };

  const process = (src: string, txt: string) => {
    return (
      <div className="process">
        <img src={src} className="pro_img"></img>
        <div className="pro_txt">{txt}</div>
      </div>
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
      <div className="header">To Do List</div>
      <div className="ballon_01" style={{ marginTop: "30px" }}>
        <div className="intro">오늘의 할일 체크를 위한 개인 앱 제작</div>
        {line()}
        <div className="duration">개발 기간 : 2020.07.29 ~ 2020.09.12 </div>
        <div className="duration">담당 : 개인프로젝트 </div>
        <div className="skill">
          #JavaScript &nbsp; #ReactNative &nbsp; #SQLite &nbsp; #FireBase &nbsp;
          #VS Code &nbsp; #macOS &nbsp; #GitHub
        </div>
        <div className="gitCont">
          <img
            className="git"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <a
            className="gitText"
            href="https://github.com/lanad01/TodoApp_ver0.2"
          >
            https://github.com/lanad01/TodoApp_ver0.2{" "}
          </a>
        </div>
        {line()}
        <div className="contribution" style={{ marginTop: "20px" }}>
          사용화면
        </div>
        <div className="process_cont">
          {process(TodoLogin, "로그인")}
          {process(Assign1, "회원가입-1")}
          {process(Assign2, "회원가입-2")}
          {process(Assign3, "회원가입-3")}
        </div>
        <div className="line" style={{ marginTop: "30px" }}></div>

        <div className="process_cont">
          {process(TodoProfile, "프로필")}
          {process(TodoProfileEdit, "프로필 수정")}
          {process(Photo1, "사진 변경")}
          {process(PwdCh, "비밀번호 변경")}
        </div>
        <div className="line" style={{ marginTop: "30px" }}></div>

        <div className="process_cont">
          {process(TaskAni, "Task 가이드")}
          {process(Task1, "Task 탭 메인화면")}
          {process(Task2, "Task 추가")}
          {process(Task3, "Task 추가 완료")}
        </div>
        <div
          className="process_cont"
          style={{ marginTop: "20px", width: "48%" }}
        >
          {process(Taskdelete, "Task 삭제")}
          {process(Calendar, "달력 화면")}
        </div>

        {line()}
        <div className="contribution" style={{ marginTop: "40px" }}>
          주요 활용 라이브러리
        </div>
        <div className="contribution_list">
          {library(
            "https://github.com/invertase/react-native-firebase",
            "react-native-firebase"
          )}
          {library(
            "https://www.npmjs.com/package/@react-native-google-signin/google-signin",
            "react-native-google-signin"
          )}
          {library(
            "https://github.com/react-navigation/react-navigation",
            "react-navigation"
          )}
          {library(
            "https://github.com/react-native-seoul/react-native-kakao-login",
            "react-native-seoul/kakao-login"
          )}
          {library(
            "https://www.npmjs.com/package/react-native-push-notification",
            "react-native-push-notification"
          )}
          {library(
            "https://docs.swmansion.com/react-native-reanimated/",
            "react-native-reanimated"
          )}
          {library(
            "https://www.npmjs.com/package/react-native-splash-screen",
            "react-native-splash-screen"
          )}
          {library(
            "https://www.npmjs.com/package/react-native-sqlite-storage",
            "react-native-sqlite-storage"
          )}
          {library("https://react-redux.js.org/", "react-redux")}
        </div>
      </div>
      <div
        style={{ width: "100%", height: "100px", backgroundColor: "white" }}
      ></div>
    </div>
  );
}

export default Todo;
