import { useRouter } from "next/router";
import Work from "../../../components/servicesComponent/work";

import { caseStudyData } from "../../../data/projectData/caseStudyData";
import style from "../../../styles/Services.module.css";
import styles from "../../../styles/Casestudy.module.css";
import Image from "next/image";
const CaseStudyPage = () => {
  const router = useRouter();
  const caseStudyId = router.query.id;
  return (
    <>
      {caseStudyData
        ?.filter((cases) => cases.id === caseStudyId)
        .map((cases) => (
          <>
            <header>
              <div className={styles.header_image}>
                <Image alt="" src={cases.header} />
              </div>
            </header>
            <div className={styles.case_study_container}>
              <div className={styles.case_study_title_container}>
                <div></div>
                <div className={styles.case_study_title}>
                  <h1>{cases.title}</h1>
                  <p>Case Study</p>
                </div>
              </div>
              <div className={styles.case_study}>
                <div className={styles.case_study_content_container}>
                  <div className={styles.case_study_outline}>
                    <h2>Exploring projects of all systems and sizes</h2>
                    <div className={styles.case_study_scope}>
                      <h3>Scope</h3>
                      <ul>
                        <li>Business Model</li>
                        <li>Workshops</li>
                        <li>Brand strategy</li>
                        <li>Brand identity</li>
                        <li>Website</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.case_study_content}>
                    {cases.contents?.map((first) => (
                      <>
                        {first.firstSection?.map((first) => (
                          <>
                            <div
                              className={styles.case_study_challenge_analysis}
                            >
                              <div className={styles.case_study_challenge}>
                                <h3>{first.headingOne}</h3>
                                <p>{first.headingNote}</p>
                              </div>
                              <div className={styles.case_study_challenge}>
                                <h3>{first.headingTwo}</h3>
                                <p>{first.headingNoteTwo}</p>
                              </div>
                            </div>

                            <div className={styles.case_study_image}>
                              {first?.image?.map((image, i) => (
                                <Image src={image} alt={image} key={i} />
                              ))}
                            </div>
                          </>
                        ))}
                        {first.secondSection?.map((second) => (
                          <>
                            <div className={styles.case_study_others}>
                              <div className={styles.case_study_misc}>
                                <h3>{second.headingSecond}</h3>
                                <p>{second.headingNoteSecond}</p>
                              </div>
                            </div>

                            <div className={styles.case_study_image}>
                              {second?.image?.map((image, i) => (
                                <Image src={image} alt={image} key={i} />
                              ))}
                            </div>
                          </>
                        ))}
                        {first.thirdSection?.map((third) => (
                          <>
                            <div className={styles.case_study_others}>
                              <div className={styles.case_study_misc}>
                                <h3>{third.headingThird}</h3>
                                <p>{third.headingNoteThird}</p>
                              </div>
                            </div>

                            <div className={styles.case_study_image}>
                              {third?.image?.map((image, i) => (
                                <Image src={image} alt={image} key={i} />
                              ))}
                            </div>
                          </>
                        ))}
                        {first.fourthSection?.map((fourth) => (
                          <>
                            <div className={styles.case_study_others}>
                              <div className={styles.case_study_misc}>
                                <h3>{fourth.headingFourth}</h3>
                                <p>{fourth.headingNoteFourth}</p>
                              </div>
                            </div>

                            <div className={styles.case_study_image}>
                              {fourth?.image?.map((image, i) => (
                                <Image src={image} alt={image} key={i} />
                              ))}
                            </div>
                          </>
                        ))}
                        {first.fifthSection?.map((fifth) => (
                          <>
                            <div className={styles.case_study_others}>
                              <div className={styles.case_study_misc}>
                                <h3>{fifth.headingFifth}</h3>
                                <p>{fifth.headingNoteFifth}</p>
                              </div>
                            </div>

                            <div className={styles.case_study_image}>
                              {first?.image?.map((image, i) => (
                                <Image src={image} alt={image} key={i} />
                              ))}
                            </div>
                          </>
                        ))}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.contributors}>
                <div className={styles.collaborators}>
                  <h1>Collaborators</h1>
                  <div className={styles.collab_details}>
                    <h2>CLIENT</h2>
                    <p>SPJA</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>CLIENT CEO</h2>
                    <p>Mark Manansala</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>CREATIVES</h2>
                    <p>
                      Yohanes Fadillah (Project Manager), Dino Martin (Brand
                      Manager), Meg Tsuruda (Branding Coordinator), Jon
                      Baumgardner (Director of Entertainment)
                    </p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>PRODUCTION COMPANY</h2>
                    <p>Blind</p>
                  </div>
                </div>
                <div className={styles.collaborators}>
                  <h1>Roles</h1>
                  <div className={styles.collab_details}>
                    <h2>EXECUTIVE CREATIVE DIRECTOR</h2>
                    <p>John Ademiluyi</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>CREATIVE DIRECTOR</h2>
                    <p>Matthew Encina</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>EXECUTIVE PRODUCER</h2>
                    <p>Scott Rothstein</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>ART DIRECTOR</h2>
                    <p>Jaime Van Wart</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>SENIOR DESIGNER</h2>
                    <p>Sang Chung</p>
                  </div>
                  <div className={styles.collab_details}>
                    <h2>PROJECT MANAGER</h2>
                    <p>Daisy Zarazua</p>
                  </div>
                </div>
              </div>
              <div className={style.work_container}>
                <div className={style.work_heading}>
                  <h2>Similar Projects</h2>
                </div>
                <Work />
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default CaseStudyPage;
