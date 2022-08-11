import { format } from "date-fns";
import { Link } from "gatsby";
import _ from "lodash";
import { lighten } from "polished";
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import GlobalStyle from "../styles/GlobalStyle";
import { Font } from "../styles/shared";

export interface CustomPostProps {
  data: CustomProps;
}
export interface CustomProps {
  image: any;
  excerpt: string;
  title: string;
  date: string;
  draft?: boolean;
  tags: string[];
  name: string;
  imgUri: string;
  to: string;
  subTitle: string;
}

export const CustomPost = ({ data }: CustomPostProps) => {
  const date = new Date(data.date);
  const datetime = format(date, "yyyy-MM-dd");
  const displayDatetime = format(date, "dd LLL yyyy");
  return (
    <article css={[PostCardStyles]}>
      <Link to={data.to}>
        <img src={data.imgUri} style={{ width: "300px", height: "200px" }} />
      </Link>
      <Link
        className="post-card-content-link"
        css={PostCardContentLink}
        to={data.to}
      >
        <PostCardHeader className="post-card-header">
          <h4 css={[PostCardExcerpt]} style={{ color: "#fff" }}>
            {data.title}
          </h4>
          <PostCardTitle css={NoImage} className="post-card-title">
            {data.subTitle}
          </PostCardTitle>
        </PostCardHeader>
      </Link>
      <PostCardExcerpt className="post-card-excerpt">
        <p>{data.excerpt || data.excerpt}</p>
      </PostCardExcerpt>
      <time dateTime={datetime} style={{ color: "white" }}>
        {displayDatetime}
      </time>{" "}
    </article>
  );
};

const PostCardStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px;
  padding: 0 20px 40px;
  min-height: 220px;
  background-size: cover;
`;

const NoImage = css`
  position: relative;
  display: block;
  color: white;
  font-size: 16px;
  :hover {
    text-decoration: none;
  }
`;

const PostCardLarge = css`
  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding-bottom: 40px;
    min-height: 280px;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PostCardContentLink = css`
  position: relative;
  display: block;
  /* color: var(--darkgrey); */
  color: ${colors.darkgrey};

  :hover {
    text-decoration: none;
  }
`;

const PostCardPrimaryTag = styled.div`
  margin: 0 0 0.2em;
  /* color: var(--blue); */
  color: ${colors.blue};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const PostCardTitle = styled.h2`
  margin: 0 0 0.4em;
  line-height: 1.15em;
  transition: color 0.2s ease-in-out;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
  @font-face{
    font-family: "Jua-Regular";
    src: url("../assets/font/Jua-Regular.ttf");

  @font-face {
    font-family: "JuaRegular";
    src: url("../assets/font/Jua-Regular.ttf") format("ttf");
    url("../assets/font/Jua-Regular.ttf") format('ttf'),
    url("../assets/font/Jua-Regular.ttf") format('truetype')
    font-weight: normal;
    font-style: normal;
  }
`;

const PostCardExcerpt = styled.section`
  font-family: "Jua-Regular";

  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten("0.1", colors.midgrey)} !important;
  }
`;

const PostCardMeta = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 0;
`;

const PostCardBylineContent = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  margin: 4px 0 0 10px;
  /* color: color(var(--midgrey) l(+10%)); */
  color: ${lighten("0.1", colors.midgrey)};
  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  span {
    margin: 0;
  }

  a {
    /* color: color(var(--darkgrey) l(+20%)); */
    color: ${lighten("0.2", colors.darkgrey)};
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const PostCardHeader = styled.header`
  margin: 15px 0 0;
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
