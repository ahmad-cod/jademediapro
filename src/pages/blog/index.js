import React, { useEffect, useState } from "react";
import BlogCards from "../../components/blogComponent/blogCards";
import { blogCategoriesData, blogData } from "../../data/blogData";
import Pagination from "../../components/Pagination";
import BlogHeader from "../../components/blogComponent/blogHeader";
import InterviewCards from "../../components/blogComponent/interviewCards";
import CategoryFilter from "../../components/CategoryFilter";
import styles from "../../styles/Blog.module.css"

const Blogs = () => {
  const [blog, setBlog] = useState(blogData);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState();
  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
  const currentBlog = blog.slice(indexOfFirstBlog, indexOfLastBlog);
  const getBlogPerPage = () => {
    const width = window.innerWidth;
    width <= "800" ? setBlogPerPage(3) : setBlogPerPage(5);
    console.log(width);
  };
  useEffect(() => {
    getBlogPerPage();
  });

  return (
    <>
      <BlogHeader />
      <div className={styles.blog_page}>
        {/* The category filter needs the function to set the state of the category, 
        the categories data in your json file and the data you need to filter through */}
        <CategoryFilter
          setCategory={setBlog}
          categories={blogCategoriesData}
          filterContent={blogData}
        />
        <BlogCards blog={currentBlog} />
        {/* Pagination needs four props-the number of cards you need per page, 
        the total number of cards you have, the current page number and the 
        function to change the page */}
        <Pagination
          cardsPerPage={blogPerPage}
          totalCards={blog.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <InterviewCards />
      </div>
    </>
  );
};

export default Blogs;
