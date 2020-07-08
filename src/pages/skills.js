import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/_skills.scss';

const Skills = () => (
  <Layout pageInfo={{ pageName: "skills" }}>
    <SEO title="Page two" />
    <h1 id="content-div">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Skills