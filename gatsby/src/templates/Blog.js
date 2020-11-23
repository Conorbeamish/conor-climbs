import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'

const BlogStyles = styled.article`
  a{
    font-weight: bold;
    &:hover{
      color: var(--grey);
    }
  }
  img{
    margin: 0 auto;
    display:block;
    max-width: 100%;
  }
  .hero{
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    height: 50vh;
  }
`

const SingleBlogPage = ({data}) => {
  const {name, date, _rawContent, category,} = data.blog;
  const landingImg = data.blog.landing_image.asset.fluid;
  return (
    <BlogStyles>
      <BackgroundImage 
        className="hero" 
        fluid={landingImg}
      >
          <h1>{name}</h1>
          {category.map(item => (
          <div key={item.name}> {item.name} </div>
          ))}
        <div>{date}</div>
      </BackgroundImage>

      <BlockContent 
        blocks={_rawContent} 
        projectId={"ky69fho1"} 
        dataset={"production"}
      />
    </BlogStyles>
  )
}

export const query = graphql`
  query($slug: String!){
    #grab the blog where slug is equal to (eq) slug
    #Slug is passed from context in the gatsby-node.js file
    blog: sanityBlog(slug: {current: {eq: $slug}}){
      name
      description
      landing_image {
        asset {
          fixed(width: 200, height: 200){
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 400, maxHeight: 400){
            ...GatsbySanityImageFluid
          }
        }
      }
      date
      _rawContent
      slug {
        current
      }
      category {
        id
        name
      }
    }
  }
`

export default SingleBlogPage;