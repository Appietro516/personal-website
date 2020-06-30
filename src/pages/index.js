import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Typewriter from 'typewriter-effect';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const GetTypeWriter = (text) => (
    <Typewriter
        options={{
            cursor: '',
            delay: 60,
        }}
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
    />
)
const IndexPage = () => (
  <Layout pageInfo={{ pageName: "/" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center d-inline-flex h-100">
      <Row className="justify-content-center align-items-center">
        <Col>
          <Hero title={ GetTypeWriter("Hi! I\'m Anthony Pietrofeso!") } text="Welcome to my personal website. I really enjoy all kinds of programming and data analysis work! Feel free to browse my latest projects, check out my resume, or contact me if you have any questions, comments, feedback, or business inquiries."/>
        </Col>
      </Row>
    </Container>
  </Layout>
)


// <div id="index-content" class="card">
//     <div className="card-body">
//         HI
//         HI
//     </div>
// </div>
export default IndexPage
