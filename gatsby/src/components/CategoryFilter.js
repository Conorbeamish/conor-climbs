import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const CategoryStyles = styled.div`
  a{
    &[aria-current="page"]{
      border-bottom: solid 2px var(--black);
    }
  }
`;

const countBlogsInCategory = (blogs) => {
  //Make a big array of all the categories and reduce it to an array of all total categories
  const counts = blogs
    .map((blog) => blog.category)
    .flat()
    .reduce((acc, category) => {
      //Check if existing category and tally each category if true
      const existingCategory = acc[category.id];
      if(existingCategory){
        existingCategory.count += 1
      } else {
        acc[category.id] ={
          id: category.id,
          name: category.name,
          count: 1
        } 
      }
      return acc;
    }, {});
    const sortedCategories = Object.values(counts).sort(
      (counts) => counts.name
    );
    return sortedCategories
}

const CategoryFilter = () => {
  const {blogs} = useStaticQuery(graphql`
    query{
      blogs: allSanityBlog {
        nodes {
          category{
            name
            id
          }
        }
      }
    }
  `);
  
  
  const blogsWithCounts = countBlogsInCategory(blogs.nodes);

  return (
    <CategoryStyles>
      <Link to={`/blog`}>All</Link>
      {blogsWithCounts.map(category => (
        <Link key={category.id} to={`/category/${category.name}`}>
          <span>{category.name}</span>
          <span>{category.count}</span>
        </Link>
      ))}
    </CategoryStyles>
  );
}
 
export default CategoryFilter;