import Image from "next/image";
import Link from "next/link";
import { MdEast } from "react-icons/md";
import { blogData } from "../../data/blogData";
import styles from "../../styles/Blog.module.css";

const RecommendationPost = ({ blogId }) => {
  const blogSlug = parseInt(blogId);
  return (
    <div className={styles.recommended_post_container}>
      <div className={styles.related_blog_heading}>
        <h1>Related posts recommended</h1>
      </div>
      <div className={styles.related_blog_container}>
        <div className={styles.related_blog}>
          {blogData
            ?.filter((blog) => {
              const result = blogSlug + 1;
              if (result <= blogData.length) {
                return blog.id === result;
              } else {
                return blog.id === 1;
              }
            })
            .map((blog) => (
              <>
                <div className={styles.related_blog_image}>
                  <Image src={blog.thumbnail} alt="" />
                  <div className={styles.related_blog_info}>
                    <p className={styles.title}>{blog.title}</p>
                    <p className={styles.date}>{blog.date}</p>
                  </div>
                </div>
                <div className={styles.related_blog_text}>
                  <p>{blog.description}</p>
                  <div className={styles.related_blog_link}>
                    <Link href={`/blog/${blog.id}`}>Read More</Link>
                    <MdEast />
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className={styles.related_blog}>
          {blogData
            ?.filter((blog) => {
              const result = blogSlug + 2;
              if (result > blogData.length) {
                return blog.id === 2;
              } else {
                return blog.id === result;
              }
            })
            .map((blog) => (
              <>
                <div className={styles.related_blog_image}>
                  <Image src={blog.thumbnail} alt="" />
                  <div className={styles.related_blog_info}>
                    <p className={styles.title}>{blog.title}</p>
                    <p className={styles.date}>{blog.date}</p>
                  </div>
                </div>
                <div className={styles.related_blog_text}>
                  <p>{blog.description}</p>
                  <div className={styles.related_blog_link}>
                    <Link href={`/blog/${blog.id}`}>Read More</Link>
                    <MdEast />
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationPost;
