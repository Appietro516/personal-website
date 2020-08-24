import React from "react"
import { Link, StaticQuery, graphql} from 'gatsby';

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

const Projects = () => (
  <Layout pageInfo={{ pageName: "projects" }}>
    <SEO title="Projects" />
        <div className="d-flex justify-content-center flex-wrap mb-5 mr-auto ml-auto">
            <StaticQuery query={getProjectFilesQuery} render={renderProjectCards} />
        </div>
  </Layout>
)

const renderProjectCards = ({ allProjectsDataJson }) => {
    const projectCards = [];
    allProjectsDataJson.edges.forEach(projectData => {
        let project = projectData.node;
        projectCards.push(
            <ProjectCard key={project.name} project = {project}/>
        );
    });

    return projectCards;
};



export default Projects
