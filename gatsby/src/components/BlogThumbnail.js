import React from 'react';
import Img from "gatsby-image";
import {Link} from "gatsby";
import styled from "styled-components";

const BlogThumbnailStyles = styled.div`
  border: 2px solid var(--black);
`;

const BlogThumbnail = ({blog}) => {
  return ( 
    <BlogThumbnailStyles>
      <h4>{blog.name}</h4>
      <time>{blog.date}</time>
      <p>{blog.description}</p>
      <Img fixed={blog.thumbnail_image?.asset.fixed} alt={blog.name} />
      <Link to="/">Read More...</Link>
    </BlogThumbnailStyles>
  );
}
 
export default BlogThumbnail;