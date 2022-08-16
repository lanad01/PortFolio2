import { graphql } from "gatsby";
import { getSrc, getImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/react";
import { Footer } from "../components/Footer";
import SiteNav from "../components/header/SiteNav";
import Pagination from "../components/Pagination";
import { Wrapper } from "../components/Wrapper";
import IndexLayout from "../layouts";
import { intro } from "../styles/shared";
import config from "../website-config";
import { PageContext } from "./post";
import { useRef } from "react";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import "../styles/app.css";
import { Projects } from "../components/Projects";

export interface IndexProps {
  children: React.ReactNode;
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: any;
    header: any;
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

function IndexPage(props: IndexProps) {
  const width = getImage(props.data.header)?.width;
  const height = getImage(props.data.header)?.height;

  const topRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const skillRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);

  const onClick = (e: string) => {
    if (e == "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (e == "skills") {
      skillRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (e == "home") {
      topRef.current?.scrollIntoView({ behavior: "auto" });
    } else if (e == "project") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${getSrc(props.data.header)}`}
        />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={config.googleSiteVerification}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${getSrc(props.data.header)}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
        <meta property="og:image:width" content={width?.toString()} />
        <meta property="og:image:height" content={height?.toString()} />
      </Helmet>
      <Wrapper className="App">
        {/* <SiteHeaderContent className="site-header-content">
              <SiteTitle className="site-title"></SiteTitle>
              {/* <SiteDescription>{config.description}</SiteDescription> */}
        {/* </SiteHeaderContent> */}
        <div
          css={intro}
          className="multi-bg-example"
          style={styles.intro_photo}
          ref={topRef}
        >
          <div css={intro} style={styles.intro} className="multi-bg-example2">
            <SiteNav isHome onClick={onClick} />

            <h1 style={styles.intro_text}>
              신입 개발자 권상우의 포트폴리오 페이지
            </h1>
          </div>
        </div>
        <div ref={aboutRef} id="c" style={{}}>
          <AboutMe />
        </div>
        <div ref={skillRef}>
          <Skills />
        </div>
        <div ref={projectRef} style={{ backgroundColor: "black" }}>
          <Projects />
        </div>
        {/* <div css={[inner, Posts]}>
            <div css={[PostFeed]}>
              {props.data.allMarkdownRemark.edges.map(
                (post, index) =>
                  // filter out drafts in production
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== "production") && (
                    <PostCard key={post.node.fields.slug} post={post.node} />
                  )
              )}
            </div>
          </div> */}

        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}

        <Footer toTop={toTop} />
      </Wrapper>
    </IndexLayout>
  );
}

const styles = {
  intro_photo: {
    width: "100%",
    height: "800px",
    backgroundSize: "cover",
    // overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    background:
      "url(https://dt40dm21pj8em.cloudfront.net/uploads/froala/file/6718/개발자%20취업%201.jpg) ",
  },
  intro: {
    width: "100%",
    height: "800px",
    backgroundColor: "black",
    background: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
    textAlign: "center",
    position: "absolute",
    zIndex: 1000,
  },
  intro_text: {
    color: "white",
    opacity: 1,
    position: "relative",
    top: "200px",
    zIndex: 1,
  },
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    header: file(relativePath: { eq: "img/blog-cover.png" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, quality: 100, layout: FIXED)
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            tags
            draft
            excerpt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            author {
              name
              bio
              avatar {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    breakpoints: [40, 80, 120]
                  )
                }
              }
            }
          }
          excerpt
          fields {
            readingTime {
              text
            }
            layout
            slug
          }
        }
      }
    }
  }
`;

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

export default IndexPage;
