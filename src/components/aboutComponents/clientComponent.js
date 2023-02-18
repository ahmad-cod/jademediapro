import Image from "next/image";
import { aboutFlexImage } from "@/images";
import styles from "../../styles/About.module.css";

const Identity = () => {
  return (
    <>
      <div className={styles.client_container}>
        <div className={styles.client_heading}>
          <h2>Our Identity</h2>
        </div>
        <div className={styles.client_content}>
          <div className={styles.client_intro}>
            <p>
              Our origin lies in 2016 as Jade Grafix operating from a very small
              room. Today we are Africa’s most renowned content-creation graphic
              design and integrated digital marketing service company focused on
              creating strategic solutions for brand development, communication,
              and business marketing. Jademediapro is a fully registered
              business services company that connects Africa to the world
              through design, products, market strategy, consulting, and
              training.
            </p>
            <p>
              The new and emerging Africa is filled with hard-working young and
              old focused on positioning themselves for a greater future.
              Jademediapro champions these efforts and invites others to join us
              on the journey with a fast-growing team of 11 young and vibrant
              minds who have worked on over 300 projects leading the digital
              space in Africa. We offer feasible and cost-effective solutions in
              the projects that we enter into contracts with our clients. We
              focus on setting visual, verbal, and experiential standards that
              drive impactful experiences for our clients.
            </p>
          </div>
          <div className={styles.client_mission}>
            <h3>
              We are on a Mission to help our clients achieve excellence using
              sustainable digital strategies
            </h3>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[382px] bg-cover bg-center"
        style={{ backgroundImage: `url('${aboutFlexImage.src}')` }}
      ></div>
    </>
  );
};

export default Identity;
