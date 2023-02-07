import React from "react";
import Image from "next/image";
import styles from "../../styles/ServiceComponet.module.css";

const ServiceContent = ({ content }) => {
  return (
    <div className={styles.service_container}>
      {content.map((service) => (
        <>
          <div className={styles.service_summary}>
            <p>{service.summary}</p>
          </div>
          <div className={styles.service_list_container}>
            {service.serviceContent?.map((list) => (
              <>
                <div className={styles.service_list}>
                  {
                    <>
                      <div className={styles.list_title}>
                        <h3>{list.listTitle}</h3>
                      </div>
                      <div className={styles.list_content}>
                        {list.listContent.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                      <div className={styles.list_image}>
                        <Image src={list.image} alt="" />
                      </div>
                    </>
                  }
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default ServiceContent;
