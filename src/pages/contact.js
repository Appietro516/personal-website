import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
    <SEO title="Contacts" />
    <div className="card m-3 mt-4 page">
        <div className ="card-body">
            <h1 className ="text-center mb-4">Contact</h1>
            <p className = "mb-1">You can contact me at any of the following locations:</p>
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
