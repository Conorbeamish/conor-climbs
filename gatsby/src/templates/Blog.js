import React from 'react';

export default function SingleBlogPage({data}){
  return (
    <h1>{data.blog.name}</h1>
  )
}

export const query = graphql`
  query($slug: String!){
    #grab the blog where slug is equal to (eq) slug
    #Slug is passed from context in the gatsby-node.js file
    blog: sanityBlog(slug: {current: {eq: $slug}}){
      name
    }
  }
`