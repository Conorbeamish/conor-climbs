import React from 'react';
import Img from "gatsby-image";
import {Link} from "gatsby";
import styled from "styled-components";

const BlogThumbnailStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  time {
    font-style: italic;
  }
  h3 {
    margin: 0.5rem 0 0.5rem 0;
  }
  a {
    font-weight: bold;
    :hover{
      color: var(--grey)
    }
  }
  p{
    display:flex;
    justify-content: space-between;
    color: var(--grey);
  }
`;


const BlogThumbnail = ({blog}) => {
  return ( 
    <BlogThumbnailStyles>
      <Img fluid={blog.thumbnail_image?.asset.fluid} alt={blog.name} />
      <h3>{blog.name}</h3>
      <div>
        <time>{blog.date}</time>{
          blog.category.map(category => (
            <span key={category.id}> | {category.name}</span>
          ))
        }
      </div>
      <p>{blog.description}...</p>
      <Link to={`/blog/${blog.slug.current}`}>Read More <span className="arrow">➡</span></Link>
    </BlogThumbnailStyles>
  );
}
 
export default BlogThumbnail;