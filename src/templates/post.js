import React from 'react'
import Helmet from 'react-helmet'

// data will be a prop that gets injectd by the GraphQL query
export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
// query for individual blog posts takes in a graphQL variable
// uses markdownRemark syntax to return items in html template
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
