import React from 'react';
import BlogThumbnail from './BlogThumbnail';
import styled from "styled-components";

const BlogListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
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