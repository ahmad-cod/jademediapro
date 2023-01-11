import react from "react";
import Link from "next/link";
import image from "next/image";

export default function Cookies() {
  return (
    <div>
      <div className=" bg-[#1A1A1A] px-[20px] py-[31px] md:pt-12 md:pr-[104px] md:pb-[70px] md:pl-[104px] mb-32 ">
        <div className="flex justify-between items-center mb-[59px]">
          <img src="/logo.png" />
          <img src="/hamburger.png" className="md:hidden cursor-pointer" />
          <div className="hidden md:flex gap-[42px] text-white">
            <img src="/moon.png" />
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Projects</p>
            <p className="cursor-pointer">Hub</p>
            <p className="cursor-pointer">Resources</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center text-5xl md:text-8xl font-semibold text-white gap-8 md:gap-[400px]">
          <h1>
            Cookies <br /> Policy
          </h1>
          <div className="w-[353px] h-[353px]">
            <img src="/cookies.png" className="w-full" />
          </div>
        </div>
      </div>
      <div className="px-[20px] md:pl-[104px] md:pr-[381px] w-full">
        <p className="text-lg font-normal mb-10">
          Last updated November 10, 2021
        </p>

        <div className="mb-8">
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              This Cookie Policy explains how Jademediapro Tech Agency LTD
              ("Company," "we," "us," or "our") uses cookies and similar
              technologies to recognize you when you visit our websites at
              <span className=" font-medium text-[#77459B] underline ml-1 cursor-pointer">
                https://www.jademediapro.com,
              </span>
              ("Websites"). It explains what these technologies are and why we
              use them, as well as your rights to control our use of them. In
              some cases, we may use cookies to collect personal information, or
              that becomes personal information if we combine it with other
              information.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            What are cookies?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
              Cookies set by the website owner (in this case, Jademediapro Tech
              Agency LTD) are called "first party cookies". Cookies set by
              parties other than the website owner are called "third party
              cookies". Third party cookies enable third party features or
              functionality to be provided on or through the website (e.g., like
              advertising, interactive content and analytics). The parties that
              set these third-party cookies can recognize your computer both
              when it visits the website in question and also when it visits
              certain other websites.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            Why do we use cookies?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              We use first- and third-party cookies for several reasons. Some
              cookies are required for technical reasons in order for our
              Websites to operate, and we refer to these as "essential" or
              "strictly necessary" cookies. Other cookies also enable us to
              track and target the interests of our users to enhance the
              experience on our Online Properties. Third parties serve cookies
              through our Websites for advertising, analytics and other
              purposes. This is described in more detail below. The specific
              types of first- and third-party cookies served through our
              Websites and the purposes they perform are described below (please
              note that the specific cookies served may vary depending on the
              specific Online Properties you visit):
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            How can I control cookies?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie rights by setting your preferences in
              the Cookie Consent Manager. The Cookie Consent Manager allows you
              to select which categories of cookies you accept or reject.
              Essential cookies cannot be rejected as they are strictly
              necessary to provide you with services. The Cookie Consent Manager
              can be found in the notification banner and on our website. If you
              choose to reject cookies, you may still use our website though
              your access to some functionality and areas of our website may be
              restricted. You may also set or amend your web browser controls to
              accept or refuse cookies. As the means by which you can refuse
              cookies through your web browser controls vary from
              browser-to-browser, you should visit your browser's help menu for
              more information. In addition, most advertising networks offer you
              a way to opt out of targeted advertising. If you would like to
              find out more information, please visit
              <span className=" font-medium text-[#77459B] underline ml-1 cursor-pointer">
                http://www.aboutads.info/choices/ or
                http://www.youronlinechoices.com.
              </span>
              The specific types of first- and third-party cookies served
              through our Websites and the purposes they perform are described
              in the table below (please note that the specific cookies served
              may vary depending on the specific Online Properties you visit):
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className=" text-[#77459B] text-lg font-medium mb-2">
            Essential website cookies:
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              These cookies are strictly necessary to provide you with services
              available through our Websites and to use some of its features,
              such as access to secure areas.
            </p>
          </div>
        </div>
        <div className="mb-8 border border-[#242526] p-4 rounded w-[595px]">
          <div className="flex gap-[46px] text-base font-bold border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8 w-full">
            <div className="w-[30%]">Name</div>
            <div className="w-[70%]">__tlbcpv</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Purpose:</div>
            <div className="w-[70%]">
              Used to record unique visitor views of the consent banner.
            </div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Provider:</div>
            <div className="w-[70%]">.termly.io</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Service:</div>
            <div className="w-[70%]">Termly View Service Privacy Policy</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Country:</div>
            <div className="w-[70%]">United States</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Type:</div>
            <div className="w-[70%]">http_cookie</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal">
            <div className="w-[30%]">Expires in:</div>
            <div className="w-[70%]">1 year</div>
          </div>
        </div>
        <div className="mb-8">
          <div className=" text-[#77459B] text-lg font-medium mb-2">
            Analytics and customization cookies:
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              These cookies collect information that is used either in aggregate
              form to help us understand how our Websites are being used or how
              effective our marketing campaigns are, or to help us customize our
              Websites for you.
            </p>
          </div>
        </div>
        <div className="mb-8 border border-[#242526] p-4 rounded w-[665px]">
          <div className="flex gap-[46px] text-base font-bold border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8 w-full">
            <div className="w-[30%]">Name</div>
            <div className="w-[70%]">1P_JAR</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Purpose:</div>
            <div className="w-[70%]">
              Set by Google to collect website statistics and track conversion
              rates.
            </div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Provider:</div>
            <div className="w-[70%]">.google.com</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Service:</div>
            <div className="w-[70%]">
              Google Analytics View Service Privacy Policy{" "}
            </div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Country:</div>
            <div className="w-[70%]">United States</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Type:</div>
            <div className="w-[70%]">server_cookie</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Expires in:</div>
            <div className="w-[70%]">30 days</div>
          </div>
          <div className="flex gap-[46px] text-base font-bold border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8 w-full">
            <div className="w-[30%]">Name</div>
            <div className="w-[70%]">NID</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Purpose:</div>
            <div className="w-[70%]">
              set by Google to set a unique user ID to remember user
              preferences. Persistent cookie that stays for 182 days
            </div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Provider:</div>
            <div className="w-[70%]">.google.com</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Service:</div>
            <div className="w-[70%]">Google View Service Privacy Policy </div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Country:</div>
            <div className="w-[70%]">United States</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal border-b-[100%] border-b-[0.5px] border-b-[#3A3B40] border-[#242526] mb-8">
            <div className="w-[30%]">Type:</div>
            <div className="w-[70%]">server_cookie</div>
          </div>
          <div className="flex gap-[46px] text-base font-normal ">
            <div className="w-[30%]">Expires in:</div>
            <div className="w-[70%]">6 months</div>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            What about other tracking technologies, like web beacons?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              Cookies are not the only way to recognize or track visitors to a
              website. We may use other, similar technologies from time to time,
              like web beacons (sometimes called "tracking pixels" or "clear
              gifs"). These are tiny graphics files that contain a unique
              identifier that enable us to recognize when someone has visited
              our Websites or opened an e-mail including them. This allows us,
              for example, to monitor the traffic patterns of users from one
              page within a website to another, to deliver or communicate with
              cookies, to understand whether you have come to the website from
              an online advertisement displayed on a third-party website, to
              improve site performance, and to measure the success of e-mail
              marketing campaigns. In many instances, these technologies are
              reliant on cookies to function properly, and so declining cookies
              will impair their functioning.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            Do you use Flash cookies or Local Shared Objects?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              Websites may also use so-called "Flash Cookies" (also known as
              Local Shared Objects or "LSOs") to, among other things, collect
              and store information about your use of our services, fraud
              prevention and for other site operations. If you do not want Flash
              Cookies stored on your computer, you can adjust the settings of
              your Flash player to block Flash Cookies storage using the tools
              contained in the Website Storage Settings Panel. You can also
              control Flash Cookies by going to the Global Storage Settings
              Panel and following the instructions (which may include
              instructions that explain, for example, how to delete existing
              Flash Cookies (referred to "information" on the Macromedia site),
              how to prevent Flash LSOs from being placed on your computer
              without your being asked, and (for Flash Player 8 and later) how
              to block Flash Cookies that are not being delivered by the
              operator of the page you are on at the time). Please note that
              setting the Flash Player to restrict or limit acceptance of Flash
              Cookies may reduce or impede the functionality of some Flash
              applications, including, potentially, Flash applications used in
              connection with our services or online content.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            Do you serve targeted advertising?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              Third parties may serve cookies on your computer or mobile device
              to serve advertising through our Websites. These companies may use
              information about your visits to this and other websites in order
              to provide relevant advertisements about goods and services that
              you may be interested in. They may also employ technology that is
              used to measure the effectiveness of advertisements. This can be
              accomplished by them using cookies or web beacons to collect
              information about your visits to this and other sites in order to
              provide relevant advertisements about goods and services of
              potential interest to you. The information collected through this
              process does not enable us or them to identify your name, contact
              details or other details that directly identify you unless you
              choose to provide these.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            How often will you update this Cookie Policy?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal or regulatory reasons. Please therefore
              re-visit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies. <br />
              The date at the top of this Cookie Policy indicates when it was
              last updated.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="text-[#242526] text-xl font-medium mb-4">
            How can I control cookies?
          </div>
          <div className="text-base font-medium text-[#3A3B40] ">
            <p className="mb-4">
              If you have any questions about our use of cookies or other
              technologies, please email us at
              <span className=" font-medium text-[#77459B] underline ml-1 cursor-pointer">
                solutions@jademediapro.com or by post to:
              </span>
            </p>
            <p className="mb-4 font-medium text-[#77459B]">
              Jademediapro Tech Agency LTD <br />
              16 Agbor street <br />
              Lagos, LA 100261 <br />
              Nigeria <br />
              Phone: +234 902 771 0233
            </p>
          </div>
        </div>

        <p className="font-small text-[#3A3B40] text-base mb-40">
          These terms of use were created using Termly's
          <span className=" font-bold text-[#77459B] underline ml-1 cursor-pointer">
            Cookie Consent Manager.
          </span>
        </p>
      </div>
    </div>
  );
}
