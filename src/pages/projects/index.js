import React from "react";
import CaseStudies from "../../components/projectComponents/caseStudies";
import ProjectHeader from "../../components/projectComponents/projectHeader";
import ReadyToWork from "../../components/ReadyToWork";
import Showreel from "../../components/projectComponents/showreel";
import Training from "../../components/projectComponents/training";
import { processData } from "../../data/projectData";
import ServicesComponent from "../../components/Services";
import styles from "../../styles/Project.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <ProjectHeader />
      <div className={styles.project_container}>
        <CaseStudies />
        <Showreel />
        {processData.map((data) => (
          <>
            <ServicesComponent
              data={data.services.filter(
                (category) => category.category === "Animation"
              )}
              filterContent={data.services}
              categories={data.categories}
              serviceTitle={data.serviceTitle}
            />
          </>
        ))}
        <Training />
        <ReadyToWork />
      </div>
    </div>
  );
};

export default Projects;
