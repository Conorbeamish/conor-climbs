const path = require("path");

async function turnBlogIntoPages({graphql, actions}){
  const blogTemplate = path.resolve("./src/templates/Blog.js");
  //Query Pages
  const {data} = await graphql(`
    query {
      blogs: allSanityBlog{
        nodes{
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.blogs.nodes.forEach((blog) => {
    actions.createPage({
      path: `blog/${blog.slug.current}`,
      component: blogTemplate,
      context: {
        slug: blog.slug.current,
      }
    })
  })
}

exports.createPages = async function(params){
  await turnBlogIntoPages(params);
}