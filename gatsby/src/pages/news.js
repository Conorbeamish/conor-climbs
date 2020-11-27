import React from 'react';
import {graphql} from "gatsby";
import Bloglist from '../components/BlogList';

const News = ({data}) => {

  const blogs = data.blogs.nodes

  return (  
    <>
    <h2>News</h2>
    <p></p>
    <h3>Read the latest posts below...</h3>
    <Bloglist blogs={blogs}/>
    </>
  );
}

export const query = graphql`
  query newsQuery{
    blogs: allSanityBlog (
      sort:{
        fields: [date]
        order: DESC
      }
      limit: 2
    ) {
    nodes {
      name
      description
      landing_image {
        _key
        _type
        _rawAsset
        _rawHotspot
        _rawCrop
      }
      date
      content {
        _key
        _type
        style
        list
        _rawChildren
      }
      thumbnail_image{
        asset {
          fixed(width: 200, height: 200){
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 400, maxHeight: 400){
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
      category {
        id
        name
      }
    }
  }
  }
`;
 
export default News;