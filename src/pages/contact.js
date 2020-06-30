import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
    <SEO title="Contacts" />
    <div class="card">
        <div class="card-body">
            <p>You can contact me at any of the following locations:</p>
            <ul>
                <li>Email: <a href="mailto:appietro516@email.arizona.edu">appietro516@email.arizona.edu</a></li>
                <li>Call or Text: (520) 329-7251</li>
                <li>Discord: Appietro516#7309</li>

            </ul>
        </div>
    </div>
  </Layout>
)

export default Contact
