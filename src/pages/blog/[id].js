import { useRouter } from "next/router";
import { blogData } from "../../data/blogData";
import Image from "next/image";
import Link from "next/link";
import RecommendationPost from "../../components/blogComponent/recommendationPost";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaRegClone, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styles from "../../styles/Blog.module.css";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { MainWrapper } from "@/components/Layout";

/**
 *
 * @type {import("next").GetServerSideProps}
 */
export const getServerSideProps = async (ctx) => {
  const blogId = ctx.params.id;
  return {
    props: {
      blog: blogData.find((blog) => blog.id.toString() === blogId),
    },
  };
};

/**
 * @param {{blog: Blog}} props
 */
const Blogdetails = ({ blog }) => {
  const router = useRouter();
  const blogId = router.query.id;

  async function copyLinkToClipboard() {
    const link = `https://www.jademediapro.com/blog/${blogId}`
    if('clipboard' in navigator) {
      return await navigator.clipboard.writeText(link)
    } else {
      return document.execCommand('copy', true, link)
    }
  }
  

  return (
    <MainWrapper
      color="#242526"
      headerType={1}
      backgroundColor="white"
      paint-header-on-scroll
      title={blog.title + "- Jade Media Pro"}
      mobile-pad
    >
      <div className={styles.social_network}>
        <Link href={'#'}>
          <button onClick={copyLinkToClipboard} id="link">
            <Tooltip
              anchorId="link"
              content="Copy Link"
              className={styles.social_link}
              place="left"
              onClick={copyLinkToClipboard}
              noArrow
            />
            <FaRegClone />
          </button>
        </Link>

        <Link href={"#"} data-info="Email" id="email">
          <Tooltip
            anchorId="email"
            content="Email"
            place="left"
            className={styles.social_link}
            noArrow
          />
          <MdOutlineEmail />
        </Link>
        <Link href={"#"} id="twitter">
          <Tooltip
            anchorId="twitter"
            content="Tweet "
            place="left"
            className={styles.social_link}
            noArrow
          />
          <FiTwitter />
        </Link>
        <Link href={"#"} id="facebook">
          <Tooltip
            anchorId="facebook"
            content="Share on Facebook"
            place="left"
            className={styles.social_link}
            noArrow
          />
          <FiFacebook />
        </Link>
        <Link href={"#"} id="whatsapp">
          <Tooltip
            anchorId="whatsapp"
            content="Share on Whatsapp"
            place="left"
            className={styles.social_link}
            noArrow
          />
          <FaWhatsapp />
        </Link>
        <Link href={"#"} id="linkedin">
          <Tooltip
            anchorId="linkedin"
            content="Share on LinkedIn"
            place="left"
            className={styles.social_link}
            noArrow
          />
          <FiLinkedin />
        </Link>
      </div>
      <div className={styles.blogID_container}>
        <div key={blog.id} className={styles.blog_detail}>
          <div className={styles.blog_info}>
            <div className={styles.blog_category}>
              <p>{blog.category}</p>
            </div>
            <div className={styles.blog_date}>
              <p>{blog.date}</p>
            </div>
          </div>
          <h1 className={styles.blog_title}>{blog.title}</h1>
          <div className={styles.body_image}>
            <Image src={blog.thumbnail} alt="" />
          </div>
        </div>
        <div className={styles.blog_content}>
          {blog.contents.map((content, i) => (
            <div key={i} className={styles.blog_body}>
              <div className={styles.body_introduction}>
                {content.introduction?.map((intro) => (
                  <>
                    <p>{intro}</p>
                  </>
                ))}
              </div>
              <div className={styles.body_subheading}>
                <h2>{content.subheading[0]}</h2>
                <p>{content.subheadingNote[0]}</p>
              </div>
              <div className={styles.body_tableOfContent}>
                {content.tableOfContent?.map((content, i) => (
                  <ul key={i}>
                    {content.tableOfContentList?.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                ))}
              </div>

              <div className={styles.body_image}>
                <Image src={content.images[0]} alt="" />
              </div>

              <div className={styles.body_note}>
                <p>{content.note}</p>
              </div>
              <div className={styles.list_container}>
                {content.list1?.map((list) => (
                  <>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[0]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[0]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[1]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[1]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[2]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[2]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[3]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[3]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[4]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[4]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[5]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[5]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[6]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[6]}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div className={styles.body_subheading}>
                <h2>{content.subheading[1]}</h2>
                <p>{content.subheadingNote[1]}</p>
              </div>

              <div className={styles.body_image}>
                <Image src={content.images[1]} alt="" />
              </div>

              <div className={styles.list_container}>
                {content.list2?.map((list) => (
                  <>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[0]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[0]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[1]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[1]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[2]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[2]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[3]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[3]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[4]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[4]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[5]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[5]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[6]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[6]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[7]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[7]}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div className={styles.body_subheading}>
                <h2>{content.subheading[2]}</h2>
                <p>{content.subheadingNote[2]}</p>
              </div>

              <div className={styles.body_image}>
                <Image src={content.images[2]} alt="" />
              </div>

              <div className={styles.list_container}>
                {content.list3?.map((list) => (
                  <>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[0]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[0]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[1]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[1]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[2]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[2]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[3]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[3]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[4]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[4]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[5]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[5]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[6]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[6]}</p>
                      </div>
                    </div>
                    <div className={styles.list_body}>
                      <div className={styles.list_title}>
                        <h3>{list?.listItem[7]}</h3>
                      </div>
                      <div className={styles.list_content}>
                        <p>{list?.listItemContent[7]}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div className={styles.body_conclusion}>
                <h2>Conclusion</h2>
                <p>{content.conclusion}</p>
                <ul>
                  {content.conclusionList?.map((list) => (
                    <>
                      <li>{list}</li>
                    </>
                  ))}
                </ul>
                <p>{content.finalNote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobile_social_network}>
          <h3>Share this post</h3>
          <div className={styles.social_network}>
            <Link href={"#"} id="mobile-link">
              <Tooltip
                anchorId="mobile-link"
                content="Copy Link"
                className={styles.social_link}
                place="bottom"
                noArrow
              />
              <FaRegClone />
            </Link>

            <Link href={"#"} data-info="Email" id="mobile-email">
              <Tooltip
                anchorId="mobile-email"
                content="Email"
                place="bottom"
                className={styles.social_link}
                noArrow
              />
              <MdOutlineEmail />
            </Link>
            <Link href={"#"} id="mobile-twitter">
              <Tooltip
                anchorId="mobile-twitter"
                content="Tweet "
                place="bottom"
                className={styles.social_link}
                noArrow
              />
              <FiTwitter />
            </Link>
            <Link href={"#"} id="mobile-facebook">
              <Tooltip
                anchorId="mobile-facebook"
                content="Share on Facebook"
                place="bottom"
                className={styles.social_link}
                noArrow
              />
              <FiFacebook />
            </Link>
            <Link href={"#"} id="mobile-whatsapp">
              <Tooltip
                anchorId="mobile-whatsapp"
                content="Share on Whatsapp"
                place="bottom"
                className={styles.social_link}
                noArrow
              />
              <FaWhatsapp />
            </Link>
            <Link href={"#"} id="mobile-linkedin">
              <Tooltip
                anchorId="mobile-linkedin"
                content="Share on LinkedIn"
                place="bottom"
                className={styles.social_link}
                noArrow
              />
              <FiLinkedin />
            </Link>
          </div>
        </div>
        <RecommendationPost blogId={blogId} />
      </div>
    </MainWrapper>
  );
};

export default Blogdetails;
