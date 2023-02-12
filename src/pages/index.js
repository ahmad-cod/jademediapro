import { BsArrowRight } from "react-icons/bs";
import { MainWrapper } from "@/components/layout";
import {
  PageSection,
  LogoLineup,
  TunnelManOverlay,
  ServiceCard,
  StartProjectCard,
  CommercialCardsLineup,
  HomeButton,
  EditorialLineup,
  ProductCard,
  EventCard,
  JobCard,
} from "@/components/homeComponents";
import {
  brandIdentityImg,
  ariwabagsImg,
  webDevelopmentImg,
  laptopMockImg,
  videoBlondeWoman,
  videoMarketingImg,
  productsImg,
  productPackagingImg,
  adachukThumbnail,
  unlockYourFutureGif,
} from "@/images";
import { productData } from "@/data/products/productData";
import { jobData, upcomingEvents } from "@/data";
import Link from "next/link";
import { select } from "@/utils";
import Image from "next/image";

/**
 * @type {import("next").GetServerSideProps}
 */
export const getServerSideProps = async () => {
  return {
    props: {
      jobs: select(jobData, 3),
    },
  };
};

/**
 * Landing Page.
 * @param {{jobs: Job[]}} props
 */
export default function Home({ jobs }) {
  return (
    <MainWrapper
      headerType={1}
      title="Jade Media Pro"
      backgroundColor="black"
      paint-header-on-scroll
    >
      <main>
        {/* Hero Section */}
        <PageSection
          style={{ padding: 0 }}
          className="text-white max-[912px]:h-[900px] max-[700px]:h-screen"
        >
          <TunnelManOverlay />
          <div className="relative min-h-[570px] w-full h-full pt-[5%] flex flex-col justify-center max-[700px]:justify-end">
            <h1 className="relative font-pop text-[75pt] max-[1400px]:text-[58pt] max-[1152px]:text-[46pt] max-[1024px]:text-[43pt] max-[912px]:text-[46pt] max-[700px]:text-[36pt] py-[16px] max-[1400px]:py-0 w-[50%] max-[820px]:w-[70%] max-[700px]:w-auto max-[700px]:px-[var(--side-padding)] ml-[var(--side-padding)] max-[700px]:ml-0 [font-weight:800] [line-height:120%]">
              The passion of idea, business and creativity:
            </h1>
            <p className="w-[54%] text-[17pt] max-[1400px]:text-[13.5pt] max-[1024px]:text-[12pt] max-[700px]:hidden max-[1024px]:w-[49%] max-[912px]:w-[60%] [line-height:140%] max-[820px]:mb-[30px] py-[16px] ml-[var(--side-padding)] text-start">
              We help small and medium-sized businesses grow and achieve their
              dreams, earn income, and increase their impact in this
              post-pandemic world by developing innovative as well as
              sustainable design systems and marketing strategies to help them
              stand out in a crowded marketplace and make a profit. YES! WE CAN.
            </p>
            <p className="hidden max-[700px]:block py-[16px] px-[var(--side-padding)] text-start">
              JadeMediaPro is a digital tech agency that focused in strategic
              solutions for business marketing, communication, and brand
              development. JadeMediaPro specialises in UI/UX design,
              advertising, digital media management, video animations, website
              design, and application development. In this post-pandemic world,
              our service helps brands achieve their goals, make a profit, and
              increase their impact.
            </p>
            <LogoLineup />
          </div>
        </PageSection>

        {/* Services */}
        <PageSection
          style={{ height: "fit-content" }}
          className="bg-white max-2xl:max-h-[1500px] max-[700px]:max-h-max max-2xl:py-[14vh] py-[20vh] max-[1024px]:py-[10vh] max-[820px]:py-[5vh] grid [grid:auto_auto/auto_auto] max-[820px]:[grid:auto/42%_auto] max-[700px]:[grid:auto/auto] gap-[var(--grid-margin)]"
        >
          <ServiceCard
            title="Brand Identity"
            linkImage={brandIdentityImg}
            mainImage={ariwabagsImg}
            caseStudyHref="/projects/casestudy/1"
            vertical
          >
            Collection creative ideas designed to portray the right brand image
            for customers.
          </ServiceCard>
          <div className="flex flex-col gap-[var(--grid-margin)]">
            <ServiceCard
              title="Website Development"
              linkImage={webDevelopmentImg}
              mainImage={laptopMockImg}
              caseStudyHref="/projects/casestudy/2"
              horizontal
            >
              Modern appearance and layout with custom functionality &
              interactivity.
            </ServiceCard>
            <ServiceCard
              title="Video Marketing"
              linkImage={videoMarketingImg}
              mainImage={videoBlondeWoman}
              caseStudyHref="/projects/casestudy/2"
              horizontal
            >
              Perfect promo videos to increase engagement on digital and social
              channels.
            </ServiceCard>
          </div>
          <StartProjectCard className="max-[700px]:hidden" />
          <ServiceCard
            title="Product Packaging"
            linkImage={productPackagingImg}
            mainImage={productsImg}
            caseStudyHref="/projects/casestudy/2"
            horizontal
          >
            Innovative designs to make a strong first impression and impact
            sales.
          </ServiceCard>
          <StartProjectCard className="hidden max-[700px]:flex" />
        </PageSection>

        {/* Unlock Your... */}
        <PageSection
          style={{ height: "fit-content" }}
          className="bg-white grid grid-cols-2 max-[1024px]:[grid:auto/34%_auto] max-[700px]:flex max-[700px]:flex-col-reverse py-[5vh] max-[700px]:py-0 place-content-center max-[1024px]:place-content-start"
        >
          <p className="hidden max-[700px]:block text-[10pt] mb-[20px]">
            On the other hand, Digital marketing is the practice of creating
            content to attract more customers and build relationships. It is
            more than just advertising; it is an essential component for any
            company to grow its business. Through digital marketing, businesses
            are able to harness the collective power of people, data, and modern
            software practices to reimagine their customer experience. The
            strategies that are most effective in digital marketing with
            reference to data-driven attribution models, mobile optimization,
            search engine optimization (SEO), email marketing, social media
            advertising, and conversion rates. With these strategies in mind and
            the help of Jademediapro, you can expand your business and look
            ahead to the success of your business more than it is right now in
            the coming times whether you are starting a new business or you
            already have an existing business.
          </p>
          <div className="flex items-center justify-center max-[1024px]:items-start max-[700px]:py-[35px]">
            <Image
              src={unlockYourFutureGif}
              alt="Unlock Your Future"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <h2 className="home-heading text-[34pt] max-[1400px]:text-[32pt] max-[1024px]:text-[26pt] max-[768px]:text-[23pt] mb-[24px]">
              Unlock your future by taking advantage of <u>Branding</u> &
              <u>Digital marketing</u>
            </h2>
            <p className="[line-height:140%] text-[16pt] max-[1400px]:text-[13pt] max-[1024px]:text-[11pt] max-[768px]:text-[10pt] mb-[20px]">
              Few businesses live the test of time. Many businesses are
              struggling with different strategies and identifying which one
              truly fits. All sorts of brands - personal, entrepreneurial, or
              small and even big players need something special to succeed and
              we get it... you want to stand out in a crowded marketplace. In
              fact, we hold the golden key in our hands. It&apos;s in our
              ability to internalize what we actually believe in. Your business
              requires a unique brand vision that you can communicate with the
              rest of the world, as well as values that you can internalize.
              That&apos;s what makes you unique and different. Your brand should
              have a personality. This allows customers and potential customers
              to better relate to your company and your products and services.
              According to studies, current and potential customers are far more
              likely to connect with your business if they can visualize a
              personality type. These are known as archetypes in the branding
              field.
            </p>
            <p className="[line-height:140%] text-[16pt] max-[1400px]:text-[13pt] max-[1024px]:text-[11pt] max-[768px]:text-[10pt] max-[700px]:hidden mb-[20px]">
              On the other hand, Digital marketing is the practice of creating
              content to attract more customers and build relationships. It is
              more than just advertising; it is an essential component for any
              company to grow its business. Through digital marketing,
              businesses are able to harness the collective power of people,
              data, and modern software practices to reimagine their customer
              experience. The strategies that are most effective in digital
              marketing with reference to data-driven attribution models, mobile
              optimization, search engine optimization (SEO), email marketing,
              social media advertising, and conversion rates. With these
              strategies in mind and the help of Jademediapro, you can expand
              your business and look ahead to the success of your business more
              than it is right now in the coming times whether you are starting
              a new business or you already have an existing business.
            </p>
          </div>
        </PageSection>

        {/* Our five... */}
        <PageSection
          height="120vh"
          className="bg-[#4F2E67] max-2xl:max-h-[1350px] max-[1280px]:py-[5vh] max-[1280px]:h-fit text-[#f6f6f6] grid grid-cols-2 max-[1024px]:[grid:auto/34%_auto] max-[700px]:[grid:auto/0%_auto] place-content-center"
        >
          <div className="overflow-hidden"></div>
          <div>
            <h2 className="home-heading text-[34pt] max-[1400px]:text-[32pt] max-[1024px]:text-[26pt] max-[768px]:text-[23pt] mb-[24px]">
              Our five foundational processes to create your strategic
              brand&apos;s success
            </h2>
            <div className="grid grid-cols-2 gap-[16px] mb-[40px] h-[190px] max-[768px]:h-[100px] max-[1024px]:mb-[20px]">
              <div className="h-full bg-white"></div>
              <div className="h-full bg-white"></div>
            </div>
            <p className="[line-height:140%] text-[16pt] max-[1400px]:text-[13pt] max-[1024px]:text-[11pt] max-[768px]:text-[10pt] mb-[20px]">
              Jademediapro&apos;s research phase involves simple steps of
              gathering information and analysing the findings to get to know
              your business, industry, competitors, target audience, all of your
              existing branding and design, marketing data, evaluating the data,
              and preparing the research report for presentation. It typically
              consists of extensive desk and field research including interviews
              where we might ask; &apos;what 3 words would you use to describe
              your brand/company?&apos;, &apos;why do you choose…&apos;,
              &apos;what is most important to you&apos;, &apos;how do you
              rate…&apos;, we listen to you to understand your business problem
              (or opportunity). These steps may vary depending on the specific
              outcomes your business is trying to achieve. For example, a
              product-oriented business may focus on the design of packaging and
              marketing materials used to communicate the product brand. The
              process followed at each level is measured - deliberately
              arranged, is fundamental, appropriately recorded, and
              methodologically substantial.
            </p>
          </div>
        </PageSection>

        {/* Put money... */}
        <PageSection
          style={{ height: "fit-content", paddingInline: 0 }}
          className="bg-white py-[5%] flex flex-col items-center justify-center"
        >
          <h2 className="px-[var(--side-padding)] home-heading mb-[56px]">
            Put money, attention, and resources where it&apos;s most effective
            to generate income.
          </h2>
          <CommercialCardsLineup />
        </PageSection>

        {/* Interview */}
        <PageSection className="bg-white flex max-2xl:max-h-[950px] max-[1400px]:h-[160vh] max-[1280px]:h-fit max-[1280px]:pt-[65px] max-[1024px]:pt-[45px] flex-col items-center justify-center max-[1280px]:justify-start">
          <h2 className="mb-[56px] max-[1400px]:mb-[35px] home-heading">
            Exclusive interviews with industry leading professionals.
          </h2>
          <div className="grid [grid:auto/70%_auto] max-[1024px]:[grid:auto/65%_auto] max-[768px]:[grid:auto/56%_auto] max-[700px]:grid-cols-1 gap-[var(--grid-margin)]">
            <div
              style={{ backgroundImage: `url(${adachukThumbnail.src})` }}
              className="relative [background-size:120%] bg-no-repeat bg-center max-[768px]:[background-position-y:0] overflow-hidden [filter:drop-shadow(0px_13px_37px_rgba(187,162,205,0.6))] rounded-[4px] h-full"
            ></div>
            <div>
              <h3 className="text-[30pt] max-[1400px]:text-[23pt] max-[1024px]:text-[18pt] max-[768px]:text-[16pt] mb-[24px] max-[1400px]:mb-[17px] max-[700px]:h-[56px] text-[#2F7F77]">
                60 minutes with Adachukwu of Jademediapro
              </h3>
              <p className="[line-height:140%] text-[16pt] max-[1400px]:text-[13pt] max-[1024px]:text-[11pt] max-[768px]:text-[10pt] mb-[46px] max-[1400px]:mb-[30px] max-[1024px]:mb-[15px]">
                We start by defining a clear image of exactly who you serve and
                precisely how they think. Why? Because you can&apos;t help
                people unless you know them - their hopes, their fears, their
                problems, and their pitfalls. What converts a total stranger
                into a die-hard fan of your brand? A constant pull of value and
                inspiration.{" "}
              </p>
              <HomeButton href="/">
                Watch More
                <div className="scale-[1.5]">
                  <BsArrowRight />
                </div>
              </HomeButton>
            </div>
          </div>
        </PageSection>

        {/* Blogs */}
        <PageSection className="bg-white max-2xl:max-h-[1000px] max-[1280px]:pt-[65px] max-[1280px]:h-fit flex flex-col justify-center max-[1280px]:justify-start">
          <h2 className="mb-[56px] max-[1024px]:mb-[35px] home-heading">
            Discover popular and profitable <u>editorials.</u>
          </h2>
          <EditorialLineup />
        </PageSection>

        {/* Products */}
        <PageSection className="bg-white max-2xl:max-h-[1000px] max-[1280px]:h-fit max-[1280px]:pb-[65px] max-[1024px]:pt-[90px] flex flex-col justify-center max-[1280px]:justify-start">
          <div className="flex justify-between items-center w-full">
            {productData.slice(0, 4).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <h1 className="flex mt-[55px]">
            <span className="home-heading mr-[var(--side-padding)]">
              Explore our full catalogue
            </span>
            <HomeButton href="/catalogue">
              Visit Store
              <div className="scale-[1.5]">
                <BsArrowRight />
              </div>
            </HomeButton>
          </h1>
        </PageSection>

        {/* Events & Jobs */}
        <PageSection
          style={{ height: "max-content" }}
          className="bg-white grid grid-cols-2 py-[5vh] max-[700px]:hidden"
        >
          <div className="h-full border-r-2 max-[1024px]:border-r-[1px] border-[#454648bc] flex flex-col pr-[calc(var(--grid-margin)/2)]">
            <h2 className="home-heading h-[200px] max-[1024px]:h-[130px] mb-[40px]">
              Don&apos;t miss the next live meeting to experience growth
            </h2>
            <div className="grid grid-cols-2 gap-[calc(var(--grid-margin)/1.2)] h-[50vh] max-[912px]:h-[300px] max-h-[582px] mb-[30px]">
              {upcomingEvents.slice(0, 2).map((event, index) => (
                <EventCard {...event} key={index} />
              ))}
            </div>
            <LinkLike href="/events">Upcoming Events</LinkLike>
          </div>
          <div className="h-full flex flex-col pl-[calc(var(--grid-margin)/2)]">
            <h2 className="home-heading h-[200px] max-[1024px]:h-[130px] mb-[40px]">
              Find the right job to boost your brilliant career
            </h2>
            <ul className="grid grid-rows-3 gap-[calc(var(--grid-margin)/3)] h-[50vh] max-[912px]:h-[300px] max-h-[582px] mb-[30px]">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </ul>
            <LinkLike href="/events">View All Jobs</LinkLike>
          </div>
        </PageSection>
      </main>
    </MainWrapper>
  );
}

/**
 * @typedef {{
 *  href: string,
 *  children: React.ReactNode
 * }} LinkLikeProps
 */

/**
 * @type {React.FC<LinkLikeProps>}
 */
const LinkLike = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="rounded-[4px] hover:bg-[#4F2E67] hover:text-white duration-300 p-[20px_32px] max-[1024px]:p-[13px_26px] font-semibold w-fit block text-[#4F2E67] border-[#4F2E67] border-[1px]"
    >
      {children}
    </Link>
  );
};
