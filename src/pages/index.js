import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: {type: {eq: "landingPage"}}) {
        body
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <main>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </main>
  )
}

export default IndexPage


export const Head = () => <title>Home Page</title>

