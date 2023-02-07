import React from "react";
import { blogHeader } from "../../images";
import Image from "next/image";
import { SiMedium, SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import styles from "../../styles/Blog.module.css";

const BlogHeader = () => {
  return (
    <header className={styles.header}>
      <section className={styles.blog_header_section}>
        <nav></nav>
        <div className={styles.blog_header_hero}>
          <div className={styles.blog_header_container}>
            <div className={styles.blog_header_text}>
              <div className={styles.blog_header_heading}>
                <h1>
                  Blog <span className={styles.blog_post}>Posts</span>
                </h1>
              </div>
              <div className={styles.blog_header_subheading}>
                <p>Experience design thinking and innovative stories</p>
              </div>
            </div>
            <div className={styles.blog_header_image}>
              <Image src={blogHeader} alt="" />
            </div>
          </div>
          <div className={styles.blog_header_buttons}>
            <button className={styles.twitter}>
              <SiTwitter />
              <span>Twitter</span>
            </button>

            <button className={styles.linkedin}>
              <RiLinkedinFill /> <span>LinkedIn</span>
            </button>
            <button className={styles.medium}>
              <SiMedium />
              <span>Medium</span>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default BlogHeader;
