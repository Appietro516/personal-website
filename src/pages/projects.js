import React, { useState, useEffect } from 'react';
import { Link, StaticQuery, graphql} from 'gatsby';
import { FaSearch } from 'react-icons/fa';

import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import SEO from "../components/seo"
import '../styles/_projects.scss';


const getProjectFilesQuery = graphql`
  {
    allProjectsDataJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 225, quality: 100)  {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          description
          projectUrl
          srcUrl
          technologies
          startDate
          endDate
        }
      }
    }
}`;

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const renderProjectCards = ({ allProjectsDataJson }) => {
        const projectCards = [];

        allProjectsDataJson.edges.forEach(projectData => {
            let project = projectData.node;
            let vals = Object.keys(project).map(function(key) {
                return project[key];
            });

            if (JSON.stringify(vals).toLowerCase().includes(searchTerm.toLowerCase())){
                projectCards.push(
                    <ProjectCard key={project.name} project = {project}/>
                );
            }
        });

        return projectCards;
    };

    return (
  <Layout pageInfo={{ pageName: "projects" }}>
    <SEO title="Projects" />
    <div className={" border-0 mr-auto ml-auto justify-content-center m-3 pl-2 pr-2 rounded-pill searchbar d-flex shadow-sm"}>
        <FaSearch className={"align-self-center text-muted m-1"}/>
        <input className = {"border-0 m-1"}type="text" placeholder="Search" onChange = {(e) => setSearchTerm(e.target.value)}/>
    </div>
    <div className="d-flex justify-content-center flex-wrap m-3 mr-auto ml-auto mb-5 ">
        <StaticQuery query={getProjectFilesQuery} render={renderProjectCards} />
    </div>
  </Layout>
  )
}



export default Projects
