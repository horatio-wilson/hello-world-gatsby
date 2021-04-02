import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Gatsby Site</title>
        <link rel="canonical" href="http://localhost:9000/" />
      </Helmet>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}