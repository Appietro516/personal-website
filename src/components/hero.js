import React from "react"

const Hero = ({ title, text }) => {
    return (
    <>
        <div id="hero">
            <h1> { title } </h1>
            <hr id="hero-dash"/>
            <p className="hero-lead"> { text } </p>
        </div>
    </>
    )
}

export default Hero
