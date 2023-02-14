import { team } from "../../data/aboutData";
import Image from "next/image";
import styles from "../../styles/About.module.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Team = () => {
  return (
    <div className={styles.team_container}>
      <div className={styles.client_heading}>
        <h2>Our Team</h2>
      </div>
      <div className={styles.team_members}>
        <div className={styles.team_body}>
          {team.slice(0, 4).map((member) => (
            <div className={styles.team_member} key={member.id}>
              <div className={styles.team_member_image}>
                <Image src={member.image} alt={member.name} />
                <div className={styles.team_socials}>
                  <SlSocialLinkedin /> <SiGithub />
                </div>
              </div>
              <div className={styles.team_member_body}>
                <h3>{member.fullname}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.stakeholder}>
          <div className={styles.motto}>
            <h2>
              We are a team.<br></br> We love what <br></br> we do. Simple.
            </h2>
          </div>
          <div className={styles.team_body}>
            {team.slice(4).map((member) => (
              <div className={styles.team_member} key={member.id}>
                <div className={styles.team_member_image}>
                  <Image src={member.image} alt={member.name} />
                  <div className={styles.team_socials}>
                    <SlSocialLinkedin /> <SiGithub />
                  </div>
                </div>
                <div className={styles.team_member_body}>
                  <h3>{member.fullname}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
