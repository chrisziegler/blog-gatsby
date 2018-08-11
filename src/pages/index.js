import React from 'react'
import Link from 'gatsby-link'

// data destructured off props
const IndexPage = ({ data }) => {
  // edges destructured off data as posts
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* Gatsby pages default routing
      <Link to="/page-2/">Go to page 2</Link> */}
      <h2>Index</h2>

      <ul style={{ background: 'whitesmoke', marginLeft: 0, padding: 10 }}>
        {posts.map(post => (
          <li style={{ listStyle: 'none' }} key={post.node.id}>
            <Link
              to={post.node.frontmatter.path}
              style={{ textDecoration: 'none' }}
            >
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// this is where things get a little different
// in our template/posts.js query before we had:
// query BlogPostByPath($path: String!) { ... }
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
