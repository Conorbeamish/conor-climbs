import React, {useState} from 'react';
import {graphql} from "gatsby";
import Bloglist from '../components/BlogList';
import CategoryFilter from '../components/CategoryFilter';
import styled from 'styled-components';

const BlogPageStyles = styled.div`
  button{
    font-size: 1rem;
    color: var(--black);
    padding: 0;
    margin: 0.5rem;
  }
  .active {
    border-bottom: 1px solid var(--black);
  }
`
const Blog = ({data}) => {

  const [sort, setSort] = useState("DSC");

  const blogs = data.blogs.nodes

  const blogsASC = blogs.slice().sort((a,b) => new Date(a.date) - new Date(b.date));

  const blogsDSC =  blogs.slice().sort((a,b) => new Date(b.date) - new Date(a.date));

  return ( 
    <BlogPageStyles>
      <h2>Blog</h2>
      <CategoryFilter />
      <div>
        <button onClick={()=>setSort("DSC")} className={sort === "DSC" && "active"}>Newest</button>
        |
        <button onClick={()=>setSort("ASC")} className={sort=== "ASC" && "active"}>Oldest</button>
      </div>
      <Bloglist blogs={sort === "ASC" ? blogsASC : blogsDSC} />
    </BlogPageStyles> 
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
      #   fields: [date]
      #   order: ASC
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