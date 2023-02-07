import Image from "next/image";
import Link from "next/link";
import { MdEast } from "react-icons/md";
import styles from "../../styles/Blog.module.css";

const BlogCards = ({ blog }) => {
  return (
    <>
      <div className={styles.blogCard_container}>
        {blog?.map((blog, i) => (
          <div key={i}>
            <div className={styles.blogs}>
              <div className={styles.blog_info}>
                <div className={styles.blog_category}>
                  <p>{blog.category}</p>
                </div>

                <div className={styles.blog_date}>
                  <p>{blog.date}</p>
                </div>
              </div>
              <div className={styles.blogCard} key={blog.id}>
                <div className={styles.blogCardText}>
                  <div className={styles.blog_heading}>
                    <h2>{blog.title}</h2>
                  </div>
                  <div className={styles.blog_desc}>
                    <p>{blog.description}</p>
                  </div>
                  <div className={styles.blog_link}>
                    <Link href={`/blog/${blog.id}`}>Read More</Link>
                    <MdEast />
                  </div>
                </div>
                <div className={styles.blogCardImage}>
                  <Image src={blog.thumbnail} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
