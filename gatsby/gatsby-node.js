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

async function turnCategoriesIntoPages({graphql, actions}){
  const categoryTemplate = path.resolve("./src/pages/blog.js");
  const {data} = await graphql(`
    query {
      category: allSanityCategory {
        nodes{
          name
          id
        }
      }
    }
  `);
  data.category.nodes.forEach((category) => {
    actions.createPage({
      path:`category/${category.name}`,
      component: categoryTemplate,
      context: {
        category: category.name,
      }
    })
  })
}

exports.createPages = async function(params){
  await Promise.all([
    turnBlogIntoPages(params),
    turnCategoriesIntoPages(params),
  ]);
}