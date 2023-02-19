import React from "react";
import { serviceData } from "../../data/serviceData";

import ServiceHeader from "../../components/servicesComponent/serviceHeader";
import ReadyToWork from "../../components/ReadyToWork";
import ServicesComponent from "../../components/Services";
import Navigation from "../../components/servicesComponent/serviceNavigation";
import Work from "../../components/servicesComponent/work";
import styles from "../../styles/Project.module.css";
import style from "../../styles/Services.module.css";
import { navigationData } from "../../data/serviceData";
import { MainWrapper } from "@/components/Layout";

const Services = () => {
  return (
    <MainWrapper
      headerType={1}
      backgroundColor="#17403b"
      title="Services - Jade Media Pro"
      paint-header-on-scroll
      mobile-pad
    >
      <div className={styles.services}>
        <ServiceHeader />
        <Navigation navigation={navigationData} />
        <div className={styles.service_container}>
          {serviceData?.map((service, i) => (
            <ServicesComponent
              id={service.id}
              data={service.services}
              categories={service.categories}
              serviceTitle={service.serviceTitle}
              filterContent={service.services}
              key={i}
            />
          ))}
          <div className={style.work_container}>
            <div className={style.work_heading}>
              <h2>Our Work</h2>
            </div>
            <Work />
          </div>
          <ReadyToWork />
        </div>
      </div>
    </MainWrapper>
  );
};

export default Services;
