import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, LinkTo } from "./styles"

export default function Header({ children }) {
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
    <Container>
      <div>
        <h4>{data.site.siteMetadata.title}</h4>
      </div>

      <nav>
        <LinkTo>hi</LinkTo>
        <LinkTo>blog</LinkTo>
        <LinkTo>portfólio</LinkTo>
      </nav>
    </Container>
  )
}
