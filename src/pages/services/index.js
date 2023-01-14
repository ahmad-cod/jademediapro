import React from "react";
import { serviceData } from "../../data/serviceData";

import ServiceHeader from "../../components/servicesComponent/serviceHeader";
import ReadyToWork from "../../components/ReadyToWork";
import ServicesComponent from "../../components/Services";
import Navigation from "../../components/servicesComponent/serviceNavigation";
import Work from "../../components/servicesComponent/work";
import styles from "../../styles/Project.module.css";

const Services = () => {
  return (
    <>
      <div className={styles.services}>
        <ServiceHeader />
        <Navigation />
        <div className={styles.service_container}>
          {serviceData?.map((service, i) => (
            <ServicesComponent
              id={service.id}
              data={service.services.filter((category) => {
                return category.category[0];
              })}
              categories={service.categories}
              serviceTitle={service.serviceTitle}
              filterContent={service.services}
              key={i}
            />
          ))}
          <Work />
          <ReadyToWork />
        </div>
      </div>
    </>
  );
};

export default Services;
