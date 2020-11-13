import React from 'react';
import BlogThumbnail from './BlogThumbnail';
import styled from "styled-components";

const BlogListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Bloglist = ({blogs}) => {
  return (
    <BlogListStyles>
      {blogs.map(blog => {
        return(
          <BlogThumbnail key={blog.id} blog={blog}/>
        )
      })}
    </BlogListStyles>
  );
}
 
export default Bloglist;