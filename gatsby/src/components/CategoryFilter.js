import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

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
      (a,b) => b.count - a.count
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
    <>
      {blogsWithCounts.map(category => (
        <Link key={category.id} to={`/category/${category.name}`}>
          <span>{category.name}</span>
          <span>{category.count}</span>
        </Link>
      ))}
    </>
  );
}
 
export default CategoryFilter;