import React from "react"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Hello from Gatsby</h3>
    <p>
      Let's go for a <FaBeer />
    </p>
    <ButtonWrapper>Click Me</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`

export default IndexPage
