import React from "react"
import { Row, Badge } from "react-bootstrap"
import Img from "gatsby-image"

const ColorHash = require('color-hash');

const ProjectCard = ({ project }) => {
    const colorHash = new ColorHash({saturation: .8, lightness: .425});
    let technologies = project.technologies && project.technologies.map(tech=>{
        return <Badge key={tech} className ="m-1" style = {{"background-color": colorHash.hex(tech)}}> <a className="text-white" href={ `https://www.google.com/search?q=${tech}`}>{tech}</a></Badge>
    });

    return (
    <>
        <div key={project.name} className="project ml-3 mr-3 mt-3 mb-3 card border-0 shadow-sm">
            <div className ="p-3 card-header text-center justify-content-center">
                <h4 className = "mb-0">{project.name}</h4>
                <div className = "small">{project.startDate} - {project.endDate}</div>
                <div className = "small pt-1">
                    {project.projectUrl &&
                        <a href={project.projectUrl}>Website</a>
                    }
                    {project.projectUrl && project.srcUrl &&
                        " | "
                    }
                    {project.srcUrl &&
                        <a href={project.srcUrl}>Source Code</a>
                    }
                    <div className="pt-2 ml-auto mr-auto">{technologies}</div>
                </div>
            </div>
            <div className ="card-body ml-auto mr-auto p-0 text-center relative">
                <div className ="ml-auto mr-auto" style={{"border": "1px solid", "border-width": "1px 0 1px 0"}}>
                    <Img objectFit="contain" fluid={project.image.childImageSharp.fluid} />
                </div>
                <p className="m-auto p-2 text-left" style = {{"font-size":".9rem"}}>
                    {project.description}
                </p>
            </div>
        </div>
    </>
    )
}
export default ProjectCard
