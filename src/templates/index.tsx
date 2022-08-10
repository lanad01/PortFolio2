import { graphql } from "gatsby";
import { getSrc, getImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

import { css } from "@emotion/react";

import { Footer } from "../components/Footer";
import SiteNav from "../components/header/SiteNav";
import Pagination from "../components/Pagination";
import { PostCard } from "../components/PostCard";
import { Wrapper } from "../components/Wrapper";
import IndexLayout from "../layouts";
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
  AuthorProfileImage,
} from "../styles/shared";
import config from "../website-config";
import { PageContext } from "./post";
import { cont } from "../content/cont";
import { CustomPost } from "../components/CustomPost";

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
      <Wrapper>
        <div
          css={[outer, SiteHeader, SiteHeaderStyles]}
          className="site-header-background"
          style={{
            backgroundImage: `url('${getSrc(props.data.header)}')`,
          }}
        >
          <div css={inner}>
            <SiteNav isHome />
            {/* <SiteHeaderContent className="site-header-content">
              <SiteTitle className="site-title"></SiteTitle>
              {/* <SiteDescription>{config.description}</SiteDescription> */}
            {/* </SiteHeaderContent> */}
          </div>
        </div>

        <main id="site-main" css={[SiteMain, outer]}>
          {/* <img
              style={{ width: '150px', height: '150px', marginTop: '50px', borderRadius: '100px' }}
              src="https://lh3.googleusercontent.com/lEZYpUDzV-T88KKY1Kz4K9E6ShTkqGq3CKbZzUVbyu7ocLIWGT02AlJMKDNshuOwpH9Ikr7swNF6jrJrK3o4evLgfeq073i9WorRn5QBMQ_91ZDcRjjf=w600-h600-n"
            /> */}
          <div css={[inner, Posts]}>
            <div css={[PostFeed]}>
              {cont.map((v, i) => {
                return <CustomPost data={v} />;
              })}
            </div>
          </div>
          <div css={[inner, Posts]}>
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
          </div>
        </main>

        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

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