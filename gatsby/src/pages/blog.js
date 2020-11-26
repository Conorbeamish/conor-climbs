import React, {useState} from 'react';
import {graphql} from "gatsby";
import Bloglist from '../components/BlogList';
import CategoryFilter from '../components/CategoryFilter';


const Blog = ({data}) => {

  const [sort, setSort] = useState("ASC")

  const blogs = data.blogs.nodes

  return ( 
    <>
      <h2>Blog</h2>
      <CategoryFilter />
      <div>
        <button onClick={()=>setSort("ASC")}>Newest</button>
        <button onClick={()=>setSort("DESC")}>Oldest</button>
      </div>
      <Bloglist blogs={blogs} />
    </> 
  );
}

export const query = graphql`
  query blogQuery($category: [String]){
    blogs: allSanityBlog (
      filter:{
        category: {
          elemMatch: {
            name: {
              in: $category
            }
          }
        }
      }
      # sort:{
      #   # fields: [date]
      #   # order: DESC
      # }
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
 
export default Blog;