import { Link } from "gatsby";
import { darken } from "polished";
import React from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { colors } from "../../styles/colors";
import { SocialLink, SocialLinkFb } from "../../styles/shared";
import config from "../../website-config";
import { Facebook } from "../icons/facebook";
import { Twitter } from "../icons/twitter";
import { SubscribeModal } from "../subscribe/SubscribeModal";
import { SiteNavLogo } from "./SiteNavLogo";
import "./Header.css";

interface SiteNavProps {
  isHome?: boolean;
  isPost?: boolean;
  post?: any;
  onClick?: (e: string) => void;
  gitClick: () => void;
}

interface SiteNavState {
  showTitle: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNavState> {
  subscribe = React.createRef<SubscribeModal>();
  titleRef = React.createRef<HTMLSpanElement>();
  lastScrollY = 0;
  ticking = false;
  state = { showTitle: false };

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  componentDidMount(): void {
    this.lastScrollY = window.scrollY;
    if (this.props.isPost) {
      window.addEventListener("scroll", this.onScroll, { passive: true });
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (!this.titleRef || !this.titleRef.current) {
      return;
    }

    if (!this.ticking) {
      requestAnimationFrame(this.update);
    }

    this.ticking = true;
  };

  update = () => {
    if (!this.titleRef || !this.titleRef.current) {
      return;
    }

    this.lastScrollY = window.scrollY;

    const trigger = this.titleRef.current.getBoundingClientRect().top;
    const triggerOffset = this.titleRef.current.offsetHeight + 35;

    // show/hide post title
    if (this.lastScrollY >= trigger + triggerOffset) {
      this.setState({ showTitle: true });
    } else {
      this.setState({ showTitle: false });
    }

    this.ticking = false;
  };

  render() {
    const { isHome = false, isPost = false, post = {} } = this.props;
    const style = {
      backgroundColor: "black",
      border: "1px solid white",
      borderRadius: "30px",
      marginLeft: "20px",
      color: "white",
      height: "40px",
      width: "40px",
      marginTop: "10px",
      textAlign: "center",
    };
    const onClick = (e: string) => {
      this.props.onClick(e);
    };

    return (
      <>
        {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
        <nav css={SiteNavStyles}>
          <SiteNavLeft className="site-nav-left">
            {/* {!isHome && <SiteNavLogo />} */}
            <SiteNavContent css={[this.state.showTitle ? HideNav : ""]}>
              <ul css={NavStyles} style={{ zIndex: 1000 }} role="menu">
                <li role="menuitem">
                  <div onClick={() => onClick("home")} css={item}>
                    Home
                  </div>
                </li>
                <li role="menuitem" style={{}}>
                  <div onClick={() => onClick("about")} css={item}>
                    ABOUT
                  </div>
                </li>
                <li role="menuitem">
                  <div onClick={() => onClick("skills")} css={item}>
                    스킬
                  </div>
                </li>
                <li role="menuitem">
                  <div onClick={() => onClick("project")} css={item}>
                    참여 프로젝트
                  </div>
                </li>
                <Link style={{ marginLeft: "20px" }} to={"https://github.com/"}>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "white",
                      borderRadius: "40px",
                      marginTop: "5px",
                      marginLeft: "10px",
                      padding: "4px",
                    }}
                    src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"
                  ></img>
                </Link>
                <Link
                  style={{ marginLeft: "20px" }}
                  to={"https://lanad.tistory.com/"}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "white",
                      borderRadius: "40px",
                      marginTop: "5px",
                      marginLeft: "10px",
                    }}
                    src="https://play-lh.googleusercontent.com/HOwb9RHtv3AsCEyB-v1ni4z1TMgjqUJRP9FWFLNVsG-D8xoxxtfjGigzudTgSs0l8_g"
                  ></img>
                </Link>

                {/* <li role="menuitem">
                  <Link
                    to="https://lanad.tistory.com/"
                    activeClassName="nav-current"
                    css={item}
                  >
                    T-Story
                  </Link>
                </li>
                <li role="menuitem">
                  <Link
                    to="https://github.com/lanad01"
                    activeClassName="nav-current"
                  >
                    GitHub
                  </Link>
                </li> */}
              </ul>
              {isPost && (
                <NavPostTitle ref={this.titleRef} className="nav-post-title">
                  {post.title}
                </NavPostTitle>
              )}
            </SiteNavContent>
          </SiteNavLeft>
        </nav>
      </>
    );
  }
}

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)) */
  background: ${darken("0.05", colors.darkgrey)};

  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  // overflow-y: hidden;
  height: 64px;
  font-size: 1.9rem;
  font-family: none;
`;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  // overflow-x: auto;
  // overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  // margin-right: 10px;
  // padding: 0px 10px 80px;
  font-weight: 500;
  // letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 5vw;
  }
`;

const SiteNavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

const item = css`
  position: relative;
  display: block;
  padding: 16px 12px;
  color: #fff;
  transition: opacity 0.35s ease-in-out;
  // font-family: serif;
  font-family: Roboto;
  cursor: pointer;
`;

const NavStyles = css`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 64px;
  z-index: 1000;
  display: flex;
  margin: 0px 0px 0px 0px;
  padding-right: 20px;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: "";
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 0.5;
  }

  .nav-current {
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  height: 64px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  margin: 0 0 0 10px;
  border: #fff 1px solid;
  color: #fff;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }
`;

const NavPostTitle = styled.span`
  visibility: hidden;
  position: absolute;
  top: 9px;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: none;
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateY(175%);

  .dash {
    left: -25px;
  }

  .dash:before {
    content: "– ";
    opacity: 0.5;
  }
`;

const HideNav = css`
  ul {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-175%);
  }
  .nav-post-title {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export default SiteNav;
