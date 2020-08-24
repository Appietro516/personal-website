import React from "react"
import { Row, Badge } from "react-bootstrap"
import Img from "gatsby-image"

const ProjectCard = ({ project }) => {
    let technologies = project.technologies && project.technologies.map(tech=>{
        return <Badge key={tech} variant="secondary" className ="m-1 p-2">{tech}</Badge>
    });

    return (
    <>
        <div key={project.name} className="project m-3 card border-dark">
            <div className ="p-2 card-header text-center justify-content-center">
                <h4 className = "mb-0">{project.name}</h4>
                <div className = "small">{project.startDate} - {project.endDate}</div>
                <div className = "small">
                    {project.projectUrl &&
                        <a href={project.projectUrl}>Website</a>
                    }
                    {project.projectUrl && project.srcUrl && " | "}
                    {project.srcUrl &&
                        <a href={project.srcUrl}>Source Code</a>
                    }
                    <div className="ml-auto mr-auto mt-2">{technologies}</div>

                </div>
            </div>
            <div className ="card-body ml-auto mr-auto p-0 text-center relative">
                <div className ="ml-auto mr-auto mb-2" style={{height:225, width:400}}>
                    <Img objectFit="contain" fluid={project.image.childImageSharp.fluid} />
                </div>
                <div className="pb-2">
                    {project.description}
                </div>
            </div>
        </div>
    </>
    )
}
export default ProjectCard
