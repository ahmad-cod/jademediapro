import React from "react";
import { disclaimerfolder } from "../images";
import Image from "next/image";
import styles from "../styles/disclaimer.module.css";
import { MainWrapper } from "@/components/layout";

const disclaimer = () => {
  return (
    <MainWrapper
      headerType={1}
      backgroundColor="black"
      title="Disclaimer - Jade Media Pro"
    >
      <div className={styles.header}>
        <h1>
          Disclaimer <br /> Policy
        </h1>
        <div className={styles.header__image}>
          <Image src={disclaimerfolder} alt="" width="100%" height="200%" />
        </div>
      </div>

      <div className={styles.content}>
        <h4>Last Updated November 10, 2021</h4>
        <h3>Website disclaimer</h3>
        <p>
          The information provided by Jademediapro Tech Agency LTD (
          <b>&quot;we&quot;, &quot;us&quot;, or &quot;our&quot; </b>) on{" "}
          <a>
            {" "}
            https://
            <br />
            www.jademediapro.com
          </a>{" "}
          (the &quot;Site&quot;) is for general informational purposes only. All
          information on the Site is
          <br />
          provided in good faith, however we make no representation or warranty
          of any kind, express or implied,
          <br />
          regarding the accuracy, adequacy, validity, reliability, availability
          or completeness of any information on the
          <br />
          Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
          LOSS OR DAMAGE OF ANY KIND
          <br />
          INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
          INFORMATION PROVIDED ON THE SITE. YOUR
          <br />
          USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
          SOLELY AT YOUR OWN RISK.
        </p>

        <h3>External links disclaimer</h3>
        <p>
          The information provided by Jademediapro Tech Agency LTD
          (&quot;we,&quot; &quot;us&quot;, or &quot;our&quot;) on https://
          <br />
          www.jademediapro.com (the &quot;Site&quot;) is for general
          informational purposes only. All information on the Site is
          <br />
          provided in good faith, however we make no representation or warranty
          of any kind, express or implied,
          <br />
          regarding the accuracy, adequacy, validity, reliability, availability
          or completeness of any information on the
          <br />
          Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
          LOSS OR DAMAGE OF ANY KIND
          <br />
          INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
          INFORMATION PROVIDED ON THE SITE. YOUR
          <br />
          USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
          SOLELY AT YOUR OWN RISK.
        </p>

        <h3>Testimonials disclaimer</h3>
        <p>
          The information provided by Jademediapro Tech Agency LTD
          (&quot;we,&quot; &quot;us&quot;, or &quot;our&quot;) on https://
          <br />
          www.jademediapro.com (the &quot;Site&quot;) is for general
          informational purposes only. All information on the Site is
          <br />
          provided in good faith, however we make no representation or warranty
          of any kind, express or implied,
          <br />
          regarding the accuracy, adequacy, validity, reliability, availability
          or completeness of any information on the
          <br />
          Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
          LOSS OR DAMAGE OF ANY KIND
          <br />
          INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
          INFORMATION PROVIDED ON THE SITE. YOUR
          <br />
          USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
          SOLELY AT YOUR OWN RISK.
        </p>

        <p>
          This disclaimer was created using{" "}
          <a href="#">Termly&apos;s Disclaimer Generator.</a>
        </p>
      </div>
    </MainWrapper>
  );
};

export default disclaimer;
