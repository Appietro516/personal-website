import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Typewriter from 'typewriter-effect'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const GetTypeWriter = (text) => (
    <Typewriter
        options={{
            cursor: ' ',
            delay: 60,
        }}
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
    />
)

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "/" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`, `Anthony`, `Pietrofeso`, "web developer", "web", "software", "engineer"]} />
    <Container className="text-center aligner-center">
        <Hero title={ GetTypeWriter("Hi! I\'m Anthony Pietrofeso!") } text = {["Welcome to my personal website. I really enjoy all kinds of coding and data analysis work! Feel free to browse my latest ", <Link key="projects-link" to="/projects">projects</Link>,", check out my ", <a key="resume-link" href ="https://drive.google.com/file/d/1mU8UP-n07u4xBK9B1m1il1XdpsiVjmUJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>,", or ", <Link key="contacts-link" to="/contact">contact</Link>," me if you have any questions, comments, feedback, or business inquiries."]}/>

    </Container>
  </Layout>
)

export default IndexPage
