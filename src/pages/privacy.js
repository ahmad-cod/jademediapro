import react from "react";
import Link from "next/link";
import image from "next/image";
import { privacyimg } from "../images";

export default function Privacy() {
  return (
    <div>
      <div className=" bg-[#1A1A1A] px-[20px] pb-[29px] pt-[30px] md:pt-12 md:pr-[104px] md:pb-[70px] md:pl-[104px] mb-32 ">
        <div className="flex flex-col md:flex-row md:items-center text-5xl md:text-8xl font-bold md:font-semibold                text-white gap-8 md:gap-[500px]">
          <h1>
            Privacy <br /> Policy
          </h1>
          <img src={privacyimg} />
        </div>
      </div>
      <div className="px-[20px] md:pl-[104px] md:pr-[235px] w-full">
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div className="text-[#242526] text-xl font-medium md:w-[30%]">
            Introduction
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              Thank you for choosing to be part of our community at Jademediapro
              Tech Agency LTD ("Company," "we," "us," or "our"). We are
              committed to protecting your personal information and your right
              to privacy. Please read this Privacy Policy carefully, providing
              consent to both documents in order to have permission to use our
              services. If you have any questions or concerns about this privacy
              notice or our practices with regard to your personal information,
              please contact us at solutions@jademediapro.com.
            </p>
            <p className="mt-4">
              This privacy notice describes how we might use your information if
              you:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Visit our website at
                <a href="#" className="text-[#77459B] ml-2">
                  https://www.jademediapro.com
                </a>
              </li>
              <li>
                Engage with us in other related ways ― including any sales,
                marketing, or events
              </li>
            </ul>
            <p className="mt-4">In this privacy notice, if we refer to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                "Website," we are referring to any website of ours that
                references or links to this policy
              </li>
              <li>
                "Services," we are referring to our website, and other related
                services, including any sales, marketing, or events.
              </li>
            </ul>

            <p className="mb-4">
              The purpose of this privacy notice is to explain to you in the
              clearest way possible what information we collect, how we use it,
              and what rights you have in relation to it. If there are any terms
              in this privacy notice that you do not agree with, please
              discontinue use of our Services immediately.
            </p>
            <p className="mb-12 font-bold border-b border-[#3A3B40] pb-4">
              Please read this privacy notice carefully, as it will help you
              understand what we do with the information that we collect.
            </p>

            <p className="mb-4 text-lg font-normal">
              Last updated November 10, 2021
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-[54px] mt-10 mb-8">
          <div className="text-[#77459B] text-xl font-medium md:w-[30%]">
            TABLE OF CONTENTS
          </div>
          <ol className="text-base font-bold text-[#3A3B40] underline md:w-[70%] ">
            <a href="#1">
              <li className="cursor-pointer">
                1. What information do we collect?
              </li>
            </a>
            <a href="#2">
              <li className="cursor-pointer">
                2. How do we use your information?
              </li>
            </a>
            <a href="#3">
              <li className="cursor-pointer">
                3. Will your information be shared with anyone?
              </li>
            </a>
            <a href="#4">
              <li className="cursor-pointer">
                4. Who will your information be shared with?
              </li>
            </a>
            <a href="#5">
              {" "}
              <li className="cursor-pointer">
                5. Do we use cookies and other tracking technologies?
              </li>
            </a>
            <a href="#6">
              <li className="cursor-pointer">
                6. How do we handle your social logins?
              </li>
            </a>
            <a href="#7">
              <li className="cursor-pointer">
                7. What is our stance on third-party websites?
              </li>
            </a>
            <a href="#8">
              <li className="cursor-pointer">
                8. How long do we keep your information?
              </li>
            </a>
            <a href="#9">
              <li className="cursor-pointer">
                9. How do we keep your information safe?
              </li>
            </a>
            <a href="#10">
              <li className="cursor-pointer">
                10. What are your privacy rights?
              </li>
            </a>
            <a href="#11">
              <li className="cursor-pointer">
                11. Controls for do-not-track features
              </li>
            </a>
            <a href="#12">
              <li className="cursor-pointer">
                12. Do California residents have specific privacy rights?
              </li>
            </a>
            <a href="#13">
              <li className="cursor-pointer">
                13. Do we make updates to this notice?
              </li>
            </a>
            <a href="#14">
              <li className="cursor-pointer">
                14. How can you contact us about this notice?
              </li>
            </a>
            <a href="#15">
              <li className="cursor-pointer">
                15. How can you review, update or delete the data we collect
                from you?
              </li>
            </a>
          </ol>
        </div>

        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="1" className="text-[#242526] text-xl font-medium md:w-[30%]">
            1. What information do we collect?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <span className="text-[#77459B] text-lg font-medium mb-2">
              Personal information you disclose to us
            </span>
            <p className="mb-4">
              In Short: We collect personal information that you provide to us.
            </p>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us
              when you register on the Website, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Website or otherwise when you
              contact us. <br /> The personal information that we collect
              depends on the context of your interactions with us and the
              Website, the choices you make and the products and features you
              use.
            </p>
            <p className="mb-4">
              The personal information we collect may include the following:
            </p>
            <p className="mb-4">
              <span className="font-medium">Payment Data.</span> We may collect
              data necessary to process your payment if you make purchases, such
              as your payment instrument number (such as a credit card number),
              and the security code associated with your payment instrument. All
              payment data is stored by Shopify. You may find their privacy
              notice link(s) here:
              <a href="#" className="text-[#77459B] ml-2">
                https://www.shopify.com.ng/legal/privacy.
              </a>
            </p>
            <p className="mb-4">
              <span className="font-medium">Social Media Login Data.</span> We
              may provide you with the option to register with us using your
              existing social media account details, like your Facebook, Twitter
              or other social media account. If you choose to register in this
              way, we will collect the information described in the section
              called "how do we handle your social logins?" below. All personal
              information that you provide to us must be true, complete and
              accurate, and you must notify us of any changes to such personal
              information.
            </p>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              Information automatically collected
            </span>
            <p className="mb-4">
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our website.
            </p>
            <p className="mb-4">
              We automatically collect certain information when you visit, use
              or navigate the Website. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our website and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Website, and for our
              internal analytics and reporting purposes.
              <br /> Like many businesses, we also collect information through
              cookies and similar technologies. You can find out more about this
              in our Cookie Notice:
              <a href="#" className="text-[#77459B] ml-2">
                http://www.jademediapro.com/cookies.
              </a>
            </p>
            <p className="mt-4">The information we collect includes:</p>
            <ul className="list-disc ml-6 mb-8">
              <li className="mb-4">
                Log and Usage Data. Log and usage data is service-related,
                diagnostic, usage and performance information our servers
                automatically collect when you access or use our website and
                which we record in log files. Depending on how you interact with
                us, this log data may include your IP address, device
                information, browser type and settings and information about
                your activity in the Website (such as the date/time stamps
                associated with your usage, pages and files viewed, searches and
                other actions you take such as which features you use), device
                event information (such as system activity, error reports
                (sometimes called 'crash dumps') and hardware settings).
              </li>
              <li className="mb-4">
                Device Data. We collect device data such as information about
                your computer, phone, tablet or other device you use to access
                the Website. Depending on the device used, this device data may
                include information such as your IP address (or proxy server),
                device and application identification numbers, location, browser
                type, hardware model Internet service provider and/or mobile
                carrier, operating system and system configuration information.
              </li>
              <li>
                Location Data. We collect location data such as information
                about your device's location, which can be either precise or
                imprecise. How much information we collect depends on the type
                and settings of the device you use to access the Website. For
                example, we may use GPS and other technologies to collect
                geolocation data that tells us your current location (based on
                your IP address). You can opt out of allowing us to collect this
                information either by refusing access to the information or by
                disabling your Location setting on your device. Note however, if
                you choose to opt out, you may not be able to use certain
                aspects of the Services.
              </li>
            </ul>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              Information collected from other sources
            </span>
            <p className="mb-4">
              In Short: We may collect limited data from public databases,
              marketing partners, social media platforms, and other outside
              sources.
            </p>

            <p className="mb-4">
              In order to enhance our ability to provide relevant marketing,
              offers and services to you and update our records, we may obtain
              information about you from other sources, such as public
              databases, joint marketing partners, affiliate programs, data
              providers, social media platforms, as well as from other third
              parties. This information includes mailing addresses, job titles,
              email addresses, phone numbers, intent data (or user behaviour
              data), Internet Protocol (IP) addresses, social media profiles,
              social media URLs and custom profiles, for purposes of targeted
              advertising and event promotion. If you interact with us on a
              social media platform using your social media account (e.g.,
              Facebook or Twitter), we receive personal information about you
              such as your name, email address, and gender. Any personal
              information that we collect from your social media account depends
              on your social media account's privacy settings.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="2" className="text-[#242526] text-xl font-medium md:w-[30%]">
            2. How do we use your information?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We process your information for purposes based on
              legitimate business interests, the fulfilment of our contract with
              you, compliance with our legal obligations, and/or your consent.
            </p>
            <p className="mb-4">
              We use personal information collected via our Website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds
              we rely on next to each purpose listed below.
            </p>
            <p className="mt-4">
              We use the information we collect or receive:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                To facilitate account creation and logon process. If you choose
                to link your account with us to a third-party account (such as
                your Google or Facebook account), we use the information you
                allowed us to collect from those third parties to facilitate
                account creation and logon process for the performance of the
                contract. See the section below headed "how do we handle your
                social logins?" for further information.
              </li>
              <li>
                To post testimonials. We post testimonials on our Website that
                may contain personal information. Prior to posting a
                testimonial, we will obtain your consent to use your name and
                the content of the testimonial. If you wish to update, or delete
                your testimonial, please contact us at
                <a href="#" className="text-[#77459B] ml-2">
                  solutions@jademediapro.com
                </a>
                and be sure to include your name, testimonial location, and
                contact information.
              </li>
              <li>
                Request feedback. We may use your information to request
                feedback and to contact you about your use of our Website.
              </li>
              <li>
                To enable user-to-user communications. We may use your
                information in order to enable user-to-user communications with
                each user's consent.
              </li>
              <li>
                To manage user accounts. We may use your information for the
                purposes of managing our account and keeping it in working
                order.
              </li>
              <li>
                To send administrative information to you. We may use your
                personal information to send you product, service and new
                feature information and/or information about changes to our
                terms, conditions, and policies.
              </li>
              <li>
                To protect our Services. We may use your information as part of
                our efforts to keep our Website safe and secure (for example,
                for fraud monitoring and prevention).
              </li>
              <li>
                To enforce our terms, conditions and policies for business
                purposes, to comply with legal and regulatory requirements or in
                connection with our contract.
              </li>
              <li>
                To respond to legal requests and prevent harm. If we receive a
                subpoena or other legal request, we may need to inspect the data
                we hold to determine how to respond.
              </li>
              <li>
                Fulfil and manage your orders. We may use your information to
                fulfil and manage your orders, payments, returns, and exchanges
                made through the Website.
              </li>
              <li>
                Administer prize draws and competitions. We may use your
                information to administer prize draws and competitions when you
                elect to participate in our competitions.
              </li>
              <li>
                To deliver and facilitate delivery of services to the user. We
                may use your information to provide you with the requested
                service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may use
                your information to respond to your inquiries and solve any
                potential issues you might have with the use of our Services.
              </li>
              <li>
                To send you marketing and promotional communications. We and/or
                our third-party marketing partners may use the personal
                information you send to us for our marketing purposes, if this
                is in accordance with your marketing preferences. For example,
                when expressing an interest in obtaining information about us or
                our Website, subscribing to marketing or otherwise contacting
                us, we will collect personal information from you. You can
                opt-out of our marketing emails at any time (see the "what are
                your privacy rights?" below).
              </li>
              <li>
                Deliver targeted advertising to you. We may use your information
                to develop and display personalized content and advertising (and
                work with third parties who do so) tailored to your interests
                and/or location and to measure its effectiveness. For more
                information see our Cookie Notice:
                <a href="#" className="text-[#77459B] ml-2">
                  http://www.jademediapro.com/cookies.
                </a>
              </li>
              <li>
                For other business purposes. We may use your information for
                other business purposes, such as data analysis, identifying
                usage trends, determining the effectiveness of our promotional
                campaigns and to evaluate and improve our Website, products,
                marketing and your experience. We may use and store this
                information in aggregated and anonymized form so that it is not
                associated with individual end users and does not include
                personal information.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="3" className="text-[#242526] text-xl font-medium md:w-[30%]">
            3. Will your information be shared with anyone?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We only share information with your consent, to comply
              with laws, to provide you with services, to protect your rights,
              or to fulfil business obligations.
            </p>
            <p className="mt-4">
              We may process or share your data that we hold based on the
              following legal basis:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Consent: We may process your data if you have given us specific
                consent to use your personal information for a specific purpose.
              </li>
              <li>
                Legitimate Interests: We may process your data when it is
                reasonably necessary to achieve our legitimate business
                interests.
              </li>
              <li>
                Performance of a Contract: Where we have entered into a contract
                with you, we may process your personal information to fulfil the
                terms of our contract.
              </li>
              <li>
                Legal Obligations: We may disclose your information where we are
                legally required to do so in order to comply with applicable
                law, governmental requests, a judicial proceeding, court order,
                or legal process, such as in response to a court order or a
                subpoena (including in response to public authorities to meet
                national security or law enforcement requirements).
              </li>
              <li>
                Vital Interests: We may disclose your information where we
                believe it is necessary to investigate, prevent, or take action
                regarding potential violations of our policies, suspected fraud,
                situations involving potential threats to the safety of any
                person and illegal activities, or as evidence in litigation in
                which we are involved.
              </li>
            </ul>
            <p className="mt-4">
              More specifically, we may need to process your data or share your
              personal information in the following situations:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
              <li>
                Google Maps Platform APIs. We may share your information with
                certain Google Maps Platform APIs (e.g., Google Maps API, Place
                API). To find out more about Google’s Privacy Policy, please
                refer to this link. We obtain and store on your device ('cache')
                your location. You may revoke your consent anytime by contacting
                us at the contact details provided at the end of this document.
              </li>
              <li>
                Vendors, Consultants and Other Third-Party Service Providers. We
                may share your data with third-party vendors, service providers,
                contractors or agents who perform services for us or on our
                behalf and require access to such information to do that work.
                Examples include: payment processing, data analysis, email
                delivery, hosting services, customer service and marketing
                efforts. We may allow selected third parties to use tracking
                technology on the Website, which will enable them to collect
                data on our behalf about how you interact with our Website over
                time. This information may be used to, among other things,
                analyse and track data, determine the popularity of certain
                content, pages or features, and better understand online
                activity. Unless described in this notice, we do not share,
                sell, rent or trade any of your information with third parties
                for their promotional purposes. We have contracts in place with
                our data processors, which are designed to help safeguard your
                personal information. This means that they cannot do anything
                with your personal information unless we have instructed them to
                do it. They will also not share your personal information with
                any organization apart from us. They also commit to protect the
                data they hold on our behalf and to retain it for the period we
                instruct.
              </li>
              <li>
                Third-Party Advertisers. We may use third-party advertising
                companies to serve ads when you visit or use the Website. These
                companies may use information about your visits to our
                Website(s) and other websites that are contained in web cookies
                and other tracking technologies in order to provide
                advertisements about goods and services of interest to you. See
                our Cookie Notice:
                <a href="#" className="text-[#77459B] ml-2">
                  http://www.jademediapro.com/cookies
                </a>
                for further information.
              </li>
              <li>
                Affiliates. We may share your information with our affiliates,
                in which case we will require those affiliates to honour this
                privacy notice. Affiliates include our parent company and any
                subsidiaries, joint venture partners or other companies that we
                control or that are under common control with us.
              </li>
              <li>
                Business Partners. We may share your information with our
                business partners to offer you certain products, services or
                promotions.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="4" className="text-[#242526] text-xl font-medium md:w-[30%]">
            4. Who will your information be shared with?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We only share information with the following categories
              of third parties.
            </p>
            <p className="mt-4 mb-4">
              We only share and disclose your information with the following
              categories of third parties. If we have processed your data based
              on your consent and you wish to revoke your consent, please
              contact us using the contact details provided in the section below
              titled "how can you contact us about this notice?".
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Payment Processors</li>
              <li>Order Fulfilment Service Providers</li>
              <li>Product Engineering & Design Tools</li>
              <li>Sales & Marketing Tools</li>
              <li>User Account Registration & Authentication Services</li>
              <li>Communication & Collaboration Tools</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="5" className="text-[#242526] text-xl font-medium md:w-[30%]">
            5. Do we use cookies and other tracking technologies?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p className="mb-4">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Notice:
              <a href="#" className="text-[#77459B] ml-2">
                http://www.jademediapro.com/cookies.
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="6" className="text-[#242526] text-xl font-medium md:w-[30%]">
            6. How do we handle your social logins?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: If you choose to register or log in to our services
              using a social media account, we may have access to certain
              information about you.
            </p>
            <p className="mb-4">
              Our Website offers you the ability to register and login using
              your third-party social media account details (like your Facebook
              or Twitter logins). Where you choose to do this, we will receive
              certain profile information about you from your social media
              provider. The profile information we receive may vary depending on
              the social media provider concerned, but will often include your
              name, email address, friends list, profile picture as well as
              other information you choose to make public on such social media
              platform.
            </p>
            <p className="mb-4">
              We will use the information we receive only for the purposes that
              are described in this privacy notice or that are otherwise made
              clear to you on the relevant Website. Please note that we do not
              control, and are not responsible for, other uses of your personal
              information by your third-party social media provider. We
              recommend that you review their privacy notice to understand how
              they collect, use and share your personal information, and how you
              can set your privacy preferences on their sites and apps.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="7" className="text-[#242526] text-xl font-medium md:w-[30%]">
            7. What is our stance on third-party websites?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We are not responsible for the safety of any information
              that you share with third-party providers who advertise, but are
              not affiliated with, our Website.
            </p>
            <p className="mb-4">
              The Website may contain advertisements from third parties that are
              not affiliated with us and which may link to other websites,
              online services or mobile applications. We cannot guarantee the
              safety and privacy of data you provide to any third parties. Any
              data collected by third parties is not covered by this privacy
              notice. We are not responsible for the content or privacy and
              security practices and policies of any third parties, including
              other websites, services or applications that may be linked to or
              from the Website. You should review the policies of such third
              parties and contact them directly to respond to your questions.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="8" className="text-[#242526] text-xl font-medium md:w-[30%]">
            8. How long do we keep your information?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We keep your information for as long as necessary to
              fulfil the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>
            <p className="mb-4">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than six (6) months past the termination of the user's
              account.
            </p>
            <p className="mb-4">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div id="9" className="text-[#242526] text-xl font-medium md:w-[30%]">
            9. How do we keep your information safe?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>
            <p className="mb-4">
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee
              that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our security, and improperly collect,
              access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of
              personal information to and from our Website is at your own risk.
              You should only access the Website within a secure environment.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div
            id="10"
            className="text-[#242526] text-xl font-medium md:w-[30%]"
          >
            10. What are your privacy rights?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: In some regions, such as the European Economic Area
              (EEA) and United Kingdom (UK), you have rights that allow you
              greater access to and control over your personal information. You
              may review, change, or terminate your account at any time.
            </p>
            <p className="mb-4">
              In some regions (like the EEA and UK), you have certain rights
              under applicable data protection laws. These may include the right
              (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. To make such a request, please use the contact
              details provided below. We will consider and act upon any request
              in accordance with applicable data protection laws.
            </p>
            <p className="mb-4">
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time. Please note however that this will not affect the lawfulness
              of the processing before its withdrawal, nor will it affect the
              processing of your personal information conducted in reliance on
              lawful processing grounds other than consent.
            </p>
            <p className="mb-4">
              If you are a resident in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory
              authority. You can find their contact details here:
              <a href="#" className="text-[#77459B] ml-2">
                https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html.
              </a>
            </p>
            <p className="mb-4">
              If you are a resident in Switzerland, the contact details for the
              data protection authorities are available here:
              <a href="#" className="text-[#77459B] md:ml-2">
                https://www.edoeb.admin.ch/edoeb/en/home.html.
              </a>
            </p>
            <p className="mb-4">
              If you have questions or comments about your privacy rights, you
              may email us at
              <a href="#" className="text-[#77459B] ml-2">
                solutions@jademediapro.com.
              </a>
            </p>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              Account Information
            </span>
            <p className="mt-4">
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Log in to your account settings and update your user account.
              </li>
              <li>Contact us using the contact information provided.</li>
            </ul>
            <p className="mb-4">
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with applicable legal
              requirements.
            </p>
            <p className="mb-4">
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Website. To opt-out of
              interest-based advertising by advertisers on our Website visit
              <a href="#" className="text-[#77459B] ml-2">
                http://www.aboutads.info/choices/.
              </a>
              For further information, please see our Cookie Notice:
              <a href="#" className="text-[#77459B] ml-2">
                http://www.jademediapro.com/cookies.
              </a>
            </p>
            <p className="mt-4">
              Opting out of email marketing: You can unsubscribe from our
              marketing email list at any time by clicking on the unsubscribe
              link in the emails that we send or by contacting us using the
              details provided below. You will then be removed from the
              marketing email list — however, we may still communicate with you,
              for example to send you service-related emails that are necessary
              for the administration and use of your account, to respond to
              service requests, or for other non-marketing purposes. To
              otherwise opt-out, you may:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Access your account settings and update your preferences.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div
            id="11"
            className="text-[#242526] text-xl font-medium md:w-[30%]"
          >
            11. Controls for do-not-track features
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div
            id="12"
            className="text-[#242526] text-xl font-medium md:w-[30%]"
          >
            12. Do California residents have specific privacy rights?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p className="mb-4">
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p className="mb-4">
              If you are under 18 years of age, reside in California, and have a
              registered account with the Website, you have the right to request
              removal of unwanted data that you publicly post on the Website. To
              request removal of such data, please contact us using the contact
              information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Website, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.,
              backups, etc.).
            </p>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              CCPA Privacy Notice
            </span>
            <p className="mb-4">
              The California Code of Regulations defines a "resident" as:
            </p>
            <p className="mb-4">
              (1) every individual who is in the State of California for other
              than a temporary or transitory purpose and
            </p>
            <p className="mb-4">
              (2) every individual who is domiciled in the State of California
              who is outside the State of California for a temporary or
              transitory purpose
            </p>
            <p className="mb-4">
              All other individuals are defined as "non-residents."
            </p>
            <p className="mb-4">
              If this definition of "resident" applies to you, we must adhere to
              certain rights and obligations regarding your personal
              information.
            </p>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              What categories of personal information do we collect?
            </span>
            <p className="mb-4">
              We have collected the following categories of personal information
              in the past twelve (12) months:
            </p>
            <div className="mb-8 border border-[#242526] p-4 rounded w-full">
              <div className="flex gap-[42px] md:gap-[46px] text-base font-bold pb-4 border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8 w-full">
                <div className="w-[25%] underline">Category</div>
                <div className=" w-[50%] md:w-[60%] underline">Examples</div>
                <div className="w-[20%] md:w-[15%] underline">Collected</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">A. Identifiers</div>
                <div className="w-[60%]">
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address and account name
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">
                  B. Personal information categories listed in the California
                  Customer Records statute
                </div>
                <div className="w-[60%]">
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address and account name
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">
                  C. Protected classification characteristics under California
                  or federal law
                </div>
                <div className="w-[60%]">Gender and date of birth</div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">D. Commercial information</div>
                <div className="w-[60%]">
                  Transaction information, purchase history, financial details
                  and payment information
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">E. Biometric information</div>
                <div className="w-[60%]">Fingerprints and voiceprints</div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">
                  F. Internet or other similar network activity
                </div>
                <div className="w-[60%]">
                  Browsing history, search history, online behaviour, interest
                  data, and interactions with our and other websites,
                  applications, systems and advertisements
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">G. Geolocation data</div>
                <div className="w-[60%]">Device location</div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">
                  H. Audio, electronic, visual, thermal, olfactory, or similar
                  information
                </div>
                <div className="w-[60%]">
                  Images and audio, video or call recordings created in
                  connection with our business activities
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">
                  I. Professional or employment-related information
                </div>
                <div className="w-[60%]">
                  Business contact details in order to provide you our services
                  at a business level, job title as well as work history and
                  professional qualifications if you apply for a job with us
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal pb-4 border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
                <div className="w-[25%]">J. Education Information</div>
                <div className="w-[60%]">
                  Student records and directory information
                </div>
                <div className="w-[15%]">YES</div>
              </div>
              <div className="flex gap-[32px] md:gap-[46px] text-[13px] text-base font-normal">
                <div className="w-[25%]">
                  K. Inferences drawn from other personal information
                </div>
                <div className="w-[60%]">
                  Inferences drawn from any of the collected personal
                  information listed above to create a profile or summary about,
                  for example, an individual's preferences and characteristics
                </div>
                <div className="w-[15%]">YES</div>
              </div>
            </div>
            <p className="mt-8">
              We may also collect other personal information outside of these
              categories instances where you interact with us in-person, online,
              or by phone or mail in the context of:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>
                Facilitation in the delivery of our Services and to respond to
                your inquiries.
              </li>
            </ul>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              How do we use and share your personal information?
            </span>

            <p className="mt-4">
              Jademediapro Tech Agency LTD collects and shares your personal
              information through:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Targeting cookies/Marketing cookies</li>
              <li>Social media cookies</li>
              <li>Beacons/Pixels/Tags</li>
            </ul>
            <p className="mb-4">
              More information about our data collection and sharing practices
              can be found in this privacy notice and our Cookie Notice:
              <a href="#" className="text-[#77459B] ml-2">
                http://www.jademediapro.com/cookies.
              </a>
            </p>
            <p className="mb-4">
              You may contact us by email at solutions@jademediapro.com, by
              visiting
              <a href="#" className="text-[#77459B] ml-2">
                http://www.jademediapro.com/contact
              </a>
              , or by referring to the contact details at the bottom of this
              document.
            </p>
            <p className="mb-4">
              If you are using an authorized agent to exercise your right to
              opt-out we may deny a request if the authorized agent does not
              submit proof that they have been validly authorized to act on your
              behalf.
            </p>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              Will your information be shared with anyone else?
            </span>
            <p className="mb-4">
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Each service provider is a for-profit entity
              that processes the information on our behalf.
            </p>
            <p className="mb-4">
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal data.
            </p>
            <p className="mt-4">
              Jademediapro Tech Agency LTD has disclosed the following
              categories of personal information to third parties for a business
              or commercial purpose in the preceding twelve (12) months:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Category B. Personal information, as defined in the California
                Customer Records law, such as your name, contact information,
                education, employment, employment history and financial
                information.
              </li>
              <li>
                Category K. Inferences drawn from any of the personal
                information listed above to create a profile or summary about,
                for example, an individual's preferences and characteristics.
              </li>
            </ul>
            <p className="mb-4">
              The categories of third parties to whom we disclosed personal
              information for a business or commercial purpose can be found
              under "who will your information be shared with?".
            </p>
            <p className="mb-4">
              Jademediapro Tech Agency LTD has not sold any personal information
              to third parties for a business or commercial purpose in the
              preceding twelve (12) months. Jademediapro Tech Agency LTD will
              not sell personal information in the future belonging to website
              visitors, users and other consumers.
            </p>
            <span className="text-[#77459B] text-lg font-medium mb-2">
              Your rights with respect to your personal data
            </span>
            <p className="mb-2">
              Right to request deletion of the data - Request to delete
            </p>
            <p className="mb-4">
              You can ask for the deletion of your personal information. If you
              ask us to delete your personal information, we will respect your
              request and delete your personal information, subject to certain
              exceptions provided by law, such as (but not limited to) the
              exercise by another consumer of his or her right to free speech,
              our compliance requirements resulting from a legal obligation or
              any processing that may be required to protect against illegal
              activities.
            </p>
            <p className="mb-4">Right to be informed - Request to know</p>
            <p className="mt-4">
              Depending on the circumstances, you have a right to know:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>whether we collect and use your personal information;</li>
              <li>the categories of personal information that we collect;</li>
              <li>
                the purposes for which the collected personal information is
                used;
              </li>
              <li>
                whether we sell your personal information to third parties;
              </li>
              <li>
                the categories of personal information that we sold or disclosed
                for a business purpose;
              </li>
              <li>
                the categories of third parties to whom the personal information
                was sold or disclosed for a business purpose; and
              </li>
              <li>
                the business or commercial purpose for collecting or selling
                personal information.
              </li>
            </ul>
            <p className="mb4">
              In accordance with applicable law, we are not obligated to provide
              or delete consumer information that is de-identified in response
              to a consumer request or to re-identify individual data to verify
              a consumer request.
            </p>
            <p className="mb4">
              Right to Non-Discrimination for the Exercise of a Consumer’s
              Privacy Rights
            </p>
            <p className="mb4">
              We will not discriminate against you if you exercise your privacy
              rights.
            </p>
            <p className="mb4">Verification process</p>
            <p className="mb4">
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. These verification efforts require us
              to ask you to provide information so that we can match it with
              information you have previously provided us. For instance,
              depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information
              you provide with the information we already have on file, or we
              may contact you through a communication method (e.g. phone or
              email) that you have previously provided to us. We may also use
              other verification methods as the circumstances dictate.
            </p>
            <p className="mb4">
              We will only use personal information provided in your request to
              verify your identity or authority to make the request. To the
              extent possible, we will avoid requesting additional information
              from you for the purposes of verification. If, however, we cannot
              verify your identity from the information already maintained by
              us, we may request that you provide additional information for the
              purposes of verifying your identity, and for security or
              fraud-prevention purposes. We will delete such additionally
              provided information as soon as we finish verifying you.
            </p>
            <p className="mt-4">Other privacy rights</p>
            <ul className="list-disc ml-6 mb-4">
              <li>you may object to the processing of your personal data</li>
              <li>
                you may request correction of your personal data if it is
                incorrect or no longer relevant, or ask to restrict the
                processing of the data
              </li>
              <li>
                you can designate an authorized agent to make a request under
                the CCPA on your behalf. We may deny a request from an
                authorized agent that does not submit proof that they have been
                validly authorized to act on your behalf in accordance with the
                CCPA.
              </li>
              <li>
                you may request to opt-out from future selling of your personal
                information to third parties. Upon receiving a request to
                opt-out, we will act upon the request as soon as feasibly
                possible, but no later than 15 days from the date of the request
                submission.
              </li>
            </ul>
            <p className="mb-4">
              To exercise these rights, you can contact us by email at
              <a href="#" className="text-[#77459B] ml-2">
                solutions@jademediapro.com
              </a>
              , by visiting
              <a href="#" className="text-[#77459B] ml-2">
                http://www.jademediapro.com/contact
              </a>
              , or by referring to the contact details at the bottom of this
              document. If you have a complaint about how we handle your data,
              we would like to hear from you.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div
            id="13"
            className="text-[#242526] text-xl font-medium md:w-[30%]"
          >
            13. Do we make updates to this notice?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p className="mb-4 ">
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div
            id="14"
            className="text-[#242526] text-xl font-medium md:w-[30%]"
          >
            14. How can you contact us about this notice?
          </div>
          <div className="text-base font-medium text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              If you have questions or comments about this notice, you may email
              us at
              <a href="#" className="text-[#77459B] ml-2">
                solutions@jademediapro.com
              </a>
              or by post to:
            </p>
            <p className="mb-4 font-normal">
              Jademediapro Tech Agency LTD <br />
              16 Agbor street <br />
              Lagos, LA 100261 <br />
              Nigeria
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[54px] mb-8">
          <div
            id="15"
            className="text-[#242526] text-xl font-medium md:w-[30%]"
          >
            15. How can you review, update, or delete the data we collect from
            you?
          </div>
          <div className="text-base font-normal text-[#3A3B40] md:w-[70%]">
            <p className="mb-4">
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances. To request to review, update, or delete your
              personal information, please submit a request form by clicking
              here.
            </p>
          </div>
        </div>
        <p className="font-small text-[#3A3B40] text-base mb-40">
          These Privacy Policy was created using Termly's
          <a href="#" className=" font-bold text-[#77459B] underline ml-1">
            Privacy Policy Generator.
          </a>
        </p>
      </div>
    </div>
  );
}
