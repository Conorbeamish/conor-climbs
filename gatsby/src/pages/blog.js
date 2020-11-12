import React from 'react';
import {graphql} from "gatsby";
import Bloglist from '../components/BlogList';

const Blog = ({data}) => {
  const blogs = data.blogs.nodes
  return ( 
    <>
      <h2>Blog</h2>
      <Bloglist blogs={blogs} />
    </> 
  );
}

export const query = graphql`
  query blogQuery{
    blogs: allSanityBlog {
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
          fluid(maxWidth: 400){
            ...GatsbySanityImageFluid
          }
        }
      }
      image_2 {
        _key
        _type
        _rawAsset
        _rawHotspot
        _rawCrop
      }
      image_1 {
        _key
        _type
        _rawAsset
        _rawHotspot
        _rawCrop
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
 
export default Blog;