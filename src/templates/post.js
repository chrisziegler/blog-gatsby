import React from 'react'
import Helmet from 'react-helmet'

// data will be a prop that gets injectd by the GraphQL query
export default function Template({ data }) {
  // just some js destructuring
  // markdownRemark will be reassigned as post
  const { markdownRemark: post } = data
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
// the query is looking for a given blogpost
// it's getting the path
// then it's finding the markdown file using markdownRemark
// where the frontmatter. path is equal to the $path
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
